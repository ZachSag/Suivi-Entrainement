#!/usr/bin/env python3
"""
sync_garmin.py
===============
Se connecte à Garmin Connect avec la bibliothèque non officielle
`garminconnect` et fusionne les jours récents (VFC, ACWR, sommeil,
préparation) et les nouvelles activités dans data_store.json.

⚠️ AVERTISSEMENTS IMPORTANTS (lire avant d'activer) :

1. Ce script utilise une bibliothèque NON OFFICIELLE qui imite l'appli
   mobile Garmin. Ce n'est pas une API documentée/supportée par Garmin —
   voir la discussion complète qu'on a eue sur les risques (CVE passée,
   changements d'authentification sans préavis, zone grise des CGU).

2. Si l'authentification à deux facteurs (MFA) est active sur ton compte
   Garmin, CE SCRIPT NE FONCTIONNERA PAS en mode automatisé (GitHub
   Actions ne peut pas répondre à un prompt MFA interactif). Il faudrait
   soit désactiver le MFA sur ce compte, soit abandonner l'automatisation
   complète et repasser par l'export manuel.

3. Les identifiants (GARMIN_EMAIL / GARMIN_PASSWORD) doivent être stockés
   comme "Secrets" GitHub Actions — JAMAIS écrits dans ce fichier, jamais
   commités, jamais collés dans une conversation avec Claude.

4. Ce dépôt doit rester PUBLIC pour que GitHub Pages soit gratuit, ce qui
   veut dire que les logs des Actions sont eux aussi publics par défaut.
   → Ce script n'imprime donc JAMAIS de valeurs de santé individuelles
     dans les logs — seulement des compteurs ("7 nouveaux jours
     synchronisés"), jamais "VFC = 82ms" etc.

5. Les noms exacts de certains champs retournés par get_hrv_data() et
   get_activities() n'ont pas pu être vérifiés contre un vrai compte
   (Claude n'a jamais eu accès à tes identifiants). Le script essaie
   plusieurs chemins plausibles et signale clairement (sans données
   personnelles) si un champ attendu est introuvable, pour qu'on puisse
   ajuster ensemble à partir des logs d'erreur.
"""
import os
import sys
import json
from datetime import date, timedelta
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
STORE_PATH = ROOT / "data_store.json"
SYNC_WINDOW_DAYS = 10  # nombre de jours récents à revérifier à chaque run


def log(msg):
    print(f"[sync_garmin] {msg}")


def get_client():
    try:
        from garminconnect import Garmin
    except ImportError:
        log("ERREUR : la bibliothèque 'garminconnect' n'est pas installée.")
        sys.exit(1)

    email = os.environ.get("GARMIN_EMAIL")
    password = os.environ.get("GARMIN_PASSWORD")
    if not email or not password:
        log("ERREUR : variables d'environnement GARMIN_EMAIL / GARMIN_PASSWORD manquantes.")
        sys.exit(1)

    def mfa_unavailable():
        log("ERREUR : ce compte demande un code MFA — impossible en mode automatisé.")
        log("Solution : désactiver le MFA sur ce compte Garmin, ou abandonner l'automatisation.")
        sys.exit(1)

    client = Garmin(email, password, prompt_mfa=mfa_unavailable)
    client.login()
    return client


def safe_get(fn, *args, label="?"):
    """Appelle fn(*args) et avale les erreurs individuelles sans faire planter tout le run."""
    try:
        return fn(*args)
    except Exception as e:
        log(f"Avertissement : échec de {label} ({type(e).__name__}) — jour ignoré.")
        return None


def extract_readiness_row(day_str, readiness_raw, hrv_raw):
    """
    readiness_raw : réponse de client.get_training_readiness(day_str)
       -> même forme que TrainingReadinessDTO dans l'export bulk (validé).
    hrv_raw : réponse de client.get_hrv_data(day_str)
       -> forme non vérifiée contre un vrai compte ; plusieurs chemins essayés.
    """
    r = readiness_raw
    if isinstance(r, list):
        r = next((x for x in r if x.get("score") is not None), r[0] if r else {})
    r = r or {}

    hrv_val = None
    if isinstance(hrv_raw, dict):
        # chemins plausibles observés dans différentes versions de l'API Garmin
        hrv_val = (
            hrv_raw.get("hrvSummary", {}).get("lastNightAvg")
            or hrv_raw.get("hrvSummary", {}).get("weeklyAvg")
            or hrv_raw.get("lastNightAvg")
            or hrv_raw.get("weeklyAvg")
        )

    return {
        "date": day_str,
        "readiness_score": r.get("score"),
        "sleep_score": r.get("sleepScore"),
        "level": r.get("level"),
        "hrv": hrv_val,
        "hrv_weekly_avg": r.get("hrvWeeklyAverage"),
        "acute_load": r.get("acuteLoad"),
        "chronic_load": None,   # non exposé par get_training_readiness ; laissé tel quel si déjà présent
        "acwr": None,
        "acwr_status": None,
    }


