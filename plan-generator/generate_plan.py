#!/usr/bin/env python3
"""
Générateur du plan d'entraînement Ironman 70.3 Mont-Tremblant pour Zachary Desbiens.
V2 - basé sur les contraintes réelles précisées par l'athlète le 4 août 2026:
- Musculation fixe 2x/semaine, 60min chacune, ne varie jamais (bas du corps+abdos lundi,
  haut du corps vendredi). Ne pas augmenter la durée dans le temps.
- Natation: capacité actuelle réelle 1000-1200m (pas plus). Progression très graduelle pour
  éviter les blessures aux épaules. Une seule séance/semaine à l'automne (semaines 5-20,
  période du stage coop), 2x/semaine après (mardi + samedi matin, avant le vélo long).
- Vélo: sortie longue démarre à 90min minimum, augmente graduellement. Sport à faible risque
  de blessure -> volume plus facile à augmenter (2e séance courte le jeudi).
- Course: 2x/semaine. La plus courte (mercredi) comporte plus d'intensité (tempo/intervalles),
  la longue (dimanche) reste en endurance.

V2.1 - révision du 4 août 2026 (suite): gabarit hebdomadaire réorganisé pour éviter 2 séances la
même journée en début de plan (vélo mardi -> jeudi, musculation haut du corps jeudi -> vendredi,
2e natation vendredi -> samedi matin dès la semaine 21). Réduction de volume des semaines de
décharge portée à ~30% (contre ~15-25% dans la V2), alignée sur la "règle des 30%" citée par des
coachs de triathlon pour les semaines de récupération en cours de bloc (voir commentaires sur
DELOAD_WEEKS plus bas pour les sources).
"""
import json
import datetime

# ---------------------------------------------------------------------------
# Constantes de planification
# ---------------------------------------------------------------------------
PLAN_START = datetime.date(2026, 8, 3)   # Lundi
EVENT_DATE = datetime.date(2027, 6, 20)  # Dimanche (estimé, à confirmer)
TOTAL_WEEKS = 46

assert (EVENT_DATE - PLAN_START).days + 1 == TOTAL_WEEKS * 7

DELOAD_WEEKS = {4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 43}
SWIM_ONCE_WEEKS = set(range(1, 21))  # 1x/semaine jusqu'à la fin de l'automne/stage coop (~semaine 20)
COOP_WEEKS = set(range(5, 21))       # stage coop automne 2026 (~sept-déc)

DAY_NAMES_FR = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]

# Multiplicateurs de volume pour le mode mise à jour incrémentale (--update). Ne s'appliquent
# QU'aux sports cardio (natation/vélo/course) - la musculation (strength_lower/strength_upper)
# reste TOUJOURS fixe à 60min, jamais affectée par ces multiplicateurs. Valeur par défaut = 1.0
# (aucun changement), ajustée temporairement par update_plan() en fonction des données Garmin
# (récupération, body battery, statut d'entraînement) avant de régénérer la fenêtre de 8 semaines.
VOLUME_ADJUST = {"swim": 1.0, "bike": 1.0, "run": 1.0}


def phase_for_week(w):
    if w <= 20:
        return "Base"
    if w <= 36:
        return "Build"
    if w <= 43:
        return "Peak"
    return "Taper"


def week_dates(w):
    start = PLAN_START + datetime.timedelta(weeks=w - 1)
    end = start + datetime.timedelta(days=6)
    return start, end


def interp(w, anchors):
    """Interpolation linéaire par morceaux entre points d'ancrage (semaine, valeur)."""
    if w <= anchors[0][0]:
        return anchors[0][1]
    if w >= anchors[-1][0]:
        return anchors[-1][1]
    for i in range(len(anchors) - 1):
        w0, v0 = anchors[i]
        w1, v1 = anchors[i + 1]
        if w0 <= w <= w1:
            t = (w - w0) / (w1 - w0) if w1 > w0 else 0
            return v0 + t * (v1 - v0)
    return anchors[-1][1]


