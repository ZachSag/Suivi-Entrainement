# Panneau d'entraînement

Tableau de bord personnel pour suivre l'historique Strava, l'historique Garmin, et les sorties récentes — hébergeable gratuitement sur GitHub Pages.

## Structure

```
training-dashboard/
├── index.html   ← le tableau de bord (ne change jamais)
├── data.js      ← tes données (le seul fichier à modifier)
└── README.md    ← ce fichier
```

`index.html` ne contient aucune donnée codée en dur : il lit tout depuis `data.js`. Ça veut dire que pour mettre à jour le tableau de bord, tu n'as jamais besoin de toucher au design ou au code — seulement à `data.js`.

## Déploiement sur GitHub Pages (gratuit)

1. Crée un nouveau dépôt sur GitHub (public ou privé — Pages fonctionne avec les deux si tu as un compte gratuit et que le dépôt est public ; les dépôts privés nécessitent un compte GitHub Pro pour Pages).
2. Mets les 3 fichiers de ce dossier à la racine du dépôt.
3. Dans le dépôt : **Settings → Pages → Source** → sélectionne la branche `main` et le dossier `/root`.
4. Après ~1 minute, ton tableau de bord est en ligne à :
   `https://TON-NOM-UTILISATEUR.github.io/NOM-DU-DEPOT/`
5. Ajoute cette adresse à tes favoris — c'est ton lien permanent, accessible depuis n'importe quel appareil.

## Comment ajouter des données

### Historique Strava (une fois, quand tu reçois ton export)
Envoie-moi le fichier `activities.csv` de ton export Strava dans la conversation Claude. Je le convertis dans le format attendu et je te renvoie un `data.js` mis à jour avec `strava_history` rempli.

### Historique / suivi Garmin (au fil du temps)
Même principe : chaque fois que tu fais un nouvel export Garmin (voir la méthode d'export manuel qu'on a vue ensemble), partage-le moi et je fusionne les nouvelles sorties dans `garmin_history` ou `garmin_live` selon le cas.

### Mettre le site à jour
Une fois que tu as le nouveau `data.js` :
```
git add data.js
git commit -m "Mise à jour des données d'entraînement"
git push
```
GitHub Pages republie automatiquement en 1-2 minutes.

## Les 4 canaux du tableau de bord

- **CH1 — Strava historique** : 355 activités réelles, 2023-2026. Vue long terme du volume d'entraînement.
- **CH2 — Garmin activités** : activités enrichies (effet d'entraînement aérobie/anaérobie, charge par séance, RPE, zones de FC).
- **CH3 — Physiologie (long terme)** : FC repos et VO2 max mensuels depuis 2022, Body Battery chargée/drainée — pour suivre l'évolution de ta forme physique dans le temps.
- **CH4 — VFC / Charge / Corrélations** : variabilité de la fréquence cardiaque (VFC), charge aiguë/chronique (ACWR), score de sommeil et de préparation à l'entraînement, avec calcul en direct du **coefficient de corrélation de Pearson** entre ces métriques.

### Note sur les corrélations (CH4)

Les coefficients affichés (r) sont calculés directement dans le navigateur à partir de tes données réelles — rien n'est pré-calculé ou inventé. Deux nuances importantes à garder en tête :

1. **Peu de données = coefficients instables.** Avec ~5-10 semaines d'historique VFC/ACWR, un r peut bouger significativement d'une semaine à l'autre. Ces chiffres se stabiliseront avec le temps.
2. **Sommeil vs préparation n'est pas une vraie découverte indépendante.** Le score de sommeil est l'un des facteurs d'entrée du calcul du score de préparation par Garmin lui-même — une corrélation positive ici est en partie mécanique (par construction de la formule), pas seulement physiologique. Le lien ACWR vs VFC, lui, est une vraie question ouverte (les deux métriques sont calculées indépendamment).

## Schéma des données

```js
// Activités (Strava et Garmin)
{
  date: "YYYY-MM-DD", type: "...", distance_km: 0, duration_min: 0,
  elevation_m: 0, avg_hr: 0, max_hr: 0
}

// Bien-être mensuel (CH3)
{ month: "YYYY-MM", resting_hr_avg: 0, stress_avg: 0,
  body_battery_charged_avg: 0, body_battery_drained_avg: 0, steps_avg: 0 }

// Préparation quotidienne (CH4)
{ date: "YYYY-MM-DD", readiness_score: 0, sleep_score: 0, hrv: 0,
  acute_load: 0, chronic_load: 0, acwr: 0, acwr_status: "OPTIMAL" }
```

## Mettre à jour avec de nouvelles données (méthode manuelle)

Refais un export Garmin de temps en temps, partage-le moi ici, et je fusionne les nouveaux jours dans `data_store.json` (puis je régénère `data.js`).

## Nouvelle section de données : `wellness_daily`

En plus des sections existantes, `data_store.json` contient maintenant `wellness_daily` : FC repos, stress moyen, Body Battery et pas, **au jour le jour** (contrairement à `wellness_monthly` qui reste une moyenne mensuelle). C'est ce que lisent les graphiques "30 derniers jours" du CH3. Rétro-rempli à partir de l'export bulk du 3 août pour ~45 jours d'historique ; le script de synchro l'alimente désormais automatiquement chaque jour.

## Charge chronique estimée (CH4)

L'API Garmin en direct ne renvoie pas la charge chronique (elle n'est présente que dans l'export GDPR complet). Depuis le 7 août, `sync_garmin.py` **estime** la charge chronique jour après jour avec une moyenne mobile exponentielle standard (constante 28 jours), amorcée à partir de la dernière vraie valeur connue de Garmin. C'est une approximation scientifiquement standard, mais ce n'est pas le chiffre exact de Garmin — voir la note affichée sous le graphique dans le tableau de bord.

## Automatisation optionnelle (synchronisation quotidienne)

Le dépôt inclut maintenant :
- `data_store.json` — la vraie source de vérité (JSON pur)
- `scripts/build_data_js.py` — régénère `data.js` à partir de `data_store.json`
- `scripts/sync_garmin.py` — se connecte à Garmin Connect (bibliothèque non officielle `garminconnect`) et met à jour `data_store.json`
- `.github/workflows/garmin-sync.yml` — fait tourner les deux scripts ci-dessus automatiquement chaque jour (7h00 heure de l'Est), via GitHub Actions (gratuit)

**⚠️ Avant d'activer :**
1. **Identifiants** : tu dois toi-même ajouter deux "Secrets" dans **Settings → Secrets and variables → Actions → New repository secret** : `GARMIN_EMAIL` et `GARMIN_PASSWORD`. Claude ne les voit jamais et ne peut pas les ajouter à ta place.
2. **MFA** : si l'authentification à deux facteurs est active sur ton compte Garmin, l'automatisation ne pourra pas fonctionner (GitHub Actions ne peut pas répondre à un code MFA).
3. **Logs publics** : ce dépôt doit rester public pour que GitHub Pages soit gratuit — ce qui rend aussi les journaux d'exécution des Actions publics. Le script ne logue donc jamais tes valeurs de santé individuelles, seulement des compteurs.
4. **Champs non vérifiés** : certains champs de l'API en direct (`get_hrv_data`, `get_activities`) n'ont pas pu être testés contre un vrai compte — un premier essai manuel (bouton "Run workflow" dans l'onglet Actions) permettra de repérer et corriger tout ajustement nécessaire.
5. **Risque général** : voir la discussion complète sur les risques de sécurité et de conditions d'utilisation liés aux bibliothèques non officielles Garmin.