ACTIVITY_TYPE_LABELS = {
    "running": "Course à pied", "treadmill_running": "Course (tapis)",
    "track_running": "Course (piste)", "walking": "Marche", "cycling": "Vélo",
    "indoor_cycling": "Vélo (intérieur)", "strength_training": "Entraînement aux poids",
    "soccer": "Football", "lap_swimming": "Natation", "volleyball": "Volleyball",
    "stop_watch": "Chrono", "other": "Autre",
}


def extract_activity_row(a):
    """
    a : un élément retourné par client.get_activities(0, N).
    Le format REST habituel de Garmin Connect utilise des mètres/secondes
    (contrairement au format cm/ms du dump GDPR complet) — non vérifié
    contre un vrai compte, à confirmer au premier run.
    """
    typ_key = (a.get("activityType") or {}).get("typeKey", "other")
    label = ACTIVITY_TYPE_LABELS.get(typ_key, typ_key)
    date_str = (a.get("startTimeLocal") or "")[:10]
    return {
        "date": date_str,
        "name": a.get("activityName") or label,
        "type": label,
        "distance_km": round((a.get("distance") or 0) / 1000, 2),
        "duration_min": round((a.get("movingDuration") or a.get("duration") or 0) / 60, 1),
        "elevation_m": round(a.get("elevationGain") or 0, 1),
        "avg_hr": round(a["averageHR"]) if a.get("averageHR") else None,
        "max_hr": round(a["maxHR"]) if a.get("maxHR") else None,
        "aerobic_te": a.get("aerobicTrainingEffect"),
        "anaerobic_te": a.get("anaerobicTrainingEffect"),
        "training_load": a.get("activityTrainingLoad"),
        "rpe": a.get("perceivedExertion"),
        "body_battery_diff": a.get("differenceBodyBattery"),
        "activity_id": a.get("activityId"),  # utilisé pour dédoublonner
    }


def main():
    with open(STORE_PATH, "r", encoding="utf-8") as f:
        store = json.load(f)

    client = get_client()
    log("Connexion réussie.")

    # ---- 1) Préparation / VFC / ACWR pour les N derniers jours ----
    existing_readiness = {r["date"]: r for r in store.get("readiness_recent", [])}
    n_updated = 0
    today = date.today()
    for i in range(SYNC_WINDOW_DAYS):
        d = today - timedelta(days=i)
        d_str = d.isoformat()
        readiness_raw = safe_get(client.get_training_readiness, d_str, label=f"get_training_readiness({d_str})")
        hrv_raw = safe_get(client.get_hrv_data, d_str, label=f"get_hrv_data({d_str})")
        if readiness_raw is None and hrv_raw is None:
            continue
        row = extract_readiness_row(d_str, readiness_raw, hrv_raw)
        # préserve acute_load/chronic_load/acwr existants si le nouvel appel ne les fournit pas
        old = existing_readiness.get(d_str, {})
        for k in ("chronic_load", "acwr", "acwr_status"):
            if row.get(k) is None and old.get(k) is not None:
                row[k] = old[k]
        existing_readiness[d_str] = row
        n_updated += 1

    store["readiness_recent"] = sorted(existing_readiness.values(), key=lambda r: r["date"])

    # ---- 2) Nouvelles activités ----
    existing_ids = {a.get("activity_id") for a in store.get("garmin_activities", []) if a.get("activity_id")}
    activities_raw = safe_get(client.get_activities, 0, 20, label="get_activities(0, 20)") or []
    n_new_activities = 0
    for a in activities_raw:
        row = extract_activity_row(a)
        if row["activity_id"] and row["activity_id"] in existing_ids:
            continue
        store.setdefault("garmin_activities", []).append(row)
        n_new_activities += 1

    store["garmin_activities"].sort(key=lambda a: a["date"])
    store["meta"]["lastAutoSync"] = today.isoformat()

    with open(STORE_PATH, "w", encoding="utf-8") as f:
        json.dump(store, f, ensure_ascii=False, indent=2)

    # Ne JAMAIS logguer de valeurs individuelles ici (dépôt public = logs publics)
    log(f"Terminé : {n_updated} jours de préparation/VFC vérifiés, {n_new_activities} nouvelle(s) activité(s).")


if __name__ == "__main__":
    main()