# ---------------------------------------------------------------------------
# Zones (LTHR course mesuré par Garmin - voir notes; vélo/natation estimés)
# ---------------------------------------------------------------------------
def build_zones():
    return {
        "run": {
            "hr": {
                "lthr": 182,
                "lthrSource": "Mesuré par Garmin (lactate_threshold_hr), moyenne des 5 dernières lectures "
                              "juin-juillet 2026: 182, 183, 183, 180, 182 bpm.",
                "zones": [
                    {"zone": 1, "name": "Récupération", "percentLow": 0, "percentHigh": 81, "hrLow": 105, "hrHigh": 147},
                    {"zone": 2, "name": "Aérobie", "percentLow": 81, "percentHigh": 89, "hrLow": 147, "hrHigh": 162},
                    {"zone": 3, "name": "Tempo", "percentLow": 90, "percentHigh": 93, "hrLow": 164, "hrHigh": 169},
                    {"zone": 4, "name": "Sous-seuil", "percentLow": 94, "percentHigh": 99, "hrLow": 171, "hrHigh": 180},
                    {"zone": 5, "name": "Seuil", "percentLow": 100, "percentHigh": 102, "hrLow": 182, "hrHigh": 186},
                    {"zone": 6, "name": "VO2max", "percentLow": 103, "percentHigh": 106, "hrLow": 187, "hrHigh": 193},
                    {"zone": 7, "name": "Anaérobie", "percentLow": 106, "percentHigh": 999, "hrLow": 193, "hrHigh": 210},
                ],
            },
            "pace": {
                "thresholdPace": "4:45/km",
                "thresholdPaceSeconds": 285,
                "zones": [
                    {"zone": "E", "name": "Facile", "pace": "5:45-6:15/km", "paceSeconds": 360},
                    {"zone": "M", "name": "Marathon/70.3", "pace": "5:15-5:30/km", "paceSeconds": 320},
                    {"zone": "T", "name": "Seuil (Tempo)", "pace": "4:45-4:55/km", "paceSeconds": 290},
                    {"zone": "I", "name": "Intervalle (VO2max)", "pace": "4:25-4:35/km", "paceSeconds": 270},
                    {"zone": "R", "name": "Répétition", "pace": "4:10-4:20/km", "paceSeconds": 255},
                ],
            },
        },
        "bike": {
            "hr": {
                "lthr": 158,
                "zones": [
                    {"zone": 1, "name": "Récupération", "percentLow": 0, "percentHigh": 81, "hrLow": 95, "hrHigh": 128},
                    {"zone": 2, "name": "Aérobie", "percentLow": 81, "percentHigh": 89, "hrLow": 129, "hrHigh": 140},
                    {"zone": 3, "name": "Tempo", "percentLow": 90, "percentHigh": 93, "hrLow": 142, "hrHigh": 147},
                    {"zone": 4, "name": "Sous-seuil", "percentLow": 94, "percentHigh": 99, "hrLow": 149, "hrHigh": 156},
                    {"zone": 5, "name": "Seuil", "percentLow": 100, "percentHigh": 102, "hrLow": 158, "hrHigh": 161},
                    {"zone": 6, "name": "VO2max", "percentLow": 103, "percentHigh": 106, "hrLow": 163, "hrHigh": 167},
                    {"zone": 7, "name": "Anaérobie", "percentLow": 106, "percentHigh": 999, "hrLow": 167, "hrHigh": 195},
                ],
            },
        },
        "swim": {
            "css": "à déterminer (test 400m/200m, semaine 2)",
            "cssSeconds": 165,
            "zones": [
                {"zone": 1, "name": "Récupération", "paceOffset": 18, "pace": "CSS + 15-20s/100m"},
                {"zone": 2, "name": "Aérobie", "paceOffset": 10, "pace": "CSS + 8-12s/100m"},
                {"zone": 3, "name": "Tempo", "paceOffset": 4, "pace": "CSS + 3-6s/100m"},
                {"zone": 4, "name": "Seuil", "paceOffset": 0, "pace": "Allure CSS"},
                {"zone": 5, "name": "VO2max", "paceOffset": -4, "pace": "CSS - 3-5s/100m"},
            ],
        },
        "maxHR": None,
        "restingHR": 50,
        "weight": None,
    }


ZONES_NOTE = (
    "Zones course basées sur le LTHR réellement mesuré par Garmin (182 bpm). Zones vélo et natation "
    "encore estimées faute de test formel - à valider via les tests de terrain prévus semaines 1-2 "
    "(vélo: test FTP/FC 20min; natation: test CSS 400m/200m, à réévaluer une fois la distance de "
    "1900m atteinte confortablement)."
)

# ---------------------------------------------------------------------------
# Assessment
# ---------------------------------------------------------------------------
def build_assessment():
    return {
        "foundation": {
            "raceHistory": [
                "Ultra-distance 51 km complété le 18 juillet 2026 (5h50, D+464m, FC moy. 153)",
                "Demi-marathon (21,1-21,4 km) couvert au moins 5 fois en 2025 (mars, mai x2, juillet)",
                "3+ années de course à pied régulière (données depuis mars 2023, 355 activités)",
                "Musculation quasi ininterrompue depuis janvier 2026, routine fixe 2x/semaine "
                "(bas du corps+abdos / haut du corps)",
            ],
            "peakTrainingLoad": 9,
            "foundationLevel": "intermediate",
            "yearsInSport": 3,
        },
        "currentForm": {
            "weeklyVolume": {"total": 6.5, "swim": 0.4, "bike": 2.0, "run": 2.5},
            "longestSessions": {"swim": 1.1, "bike": 60, "run": 51},
            "consistency": 12,
            "timeSincePeakFitness": "Pic récent: ultra de 51km le 18 juillet 2026 (2,5 semaines avant le début du plan)",
            "reasonForTimeOff": "Aucun arrêt - transition d'un bloc musculation/hiver vers un bloc course/vélo au printemps-été 2026",
        },
        "strengths": [
            {
                "sport": "run",
                "evidence": "Base aérobie éprouvée jusqu'à distance ultra (51km); demi-marathon répété 5x en 2025; FC repos en baisse constante (-10,8 bpm depuis 2022) confirmant une progression aérobie long terme",
            },
            {
                "sport": "strength",
                "evidence": "Routine de musculation fixe et non-négociable 2x/semaine (bas du corps+abdos, haut du corps) - excellente base de robustesse, maintenue telle quelle tout au long du plan",
            },
        ],
        "limiters": [
            {
                "sport": "swim",
                "evidence": "Capacité actuelle réelle limitée à 1000-1200m (confirmé par l'athlète), quasi aucune expérience de nage structurée. Limiteur principal pour le 70.3 (1,9km à nager) - progression volontairement très graduelle pour protéger les épaules",
            },
            {
                "sport": "bike",
                "evidence": "Volume récréatif présent (sorties 20-60km) mais aucune structure par zones ni donnée de puissance - sport à faible risque de blessure donc volume augmenté plus agressivement que la natation",
            },
        ],
        "constraints": [
            "Stage coop à temps plein automne 2026 (~semaines 5 à 20 du plan, sept-déc) - natation limitée à 1x/semaine durant cette période pour respecter le temps disponible et la progression prudente à l'épaule",
            "2 séances de musculation fixes et non-négociables chaque semaine, 60min chacune (bas du corps+abdos le lundi, haut du corps le vendredi), durée fixe qui n'augmente jamais",
            "Risque de blessure aux épaules en natation - progression de volume délibérément lente",
            "Natation en piscine seulement jusqu'au dégel (eau libre non praticable au Québec avant fin mai / début juin)",
        ],
    }


# ---------------------------------------------------------------------------
# Progressions (ancres semaine -> valeur, interpolées linéairement)
# ---------------------------------------------------------------------------

# Vélo - sortie longue du samedi (minutes). Démarre à 90min minimum tel que demandé.
BIKE_LONG_ANCHORS = [(1, 90), (20, 150), (21, 150), (36, 195), (37, 195), (43, 225), (44, 150), (45, 90), (46, 25)]
# Vélo - 2e séance courte du jeudi (minutes)
BIKE_SHORT_ANCHORS = [(1, 30), (20, 40), (21, 40), (36, 50), (37, 50), (43, 50), (44, 35), (45, 25), (46, 15)]

