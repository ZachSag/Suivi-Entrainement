# plan-generator

Script Python qui génère et met à jour `training-plan-data.js` (le plan d'entraînement IRONMAN 70.3
Mont-Tremblant affiché dans le canal CH5 du tableau de bord).

## Fichiers

- `generate_plan.py` — générateur (mode complet et mode mise à jour incrémentale)
- `plan.json` — dernière sortie complète du générateur (46 semaines), source de vérité

## Mode complet (bootstrap, rarement nécessaire)

```
python3 generate_plan.py
```

Régénère les 46 semaines au complet et écrit `plan.json`. Utilisé seulement pour un changement
structurel majeur (ex: nouvelle date de course, nouvelles contraintes fixes).

## Mode mise à jour incrémentale (utilisé chaque semaine)

```
python3 generate_plan.py --update plan.json --start-week 9 --weeks 8 \
  --swim-adjust 1.0 --bike-adjust 0.9 --run-adjust 0.85 \
  --reason "Note explicative (ex: ACWR élevé, sommeil faible cette semaine)" \
  --output plan.json
```

Ne régénère qu'une fenêtre de 8 semaines (par défaut) à partir de la semaine `--start-week`, en
appliquant des multiplicateurs de volume optionnels par sport (1.0 = aucun changement). Le reste
du plan (avant et après la fenêtre) n'est jamais touché. La musculation (lundi bas du corps, jeudi
haut du corps, 60min fixe) n'est **jamais** affectée par ces multiplicateurs, peu importe la
fenêtre ou les ajustements — c'est une contrainte fixe de l'athlète.

Après la mise à jour, reconvertir `plan.json` en `training-plan-data.js` :

```python
import json
plan = json.load(open("plan.json", encoding="utf-8"))
with open("training-plan-data.js", "w", encoding="utf-8") as f:
    f.write("const trainingPlanData = ")
    json.dump(plan, f, ensure_ascii=False, indent=2)
    f.write(";\n")
```

## Contraintes fixes (ne jamais changer sans le dire explicitement à l'athlète)

- Musculation 2x/semaine, 60min chacune, toujours lundi (bas du corps+abdos) et jeudi (haut du corps)
- Course du mercredi toujours plus courte que celle du dimanche, toujours avec intensité
- Natation 1x/semaine avant la semaine 21 (stage coop), 2x/semaine ensuite
- Zones de fréquence cardiaque course basées sur LTHR mesuré Garmin = 182 bpm
