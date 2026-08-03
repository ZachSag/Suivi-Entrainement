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

## Schéma d'une activité

```js
{
  date: "YYYY-MM-DD",
  type: "Course" | "Vélo" | "Marche" | "Autre",
  distance_km: 0,
  duration_min: 0,
  elevation_m: 0,
  avg_hr: 0,     // ou null si non enregistré
  max_hr: 0      // ou null si non enregistré
}
```

## Limite honnête sur le "continu"

Ni Garmin ni Strava n'offrent d'accès API gratuit pour un usage personnel en ce moment (Garmin réserve son API aux entreprises ; Strava exige un abonnement payant pour l'accès API/MCP depuis juin 2026). Le canal "Suivi continu" n'est donc pas synchronisé automatiquement en temps réel — c'est toi qui alimentes `garmin_live` à chaque nouvel export manuel, gratuit, que tu me partages. Si un jour l'un des deux services ouvre un accès personnel gratuit, on pourra automatiser cette étape.