# Course - sortie longue du dimanche (minutes)
RUN_LONG_ANCHORS = [(1, 50), (4, 45), (5, 55), (20, 80), (21, 80), (36, 105), (37, 105), (43, 118),
                     (44, 70), (45, 45), (46, 20)]
# Course - séance qualité du mercredi (minutes, total incl. échauffement/retour au calme)
RUN_QUALITY_ANCHORS = [(1, 25), (20, 35), (21, 35), (36, 45), (37, 45), (43, 45), (44, 30), (45, 22), (46, 18)]

# Natation - séance principale (mardi): distance (m). Départ réaliste 1000-1100m.
SWIM_MAIN_DIST_ANCHORS = [(1, 1000), (20, 1500), (21, 1500), (36, 1900), (37, 1900), (43, 2100),
                           (44, 1500), (45, 1100), (46, 600)]
# Natation - 2e séance (samedi matin, avant le vélo long, dès semaine 21): distance (m), plus courte / technique
SWIM_SECOND_DIST_ANCHORS = [(21, 700), (36, 1000), (37, 1000), (43, 1200), (44, 800), (45, 600)]
# Allure de nage (sec/100m) - s'améliore progressivement avec la pratique
SWIM_PACE_ANCHORS = [(1, 175), (20, 155), (21, 155), (36, 140), (37, 140), (43, 130), (46, 175)]

RUN_LONG_PACE_ANCHORS = [(1, 365), (20, 350), (21, 350), (36, 335), (37, 335), (43, 325), (46, 360)]  # sec/km

# Réduction de volume des semaines de décharge en cours de bloc (DELOAD_WEEKS), révisée le
# 4 août 2026 sur la base de recherche factuelle (voir plan.notes.deloadResearch pour le détail
# et les sources): la "règle des 30%" est communément citée par des coachs de triathlon pour les
# semaines de récupération (fréquence des séances maintenue, volume/durée réduits d'environ 30%).
# Sources: triathlete.com ("What's the Right Way to Approach A Recovery Week?"),
# endogusto.com ("How to Use Periodization in Your Triathlon Training Plan"),
# usatriathlon.org ("The Importance of Recovery Weeks and Rest Days").
# La séance de qualité du mercredi est réduite un peu moins (~20%) pour préserver davantage la
# fréquence/intensité (principe général de périodisation: couper le volume avant l'intensité).
DELOAD_MULT_VOLUME = 0.70   # -30%: vélo long/court, course longue, natation (volume/distance)
DELOAD_MULT_QUALITY = 0.80  # -20%: séance de qualité du mercredi (intensité préservée)


def bike_long_min(w):
    v = interp(w, BIKE_LONG_ANCHORS)
    if w in DELOAD_WEEKS and w != 46:
        v *= DELOAD_MULT_VOLUME
    v *= VOLUME_ADJUST["bike"]
    return round(v)


def bike_short_min(w):
    v = interp(w, BIKE_SHORT_ANCHORS)
    if w in DELOAD_WEEKS and w != 46:
        v *= DELOAD_MULT_VOLUME
    v *= VOLUME_ADJUST["bike"]
    return round(v)


def run_long_min(w):
    v = interp(w, RUN_LONG_ANCHORS)
    if w in DELOAD_WEEKS and w != 46:
        v *= DELOAD_MULT_VOLUME
    v *= VOLUME_ADJUST["run"]
    return round(v)


def run_quality_min(w):
    v = interp(w, RUN_QUALITY_ANCHORS)
    if w in DELOAD_WEEKS and w != 46:
        v *= DELOAD_MULT_QUALITY
    v *= VOLUME_ADJUST["run"]
    return round(v)


def swim_main_dist(w):
    v = interp(w, SWIM_MAIN_DIST_ANCHORS)
    if w in DELOAD_WEEKS and w != 46:
        v *= DELOAD_MULT_VOLUME
    v *= VOLUME_ADJUST["swim"]
    return round(v / 50) * 50


def swim_second_dist(w):
    if w < 21:
        return 0
    v = interp(w, SWIM_SECOND_DIST_ANCHORS)
    if w in DELOAD_WEEKS and w != 46:
        v *= DELOAD_MULT_VOLUME
    v *= VOLUME_ADJUST["swim"]
    return round(v / 50) * 50


def swim_pace(w):
    return interp(w, SWIM_PACE_ANCHORS)


def run_long_pace(w):
    return interp(w, RUN_LONG_PACE_ANCHORS)


def bike_km(minutes, speed_kmh=25.0):
    return round(minutes / 60 * speed_kmh, 1)


def run_km_from_pace(minutes, pace_sec_per_km):
    return round(minutes * 60 / pace_sec_per_km, 2)


def swim_minutes_from_dist(dist_m, pace_sec_per_100m):
    return dist_m / 100 * pace_sec_per_100m / 60


# ---------------------------------------------------------------------------
# Génération des séances
# ---------------------------------------------------------------------------
def mk_workout(wid, sport, wtype, name, description, duration_min=None,
               distance_m=None, zone=None, human=None, notes=None):
    w = {"id": wid, "sport": sport, "type": wtype, "name": name, "description": description, "completed": False}
    if duration_min is not None:
        w["durationMinutes"] = round(duration_min)
    if distance_m is not None:
        w["distanceMeters"] = int(distance_m)
    if zone is not None:
        w["primaryZone"] = zone
    if human is not None:
        w["humanReadable"] = human
    if notes is not None:
        w["notes"] = notes
    return w


def rest_day(wid):
    return mk_workout(wid, "rest", "rest", "Repos complet", "Journée de repos complet - aucune activité structurée.")


