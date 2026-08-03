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

## Mettre à jour avec de nouvelles données

Refais un export Garmin (voir la méthode qu'on a vue ensemble) de temps en temps, partage-le moi ici, et je fusionne les nouveaux jours dans `data.js`. Plus l'historique s'allonge, plus les corrélations du CH4 deviennent fiables.
