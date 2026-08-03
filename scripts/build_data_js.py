#!/usr/bin/env python3
"""
build_data_js.py
=================
Régénère data.js à partir de data_store.json (la source de vérité).

Ce script ne touche jamais à Garmin ni à Strava — il fait juste la
traduction JSON -> fichier JS que le navigateur peut charger directement
(GitHub Pages ne sait servir que des fichiers statiques, donc data.js doit
exister "précuit" dans le dépôt).

Usage :
    python3 scripts/build_data_js.py
"""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
STORE_PATH = ROOT / "data_store.json"
OUTPUT_PATH = ROOT / "data.js"

HEADER = """/*
  ============================================================================
  DONNÉES D'ENTRAÎNEMENT ET DE BIEN-ÊTRE — data.js
  ============================================================================
  ⚠️ FICHIER GÉNÉRÉ AUTOMATIQUEMENT — NE PAS ÉDITER DIRECTEMENT.
  La source de vérité est data_store.json. Pour mettre à jour les données :
    1) édite data_store.json (manuellement ou via scripts/sync_garmin.py)
    2) relance scripts/build_data_js.py pour régénérer ce fichier
  Le workflow GitHub Actions (.github/workflows/garmin-sync.yml) fait ces
  deux étapes automatiquement chaque jour.
  ============================================================================
*/

"""

def main():
    with open(STORE_PATH, "r", encoding="utf-8") as f:
        store = json.load(f)

    body = "const trainingData = " + json.dumps(store, ensure_ascii=False, indent=2) + ";\n"

    with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
        f.write(HEADER + body)

    print(f"data.js régénéré ({OUTPUT_PATH.stat().st_size} octets) à partir de data_store.json")

if __name__ == "__main__":
    main()