def strength_lower(wid, phase, is_deload):
    if phase == "Base":
        desc = ("Bas du corps + abdos. 3 séries x 12-15 reps: squats gobelet, fentes marchées, "
                "soulevé de terre roumain, pont fessier. Gainage: planche 3x45s, planche latérale 2x30s/côté.")
        wtype = "foundation"
    elif phase == "Build":
        desc = ("Bas du corps + abdos. 3-4 séries x 6-8 reps charge modérée-élevée: squats, soulevé de "
                "terre roumain unilatéral, step-ups, hip thrust. Gainage anti-rotation (Pallof press, bird dog).")
        wtype = "strength"
    elif phase == "Peak":
        desc = ("Bas du corps + abdos, charge modérée avec composante explosive: squats sautés légers, "
                "fentes bulgares, mollets. Gainage dynamique. Volume réduit pour préserver la fraîcheur des jambes.")
        wtype = "power"
    else:
        desc = "Bas du corps + abdos, charge légère, 2 séries x 8-10 reps - maintien sans fatigue résiduelle avant la course."
        wtype = "maintenance"
    if is_deload:
        desc = "Semaine de décharge: " + desc + " Réduire la charge de 20-30%."
    return mk_workout(wid, "strength", wtype, "Musculation - bas du corps + abdos", desc, duration_min=60)


def strength_upper(wid, phase, is_deload):
    if phase == "Base":
        desc = ("Haut du corps. 3 séries x 12-15 reps: tirage horizontal, développé haltères, tirage vertical, "
                "élévations latérales légères, biceps/triceps. Gainage: dead bug 2x12/côté.")
        wtype = "foundation"
    elif phase == "Build":
        desc = ("Haut du corps. 3-4 séries x 6-8 reps: tractions/lat pulldown, développé militaire, rowing, "
                "bench press. Priorité au dos/épaules pour la natation et la posture vélo.")
        wtype = "strength"
    elif phase == "Peak":
        desc = ("Haut du corps, charge modérée, volume réduit: tirage, développé léger, gainage. Éviter la "
                "fatigue résiduelle des épaules avant les séances de natation.")
        wtype = "power"
    else:
        desc = "Haut du corps, charge légère, 2 séries x 8-10 reps - maintien seulement avant la course."
        wtype = "maintenance"
    if is_deload:
        desc = "Semaine de décharge: " + desc + " Réduire la charge de 20-30%."
    return mk_workout(wid, "strength", wtype, "Musculation - haut du corps", desc, duration_min=60)


def run_quality_workout(wid, w, phase, is_deload, minutes):
    """Séance de course du mercredi - toujours la plus courte, toujours avec intensité."""
    pace_e = run_long_pace(w)
    if is_deload or phase == "Taper":
        name = "Course - activation (facile)" if phase == "Taper" else "Course - facile + accélérations"
        desc = "Footing facile avec 4-6x20s accélérations progressives (strides), retour au calme complet entre chaque."
        zone = "Zone 2 + strides"
        wtype = "intervals"
    elif phase == "Base":
        name = "Course - fartlek / tempo court"
        desc = ("Échauffement 10min facile. Bloc principal: 15min fartlek non structuré (30s-1min plus "
                "soutenu / 1-2min facile en alternance) OU 10min continu à allure tempo (zone 3). "
                "Retour au calme 5-10min.")
        zone = "Zone 3-4"
        wtype = "tempo"
    elif phase == "Build":
        name = "Course - intervalles seuil"
        desc = ("Échauffement 12min facile + 4x100m lignes droites. Bloc principal: 4-5 x 4min à allure "
                "seuil (zone 4, ~4:45-4:55/km), récupération 2min trot entre chaque. Retour au calme 8-10min. "
                "Inspiré des séances d'intervalles suggérées par la montre Garmin.")
        zone = "Zone 4-5"
        wtype = "threshold"
    elif phase == "Peak":
        name = "Course - VO2max / allure course"
        desc = ("Échauffement 12min facile + strides. Bloc principal: 5-6 x 3min à allure VO2max (zone 6, "
                "~4:25-4:35/km), récupération 2min trot, OU 20min continu à allure course 70.3 selon la "
                "semaine. Retour au calme 8min.")
        zone = "Zone 5-6"
        wtype = "vo2max"
    else:
        name = "Course - tempo court"
        desc = "Échauffement 10min + 10-12min à allure seuil + retour au calme."
        zone = "Zone 4"
        wtype = "tempo"
    dist = run_km_from_pace(minutes, pace_e - 25) * 1000  # allure un peu plus rapide que E vu la composante qualité
    return mk_workout(wid, "run", wtype, name, desc, duration_min=minutes, distance_m=dist, zone=zone)


def build_week(w):
    phase = phase_for_week(w)
    start, end = week_dates(w)
    is_deload = w in DELOAD_WEEKS
    in_coop = w in COOP_WEEKS
    wid_base = f"w{w}"
    days = [None] * 7

    # --- Lundi: musculation bas du corps (fixe, toujours présente) ---
    days[0] = [strength_lower(f"{wid_base}-lun-force", phase, is_deload)]

    # --- Mardi: natation (séance principale) SEULE ---
    # Révision du 4 août 2026: le vélo court est déplacé au jeudi et la musculation du
    # haut du corps au vendredi, pour ne plus avoir 2 séances la même journée durant
    # les premières semaines (à la demande de l'athlète).
    s_dist = swim_main_dist(w)
    s_pace = swim_pace(w)
    s_min = swim_minutes_from_dist(s_dist, s_pace)
    if w <= 2:
        sname = "Natation - familiarisation & technique" if w == 1 else "Natation - technique + test CSS"
        sdesc = (("Séance d'introduction en douceur: familiarisation avec l'eau, respiration bilatérale, "
                  "battements de jambes avec planche. Beaucoup de pauses, aucune pression de temps ni de "
                  "distance - priorité à la technique pour protéger les épaules.")
                 if w == 1 else
                 ("Test de terrain CSS (adapté à la distance actuelle ~1000m): 300m échauffement + 200m chrono "
                  "+ 5min récup active + 100m chrono. Sert à calibrer les zones de nage sans dépasser la "
                  "capacité actuelle."))
        szone = "Technique"
    else:
        sname = "Natation - technique + aérobie"
        sdesc = (f"Progression très graduelle (protection des épaules). 6-8x50m technique (rattrapé, doigt qui "
                 f"traîne, respiration bilatérale) puis nage continue/fractionnée en zone 1-2 jusqu'à "
                 f"~{s_dist}m au total. Arrêter si sensation inhabituelle à l'épaule.")
        szone = "Zone 1-2"
    days[1] = [mk_workout(f"{wid_base}-mar-swim", "swim", "technique", sname, sdesc,
                           duration_min=s_min, distance_m=s_dist, zone=szone)]

    # --- Mercredi: course courte AVEC intensité (toujours la plus courte des 2) ---
    rq_min = run_quality_min(w)
    days[2] = [run_quality_workout(f"{wid_base}-mer-run", w, phase, is_deload, rq_min)]

    # --- Jeudi: vélo court (2e séance), déplacé du mardi ---
    b_short = bike_short_min(w)
    if w == 2:
        bname, bdesc, bzone = ("Vélo - test FTP/FC 20min",
                                "Test de terrain: 20min échauffement avec 3x1min cadence élevée, puis 20min à "
                                "l'effort maximal soutenable. FC moyenne de ce bloc ≈ seuil vélo.", "Test")
    else:
        bname, bdesc, bzone = ("Vélo - endurance facile (2e séance)",
                                "Sortie ou home-trainer facile en zone 2, cadence fluide 85-95rpm. Séance courte "
                                "et à faible risque - sert à augmenter le volume vélo sans stress articulaire.",
                                "Zone 2")
    days[3] = [mk_workout(f"{wid_base}-jeu-bike", "bike", "endurance", bname, bdesc,
                           duration_min=b_short, distance_m=bike_km(b_short) * 1000, zone=bzone)]

    # --- Vendredi: musculation haut du corps (fixe, toujours présente), déplacée du jeudi ---
    days[4] = [strength_upper(f"{wid_base}-ven-force", phase, is_deload)]

    # --- Samedi: 2e natation (dès semaine 21, avant le vélo) + vélo long (+ brick en Build/Peak) ---
    # À la demande de l'athlète, la 2e séance de natation hebdomadaire (introduite en semaine 21)
    # est placée le samedi matin, avant le vélo long, plutôt que le vendredi (occupé par la
    # musculation) ou le jeudi (déjà occupé par le vélo court).
    sat = []
    if w >= 21 and w != 46:
        s2_dist = swim_second_dist(w)
        if s2_dist > 0:
            s2_min = swim_minutes_from_dist(s2_dist, s_pace + 10)
            sat.append(mk_workout(f"{wid_base}-sam-swim", "swim", "technique", "Natation - technique (2e séance)",
                                   "Séance courte, focus pur sur la technique: drills + nage aisée en zone 1-2. "
                                   "Fréquence augmentée maintenant que la charge du stage coop est terminée. "
                                   "Placée le matin, avant le vélo long.",
                                   duration_min=s2_min, distance_m=s2_dist, zone="Zone 1-2"))

    bl_min = bike_long_min(w)
    if phase == "Taper" and w == 46:
        sat.append(mk_workout(f"{wid_base}-sam-activation", "bike", "recovery", "Vélo - activation courte + repos",
                               "15-20min très facile, vérification matériel (vélo, transition). Repos le reste de la journée.",
                               duration_min=bl_min, distance_m=bike_km(bl_min) * 1000, zone="Zone 1"))
    else:
        sat.append(mk_workout(f"{wid_base}-sam-bikelong", "bike", "long", "Vélo - sortie longue",
                               "Zone 2 stable. Sport à faible risque de blessure: volume augmenté progressivement "
                               "et plus rapidement que la natation. Pratiquer l'hydratation/nutrition en continu."
                               + (" Bloc final à allure course (60-90min @ 70-77% FTP)." if phase == "Peak" and not is_deload else ""),
                               duration_min=bl_min, distance_m=bike_km(bl_min) * 1000,
                               zone="Zone 2-3" if phase in ("Build", "Peak") and not is_deload else "Zone 2"))
        brick_min = 0
        if phase == "Build" and not is_deload and (w % 2 == 1):
            brick_min = round(interp(w, [(21, 15), (36, 30)]))
        elif phase == "Peak" and not is_deload:
            brick_min = round(interp(w, [(37, 25), (43, 40)]))
        if brick_min > 0:
            pace_b = run_long_pace(w) - 15
            sat.append(mk_workout(f"{wid_base}-sam-brick", "brick", "brick", "Course - transition (brick)",
                                   "Enchaîné immédiatement après le vélo: course à allure facile-modérée, "
                                   "objectif = habituer les jambes à la transition vélo-course.",
                                   duration_min=brick_min, distance_m=run_km_from_pace(brick_min, pace_b) * 1000,
                                   zone="Zone 2-3"))
    if not sat:
        sat = [rest_day(f"{wid_base}-sam-repos")]
    days[5] = sat

    # --- Dimanche: course longue (endurance) ---
    if w == 46:
        days[6] = [mk_workout(f"{wid_base}-dim-race", "race", "race", "IRONMAN 70.3 Mont-Tremblant",
                               "Jour de course: 1,9km natation + 90km vélo + 21,1km course. Voir raceStrategy "
                               "pour le pacing détaillé.", zone="Course")]
    else:
        rl_min = run_long_min(w)
        pace_l = run_long_pace(w)
        desc = "Sortie longue très facile, aucune pression d'allure - priorité à la récupération complète post-ultra." \
            if w <= 3 else "Sortie longue en zone 2, allure stable. Pratiquer la nutrition de course sur les séances >75min."
        days[6] = [mk_workout(f"{wid_base}-dim-runlong", "run", "long", "Course - sortie longue", desc,
                               duration_min=rl_min, distance_m=run_km_from_pace(rl_min, pace_l) * 1000, zone="Zone 2")]

    # --- Assemblage TrainingDay + résumé ---
    training_days = []
    sport_counts, sport_minutes, sport_km = {}, {}, {}
    for i in range(7):
        d = start + datetime.timedelta(days=i)
        workouts = days[i] if days[i] else [rest_day(f"{wid_base}-d{i}-repos")]
        training_days.append({"date": d.isoformat(), "dayOfWeek": DAY_NAMES_FR[i], "workouts": workouts})
        for wo in workouts:
            sp = wo["sport"]
            if sp == "rest":
                continue
            sport_counts[sp] = sport_counts.get(sp, 0) + 1
            sport_minutes[sp] = sport_minutes.get(sp, 0) + (wo.get("durationMinutes") or 0)
            if sp in ("run", "bike", "brick") and wo.get("distanceMeters"):
                key = "run" if sp == "brick" else sp
                sport_km[key] = sport_km.get(key, 0) + wo["distanceMeters"] / 1000

    by_sport = {}
    for sp, mins in sport_minutes.items():
        if mins <= 0:
            continue
        entry = {"sessions": sport_counts.get(sp, 0), "hours": round(mins / 60, 2)}
        if sp in sport_km and sport_km[sp] > 0:
            entry["km"] = round(sport_km[sp], 1)
        by_sport[sp] = entry
    total_hours = round(sum(sport_minutes.values()) / 60, 2)

    focus_map = {
        "Base": "Retour progressif post-ultra + tests de terrain" if w <= 4 else (
            "Construction aérobie pendant le stage coop (natation 1x/semaine)" if in_coop else "Construction aérobie générale"),
        "Build": "Introduction de l'intensité, natation 2x/semaine dès maintenant" if w == 21 else (
            "Introduction de l'intensité, volume progressif" if w <= 28 else "Spécificité course 70.3"),
        "Peak": "Affûtage spécifique, allure course, brick chaque semaine",
        "Taper": "Réduction du volume, maintien de l'intensité" if w < TOTAL_WEEKS else "Semaine de course - IRONMAN 70.3 Mont-Tremblant",
    }

    return {
        "weekNumber": w, "startDate": start.isoformat(), "endDate": end.isoformat(), "phase": phase,
        "focus": focus_map[phase] + (" [semaine de décharge]" if is_deload and w != TOTAL_WEEKS else ""),
        "targetHours": total_hours, "isRecoveryWeek": is_deload, "days": training_days,
        "summary": {"totalHours": total_hours, "bySport": by_sport},
    }


def build_phases(all_weeks=None):
    """all_weeks: liste des 46 semaines déjà générées (weeklyHoursRange y est calculé à partir de
    ces données réelles). Si omis, régénère les 46 semaines avec les réglages courants (VOLUME_ADJUST=1.0)."""
    def rng(weeks_list, all_weeks):
        vals = [w["summary"]["totalHours"] for w in all_weeks if w["weekNumber"] in weeks_list]
        return {"low": round(min(vals), 1), "high": round(max(vals), 1)}

    if all_weeks is None:
        all_weeks = [build_week(w) for w in range(1, TOTAL_WEEKS + 1)]
    return [
        {
            "name": "Base", "startWeek": 1, "endWeek": 20,
            "focus": "Reconstruction aérobie post-ultra, natation 1x/semaine (progression très graduelle depuis "
                     "1000-1200m, protection des épaules), vélo dès 90min et volume croissant, musculation fixe "
                     "2x60min/semaine, course courte du mercredi avec intensité. Recouvre le stage coop (~semaines 5-20).",
            "weeklyHoursRange": rng(range(1, 21), all_weeks),
            "keyWorkouts": ["Tests de terrain (course/vélo/natation, semaines 1-2)", "Natation 1x/semaine (mardi)",
                             "Vélo long + court (jeudi/samedi)", "Course qualité mercredi + longue dimanche",
                             "Musculation bas du corps (lundi) + haut du corps (vendredi), 60min fixe"],
            "physiologicalGoals": ["Rétablir l'équilibre aérobie après l'ultra du 18 juillet",
                                    "Construire la technique de nage prudemment à partir de 1000-1200m",
                                    "Développer la capillarisation et la densité mitochondriale (zone 2)",
                                    "Maintenir la routine de musculation existante sans interruption"],
        },
        {
            "name": "Build", "startWeek": 21, "endWeek": 36,
            "focus": "Natation 2x/semaine (stage coop terminé), intensité accrue en course (intervalles seuil "
                     "mercredi), vélo sweet spot, brick une semaine sur deux, musculation fixe inchangée.",
            "weeklyHoursRange": rng(range(21, 37), all_weeks),
            "keyWorkouts": ["Natation mardi + samedi (avant le vélo long)", "Vélo sweet spot (jeudi court) + long (samedi)",
                             "Course intervalles seuil (mercredi) + longue (dimanche)",
                             "Brick vélo-course (samedi, semaines alternées)"],
            "physiologicalGoals": ["Élever le seuil lactique dans les 3 disciplines",
                                    "Poursuivre la progression prudente en natation vers 1900-2000m",
                                    "Développer la tolérance à l'effort prolongé à allure course"],
        },
        {
            "name": "Peak", "startWeek": 37, "endWeek": 43,
            "focus": "Spécificité course: allure et puissance cible du 70.3, brick chaque semaine, natation en "
                     "eau libre dès que possible (dégel), musculation réduite en charge mais durée inchangée.",
            "weeklyHoursRange": rng(range(37, 44), all_weeks),
            "keyWorkouts": ["Vélo à allure course 70.3", "Brick hebdomadaire", "Natation eau libre / sighting",
                             "Course VO2max/allure course (mercredi) + longue avec segment allure course (dimanche)"],
            "physiologicalGoals": ["Affiner l'économie de mouvement à l'allure course",
                                    "Consolider la stratégie de pacing et de nutrition de course",
                                    "Maximiser la forme (TSB) en vue de la course"],
        },
        {
            "name": "Taper", "startWeek": 44, "endWeek": 46,
            "focus": "Réduction progressive du volume cardio (40-60%), musculation maintenue à charge légère mais "
                     "durée inchangée, courtes touches d'intensité à allure course. Course le dimanche 20 juin 2027.",
            "weeklyHoursRange": rng(range(44, 47), all_weeks),
            "keyWorkouts": ["Répétitions courtes à allure course", "Activation légère la semaine de course",
                             "IRONMAN 70.3 Mont-Tremblant (dimanche, semaine 46)"],
            "physiologicalGoals": ["Dissiper la fatigue accumulée (ATL) tout en préservant la fitness (CTL)",
                                    "Atteindre un TSB cible de +10 à +20 le jour de la course",
                                    "Optimiser le sommeil et la récupération finale"],
        },
    ]


def build_race_strategy():
    return {
        "event": {"name": "IRONMAN 70.3 Mont-Tremblant", "date": EVENT_DATE.isoformat(), "type": "70.3",
                   "distances": {"swim": 1900, "bike": 90000, "run": 21100}},
        "pacing": {
            "swim": {"target": "Allure confortable, pas de chrono cible - objectif principal: terminer sereinement "
                                "sans irriter les épaules. À réévaluer une fois la distance de 1900m maîtrisée à l'entraînement.",
                     "notes": "Départ très conservateur. Coup de pied minimal (2-temps) pour épargner les jambes et les épaules."},
            "bike": {"targetPower": "70-77% FTP (à ajuster une fois le FTP mesuré au test de terrain)",
                     "targetHR": "≤161 bpm (zone 4 basse, sous le seuil vélo estimé de 158)",
                     "notes": "30 premières minutes: 5-10W sous la cible. Piloter à la puissance normalisée, pas à la "
                              "vitesse (parcours vallonné de Mont-Tremblant)."},
            "run": {"targetPace": "5:15-5:30/km (à ajuster selon la progression du plan)",
                    "targetHR": "≤151 bpm (80-85% du LTHR course mesuré de 182 bpm)",
                    "notes": "Les 2 premiers kilomètres seront inconfortables - normal après le vélo. Marcher les "
                             "ravitaillements si besoin, c'est une stratégie valide sur 70.3."},
        },
        "nutrition": {
            "preRace": "2-3h avant: 100-150g de glucides (gruau, banane, rôties). 30min avant: 20-30g.",
            "during": {"carbsPerHour": 70, "fluidPerHour": "600-800ml",
                       "products": ["Gels (à tester en entraînement dès la phase Build)", "Boisson sportive", "Cola (course à pied)"]},
            "notes": "Entraîner l'intestin dès la phase Build: commencer à 30g/h et augmenter progressivement sur "
                     "4-6 semaines jusqu'à 70-90g/h.",
        },
        "taper": {"startDate": "2027-05-31", "volumeReduction": 55,
                  "notes": "Réduction progressive sur 3 semaines. Musculation maintenue (charge légère, durée "
                           "inchangée) pour ne pas perdre l'habitude, tout le reste du volume cardio réduit."},
        "raceDay": {"wakeUpTime": "4h00 (départ de vague probable ~7h00-7h30)",
                    "preRaceMeal": "Petit-déjeuner familier et déjà testé en entraînement, 2,5-3h avant le départ",
                    "warmUp": "10-15min de mobilité légère + quelques longueurs de nage faciles si possible avant le départ",
                    "mentalCues": ["Départ conservateur - la course se gagne dans les 2 dernières heures",
                                   "Sur le vélo: puissance/effort, pas vitesse",
                                   "Les 2 premiers km de course sembleront horribles - c'est normal, ça passe",
                                   "Objectif: terminer et bien progresser - pas de pression de temps"]},
    }


def build_full_plan():
    """Génère le plan complet des 46 semaines (bootstrap initial)."""
    weeks = [build_week(w) for w in range(1, TOTAL_WEEKS + 1)]
    now_iso = datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
    plan = {
        "version": "1.0",
        "meta": {
            "id": "ironman-703-mont-tremblant-2027-06-20", "athlete": "Zachary Desbiens",
            "event": "IRONMAN 70.3 Mont-Tremblant", "eventDate": EVENT_DATE.isoformat(),
            "planStartDate": PLAN_START.isoformat(), "planEndDate": EVENT_DATE.isoformat(),
            "createdAt": "2026-08-04T00:00:00Z", "updatedAt": now_iso,
            "totalWeeks": TOTAL_WEEKS, "generatedBy": "Claude Coach",
        },
        "preferences": {"swim": "meters", "bike": "kilometers", "run": "kilometers", "firstDayOfWeek": "monday"},
        "assessment": build_assessment(),
        "zones": build_zones(),
        "phases": build_phases(weeks),
        "weeks": weeks,
        "raceStrategy": build_race_strategy(),
        "notes": {
            "zonesEstimation": ZONES_NOTE,
            "eventDateStatus": "Date du 20 juin 2027 estimée (dimanche). L'édition 2026 a eu lieu le 21 juin 2026; "
                                "la date officielle 2027 n'était pas encore publiée par IRONMAN au 4 août 2026 "
                                "(source: finishers.com). À confirmer dès publication officielle.",
            "constraintsApplied": "Plan révisé le 4 août 2026 selon les contraintes réelles de l'athlète: musculation "
                                   "fixe 2x60min/semaine (lundi bas du corps+abdos, vendredi haut du corps), natation "
                                   "1x/semaine à l'automne dès 1000-1200m (progression très graduelle, protection "
                                   "des épaules), vélo long dès 90min, course du mercredi toujours la plus courte "
                                   "et toujours avec intensité (tempo/intervalles). Révisé à nouveau le 4 août 2026 "
                                   "(v2.1): gabarit hebdomadaire réorganisé (vélo jeudi, musculation haut du corps "
                                   "vendredi, 2e natation samedi matin dès semaine 21) pour éviter deux séances la "
                                   "même journée en début de plan; réduction de volume des semaines de décharge "
                                   "portée à ~30% (source: \"règle des 30%\" citée par des coachs de triathlon pour "
                                   "les semaines de récupération, triathlete.com / endogusto.com).",
            "deloadResearch": {
                "midBlockRecoveryWeeks": "Réduction de volume d'environ 30% (fréquence des séances maintenue, "
                                          "durée réduite), avec un ratio charge:décharge de 3:1 à 4:1 typique en "
                                          "triathlon. Sources: Triathlete.com (\"What's the Right Way to Approach "
                                          "A Recovery Week?\"), EndoGusto (\"How to Use Periodization in Your "
                                          "Triathlon Training Plan\"), USA Triathlon (\"The Importance of Recovery "
                                          "Weeks and Rest Days\").",
                "taperFinal": "Réduction de volume de 41-60% sur 2-3 semaines avant la course, intensité et "
                               "fréquence maintenues, pondérée davantage sur la dernière semaine (ex. 80%/60%/40% "
                               "du volume de pointe). Source: méta-analyse PLOS ONE \"Effects of tapering on "
                               "performance in endurance athletes\" (2023) — une réduction de 41-60% a produit les "
                               "meilleurs gains de performance en contre-la-montre.",
            },
            "updateLog": [],
        },
    }
    return plan


def main():
    plan = build_full_plan()
    weeks = plan["weeks"]
    with open("plan.json", "w", encoding="utf-8") as f:
        json.dump(plan, f, ensure_ascii=False, indent=2)
    print("OK - plan.json écrit,", len(weeks), "semaines")
    print("Total heures planifiées:", round(sum(w["summary"]["totalHours"] for w in weeks), 1))
    print("Semaine 1:", weeks[0]["summary"])
    print("Semaine 21:", weeks[20]["summary"])
    print("Semaine 39 (peak):", weeks[38]["summary"])


# ---------------------------------------------------------------------------
# Mode mise à jour incrémentale (--update) : ne régénère qu'une fenêtre de N
# semaines (8 par défaut) à partir d'un plan.json existant, en fonction de
# multiplicateurs de volume optionnels (données Garmin: récupération, body
# battery, statut d'entraînement, HRV, etc.). Le reste des 46 semaines n'est
# JAMAIS touché. La musculation (lundi/vendredi, 60min) n'est jamais affectée.
# ---------------------------------------------------------------------------
def update_plan(existing_path, start_week, num_weeks=8, swim_adjust=1.0, bike_adjust=1.0,
                 run_adjust=1.0, reason="", output_path=None):
    with open(existing_path, "r", encoding="utf-8") as f:
        plan = json.load(f)

    end_week = min(start_week + num_weeks - 1, TOTAL_WEEKS)
    window = list(range(start_week, end_week + 1))
    if not window:
        raise ValueError(f"Fenêtre de mise à jour vide (start_week={start_week}, TOTAL_WEEKS={TOTAL_WEEKS})")

    VOLUME_ADJUST["swim"], VOLUME_ADJUST["bike"], VOLUME_ADJUST["run"] = swim_adjust, bike_adjust, run_adjust
    try:
        new_weeks_by_num = {w: build_week(w) for w in window}
    finally:
        VOLUME_ADJUST["swim"] = VOLUME_ADJUST["bike"] = VOLUME_ADJUST["run"] = 1.0

    old_weeks_by_num = {w["weekNumber"]: w for w in plan["weeks"]}
    changes = []
    for w in window:
        old_h = old_weeks_by_num.get(w, {}).get("summary", {}).get("totalHours")
        new_h = new_weeks_by_num[w]["summary"]["totalHours"]
        changes.append({"weekNumber": w, "oldTotalHours": old_h, "newTotalHours": new_h})
        old_weeks_by_num[w] = new_weeks_by_num[w]

    merged_weeks = [old_weeks_by_num[w] for w in sorted(old_weeks_by_num.keys())]
    plan["weeks"] = merged_weeks
    plan["phases"] = build_phases(merged_weeks)
    now_iso = datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
    plan["meta"]["updatedAt"] = now_iso
    plan.setdefault("notes", {}).setdefault("updateLog", []).append({
        "date": now_iso, "weeksUpdated": [start_week, end_week],
        "volumeAdjust": {"swim": swim_adjust, "bike": bike_adjust, "run": run_adjust},
        "reason": reason,
    })

    out = output_path or existing_path
    with open(out, "w", encoding="utf-8") as f:
        json.dump(plan, f, ensure_ascii=False, indent=2)

    print(f"OK - mise à jour écrite dans {out}")
    print(f"Semaines régénérées: {start_week} à {end_week} (fenêtre de {len(window)} semaines)")
    for c in changes:
        print(f"  Semaine {c['weekNumber']}: {c['oldTotalHours']}h -> {c['newTotalHours']}h")
    return plan, changes


def _cli():
    import argparse
    p = argparse.ArgumentParser(description="Générateur / mise à jour du plan d'entraînement Zach")
    p.add_argument("--update", metavar="PLAN_JSON", help="Chemin du plan.json existant à mettre à jour "
                    "(mode incrémental, ne régénère qu'une fenêtre de semaines au lieu du plan complet)")
    p.add_argument("--start-week", type=int, help="Première semaine (1-46) de la fenêtre à régénérer")
    p.add_argument("--weeks", type=int, default=8, help="Taille de la fenêtre à régénérer (défaut: 8)")
    p.add_argument("--swim-adjust", type=float, default=1.0, help="Multiplicateur volume natation (1.0=aucun changement)")
    p.add_argument("--bike-adjust", type=float, default=1.0, help="Multiplicateur volume vélo")
    p.add_argument("--run-adjust", type=float, default=1.0, help="Multiplicateur volume course")
    p.add_argument("--reason", default="", help="Note explicative de la mise à jour (ex: données Garmin de la semaine)")
    p.add_argument("--output", default=None, help="Fichier de sortie (défaut: écrase --update en place)")
    args = p.parse_args()

    if args.update:
        if not args.start_week:
            p.error("--start-week est requis avec --update")
        update_plan(args.update, args.start_week, args.weeks, args.swim_adjust, args.bike_adjust,
                    args.run_adjust, args.reason, args.output)
    else:
        main()


if __name__ == "__main__":
    _cli()
