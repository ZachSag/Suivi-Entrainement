// Données du plan d'entraînement IRONMAN 70.3 Mont-Tremblant — généré par Claude Coach
// Ne pas éditer data.js pour ce contenu : ce fichier est séparé et indépendant du pipeline Strava/Garmin.
const trainingPlanData = {
  "version": "1.0",
  "meta": {
    "id": "ironman-703-mont-tremblant-2027-06-20",
    "athlete": "Zachary Desbiens",
    "event": "IRONMAN 70.3 Mont-Tremblant",
    "eventDate": "2027-06-20",
    "planStartDate": "2026-08-03",
    "planEndDate": "2027-06-20",
    "createdAt": "2026-08-04T00:00:00Z",
    "updatedAt": "2026-08-04T00:00:00Z",
    "totalWeeks": 46,
    "generatedBy": "Claude Coach"
  },
  "preferences": {
    "swim": "meters",
    "bike": "kilometers",
    "run": "kilometers",
    "firstDayOfWeek": "monday"
  },
  "assessment": {
    "foundation": {
      "raceHistory": [
        "Ultra-distance 51 km complété le 18 juillet 2026 (5h50, D+464m, FC moy. 153)",
        "Demi-marathon (21,1-21,4 km) couvert au moins 5 fois en 2025 (mars, mai x2, juillet)",
        "3+ années de course à pied régulière (données depuis mars 2023, 355 activités)",
        "Ski de fond régulier en hiver (base aérobie croisée)"
      ],
      "peakTrainingLoad": 9,
      "foundationLevel": "intermediate",
      "yearsInSport": 3
    },
    "currentForm": {
      "weeklyVolume": {
        "total": 6.5,
        "swim": 0.5,
        "bike": 2.0,
        "run": 2.5
      },
      "longestSessions": {
        "swim": 0.5,
        "bike": 60,
        "run": 51
      },
      "consistency": 12,
      "timeSincePeakFitness": "Pic récent: ultra de 51km le 18 juillet 2026 (2,5 semaines avant le début du plan)",
      "reasonForTimeOff": "Aucun arrêt - transition d'un bloc musculation/hiver vers un bloc course/vélo au printemps-été 2026"
    },
    "strengths": [
      {
        "sport": "run",
        "evidence": "Base aérobie éprouvée jusqu'à distance ultra (51km); demi-marathon répété 5x en 2025; FC repos en baisse constante (-10,8 bpm depuis 2022) confirmant une progression aérobie long terme"
      },
      {
        "sport": "strength",
        "evidence": "Musculation quasi ininterrompue 2-4x/semaine depuis janvier 2026 - excellente base de robustesse et prévention de blessures"
      }
    ],
    "limiters": [
      {
        "sport": "swim",
        "evidence": "Une seule séance de natation enregistrée dans tout l'historique (28min, 28 juillet 2026) - confirmé par l'athlète: quasi aucune expérience de nage. Limiteur principal pour le 70.3 (1,9km à nager)"
      },
      {
        "sport": "bike",
        "evidence": "Volume récréatif présent (sorties 20-60km) mais aucune structure par zones ni donnée de puissance - à structurer dès la base"
      }
    ],
    "constraints": [
      "Stage coop à temps plein automne 2026 (~semaines 5 à 20 du plan, sept-déc) - volume plafonné et séances de semaine simplifiées durant cette période",
      "Accès piscine et vélo (route/home-trainer) disponibles sans contrainte majeure selon l'athlète",
      "Aucune blessure actuelle rapportée",
      "Natation en piscine seulement jusqu'au dégel (eau libre non praticable au Québec avant fin mai / début juin)"
    ]
  },
  "zones": {
    "run": {
      "hr": {
        "lthr": 182,
        "lthrSource": "Mesuré par Garmin (lactate_threshold_hr), moyenne des 5 dernières lectures juin-juillet 2026: 182, 183, 183, 180, 182 bpm. Remplace l'estimation initiale de 170 bpm par une valeur réellement mesurée par la montre.",
        "zones": [
          {
            "zone": 1,
            "name": "Récupération",
            "percentLow": 0,
            "percentHigh": 81,
            "hrLow": 105,
            "hrHigh": 147
          },
          {
            "zone": 2,
            "name": "Aérobie",
            "percentLow": 81,
            "percentHigh": 89,
            "hrLow": 147,
            "hrHigh": 162
          },
          {
            "zone": 3,
            "name": "Tempo",
            "percentLow": 90,
            "percentHigh": 93,
            "hrLow": 164,
            "hrHigh": 169
          },
          {
            "zone": 4,
            "name": "Sous-seuil",
            "percentLow": 94,
            "percentHigh": 99,
            "hrLow": 171,
            "hrHigh": 180
          },
          {
            "zone": 5,
            "name": "Seuil",
            "percentLow": 100,
            "percentHigh": 102,
            "hrLow": 182,
            "hrHigh": 186
          },
          {
            "zone": 6,
            "name": "VO2max",
            "percentLow": 103,
            "percentHigh": 106,
            "hrLow": 187,
            "hrHigh": 193
          },
          {
            "zone": 7,
            "name": "Anaérobie",
            "percentLow": 106,
            "percentHigh": 999,
            "hrLow": 193,
            "hrHigh": 210
          }
        ]
      },
      "pace": {
        "thresholdPace": "4:45/km",
        "thresholdPaceSeconds": 285,
        "zones": [
          {
            "zone": "E",
            "name": "Facile",
            "pace": "5:45-6:15/km",
            "paceSeconds": 360
          },
          {
            "zone": "M",
            "name": "Marathon/70.3",
            "pace": "5:15-5:30/km",
            "paceSeconds": 320
          },
          {
            "zone": "T",
            "name": "Seuil (Tempo)",
            "pace": "4:45-4:55/km",
            "paceSeconds": 290
          },
          {
            "zone": "I",
            "name": "Intervalle (VO2max)",
            "pace": "4:25-4:35/km",
            "paceSeconds": 270
          },
          {
            "zone": "R",
            "name": "Répétition",
            "pace": "4:10-4:20/km",
            "paceSeconds": 255
          }
        ]
      }
    },
    "bike": {
      "hr": {
        "lthr": 158,
        "zones": [
          {
            "zone": 1,
            "name": "Récupération",
            "percentLow": 0,
            "percentHigh": 81,
            "hrLow": 95,
            "hrHigh": 128
          },
          {
            "zone": 2,
            "name": "Aérobie",
            "percentLow": 81,
            "percentHigh": 89,
            "hrLow": 129,
            "hrHigh": 140
          },
          {
            "zone": 3,
            "name": "Tempo",
            "percentLow": 90,
            "percentHigh": 93,
            "hrLow": 142,
            "hrHigh": 147
          },
          {
            "zone": 4,
            "name": "Sous-seuil",
            "percentLow": 94,
            "percentHigh": 99,
            "hrLow": 149,
            "hrHigh": 156
          },
          {
            "zone": 5,
            "name": "Seuil",
            "percentLow": 100,
            "percentHigh": 102,
            "hrLow": 158,
            "hrHigh": 161
          },
          {
            "zone": 6,
            "name": "VO2max",
            "percentLow": 103,
            "percentHigh": 106,
            "hrLow": 163,
            "hrHigh": 167
          },
          {
            "zone": 7,
            "name": "Anaérobie",
            "percentLow": 106,
            "percentHigh": 999,
            "hrLow": 167,
            "hrHigh": 195
          }
        ]
      }
    },
    "swim": {
      "css": "à déterminer (test 400m/200m, semaine 2)",
      "cssSeconds": 150,
      "zones": [
        {
          "zone": 1,
          "name": "Récupération",
          "paceOffset": 18,
          "pace": "CSS + 15-20s/100m"
        },
        {
          "zone": 2,
          "name": "Aérobie",
          "paceOffset": 10,
          "pace": "CSS + 8-12s/100m"
        },
        {
          "zone": 3,
          "name": "Tempo",
          "paceOffset": 4,
          "pace": "CSS + 3-6s/100m"
        },
        {
          "zone": 4,
          "name": "Seuil",
          "paceOffset": 0,
          "pace": "Allure CSS"
        },
        {
          "zone": 5,
          "name": "VO2max",
          "paceOffset": -4,
          "pace": "CSS - 3-5s/100m"
        }
      ]
    },
    "maxHR": null,
    "restingHR": 50,
    "weight": null
  },
  "phases": [
    {
      "name": "Base",
      "startWeek": 1,
      "endWeek": 20,
      "focus": "Reconstruction aérobie post-ultra, développement technique en natation (limiteur principal), structuration du vélo par zones, maintien de la course. Recouvre le stage coop (semaines ~5-20).",
      "weeklyHoursRange": {
        "low": 4.0,
        "high": 8.5
      },
      "keyWorkouts": [
        "Tests de terrain (course/vélo/natation, semaines 1-2)",
        "Natation technique 1-2x/semaine",
        "Sortie longue vélo (samedi)",
        "Sortie longue course (dimanche)",
        "Musculation fondation"
      ],
      "physiologicalGoals": [
        "Rétablir l'équilibre aérobie après l'ultra du 18 juillet",
        "Construire la technique de nage à partir d'une base quasi nulle",
        "Développer la capillarisation et la densité mitochondriale (zone 2)",
        "Maintenir la robustesse musculo-squelettique via la musculation"
      ]
    },
    {
      "name": "Build",
      "startWeek": 21,
      "endWeek": 36,
      "focus": "Introduction de l'intensité (seuil, sweet spot vélo, tempo course), volume de pointe, brick une semaine sur deux, natation au seuil.",
      "weeklyHoursRange": {
        "low": 7.0,
        "high": 11.0
      },
      "keyWorkouts": [
        "Vélo sweet spot (mardi)",
        "Course tempo (mercredi)",
        "Natation seuil (jeudi)",
        "Brick vélo-course (samedi, semaines alternées)",
        "Sortie longue course (dimanche)"
      ],
      "physiologicalGoals": [
        "Élever le seuil lactique dans les 3 disciplines",
        "Développer la tolérance à l'effort prolongé à allure course",
        "Habituer le corps à la transition vélo-course"
      ]
    },
    {
      "name": "Peak",
      "startWeek": 37,
      "endWeek": 43,
      "focus": "Spécificité course: allure et puissance cible du 70.3, brick chaque semaine, natation en eau libre dès que possible (dégel), réduction de la musculation au maintien.",
      "weeklyHoursRange": {
        "low": 8.5,
        "high": 11.5
      },
      "keyWorkouts": [
        "Vélo à allure course 70.3",
        "Brick hebdomadaire",
        "Natation eau libre / sighting",
        "Sortie longue avec segment à allure course"
      ],
      "physiologicalGoals": [
        "Affiner l'économie de mouvement à l'allure course",
        "Consolider la stratégie de pacing et de nutrition de course",
        "Maximiser la forme (TSB) en vue de la course"
      ]
    },
    {
      "name": "Taper",
      "startWeek": 44,
      "endWeek": 46,
      "focus": "Réduction progressive du volume (40-60%), maintien de courtes touches d'intensité à allure course, repos, nutrition et préparation mentale. Course le dimanche 20 juin 2027.",
      "weeklyHoursRange": {
        "low": 3.5,
        "high": 6.5
      },
      "keyWorkouts": [
        "Répétitions courtes à allure course",
        "Activation légère la semaine de course",
        "IRONMAN 70.3 Mont-Tremblant (dimanche, semaine 46)"
      ],
      "physiologicalGoals": [
        "Dissiper la fatigue accumulée (ATL) tout en préservant la fitness (CTL)",
        "Atteindre un TSB cible de +10 à +20 le jour de la course",
        "Optimiser le sommeil et la récupération finale"
      ]
    }
  ],
  "weeks": [
    {
      "weekNumber": 1,
      "startDate": "2026-08-03",
      "endDate": "2026-08-09",
      "phase": "Base",
      "focus": "Retour progressif post-ultra + tests de terrain",
      "targetHours": 4.5,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2026-08-03",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w1-lun-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2026-08-04",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w1-mar-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - familiarisation & technique",
              "description": "Séance d'introduction: familiarisation avec l'eau, respiration bilatérale, battements de jambes. Beaucoup de pauses, aucune pression de temps.",
              "completed": false,
              "durationMinutes": 54,
              "distanceMeters": 2150,
              "primaryZone": "Technique",
              "humanReadable": "Échauffement 200-300m facile\nDrills 6-8x50m\nNage continue zone 2\nRetour au calme 100-200m"
            }
          ]
        },
        {
          "date": "2026-08-05",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w1-mer-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance facile",
              "description": "Sortie facile en zone 2, cadence fluide 85-95rpm. Home-trainer ou route selon météo.",
              "completed": false,
              "durationMinutes": 26,
              "distanceMeters": 11000,
              "primaryZone": "Zone 2",
              "notes": "Distance estimée à ~25km/h (aucune donnée de puissance disponible)"
            }
          ]
        },
        {
          "date": "2026-08-06",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w1-jeu-run",
              "sport": "run",
              "type": "recovery",
              "name": "Course - retour très facile",
              "description": "Footing très facile en zone 1-2. L'objectif est de relancer la circulation après l'ultra du 18 juillet, pas de générer du stimulus.",
              "completed": false,
              "durationMinutes": 30,
              "distanceMeters": 5000,
              "primaryZone": "Zone 1-2"
            },
            {
              "id": "w1-jeu-force",
              "sport": "strength",
              "type": "foundation",
              "name": "Musculation - fondation",
              "description": "Circuit fondation: squats gobelet, tirage/lat pulldown, fentes, gainage. 2-3 séries x 12-15 reps, poids modéré.",
              "completed": false,
              "durationMinutes": 54,
              "humanReadable": "Échauffement 5min\nCircuit 1 (3 tours): squats gobelet x10, tirage horizontal x10, fentes x8/jambe\nGainage: planche 3x45s, planche latérale 2x30s/côté\nÉtirements"
            }
          ]
        },
        {
          "date": "2026-08-07",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w1-ven-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2026-08-08",
          "dayOfWeek": "Samedi",
          "workouts": [
            {
              "id": "w1-sam-bikelong",
              "sport": "bike",
              "type": "long",
              "name": "Vélo - sortie longue (endurance)",
              "description": "Sortie longue en zone 2 stable. Pratiquer l'hydratation/nutrition en continu.",
              "completed": false,
              "durationMinutes": 49,
              "distanceMeters": 20500,
              "primaryZone": "Zone 2"
            }
          ]
        },
        {
          "date": "2026-08-09",
          "dayOfWeek": "Dimanche",
          "workouts": [
            {
              "id": "w1-dim-runlong",
              "sport": "run",
              "type": "long",
              "name": "Course - sortie longue",
              "description": "Sortie longue très facile, aucune pression d'allure - priorité à la récupération complète post-ultra.",
              "completed": false,
              "durationMinutes": 56,
              "distanceMeters": 9500,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 4.48,
        "bySport": {
          "swim": {
            "sessions": 1,
            "hours": 0.9
          },
          "bike": {
            "sessions": 2,
            "hours": 1.25,
            "km": 31.5
          },
          "run": {
            "sessions": 2,
            "hours": 1.43,
            "km": 14.5
          },
          "strength": {
            "sessions": 1,
            "hours": 0.9
          }
        }
      }
    },
    {
      "weekNumber": 2,
      "startDate": "2026-08-10",
      "endDate": "2026-08-16",
      "phase": "Base",
      "focus": "Retour progressif post-ultra + tests de terrain",
      "targetHours": 5.0,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2026-08-10",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w2-lun-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2026-08-11",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w2-mar-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique + test CSS",
              "description": "Test de terrain CSS: 400m échauffement + 400m chrono + 10min récup active + 200m chrono. CSS = (400m-200m)/(t400-t200). Sert à calibrer les zones de nage.",
              "completed": false,
              "durationMinutes": 60,
              "distanceMeters": 2400,
              "primaryZone": "Technique",
              "humanReadable": "Échauffement 200-300m facile\nDrills 6-8x50m\nNage continue zone 2\nRetour au calme 100-200m"
            }
          ]
        },
        {
          "date": "2026-08-12",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w2-mer-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - test FTP/FC 20min",
              "description": "Test de terrain: 20min échauffement avec 3x1min cadence élevée, puis 20min à l'effort maximal soutenable. FC moyenne de ce bloc ≈ seuil vélo (LTHR vélo).",
              "completed": false,
              "durationMinutes": 29,
              "distanceMeters": 12300,
              "primaryZone": "Test",
              "notes": "Distance estimée à ~25km/h (aucune donnée de puissance disponible)"
            }
          ]
        },
        {
          "date": "2026-08-13",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w2-jeu-run",
              "sport": "run",
              "type": "endurance",
              "name": "Course - facile",
              "description": "Footing en zone 2, allure conversationnelle.",
              "completed": false,
              "durationMinutes": 34,
              "distanceMeters": 5600,
              "primaryZone": "Zone 2"
            },
            {
              "id": "w2-jeu-force",
              "sport": "strength",
              "type": "foundation",
              "name": "Musculation - fondation",
              "description": "Circuit fondation: squats gobelet, tirage/lat pulldown, fentes, gainage. 2-3 séries x 12-15 reps, poids modéré.",
              "completed": false,
              "durationMinutes": 60,
              "humanReadable": "Échauffement 5min\nCircuit 1 (3 tours): squats gobelet x10, tirage horizontal x10, fentes x8/jambe\nGainage: planche 3x45s, planche latérale 2x30s/côté\nÉtirements"
            }
          ]
        },
        {
          "date": "2026-08-14",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w2-ven-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2026-08-15",
          "dayOfWeek": "Samedi",
          "workouts": [
            {
              "id": "w2-sam-bikelong",
              "sport": "bike",
              "type": "long",
              "name": "Vélo - sortie longue (endurance)",
              "description": "Sortie longue en zone 2 stable. Pratiquer l'hydratation/nutrition en continu.",
              "completed": false,
              "durationMinutes": 55,
              "distanceMeters": 22800,
              "primaryZone": "Zone 2"
            }
          ]
        },
        {
          "date": "2026-08-16",
          "dayOfWeek": "Dimanche",
          "workouts": [
            {
              "id": "w2-dim-runlong",
              "sport": "run",
              "type": "long",
              "name": "Course - sortie longue",
              "description": "Sortie longue très facile, aucune pression d'allure - priorité à la récupération complète post-ultra.",
              "completed": false,
              "durationMinutes": 62,
              "distanceMeters": 10500,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 5.0,
        "bySport": {
          "swim": {
            "sessions": 1,
            "hours": 1.0
          },
          "bike": {
            "sessions": 2,
            "hours": 1.4,
            "km": 35.1
          },
          "run": {
            "sessions": 2,
            "hours": 1.6,
            "km": 16.1
          },
          "strength": {
            "sessions": 1,
            "hours": 1.0
          }
        }
      }
    },
    {
      "weekNumber": 3,
      "startDate": "2026-08-17",
      "endDate": "2026-08-23",
      "phase": "Base",
      "focus": "Retour progressif post-ultra + tests de terrain",
      "targetHours": 5.5,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2026-08-17",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w3-lun-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2026-08-18",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w3-mar-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique + aérobie",
              "description": "6-8x50m technique (rattrapé, doigt qui traîne) puis nage continue en zone 2.",
              "completed": false,
              "durationMinutes": 66,
              "distanceMeters": 2650,
              "primaryZone": "Zone 1-2",
              "humanReadable": "Échauffement 200-300m facile\nDrills 6-8x50m\nNage continue zone 2\nRetour au calme 100-200m"
            }
          ]
        },
        {
          "date": "2026-08-19",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w3-mer-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance facile",
              "description": "Sortie facile en zone 2, cadence fluide 85-95rpm. Home-trainer ou route selon météo.",
              "completed": false,
              "durationMinutes": 32,
              "distanceMeters": 13500,
              "primaryZone": "Zone 2",
              "notes": "Distance estimée à ~25km/h (aucune donnée de puissance disponible)"
            }
          ]
        },
        {
          "date": "2026-08-20",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w3-jeu-run",
              "sport": "run",
              "type": "endurance",
              "name": "Course - facile",
              "description": "Footing en zone 2, allure conversationnelle.",
              "completed": false,
              "durationMinutes": 37,
              "distanceMeters": 6200,
              "primaryZone": "Zone 2"
            },
            {
              "id": "w3-jeu-force",
              "sport": "strength",
              "type": "foundation",
              "name": "Musculation - fondation",
              "description": "Circuit fondation: squats gobelet, tirage/lat pulldown, fentes, gainage. 2-3 séries x 12-15 reps, poids modéré.",
              "completed": false,
              "durationMinutes": 66,
              "humanReadable": "Échauffement 5min\nCircuit 1 (3 tours): squats gobelet x10, tirage horizontal x10, fentes x8/jambe\nGainage: planche 3x45s, planche latérale 2x30s/côté\nÉtirements"
            }
          ]
        },
        {
          "date": "2026-08-21",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w3-ven-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2026-08-22",
          "dayOfWeek": "Samedi",
          "workouts": [
            {
              "id": "w3-sam-bikelong",
              "sport": "bike",
              "type": "long",
              "name": "Vélo - sortie longue (endurance)",
              "description": "Sortie longue en zone 2 stable. Pratiquer l'hydratation/nutrition en continu.",
              "completed": false,
              "durationMinutes": 60,
              "distanceMeters": 25000,
              "primaryZone": "Zone 2"
            }
          ]
        },
        {
          "date": "2026-08-23",
          "dayOfWeek": "Dimanche",
          "workouts": [
            {
              "id": "w3-dim-runlong",
              "sport": "run",
              "type": "long",
              "name": "Course - sortie longue",
              "description": "Sortie longue très facile, aucune pression d'allure - priorité à la récupération complète post-ultra.",
              "completed": false,
              "durationMinutes": 69,
              "distanceMeters": 11600,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 5.5,
        "bySport": {
          "swim": {
            "sessions": 1,
            "hours": 1.1
          },
          "bike": {
            "sessions": 2,
            "hours": 1.53,
            "km": 38.5
          },
          "run": {
            "sessions": 2,
            "hours": 1.77,
            "km": 17.8
          },
          "strength": {
            "sessions": 1,
            "hours": 1.1
          }
        }
      }
    },
    {
      "weekNumber": 4,
      "startDate": "2026-08-24",
      "endDate": "2026-08-30",
      "phase": "Base",
      "focus": "Retour progressif post-ultra + tests de terrain [semaine de décharge]",
      "targetHours": 4.0,
      "isRecoveryWeek": true,
      "days": [
        {
          "date": "2026-08-24",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w4-lun-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2026-08-25",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w4-mar-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique + aérobie",
              "description": "6-8x50m technique (rattrapé, doigt qui traîne) puis nage continue en zone 2.",
              "completed": false,
              "durationMinutes": 48,
              "distanceMeters": 1900,
              "primaryZone": "Zone 1-2",
              "humanReadable": "Échauffement 200-300m facile\nDrills 6-8x50m\nNage continue zone 2\nRetour au calme 100-200m"
            }
          ]
        },
        {
          "date": "2026-08-26",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w4-mer-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance facile",
              "description": "Sortie facile en zone 2, cadence fluide 85-95rpm. Home-trainer ou route selon météo.",
              "completed": false,
              "durationMinutes": 24,
              "distanceMeters": 9800,
              "primaryZone": "Zone 2",
              "notes": "Distance estimée à ~25km/h (aucune donnée de puissance disponible)"
            }
          ]
        },
        {
          "date": "2026-08-27",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w4-jeu-run",
              "sport": "run",
              "type": "endurance",
              "name": "Course - facile",
              "description": "Footing en zone 2, allure conversationnelle.",
              "completed": false,
              "durationMinutes": 27,
              "distanceMeters": 4500,
              "primaryZone": "Zone 2"
            }
          ]
        },
        {
          "date": "2026-08-28",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w4-ven-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2026-08-29",
          "dayOfWeek": "Samedi",
          "workouts": [
            {
              "id": "w4-sam-bikelong",
              "sport": "bike",
              "type": "long",
              "name": "Vélo - sortie longue (endurance)",
              "description": "Sortie longue en zone 2 stable. Pratiquer l'hydratation/nutrition en continu.",
              "completed": false,
              "durationMinutes": 44,
              "distanceMeters": 18200,
              "primaryZone": "Zone 2"
            }
          ]
        },
        {
          "date": "2026-08-30",
          "dayOfWeek": "Dimanche",
          "workouts": [
            {
              "id": "w4-dim-runlong",
              "sport": "run",
              "type": "long",
              "name": "Course - sortie longue",
              "description": "Sortie longue en zone 2, dernier tiers légèrement plus soutenu si les sensations sont bonnes.",
              "completed": false,
              "durationMinutes": 50,
              "distanceMeters": 8400,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 3.22,
        "bySport": {
          "swim": {
            "sessions": 1,
            "hours": 0.8
          },
          "bike": {
            "sessions": 2,
            "hours": 1.13,
            "km": 28.0
          },
          "run": {
            "sessions": 2,
            "hours": 1.28,
            "km": 12.9
          }
        }
      }
    },
    {
      "weekNumber": 5,
      "startDate": "2026-08-31",
      "endDate": "2026-09-06",
      "phase": "Base",
      "focus": "Construction aérobie pendant le stage coop",
      "targetHours": 6.0,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2026-08-31",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w5-lun-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2026-09-01",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w5-mar-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique + aérobie",
              "description": "6-8x50m technique (rattrapé, doigt qui traîne) puis nage continue en zone 2.",
              "completed": false,
              "durationMinutes": 72,
              "distanceMeters": 2900,
              "primaryZone": "Zone 1-2",
              "humanReadable": "Échauffement 200-300m facile\nDrills 6-8x50m\nNage continue zone 2\nRetour au calme 100-200m"
            }
          ]
        },
        {
          "date": "2026-09-02",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w5-mer-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance facile",
              "description": "Sortie facile en zone 2, cadence fluide 85-95rpm. Home-trainer ou route selon météo.",
              "completed": false,
              "durationMinutes": 35,
              "distanceMeters": 14700,
              "primaryZone": "Zone 2",
              "notes": "Distance estimée à ~25km/h (aucune donnée de puissance disponible)"
            }
          ]
        },
        {
          "date": "2026-09-03",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w5-jeu-run",
              "sport": "run",
              "type": "endurance",
              "name": "Course - facile",
              "description": "Footing en zone 2, allure conversationnelle.",
              "completed": false,
              "durationMinutes": 40,
              "distanceMeters": 6700,
              "primaryZone": "Zone 2"
            },
            {
              "id": "w5-jeu-force",
              "sport": "strength",
              "type": "foundation",
              "name": "Musculation - fondation",
              "description": "Circuit fondation: squats gobelet, tirage/lat pulldown, fentes, gainage. 2-3 séries x 12-15 reps, poids modéré.",
              "completed": false,
              "durationMinutes": 72,
              "humanReadable": "Échauffement 5min\nCircuit 1 (3 tours): squats gobelet x10, tirage horizontal x10, fentes x8/jambe\nGainage: planche 3x45s, planche latérale 2x30s/côté\nÉtirements"
            }
          ]
        },
        {
          "date": "2026-09-04",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w5-ven-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2026-09-05",
          "dayOfWeek": "Samedi",
          "workouts": [
            {
              "id": "w5-sam-bikelong",
              "sport": "bike",
              "type": "long",
              "name": "Vélo - sortie longue (endurance)",
              "description": "Sortie longue en zone 2 stable. Pratiquer l'hydratation/nutrition en continu.",
              "completed": false,
              "durationMinutes": 66,
              "distanceMeters": 27300,
              "primaryZone": "Zone 2"
            }
          ]
        },
        {
          "date": "2026-09-06",
          "dayOfWeek": "Dimanche",
          "workouts": [
            {
              "id": "w5-dim-runlong",
              "sport": "run",
              "type": "long",
              "name": "Course - sortie longue",
              "description": "Sortie longue en zone 2, dernier tiers légèrement plus soutenu si les sensations sont bonnes.",
              "completed": false,
              "durationMinutes": 75,
              "distanceMeters": 13000,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 6.0,
        "bySport": {
          "swim": {
            "sessions": 1,
            "hours": 1.2
          },
          "bike": {
            "sessions": 2,
            "hours": 1.68,
            "km": 42.0
          },
          "run": {
            "sessions": 2,
            "hours": 1.92,
            "km": 19.7
          },
          "strength": {
            "sessions": 1,
            "hours": 1.2
          }
        }
      }
    },
    {
      "weekNumber": 6,
      "startDate": "2026-09-07",
      "endDate": "2026-09-13",
      "phase": "Base",
      "focus": "Construction aérobie pendant le stage coop",
      "targetHours": 6.5,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2026-09-07",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w6-lun-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2026-09-08",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w6-mar-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique + aérobie",
              "description": "6-8x50m technique (rattrapé, doigt qui traîne) puis nage continue en zone 2.",
              "completed": false,
              "durationMinutes": 78,
              "distanceMeters": 3100,
              "primaryZone": "Zone 1-2",
              "humanReadable": "Échauffement 200-300m facile\nDrills 6-8x50m\nNage continue zone 2\nRetour au calme 100-200m"
            }
          ]
        },
        {
          "date": "2026-09-09",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w6-mer-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance facile",
              "description": "Sortie facile en zone 2, cadence fluide 85-95rpm. Home-trainer ou route selon météo.",
              "completed": false,
              "durationMinutes": 38,
              "distanceMeters": 15900,
              "primaryZone": "Zone 2",
              "notes": "Distance estimée à ~25km/h (aucune donnée de puissance disponible)"
            }
          ]
        },
        {
          "date": "2026-09-10",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w6-jeu-run",
              "sport": "run",
              "type": "endurance",
              "name": "Course - facile",
              "description": "Footing en zone 2, allure conversationnelle.",
              "completed": false,
              "durationMinutes": 44,
              "distanceMeters": 7300,
              "primaryZone": "Zone 2"
            },
            {
              "id": "w6-jeu-force",
              "sport": "strength",
              "type": "foundation",
              "name": "Musculation - fondation",
              "description": "Circuit fondation: squats gobelet, tirage/lat pulldown, fentes, gainage. 2-3 séries x 12-15 reps, poids modéré.",
              "completed": false,
              "durationMinutes": 78,
              "humanReadable": "Échauffement 5min\nCircuit 1 (3 tours): squats gobelet x10, tirage horizontal x10, fentes x8/jambe\nGainage: planche 3x45s, planche latérale 2x30s/côté\nÉtirements"
            }
          ]
        },
        {
          "date": "2026-09-11",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w6-ven-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2026-09-12",
          "dayOfWeek": "Samedi",
          "workouts": [
            {
              "id": "w6-sam-bikelong",
              "sport": "bike",
              "type": "long",
              "name": "Vélo - sortie longue (endurance)",
              "description": "Sortie longue en zone 2 stable. Pratiquer l'hydratation/nutrition en continu.",
              "completed": false,
              "durationMinutes": 71,
              "distanceMeters": 29600,
              "primaryZone": "Zone 2"
            }
          ]
        },
        {
          "date": "2026-09-13",
          "dayOfWeek": "Dimanche",
          "workouts": [
            {
              "id": "w6-dim-runlong",
              "sport": "run",
              "type": "long",
              "name": "Course - sortie longue",
              "description": "Sortie longue en zone 2, dernier tiers légèrement plus soutenu si les sensations sont bonnes.",
              "completed": false,
              "durationMinutes": 81,
              "distanceMeters": 14100,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 6.5,
        "bySport": {
          "swim": {
            "sessions": 1,
            "hours": 1.3
          },
          "bike": {
            "sessions": 2,
            "hours": 1.82,
            "km": 45.5
          },
          "run": {
            "sessions": 2,
            "hours": 2.08,
            "km": 21.4
          },
          "strength": {
            "sessions": 1,
            "hours": 1.3
          }
        }
      }
    },
    {
      "weekNumber": 7,
      "startDate": "2026-09-14",
      "endDate": "2026-09-20",
      "phase": "Base",
      "focus": "Construction aérobie pendant le stage coop",
      "targetHours": 7.0,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2026-09-14",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w7-lun-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2026-09-15",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w7-mar-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique + aérobie",
              "description": "6-8x50m technique (rattrapé, doigt qui traîne) puis nage continue en zone 2.",
              "completed": false,
              "durationMinutes": 84,
              "distanceMeters": 3350,
              "primaryZone": "Zone 1-2",
              "humanReadable": "Échauffement 200-300m facile\nDrills 6-8x50m\nNage continue zone 2\nRetour au calme 100-200m"
            }
          ]
        },
        {
          "date": "2026-09-16",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w7-mer-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance facile",
              "description": "Sortie facile en zone 2, cadence fluide 85-95rpm. Home-trainer ou route selon météo.",
              "completed": false,
              "durationMinutes": 41,
              "distanceMeters": 17200,
              "primaryZone": "Zone 2",
              "notes": "Distance estimée à ~25km/h (aucune donnée de puissance disponible)"
            }
          ]
        },
        {
          "date": "2026-09-17",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w7-jeu-run",
              "sport": "run",
              "type": "endurance",
              "name": "Course - facile",
              "description": "Footing en zone 2, allure conversationnelle.",
              "completed": false,
              "durationMinutes": 47,
              "distanceMeters": 7800,
              "primaryZone": "Zone 2"
            },
            {
              "id": "w7-jeu-force",
              "sport": "strength",
              "type": "foundation",
              "name": "Musculation - fondation",
              "description": "Circuit fondation: squats gobelet, tirage/lat pulldown, fentes, gainage. 2-3 séries x 12-15 reps, poids modéré.",
              "completed": false,
              "durationMinutes": 84,
              "humanReadable": "Échauffement 5min\nCircuit 1 (3 tours): squats gobelet x10, tirage horizontal x10, fentes x8/jambe\nGainage: planche 3x45s, planche latérale 2x30s/côté\nÉtirements"
            }
          ]
        },
        {
          "date": "2026-09-18",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w7-ven-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2026-09-19",
          "dayOfWeek": "Samedi",
          "workouts": [
            {
              "id": "w7-sam-bikelong",
              "sport": "bike",
              "type": "long",
              "name": "Vélo - sortie longue (endurance)",
              "description": "Sortie longue en zone 2 stable. Pratiquer l'hydratation/nutrition en continu.",
              "completed": false,
              "durationMinutes": 76,
              "distanceMeters": 31900,
              "primaryZone": "Zone 2"
            }
          ]
        },
        {
          "date": "2026-09-20",
          "dayOfWeek": "Dimanche",
          "workouts": [
            {
              "id": "w7-dim-runlong",
              "sport": "run",
              "type": "long",
              "name": "Course - sortie longue",
              "description": "Sortie longue en zone 2, dernier tiers légèrement plus soutenu si les sensations sont bonnes.",
              "completed": false,
              "durationMinutes": 87,
              "distanceMeters": 15200,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 6.98,
        "bySport": {
          "swim": {
            "sessions": 1,
            "hours": 1.4
          },
          "bike": {
            "sessions": 2,
            "hours": 1.95,
            "km": 49.1
          },
          "run": {
            "sessions": 2,
            "hours": 2.23,
            "km": 23.0
          },
          "strength": {
            "sessions": 1,
            "hours": 1.4
          }
        }
      }
    },
    {
      "weekNumber": 8,
      "startDate": "2026-09-21",
      "endDate": "2026-09-27",
      "phase": "Base",
      "focus": "Construction aérobie pendant le stage coop [semaine de décharge]",
      "targetHours": 5.0,
      "isRecoveryWeek": true,
      "days": [
        {
          "date": "2026-09-21",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w8-lun-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2026-09-22",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w8-mar-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique + aérobie",
              "description": "6-8x50m technique (rattrapé, doigt qui traîne) puis nage continue en zone 2.",
              "completed": false,
              "durationMinutes": 60,
              "distanceMeters": 2400,
              "primaryZone": "Zone 1-2",
              "humanReadable": "Échauffement 200-300m facile\nDrills 6-8x50m\nNage continue zone 2\nRetour au calme 100-200m"
            }
          ]
        },
        {
          "date": "2026-09-23",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w8-mer-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance facile",
              "description": "Sortie facile en zone 2, cadence fluide 85-95rpm. Home-trainer ou route selon météo.",
              "completed": false,
              "durationMinutes": 29,
              "distanceMeters": 12300,
              "primaryZone": "Zone 2",
              "notes": "Distance estimée à ~25km/h (aucune donnée de puissance disponible)"
            }
          ]
        },
        {
          "date": "2026-09-24",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w8-jeu-run",
              "sport": "run",
              "type": "endurance",
              "name": "Course - facile",
              "description": "Footing en zone 2, allure conversationnelle.",
              "completed": false,
              "durationMinutes": 34,
              "distanceMeters": 5600,
              "primaryZone": "Zone 2"
            }
          ]
        },
        {
          "date": "2026-09-25",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w8-ven-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2026-09-26",
          "dayOfWeek": "Samedi",
          "workouts": [
            {
              "id": "w8-sam-bikelong",
              "sport": "bike",
              "type": "long",
              "name": "Vélo - sortie longue (endurance)",
              "description": "Sortie longue en zone 2 stable. Pratiquer l'hydratation/nutrition en continu.",
              "completed": false,
              "durationMinutes": 55,
              "distanceMeters": 22800,
              "primaryZone": "Zone 2"
            }
          ]
        },
        {
          "date": "2026-09-27",
          "dayOfWeek": "Dimanche",
          "workouts": [
            {
              "id": "w8-dim-runlong",
              "sport": "run",
              "type": "long",
              "name": "Course - sortie longue",
              "description": "Sortie longue en zone 2, dernier tiers légèrement plus soutenu si les sensations sont bonnes.",
              "completed": false,
              "durationMinutes": 62,
              "distanceMeters": 10900,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 4.0,
        "bySport": {
          "swim": {
            "sessions": 1,
            "hours": 1.0
          },
          "bike": {
            "sessions": 2,
            "hours": 1.4,
            "km": 35.1
          },
          "run": {
            "sessions": 2,
            "hours": 1.6,
            "km": 16.5
          }
        }
      }
    },
    {
      "weekNumber": 9,
      "startDate": "2026-09-28",
      "endDate": "2026-10-04",
      "phase": "Base",
      "focus": "Construction aérobie pendant le stage coop",
      "targetHours": 6.5,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2026-09-28",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w9-lun-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2026-09-29",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w9-mar-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique + aérobie",
              "description": "6-8x50m technique (rattrapé, doigt qui traîne) puis nage continue en zone 2.",
              "completed": false,
              "durationMinutes": 39,
              "distanceMeters": 1550,
              "primaryZone": "Zone 1-2",
              "humanReadable": "Échauffement 200-300m facile\nDrills 6-8x50m\nNage continue zone 2\nRetour au calme 100-200m"
            }
          ]
        },
        {
          "date": "2026-09-30",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w9-mer-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance facile",
              "description": "Sortie facile en zone 2, cadence fluide 85-95rpm. Home-trainer ou route selon météo.",
              "completed": false,
              "durationMinutes": 38,
              "distanceMeters": 15900,
              "primaryZone": "Zone 2",
              "notes": "Distance estimée à ~25km/h (aucune donnée de puissance disponible)"
            }
          ]
        },
        {
          "date": "2026-10-01",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w9-jeu-run",
              "sport": "run",
              "type": "endurance",
              "name": "Course - facile",
              "description": "Footing en zone 2, allure conversationnelle.",
              "completed": false,
              "durationMinutes": 44,
              "distanceMeters": 7300,
              "primaryZone": "Zone 2"
            },
            {
              "id": "w9-jeu-force",
              "sport": "strength",
              "type": "foundation",
              "name": "Musculation - fondation",
              "description": "Circuit fondation: squats gobelet, tirage/lat pulldown, fentes, gainage. 2-3 séries x 12-15 reps, poids modéré.",
              "completed": false,
              "durationMinutes": 78,
              "humanReadable": "Échauffement 5min\nCircuit 1 (3 tours): squats gobelet x10, tirage horizontal x10, fentes x8/jambe\nGainage: planche 3x45s, planche latérale 2x30s/côté\nÉtirements"
            }
          ]
        },
        {
          "date": "2026-10-02",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w9-ven-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique (2e séance)",
              "description": "Séance courte, focus technique pure: drills + nage aisée.",
              "completed": false,
              "durationMinutes": 39,
              "distanceMeters": 1550,
              "primaryZone": "Zone 1-2"
            }
          ]
        },
        {
          "date": "2026-10-03",
          "dayOfWeek": "Samedi",
          "workouts": [
            {
              "id": "w9-sam-bikelong",
              "sport": "bike",
              "type": "long",
              "name": "Vélo - sortie longue (endurance)",
              "description": "Sortie longue en zone 2 stable. Pratiquer l'hydratation/nutrition en continu.",
              "completed": false,
              "durationMinutes": 71,
              "distanceMeters": 29600,
              "primaryZone": "Zone 2"
            }
          ]
        },
        {
          "date": "2026-10-04",
          "dayOfWeek": "Dimanche",
          "workouts": [
            {
              "id": "w9-dim-runlong",
              "sport": "run",
              "type": "long",
              "name": "Course - sortie longue",
              "description": "Sortie longue en zone 2, dernier tiers légèrement plus soutenu si les sensations sont bonnes.",
              "completed": false,
              "durationMinutes": 81,
              "distanceMeters": 14100,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 6.5,
        "bySport": {
          "swim": {
            "sessions": 2,
            "hours": 1.3
          },
          "bike": {
            "sessions": 2,
            "hours": 1.82,
            "km": 45.5
          },
          "run": {
            "sessions": 2,
            "hours": 2.08,
            "km": 21.4
          },
          "strength": {
            "sessions": 1,
            "hours": 1.3
          }
        }
      }
    },
    {
      "weekNumber": 10,
      "startDate": "2026-10-05",
      "endDate": "2026-10-11",
      "phase": "Base",
      "focus": "Construction aérobie pendant le stage coop",
      "targetHours": 7.0,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2026-10-05",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w10-lun-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2026-10-06",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w10-mar-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique + aérobie",
              "description": "6-8x50m technique (rattrapé, doigt qui traîne) puis nage continue en zone 2.",
              "completed": false,
              "durationMinutes": 42,
              "distanceMeters": 1700,
              "primaryZone": "Zone 1-2",
              "humanReadable": "Échauffement 200-300m facile\nDrills 6-8x50m\nNage continue zone 2\nRetour au calme 100-200m"
            }
          ]
        },
        {
          "date": "2026-10-07",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w10-mer-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance facile",
              "description": "Sortie facile en zone 2, cadence fluide 85-95rpm. Home-trainer ou route selon météo.",
              "completed": false,
              "durationMinutes": 41,
              "distanceMeters": 17200,
              "primaryZone": "Zone 2",
              "notes": "Distance estimée à ~25km/h (aucune donnée de puissance disponible)"
            }
          ]
        },
        {
          "date": "2026-10-08",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w10-jeu-run",
              "sport": "run",
              "type": "endurance",
              "name": "Course - facile",
              "description": "Footing en zone 2, allure conversationnelle.",
              "completed": false,
              "durationMinutes": 47,
              "distanceMeters": 7800,
              "primaryZone": "Zone 2"
            },
            {
              "id": "w10-jeu-force",
              "sport": "strength",
              "type": "foundation",
              "name": "Musculation - fondation",
              "description": "Circuit fondation: squats gobelet, tirage/lat pulldown, fentes, gainage. 2-3 séries x 12-15 reps, poids modéré.",
              "completed": false,
              "durationMinutes": 84,
              "humanReadable": "Échauffement 5min\nCircuit 1 (3 tours): squats gobelet x10, tirage horizontal x10, fentes x8/jambe\nGainage: planche 3x45s, planche latérale 2x30s/côté\nÉtirements"
            }
          ]
        },
        {
          "date": "2026-10-09",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w10-ven-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique (2e séance)",
              "description": "Séance courte, focus technique pure: drills + nage aisée.",
              "completed": false,
              "durationMinutes": 42,
              "distanceMeters": 1700,
              "primaryZone": "Zone 1-2"
            }
          ]
        },
        {
          "date": "2026-10-10",
          "dayOfWeek": "Samedi",
          "workouts": [
            {
              "id": "w10-sam-bikelong",
              "sport": "bike",
              "type": "long",
              "name": "Vélo - sortie longue (endurance)",
              "description": "Sortie longue en zone 2 stable. Pratiquer l'hydratation/nutrition en continu.",
              "completed": false,
              "durationMinutes": 76,
              "distanceMeters": 31900,
              "primaryZone": "Zone 2"
            }
          ]
        },
        {
          "date": "2026-10-11",
          "dayOfWeek": "Dimanche",
          "workouts": [
            {
              "id": "w10-dim-runlong",
              "sport": "run",
              "type": "long",
              "name": "Course - sortie longue",
              "description": "Sortie longue en zone 2, dernier tiers légèrement plus soutenu si les sensations sont bonnes.",
              "completed": false,
              "durationMinutes": 87,
              "distanceMeters": 15200,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 6.98,
        "bySport": {
          "swim": {
            "sessions": 2,
            "hours": 1.4
          },
          "bike": {
            "sessions": 2,
            "hours": 1.95,
            "km": 49.1
          },
          "run": {
            "sessions": 2,
            "hours": 2.23,
            "km": 23.0
          },
          "strength": {
            "sessions": 1,
            "hours": 1.4
          }
        }
      }
    },
    {
      "weekNumber": 11,
      "startDate": "2026-10-12",
      "endDate": "2026-10-18",
      "phase": "Base",
      "focus": "Construction aérobie pendant le stage coop",
      "targetHours": 7.5,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2026-10-12",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w11-lun-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2026-10-13",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w11-mar-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique + aérobie",
              "description": "6-8x50m technique (rattrapé, doigt qui traîne) puis nage continue en zone 2.",
              "completed": false,
              "durationMinutes": 45,
              "distanceMeters": 1800,
              "primaryZone": "Zone 1-2",
              "humanReadable": "Échauffement 200-300m facile\nDrills 6-8x50m\nNage continue zone 2\nRetour au calme 100-200m"
            }
          ]
        },
        {
          "date": "2026-10-14",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w11-mer-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance facile",
              "description": "Sortie facile en zone 2, cadence fluide 85-95rpm. Home-trainer ou route selon météo.",
              "completed": false,
              "durationMinutes": 44,
              "distanceMeters": 18400,
              "primaryZone": "Zone 2",
              "notes": "Distance estimée à ~25km/h (aucune donnée de puissance disponible)"
            }
          ]
        },
        {
          "date": "2026-10-15",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w11-jeu-run",
              "sport": "run",
              "type": "endurance",
              "name": "Course - facile",
              "description": "Footing en zone 2, allure conversationnelle.",
              "completed": false,
              "durationMinutes": 50,
              "distanceMeters": 8400,
              "primaryZone": "Zone 2"
            },
            {
              "id": "w11-jeu-force",
              "sport": "strength",
              "type": "foundation",
              "name": "Musculation - fondation",
              "description": "Circuit fondation: squats gobelet, tirage/lat pulldown, fentes, gainage. 2-3 séries x 12-15 reps, poids modéré.",
              "completed": false,
              "durationMinutes": 90,
              "humanReadable": "Échauffement 5min\nCircuit 1 (3 tours): squats gobelet x10, tirage horizontal x10, fentes x8/jambe\nGainage: planche 3x45s, planche latérale 2x30s/côté\nÉtirements"
            }
          ]
        },
        {
          "date": "2026-10-16",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w11-ven-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique (2e séance)",
              "description": "Séance courte, focus technique pure: drills + nage aisée.",
              "completed": false,
              "durationMinutes": 45,
              "distanceMeters": 1800,
              "primaryZone": "Zone 1-2"
            }
          ]
        },
        {
          "date": "2026-10-17",
          "dayOfWeek": "Samedi",
          "workouts": [
            {
              "id": "w11-sam-bikelong",
              "sport": "bike",
              "type": "long",
              "name": "Vélo - sortie longue (endurance)",
              "description": "Sortie longue en zone 2 stable. Pratiquer l'hydratation/nutrition en continu.",
              "completed": false,
              "durationMinutes": 82,
              "distanceMeters": 34100,
              "primaryZone": "Zone 2"
            }
          ]
        },
        {
          "date": "2026-10-18",
          "dayOfWeek": "Dimanche",
          "workouts": [
            {
              "id": "w11-dim-runlong",
              "sport": "run",
              "type": "long",
              "name": "Course - sortie longue",
              "description": "Sortie longue en zone 2, dernier tiers légèrement plus soutenu si les sensations sont bonnes.",
              "completed": false,
              "durationMinutes": 94,
              "distanceMeters": 16300,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 7.5,
        "bySport": {
          "swim": {
            "sessions": 2,
            "hours": 1.5
          },
          "bike": {
            "sessions": 2,
            "hours": 2.1,
            "km": 52.5
          },
          "run": {
            "sessions": 2,
            "hours": 2.4,
            "km": 24.7
          },
          "strength": {
            "sessions": 1,
            "hours": 1.5
          }
        }
      }
    },
    {
      "weekNumber": 12,
      "startDate": "2026-10-19",
      "endDate": "2026-10-25",
      "phase": "Base",
      "focus": "Construction aérobie pendant le stage coop [semaine de décharge]",
      "targetHours": 5.5,
      "isRecoveryWeek": true,
      "days": [
        {
          "date": "2026-10-19",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w12-lun-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2026-10-20",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w12-mar-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique + aérobie",
              "description": "6-8x50m technique (rattrapé, doigt qui traîne) puis nage continue en zone 2.",
              "completed": false,
              "durationMinutes": 33,
              "distanceMeters": 1300,
              "primaryZone": "Zone 1-2",
              "humanReadable": "Échauffement 200-300m facile\nDrills 6-8x50m\nNage continue zone 2\nRetour au calme 100-200m"
            }
          ]
        },
        {
          "date": "2026-10-21",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w12-mer-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance facile",
              "description": "Sortie facile en zone 2, cadence fluide 85-95rpm. Home-trainer ou route selon météo.",
              "completed": false,
              "durationMinutes": 32,
              "distanceMeters": 13500,
              "primaryZone": "Zone 2",
              "notes": "Distance estimée à ~25km/h (aucune donnée de puissance disponible)"
            }
          ]
        },
        {
          "date": "2026-10-22",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w12-jeu-run",
              "sport": "run",
              "type": "endurance",
              "name": "Course - facile",
              "description": "Footing en zone 2, allure conversationnelle.",
              "completed": false,
              "durationMinutes": 37,
              "distanceMeters": 6200,
              "primaryZone": "Zone 2"
            }
          ]
        },
        {
          "date": "2026-10-23",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w12-ven-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique (2e séance)",
              "description": "Séance courte, focus technique pure: drills + nage aisée.",
              "completed": false,
              "durationMinutes": 33,
              "distanceMeters": 1300,
              "primaryZone": "Zone 1-2"
            }
          ]
        },
        {
          "date": "2026-10-24",
          "dayOfWeek": "Samedi",
          "workouts": [
            {
              "id": "w12-sam-bikelong",
              "sport": "bike",
              "type": "long",
              "name": "Vélo - sortie longue (endurance)",
              "description": "Sortie longue en zone 2 stable. Pratiquer l'hydratation/nutrition en continu.",
              "completed": false,
              "durationMinutes": 60,
              "distanceMeters": 25000,
              "primaryZone": "Zone 2"
            }
          ]
        },
        {
          "date": "2026-10-25",
          "dayOfWeek": "Dimanche",
          "workouts": [
            {
              "id": "w12-dim-runlong",
              "sport": "run",
              "type": "long",
              "name": "Course - sortie longue",
              "description": "Sortie longue en zone 2, dernier tiers légèrement plus soutenu si les sensations sont bonnes.",
              "completed": false,
              "durationMinutes": 69,
              "distanceMeters": 11900,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 4.4,
        "bySport": {
          "swim": {
            "sessions": 2,
            "hours": 1.1
          },
          "bike": {
            "sessions": 2,
            "hours": 1.53,
            "km": 38.5
          },
          "run": {
            "sessions": 2,
            "hours": 1.77,
            "km": 18.1
          }
        }
      }
    },
    {
      "weekNumber": 13,
      "startDate": "2026-10-26",
      "endDate": "2026-11-01",
      "phase": "Base",
      "focus": "Construction aérobie pendant le stage coop",
      "targetHours": 7.0,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2026-10-26",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w13-lun-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2026-10-27",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w13-mar-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique + aérobie",
              "description": "6-8x50m technique (rattrapé, doigt qui traîne) puis nage continue en zone 2.",
              "completed": false,
              "durationMinutes": 42,
              "distanceMeters": 1700,
              "primaryZone": "Zone 1-2",
              "humanReadable": "Échauffement 200-300m facile\nDrills 6-8x50m\nNage continue zone 2\nRetour au calme 100-200m"
            }
          ]
        },
        {
          "date": "2026-10-28",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w13-mer-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance facile",
              "description": "Sortie facile en zone 2, cadence fluide 85-95rpm. Home-trainer ou route selon météo.",
              "completed": false,
              "durationMinutes": 41,
              "distanceMeters": 17200,
              "primaryZone": "Zone 2",
              "notes": "Distance estimée à ~25km/h (aucune donnée de puissance disponible)"
            }
          ]
        },
        {
          "date": "2026-10-29",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w13-jeu-run",
              "sport": "run",
              "type": "endurance",
              "name": "Course - facile",
              "description": "Footing en zone 2, allure conversationnelle.",
              "completed": false,
              "durationMinutes": 47,
              "distanceMeters": 7800,
              "primaryZone": "Zone 2"
            },
            {
              "id": "w13-jeu-force",
              "sport": "strength",
              "type": "foundation",
              "name": "Musculation - fondation",
              "description": "Circuit fondation: squats gobelet, tirage/lat pulldown, fentes, gainage. 2-3 séries x 12-15 reps, poids modéré.",
              "completed": false,
              "durationMinutes": 84,
              "humanReadable": "Échauffement 5min\nCircuit 1 (3 tours): squats gobelet x10, tirage horizontal x10, fentes x8/jambe\nGainage: planche 3x45s, planche latérale 2x30s/côté\nÉtirements"
            }
          ]
        },
        {
          "date": "2026-10-30",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w13-ven-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique (2e séance)",
              "description": "Séance courte, focus technique pure: drills + nage aisée.",
              "completed": false,
              "durationMinutes": 42,
              "distanceMeters": 1700,
              "primaryZone": "Zone 1-2"
            }
          ]
        },
        {
          "date": "2026-10-31",
          "dayOfWeek": "Samedi",
          "workouts": [
            {
              "id": "w13-sam-bikelong",
              "sport": "bike",
              "type": "long",
              "name": "Vélo - sortie longue (endurance)",
              "description": "Sortie longue en zone 2 stable. Pratiquer l'hydratation/nutrition en continu.",
              "completed": false,
              "durationMinutes": 76,
              "distanceMeters": 31900,
              "primaryZone": "Zone 2"
            }
          ]
        },
        {
          "date": "2026-11-01",
          "dayOfWeek": "Dimanche",
          "workouts": [
            {
              "id": "w13-dim-runlong",
              "sport": "run",
              "type": "long",
              "name": "Course - sortie longue",
              "description": "Sortie longue en zone 2, dernier tiers légèrement plus soutenu si les sensations sont bonnes.",
              "completed": false,
              "durationMinutes": 87,
              "distanceMeters": 15200,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 6.98,
        "bySport": {
          "swim": {
            "sessions": 2,
            "hours": 1.4
          },
          "bike": {
            "sessions": 2,
            "hours": 1.95,
            "km": 49.1
          },
          "run": {
            "sessions": 2,
            "hours": 2.23,
            "km": 23.0
          },
          "strength": {
            "sessions": 1,
            "hours": 1.4
          }
        }
      }
    },
    {
      "weekNumber": 14,
      "startDate": "2026-11-02",
      "endDate": "2026-11-08",
      "phase": "Base",
      "focus": "Construction aérobie pendant le stage coop",
      "targetHours": 7.5,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2026-11-02",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w14-lun-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2026-11-03",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w14-mar-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique + aérobie",
              "description": "6-8x50m technique (rattrapé, doigt qui traîne) puis nage continue en zone 2.",
              "completed": false,
              "durationMinutes": 45,
              "distanceMeters": 1800,
              "primaryZone": "Zone 1-2",
              "humanReadable": "Échauffement 200-300m facile\nDrills 6-8x50m\nNage continue zone 2\nRetour au calme 100-200m"
            }
          ]
        },
        {
          "date": "2026-11-04",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w14-mer-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance facile",
              "description": "Sortie facile en zone 2, cadence fluide 85-95rpm. Home-trainer ou route selon météo.",
              "completed": false,
              "durationMinutes": 44,
              "distanceMeters": 18400,
              "primaryZone": "Zone 2",
              "notes": "Distance estimée à ~25km/h (aucune donnée de puissance disponible)"
            }
          ]
        },
        {
          "date": "2026-11-05",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w14-jeu-run",
              "sport": "run",
              "type": "endurance",
              "name": "Course - facile",
              "description": "Footing en zone 2, allure conversationnelle.",
              "completed": false,
              "durationMinutes": 50,
              "distanceMeters": 8400,
              "primaryZone": "Zone 2"
            },
            {
              "id": "w14-jeu-force",
              "sport": "strength",
              "type": "foundation",
              "name": "Musculation - fondation",
              "description": "Circuit fondation: squats gobelet, tirage/lat pulldown, fentes, gainage. 2-3 séries x 12-15 reps, poids modéré.",
              "completed": false,
              "durationMinutes": 90,
              "humanReadable": "Échauffement 5min\nCircuit 1 (3 tours): squats gobelet x10, tirage horizontal x10, fentes x8/jambe\nGainage: planche 3x45s, planche latérale 2x30s/côté\nÉtirements"
            }
          ]
        },
        {
          "date": "2026-11-06",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w14-ven-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique (2e séance)",
              "description": "Séance courte, focus technique pure: drills + nage aisée.",
              "completed": false,
              "durationMinutes": 45,
              "distanceMeters": 1800,
              "primaryZone": "Zone 1-2"
            }
          ]
        },
        {
          "date": "2026-11-07",
          "dayOfWeek": "Samedi",
          "workouts": [
            {
              "id": "w14-sam-bikelong",
              "sport": "bike",
              "type": "long",
              "name": "Vélo - sortie longue (endurance)",
              "description": "Sortie longue en zone 2 stable. Pratiquer l'hydratation/nutrition en continu.",
              "completed": false,
              "durationMinutes": 82,
              "distanceMeters": 34100,
              "primaryZone": "Zone 2"
            }
          ]
        },
        {
          "date": "2026-11-08",
          "dayOfWeek": "Dimanche",
          "workouts": [
            {
              "id": "w14-dim-runlong",
              "sport": "run",
              "type": "long",
              "name": "Course - sortie longue",
              "description": "Sortie longue en zone 2, dernier tiers légèrement plus soutenu si les sensations sont bonnes.",
              "completed": false,
              "durationMinutes": 94,
              "distanceMeters": 16300,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 7.5,
        "bySport": {
          "swim": {
            "sessions": 2,
            "hours": 1.5
          },
          "bike": {
            "sessions": 2,
            "hours": 2.1,
            "km": 52.5
          },
          "run": {
            "sessions": 2,
            "hours": 2.4,
            "km": 24.7
          },
          "strength": {
            "sessions": 1,
            "hours": 1.5
          }
        }
      }
    },
    {
      "weekNumber": 15,
      "startDate": "2026-11-09",
      "endDate": "2026-11-15",
      "phase": "Base",
      "focus": "Construction aérobie pendant le stage coop",
      "targetHours": 8.0,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2026-11-09",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w15-lun-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2026-11-10",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w15-mar-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique + aérobie",
              "description": "6-8x50m technique (rattrapé, doigt qui traîne) puis nage continue en zone 2.",
              "completed": false,
              "durationMinutes": 48,
              "distanceMeters": 1900,
              "primaryZone": "Zone 1-2",
              "humanReadable": "Échauffement 200-300m facile\nDrills 6-8x50m\nNage continue zone 2\nRetour au calme 100-200m"
            }
          ]
        },
        {
          "date": "2026-11-11",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w15-mer-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance facile",
              "description": "Sortie facile en zone 2, cadence fluide 85-95rpm. Home-trainer ou route selon météo.",
              "completed": false,
              "durationMinutes": 47,
              "distanceMeters": 19600,
              "primaryZone": "Zone 2",
              "notes": "Distance estimée à ~25km/h (aucune donnée de puissance disponible)"
            }
          ]
        },
        {
          "date": "2026-11-12",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w15-jeu-run",
              "sport": "run",
              "type": "endurance",
              "name": "Course - facile",
              "description": "Footing en zone 2, allure conversationnelle.",
              "completed": false,
              "durationMinutes": 54,
              "distanceMeters": 9000,
              "primaryZone": "Zone 2"
            },
            {
              "id": "w15-jeu-force",
              "sport": "strength",
              "type": "foundation",
              "name": "Musculation - fondation",
              "description": "Circuit fondation: squats gobelet, tirage/lat pulldown, fentes, gainage. 2-3 séries x 12-15 reps, poids modéré.",
              "completed": false,
              "durationMinutes": 96,
              "humanReadable": "Échauffement 5min\nCircuit 1 (3 tours): squats gobelet x10, tirage horizontal x10, fentes x8/jambe\nGainage: planche 3x45s, planche latérale 2x30s/côté\nÉtirements"
            }
          ]
        },
        {
          "date": "2026-11-13",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w15-ven-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique (2e séance)",
              "description": "Séance courte, focus technique pure: drills + nage aisée.",
              "completed": false,
              "durationMinutes": 48,
              "distanceMeters": 1900,
              "primaryZone": "Zone 1-2"
            }
          ]
        },
        {
          "date": "2026-11-14",
          "dayOfWeek": "Samedi",
          "workouts": [
            {
              "id": "w15-sam-bikelong",
              "sport": "bike",
              "type": "long",
              "name": "Vélo - sortie longue (endurance)",
              "description": "Sortie longue en zone 2 stable. Pratiquer l'hydratation/nutrition en continu.",
              "completed": false,
              "durationMinutes": 87,
              "distanceMeters": 36400,
              "primaryZone": "Zone 2"
            }
          ]
        },
        {
          "date": "2026-11-15",
          "dayOfWeek": "Dimanche",
          "workouts": [
            {
              "id": "w15-dim-runlong",
              "sport": "run",
              "type": "long",
              "name": "Course - sortie longue",
              "description": "Sortie longue en zone 2, dernier tiers légèrement plus soutenu si les sensations sont bonnes.",
              "completed": false,
              "durationMinutes": 100,
              "distanceMeters": 17400,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 8.0,
        "bySport": {
          "swim": {
            "sessions": 2,
            "hours": 1.6
          },
          "bike": {
            "sessions": 2,
            "hours": 2.23,
            "km": 56.0
          },
          "run": {
            "sessions": 2,
            "hours": 2.57,
            "km": 26.4
          },
          "strength": {
            "sessions": 1,
            "hours": 1.6
          }
        }
      }
    },
    {
      "weekNumber": 16,
      "startDate": "2026-11-16",
      "endDate": "2026-11-22",
      "phase": "Base",
      "focus": "Construction aérobie pendant le stage coop [semaine de décharge]",
      "targetHours": 6.0,
      "isRecoveryWeek": true,
      "days": [
        {
          "date": "2026-11-16",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w16-lun-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2026-11-17",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w16-mar-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique + aérobie",
              "description": "6-8x50m technique (rattrapé, doigt qui traîne) puis nage continue en zone 2.",
              "completed": false,
              "durationMinutes": 36,
              "distanceMeters": 1450,
              "primaryZone": "Zone 1-2",
              "humanReadable": "Échauffement 200-300m facile\nDrills 6-8x50m\nNage continue zone 2\nRetour au calme 100-200m"
            }
          ]
        },
        {
          "date": "2026-11-18",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w16-mer-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance facile",
              "description": "Sortie facile en zone 2, cadence fluide 85-95rpm. Home-trainer ou route selon météo.",
              "completed": false,
              "durationMinutes": 35,
              "distanceMeters": 14700,
              "primaryZone": "Zone 2",
              "notes": "Distance estimée à ~25km/h (aucune donnée de puissance disponible)"
            }
          ]
        },
        {
          "date": "2026-11-19",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w16-jeu-run",
              "sport": "run",
              "type": "endurance",
              "name": "Course - facile",
              "description": "Footing en zone 2, allure conversationnelle.",
              "completed": false,
              "durationMinutes": 40,
              "distanceMeters": 6700,
              "primaryZone": "Zone 2"
            }
          ]
        },
        {
          "date": "2026-11-20",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w16-ven-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique (2e séance)",
              "description": "Séance courte, focus technique pure: drills + nage aisée.",
              "completed": false,
              "durationMinutes": 36,
              "distanceMeters": 1450,
              "primaryZone": "Zone 1-2"
            }
          ]
        },
        {
          "date": "2026-11-21",
          "dayOfWeek": "Samedi",
          "workouts": [
            {
              "id": "w16-sam-bikelong",
              "sport": "bike",
              "type": "long",
              "name": "Vélo - sortie longue (endurance)",
              "description": "Sortie longue en zone 2 stable. Pratiquer l'hydratation/nutrition en continu.",
              "completed": false,
              "durationMinutes": 66,
              "distanceMeters": 27300,
              "primaryZone": "Zone 2"
            }
          ]
        },
        {
          "date": "2026-11-22",
          "dayOfWeek": "Dimanche",
          "workouts": [
            {
              "id": "w16-dim-runlong",
              "sport": "run",
              "type": "long",
              "name": "Course - sortie longue",
              "description": "Sortie longue en zone 2, dernier tiers légèrement plus soutenu si les sensations sont bonnes.",
              "completed": false,
              "durationMinutes": 75,
              "distanceMeters": 13000,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 4.8,
        "bySport": {
          "swim": {
            "sessions": 2,
            "hours": 1.2
          },
          "bike": {
            "sessions": 2,
            "hours": 1.68,
            "km": 42.0
          },
          "run": {
            "sessions": 2,
            "hours": 1.92,
            "km": 19.7
          }
        }
      }
    },
    {
      "weekNumber": 17,
      "startDate": "2026-11-23",
      "endDate": "2026-11-29",
      "phase": "Base",
      "focus": "Construction aérobie pendant le stage coop",
      "targetHours": 7.5,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2026-11-23",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w17-lun-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2026-11-24",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w17-mar-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique + aérobie",
              "description": "6-8x50m technique (rattrapé, doigt qui traîne) puis nage continue en zone 2.",
              "completed": false,
              "durationMinutes": 45,
              "distanceMeters": 1800,
              "primaryZone": "Zone 1-2",
              "humanReadable": "Échauffement 200-300m facile\nDrills 6-8x50m\nNage continue zone 2\nRetour au calme 100-200m"
            }
          ]
        },
        {
          "date": "2026-11-25",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w17-mer-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance facile",
              "description": "Sortie facile en zone 2, cadence fluide 85-95rpm. Home-trainer ou route selon météo.",
              "completed": false,
              "durationMinutes": 44,
              "distanceMeters": 18400,
              "primaryZone": "Zone 2",
              "notes": "Distance estimée à ~25km/h (aucune donnée de puissance disponible)"
            }
          ]
        },
        {
          "date": "2026-11-26",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w17-jeu-run",
              "sport": "run",
              "type": "endurance",
              "name": "Course - facile",
              "description": "Footing en zone 2, allure conversationnelle.",
              "completed": false,
              "durationMinutes": 50,
              "distanceMeters": 8400,
              "primaryZone": "Zone 2"
            },
            {
              "id": "w17-jeu-force",
              "sport": "strength",
              "type": "foundation",
              "name": "Musculation - fondation",
              "description": "Circuit fondation: squats gobelet, tirage/lat pulldown, fentes, gainage. 2-3 séries x 12-15 reps, poids modéré.",
              "completed": false,
              "durationMinutes": 90,
              "humanReadable": "Échauffement 5min\nCircuit 1 (3 tours): squats gobelet x10, tirage horizontal x10, fentes x8/jambe\nGainage: planche 3x45s, planche latérale 2x30s/côté\nÉtirements"
            }
          ]
        },
        {
          "date": "2026-11-27",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w17-ven-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique (2e séance)",
              "description": "Séance courte, focus technique pure: drills + nage aisée.",
              "completed": false,
              "durationMinutes": 45,
              "distanceMeters": 1800,
              "primaryZone": "Zone 1-2"
            }
          ]
        },
        {
          "date": "2026-11-28",
          "dayOfWeek": "Samedi",
          "workouts": [
            {
              "id": "w17-sam-bikelong",
              "sport": "bike",
              "type": "long",
              "name": "Vélo - sortie longue (endurance)",
              "description": "Sortie longue en zone 2 stable. Pratiquer l'hydratation/nutrition en continu.",
              "completed": false,
              "durationMinutes": 82,
              "distanceMeters": 34100,
              "primaryZone": "Zone 2"
            }
          ]
        },
        {
          "date": "2026-11-29",
          "dayOfWeek": "Dimanche",
          "workouts": [
            {
              "id": "w17-dim-runlong",
              "sport": "run",
              "type": "long",
              "name": "Course - sortie longue",
              "description": "Sortie longue en zone 2, dernier tiers légèrement plus soutenu si les sensations sont bonnes.",
              "completed": false,
              "durationMinutes": 94,
              "distanceMeters": 16300,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 7.5,
        "bySport": {
          "swim": {
            "sessions": 2,
            "hours": 1.5
          },
          "bike": {
            "sessions": 2,
            "hours": 2.1,
            "km": 52.5
          },
          "run": {
            "sessions": 2,
            "hours": 2.4,
            "km": 24.7
          },
          "strength": {
            "sessions": 1,
            "hours": 1.5
          }
        }
      }
    },
    {
      "weekNumber": 18,
      "startDate": "2026-11-30",
      "endDate": "2026-12-06",
      "phase": "Base",
      "focus": "Construction aérobie pendant le stage coop",
      "targetHours": 8.0,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2026-11-30",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w18-lun-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2026-12-01",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w18-mar-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique + aérobie",
              "description": "6-8x50m technique (rattrapé, doigt qui traîne) puis nage continue en zone 2.",
              "completed": false,
              "durationMinutes": 48,
              "distanceMeters": 1900,
              "primaryZone": "Zone 1-2",
              "humanReadable": "Échauffement 200-300m facile\nDrills 6-8x50m\nNage continue zone 2\nRetour au calme 100-200m"
            }
          ]
        },
        {
          "date": "2026-12-02",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w18-mer-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance facile",
              "description": "Sortie facile en zone 2, cadence fluide 85-95rpm. Home-trainer ou route selon météo.",
              "completed": false,
              "durationMinutes": 47,
              "distanceMeters": 19600,
              "primaryZone": "Zone 2",
              "notes": "Distance estimée à ~25km/h (aucune donnée de puissance disponible)"
            }
          ]
        },
        {
          "date": "2026-12-03",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w18-jeu-run",
              "sport": "run",
              "type": "endurance",
              "name": "Course - facile",
              "description": "Footing en zone 2, allure conversationnelle.",
              "completed": false,
              "durationMinutes": 54,
              "distanceMeters": 9000,
              "primaryZone": "Zone 2"
            },
            {
              "id": "w18-jeu-force",
              "sport": "strength",
              "type": "foundation",
              "name": "Musculation - fondation",
              "description": "Circuit fondation: squats gobelet, tirage/lat pulldown, fentes, gainage. 2-3 séries x 12-15 reps, poids modéré.",
              "completed": false,
              "durationMinutes": 96,
              "humanReadable": "Échauffement 5min\nCircuit 1 (3 tours): squats gobelet x10, tirage horizontal x10, fentes x8/jambe\nGainage: planche 3x45s, planche latérale 2x30s/côté\nÉtirements"
            }
          ]
        },
        {
          "date": "2026-12-04",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w18-ven-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique (2e séance)",
              "description": "Séance courte, focus technique pure: drills + nage aisée.",
              "completed": false,
              "durationMinutes": 48,
              "distanceMeters": 1900,
              "primaryZone": "Zone 1-2"
            }
          ]
        },
        {
          "date": "2026-12-05",
          "dayOfWeek": "Samedi",
          "workouts": [
            {
              "id": "w18-sam-bikelong",
              "sport": "bike",
              "type": "long",
              "name": "Vélo - sortie longue (endurance)",
              "description": "Sortie longue en zone 2 stable. Pratiquer l'hydratation/nutrition en continu.",
              "completed": false,
              "durationMinutes": 87,
              "distanceMeters": 36400,
              "primaryZone": "Zone 2"
            }
          ]
        },
        {
          "date": "2026-12-06",
          "dayOfWeek": "Dimanche",
          "workouts": [
            {
              "id": "w18-dim-runlong",
              "sport": "run",
              "type": "long",
              "name": "Course - sortie longue",
              "description": "Sortie longue en zone 2, dernier tiers légèrement plus soutenu si les sensations sont bonnes.",
              "completed": false,
              "durationMinutes": 100,
              "distanceMeters": 17400,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 8.0,
        "bySport": {
          "swim": {
            "sessions": 2,
            "hours": 1.6
          },
          "bike": {
            "sessions": 2,
            "hours": 2.23,
            "km": 56.0
          },
          "run": {
            "sessions": 2,
            "hours": 2.57,
            "km": 26.4
          },
          "strength": {
            "sessions": 1,
            "hours": 1.6
          }
        }
      }
    },
    {
      "weekNumber": 19,
      "startDate": "2026-12-07",
      "endDate": "2026-12-13",
      "phase": "Base",
      "focus": "Construction aérobie pendant le stage coop",
      "targetHours": 8.5,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2026-12-07",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w19-lun-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2026-12-08",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w19-mar-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique + aérobie",
              "description": "6-8x50m technique (rattrapé, doigt qui traîne) puis nage continue en zone 2.",
              "completed": false,
              "durationMinutes": 51,
              "distanceMeters": 2050,
              "primaryZone": "Zone 1-2",
              "humanReadable": "Échauffement 200-300m facile\nDrills 6-8x50m\nNage continue zone 2\nRetour au calme 100-200m"
            }
          ]
        },
        {
          "date": "2026-12-09",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w19-mer-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance facile",
              "description": "Sortie facile en zone 2, cadence fluide 85-95rpm. Home-trainer ou route selon météo.",
              "completed": false,
              "durationMinutes": 50,
              "distanceMeters": 20800,
              "primaryZone": "Zone 2",
              "notes": "Distance estimée à ~25km/h (aucune donnée de puissance disponible)"
            }
          ]
        },
        {
          "date": "2026-12-10",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w19-jeu-run",
              "sport": "run",
              "type": "endurance",
              "name": "Course - facile",
              "description": "Footing en zone 2, allure conversationnelle.",
              "completed": false,
              "durationMinutes": 57,
              "distanceMeters": 9500,
              "primaryZone": "Zone 2"
            },
            {
              "id": "w19-jeu-force",
              "sport": "strength",
              "type": "foundation",
              "name": "Musculation - fondation",
              "description": "Circuit fondation: squats gobelet, tirage/lat pulldown, fentes, gainage. 2-3 séries x 12-15 reps, poids modéré.",
              "completed": false,
              "durationMinutes": 102,
              "humanReadable": "Échauffement 5min\nCircuit 1 (3 tours): squats gobelet x10, tirage horizontal x10, fentes x8/jambe\nGainage: planche 3x45s, planche latérale 2x30s/côté\nÉtirements"
            }
          ]
        },
        {
          "date": "2026-12-11",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w19-ven-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique (2e séance)",
              "description": "Séance courte, focus technique pure: drills + nage aisée.",
              "completed": false,
              "durationMinutes": 51,
              "distanceMeters": 2050,
              "primaryZone": "Zone 1-2"
            }
          ]
        },
        {
          "date": "2026-12-12",
          "dayOfWeek": "Samedi",
          "workouts": [
            {
              "id": "w19-sam-bikelong",
              "sport": "bike",
              "type": "long",
              "name": "Vélo - sortie longue (endurance)",
              "description": "Sortie longue en zone 2 stable. Pratiquer l'hydratation/nutrition en continu.",
              "completed": false,
              "durationMinutes": 93,
              "distanceMeters": 38700,
              "primaryZone": "Zone 2"
            }
          ]
        },
        {
          "date": "2026-12-13",
          "dayOfWeek": "Dimanche",
          "workouts": [
            {
              "id": "w19-dim-runlong",
              "sport": "run",
              "type": "long",
              "name": "Course - sortie longue",
              "description": "Sortie longue en zone 2, dernier tiers légèrement plus soutenu si les sensations sont bonnes.",
              "completed": false,
              "durationMinutes": 106,
              "distanceMeters": 18400,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 8.5,
        "bySport": {
          "swim": {
            "sessions": 2,
            "hours": 1.7
          },
          "bike": {
            "sessions": 2,
            "hours": 2.38,
            "km": 59.5
          },
          "run": {
            "sessions": 2,
            "hours": 2.72,
            "km": 27.9
          },
          "strength": {
            "sessions": 1,
            "hours": 1.7
          }
        }
      }
    },
    {
      "weekNumber": 20,
      "startDate": "2026-12-14",
      "endDate": "2026-12-20",
      "phase": "Base",
      "focus": "Construction aérobie pendant le stage coop [semaine de décharge]",
      "targetHours": 6.0,
      "isRecoveryWeek": true,
      "days": [
        {
          "date": "2026-12-14",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w20-lun-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2026-12-15",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w20-mar-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique + aérobie",
              "description": "6-8x50m technique (rattrapé, doigt qui traîne) puis nage continue en zone 2.",
              "completed": false,
              "durationMinutes": 36,
              "distanceMeters": 1450,
              "primaryZone": "Zone 1-2",
              "humanReadable": "Échauffement 200-300m facile\nDrills 6-8x50m\nNage continue zone 2\nRetour au calme 100-200m"
            }
          ]
        },
        {
          "date": "2026-12-16",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w20-mer-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance facile",
              "description": "Sortie facile en zone 2, cadence fluide 85-95rpm. Home-trainer ou route selon météo.",
              "completed": false,
              "durationMinutes": 35,
              "distanceMeters": 14700,
              "primaryZone": "Zone 2",
              "notes": "Distance estimée à ~25km/h (aucune donnée de puissance disponible)"
            }
          ]
        },
        {
          "date": "2026-12-17",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w20-jeu-run",
              "sport": "run",
              "type": "endurance",
              "name": "Course - facile",
              "description": "Footing en zone 2, allure conversationnelle.",
              "completed": false,
              "durationMinutes": 40,
              "distanceMeters": 6700,
              "primaryZone": "Zone 2"
            }
          ]
        },
        {
          "date": "2026-12-18",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w20-ven-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique (2e séance)",
              "description": "Séance courte, focus technique pure: drills + nage aisée.",
              "completed": false,
              "durationMinutes": 36,
              "distanceMeters": 1450,
              "primaryZone": "Zone 1-2"
            }
          ]
        },
        {
          "date": "2026-12-19",
          "dayOfWeek": "Samedi",
          "workouts": [
            {
              "id": "w20-sam-bikelong",
              "sport": "bike",
              "type": "long",
              "name": "Vélo - sortie longue (endurance)",
              "description": "Sortie longue en zone 2 stable. Pratiquer l'hydratation/nutrition en continu.",
              "completed": false,
              "durationMinutes": 66,
              "distanceMeters": 27300,
              "primaryZone": "Zone 2"
            }
          ]
        },
        {
          "date": "2026-12-20",
          "dayOfWeek": "Dimanche",
          "workouts": [
            {
              "id": "w20-dim-runlong",
              "sport": "run",
              "type": "long",
              "name": "Course - sortie longue",
              "description": "Sortie longue en zone 2, dernier tiers légèrement plus soutenu si les sensations sont bonnes.",
              "completed": false,
              "durationMinutes": 75,
              "distanceMeters": 13000,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 4.8,
        "bySport": {
          "swim": {
            "sessions": 2,
            "hours": 1.2
          },
          "bike": {
            "sessions": 2,
            "hours": 1.68,
            "km": 42.0
          },
          "run": {
            "sessions": 2,
            "hours": 1.92,
            "km": 19.7
          }
        }
      }
    },
    {
      "weekNumber": 21,
      "startDate": "2026-12-21",
      "endDate": "2026-12-27",
      "phase": "Build",
      "focus": "Introduction de l'intensité, volume progressif",
      "targetHours": 8.0,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2026-12-21",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w21-lun-swim",
              "sport": "swim",
              "type": "recovery",
              "name": "Natation - récupération active",
              "description": "Nage très facile, technique, aucune pression.",
              "completed": false,
              "durationMinutes": 26,
              "distanceMeters": 1050,
              "primaryZone": "Zone 1"
            }
          ]
        },
        {
          "date": "2026-12-22",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w21-mar-bike",
              "sport": "bike",
              "type": "threshold",
              "name": "Vélo - sweet spot",
              "description": "3x20min @ 88-92% FTP (ou zone 4 FC), 5min facile entre les blocs.",
              "completed": false,
              "durationMinutes": 55,
              "distanceMeters": 23100,
              "primaryZone": "Zone 4"
            }
          ]
        },
        {
          "date": "2026-12-23",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w21-mer-run",
              "sport": "run",
              "type": "tempo",
              "name": "Course - tempo",
              "description": "Échauffement 15min facile + 4x100m lignes droites. Bloc principal: 20-25min continu à allure seuil (zone 4, allure T). Retour au calme 10min.",
              "completed": false,
              "durationMinutes": 50,
              "distanceMeters": 10100,
              "primaryZone": "Zone 4"
            },
            {
              "id": "w21-mer-force",
              "sport": "strength",
              "type": "strength",
              "name": "Musculation - développement",
              "description": "3-4 séries x 6-8 reps, charge modérée-élevée. Squats, soulevé de terre roumain unilatéral, tirage vertical, step-ups.",
              "completed": false,
              "durationMinutes": 67
            }
          ]
        },
        {
          "date": "2026-12-24",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w21-jeu-swim",
              "sport": "swim",
              "type": "threshold",
              "name": "Natation - seuil",
              "description": "Échauffement 400m + 3x(4x100m @ allure CSS, 10-15s repos), 60s entre séries. Retour au calme 200m.",
              "completed": false,
              "durationMinutes": 60,
              "distanceMeters": 2400,
              "primaryZone": "Zone 4"
            }
          ]
        },
        {
          "date": "2026-12-25",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w21-ven-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2026-12-26",
          "dayOfWeek": "Samedi",
          "workouts": [
            {
              "id": "w21-sam-bikelong",
              "sport": "bike",
              "type": "long",
              "name": "Vélo - sortie longue",
              "description": "Zone 2 stable, avec 3x10min en zone 3 dans le dernier tiers si semaine non-décharge.",
              "completed": false,
              "durationMinutes": 103,
              "distanceMeters": 42900,
              "primaryZone": "Zone 2-3"
            },
            {
              "id": "w21-sam-brick",
              "sport": "brick",
              "type": "brick",
              "name": "Course - transition (brick)",
              "description": "Enchaîné immédiatement après le vélo: course à allure facile-modérée, objectif = habituer les jambes à la transition vélo-course.",
              "completed": false,
              "durationMinutes": 25,
              "distanceMeters": 4600,
              "primaryZone": "Zone 2-3"
            }
          ]
        },
        {
          "date": "2026-12-27",
          "dayOfWeek": "Dimanche",
          "workouts": [
            {
              "id": "w21-dim-runlong",
              "sport": "run",
              "type": "long",
              "name": "Course - sortie longue",
              "description": "Zone 2, allure stable. Pratiquer la nutrition de course (gel aux 45min).",
              "completed": false,
              "durationMinutes": 92,
              "distanceMeters": 16300,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 7.97,
        "bySport": {
          "swim": {
            "sessions": 2,
            "hours": 1.43
          },
          "bike": {
            "sessions": 2,
            "hours": 2.63,
            "km": 66.0
          },
          "run": {
            "sessions": 2,
            "hours": 2.37,
            "km": 31.0
          },
          "strength": {
            "sessions": 1,
            "hours": 1.12
          },
          "brick": {
            "sessions": 1,
            "hours": 0.42
          }
        }
      }
    },
    {
      "weekNumber": 22,
      "startDate": "2026-12-28",
      "endDate": "2027-01-03",
      "phase": "Build",
      "focus": "Introduction de l'intensité, volume progressif",
      "targetHours": 9.0,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2026-12-28",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w22-lun-swim",
              "sport": "swim",
              "type": "recovery",
              "name": "Natation - récupération active",
              "description": "Nage très facile, technique, aucune pression.",
              "completed": false,
              "durationMinutes": 29,
              "distanceMeters": 1150,
              "primaryZone": "Zone 1"
            }
          ]
        },
        {
          "date": "2026-12-29",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w22-mar-bike",
              "sport": "bike",
              "type": "threshold",
              "name": "Vélo - sweet spot",
              "description": "3x20min @ 88-92% FTP (ou zone 4 FC), 5min facile entre les blocs.",
              "completed": false,
              "durationMinutes": 62,
              "distanceMeters": 26000,
              "primaryZone": "Zone 4"
            }
          ]
        },
        {
          "date": "2026-12-30",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w22-mer-run",
              "sport": "run",
              "type": "tempo",
              "name": "Course - tempo",
              "description": "Échauffement 15min facile + 4x100m lignes droites. Bloc principal: 20-25min continu à allure seuil (zone 4, allure T). Retour au calme 10min.",
              "completed": false,
              "durationMinutes": 57,
              "distanceMeters": 11300,
              "primaryZone": "Zone 4"
            },
            {
              "id": "w22-mer-force",
              "sport": "strength",
              "type": "strength",
              "name": "Musculation - développement",
              "description": "3-4 séries x 6-8 reps, charge modérée-élevée. Squats, soulevé de terre roumain unilatéral, tirage vertical, step-ups.",
              "completed": false,
              "durationMinutes": 76
            }
          ]
        },
        {
          "date": "2026-12-31",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w22-jeu-swim",
              "sport": "swim",
              "type": "threshold",
              "name": "Natation - seuil",
              "description": "Échauffement 400m + 3x(4x100m @ allure CSS, 10-15s repos), 60s entre séries. Retour au calme 200m.",
              "completed": false,
              "durationMinutes": 68,
              "distanceMeters": 2700,
              "primaryZone": "Zone 4"
            }
          ]
        },
        {
          "date": "2027-01-01",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w22-ven-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2027-01-02",
          "dayOfWeek": "Samedi",
          "workouts": [
            {
              "id": "w22-sam-bikelong",
              "sport": "bike",
              "type": "long",
              "name": "Vélo - sortie longue",
              "description": "Zone 2 stable, avec 3x10min en zone 3 dans le dernier tiers si semaine non-décharge.",
              "completed": false,
              "durationMinutes": 123,
              "distanceMeters": 51400,
              "primaryZone": "Zone 2-3"
            }
          ]
        },
        {
          "date": "2027-01-03",
          "dayOfWeek": "Dimanche",
          "workouts": [
            {
              "id": "w22-dim-runlong",
              "sport": "run",
              "type": "long",
              "name": "Course - sortie longue",
              "description": "Zone 2, allure stable. Pratiquer la nutrition de course (gel aux 45min).",
              "completed": false,
              "durationMinutes": 125,
              "distanceMeters": 22000,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 9.0,
        "bySport": {
          "swim": {
            "sessions": 2,
            "hours": 1.62
          },
          "bike": {
            "sessions": 2,
            "hours": 3.08,
            "km": 77.4
          },
          "run": {
            "sessions": 2,
            "hours": 3.03,
            "km": 33.3
          },
          "strength": {
            "sessions": 1,
            "hours": 1.27
          }
        }
      }
    },
    {
      "weekNumber": 23,
      "startDate": "2027-01-04",
      "endDate": "2027-01-10",
      "phase": "Build",
      "focus": "Introduction de l'intensité, volume progressif",
      "targetHours": 9.5,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2027-01-04",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w23-lun-swim",
              "sport": "swim",
              "type": "recovery",
              "name": "Natation - récupération active",
              "description": "Nage très facile, technique, aucune pression.",
              "completed": false,
              "durationMinutes": 31,
              "distanceMeters": 1250,
              "primaryZone": "Zone 1"
            }
          ]
        },
        {
          "date": "2027-01-05",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w23-mar-bike",
              "sport": "bike",
              "type": "threshold",
              "name": "Vélo - sweet spot",
              "description": "3x20min @ 88-92% FTP (ou zone 4 FC), 5min facile entre les blocs.",
              "completed": false,
              "durationMinutes": 66,
              "distanceMeters": 27400,
              "primaryZone": "Zone 4"
            }
          ]
        },
        {
          "date": "2027-01-06",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w23-mer-run",
              "sport": "run",
              "type": "tempo",
              "name": "Course - tempo",
              "description": "Échauffement 15min facile + 4x100m lignes droites. Bloc principal: 20-25min continu à allure seuil (zone 4, allure T). Retour au calme 10min.",
              "completed": false,
              "durationMinutes": 60,
              "distanceMeters": 12000,
              "primaryZone": "Zone 4"
            },
            {
              "id": "w23-mer-force",
              "sport": "strength",
              "type": "strength",
              "name": "Musculation - développement",
              "description": "3-4 séries x 6-8 reps, charge modérée-élevée. Squats, soulevé de terre roumain unilatéral, tirage vertical, step-ups.",
              "completed": false,
              "durationMinutes": 80
            }
          ]
        },
        {
          "date": "2027-01-07",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w23-jeu-swim",
              "sport": "swim",
              "type": "threshold",
              "name": "Natation - seuil",
              "description": "Échauffement 400m + 3x(4x100m @ allure CSS, 10-15s repos), 60s entre séries. Retour au calme 200m.",
              "completed": false,
              "durationMinutes": 72,
              "distanceMeters": 2850,
              "primaryZone": "Zone 4"
            }
          ]
        },
        {
          "date": "2027-01-08",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w23-ven-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2027-01-09",
          "dayOfWeek": "Samedi",
          "workouts": [
            {
              "id": "w23-sam-bikelong",
              "sport": "bike",
              "type": "long",
              "name": "Vélo - sortie longue",
              "description": "Zone 2 stable, avec 3x10min en zone 3 dans le dernier tiers si semaine non-décharge.",
              "completed": false,
              "durationMinutes": 122,
              "distanceMeters": 50900,
              "primaryZone": "Zone 2-3"
            },
            {
              "id": "w23-sam-brick",
              "sport": "brick",
              "type": "brick",
              "name": "Course - transition (brick)",
              "description": "Enchaîné immédiatement après le vélo: course à allure facile-modérée, objectif = habituer les jambes à la transition vélo-course.",
              "completed": false,
              "durationMinutes": 30,
              "distanceMeters": 5400,
              "primaryZone": "Zone 2-3"
            }
          ]
        },
        {
          "date": "2027-01-10",
          "dayOfWeek": "Dimanche",
          "workouts": [
            {
              "id": "w23-dim-runlong",
              "sport": "run",
              "type": "long",
              "name": "Course - sortie longue",
              "description": "Zone 2, allure stable. Pratiquer la nutrition de course (gel aux 45min).",
              "completed": false,
              "durationMinutes": 110,
              "distanceMeters": 19400,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 9.52,
        "bySport": {
          "swim": {
            "sessions": 2,
            "hours": 1.72
          },
          "bike": {
            "sessions": 2,
            "hours": 3.13,
            "km": 78.3
          },
          "run": {
            "sessions": 2,
            "hours": 2.83,
            "km": 36.8
          },
          "strength": {
            "sessions": 1,
            "hours": 1.33
          },
          "brick": {
            "sessions": 1,
            "hours": 0.5
          }
        }
      }
    },
    {
      "weekNumber": 24,
      "startDate": "2027-01-11",
      "endDate": "2027-01-17",
      "phase": "Build",
      "focus": "Introduction de l'intensité, volume progressif [semaine de décharge]",
      "targetHours": 7.0,
      "isRecoveryWeek": true,
      "days": [
        {
          "date": "2027-01-11",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w24-lun-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2027-01-12",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w24-mar-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance légère",
              "description": "Sortie facile, zone 2 basse.",
              "completed": false,
              "durationMinutes": 49,
              "distanceMeters": 20200,
              "primaryZone": "Zone 2"
            }
          ]
        },
        {
          "date": "2027-01-13",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w24-mer-run",
              "sport": "run",
              "type": "endurance",
              "name": "Course - facile",
              "description": "Footing facile zone 2.",
              "completed": false,
              "durationMinutes": 44,
              "distanceMeters": 7500,
              "primaryZone": "Zone 2"
            },
            {
              "id": "w24-mer-force",
              "sport": "strength",
              "type": "strength",
              "name": "Musculation - développement",
              "description": "3-4 séries x 6-8 reps, charge modérée-élevée. Squats, soulevé de terre roumain unilatéral, tirage vertical, step-ups.",
              "completed": false,
              "durationMinutes": 59
            }
          ]
        },
        {
          "date": "2027-01-14",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w24-jeu-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - aérobie",
              "description": "Nage continue zone 2 + technique.",
              "completed": false,
              "durationMinutes": 53,
              "distanceMeters": 2100,
              "primaryZone": "Zone 2"
            }
          ]
        },
        {
          "date": "2027-01-15",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w24-ven-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2027-01-16",
          "dayOfWeek": "Samedi",
          "workouts": [
            {
              "id": "w24-sam-bikelong",
              "sport": "bike",
              "type": "long",
              "name": "Vélo - sortie longue",
              "description": "Zone 2 stable, aucune intensité.",
              "completed": false,
              "durationMinutes": 90,
              "distanceMeters": 37500,
              "primaryZone": "Zone 2"
            }
          ]
        },
        {
          "date": "2027-01-17",
          "dayOfWeek": "Dimanche",
          "workouts": [
            {
              "id": "w24-dim-runlong",
              "sport": "run",
              "type": "long",
              "name": "Course - sortie longue",
              "description": "Zone 2, allure stable. Pratiquer la nutrition de course (gel aux 45min).",
              "completed": false,
              "durationMinutes": 103,
              "distanceMeters": 18200,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 6.63,
        "bySport": {
          "swim": {
            "sessions": 1,
            "hours": 0.88
          },
          "bike": {
            "sessions": 2,
            "hours": 2.32,
            "km": 57.7
          },
          "run": {
            "sessions": 2,
            "hours": 2.45,
            "km": 25.7
          },
          "strength": {
            "sessions": 1,
            "hours": 0.98
          }
        }
      }
    },
    {
      "weekNumber": 25,
      "startDate": "2027-01-18",
      "endDate": "2027-01-24",
      "phase": "Build",
      "focus": "Introduction de l'intensité, volume progressif",
      "targetHours": 9.0,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2027-01-18",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w25-lun-swim",
              "sport": "swim",
              "type": "recovery",
              "name": "Natation - récupération active",
              "description": "Nage très facile, technique, aucune pression.",
              "completed": false,
              "durationMinutes": 29,
              "distanceMeters": 1150,
              "primaryZone": "Zone 1"
            }
          ]
        },
        {
          "date": "2027-01-19",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w25-mar-bike",
              "sport": "bike",
              "type": "threshold",
              "name": "Vélo - sweet spot",
              "description": "3x20min @ 88-92% FTP (ou zone 4 FC), 5min facile entre les blocs.",
              "completed": false,
              "durationMinutes": 62,
              "distanceMeters": 26000,
              "primaryZone": "Zone 4"
            }
          ]
        },
        {
          "date": "2027-01-20",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w25-mer-run",
              "sport": "run",
              "type": "tempo",
              "name": "Course - tempo",
              "description": "Échauffement 15min facile + 4x100m lignes droites. Bloc principal: 20-25min continu à allure seuil (zone 4, allure T). Retour au calme 10min.",
              "completed": false,
              "durationMinutes": 57,
              "distanceMeters": 11300,
              "primaryZone": "Zone 4"
            },
            {
              "id": "w25-mer-force",
              "sport": "strength",
              "type": "strength",
              "name": "Musculation - développement",
              "description": "3-4 séries x 6-8 reps, charge modérée-élevée. Squats, soulevé de terre roumain unilatéral, tirage vertical, step-ups.",
              "completed": false,
              "durationMinutes": 76
            }
          ]
        },
        {
          "date": "2027-01-21",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w25-jeu-swim",
              "sport": "swim",
              "type": "threshold",
              "name": "Natation - seuil",
              "description": "Échauffement 400m + 3x(4x100m @ allure CSS, 10-15s repos), 60s entre séries. Retour au calme 200m.",
              "completed": false,
              "durationMinutes": 68,
              "distanceMeters": 2700,
              "primaryZone": "Zone 4"
            }
          ]
        },
        {
          "date": "2027-01-22",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w25-ven-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2027-01-23",
          "dayOfWeek": "Samedi",
          "workouts": [
            {
              "id": "w25-sam-bikelong",
              "sport": "bike",
              "type": "long",
              "name": "Vélo - sortie longue",
              "description": "Zone 2 stable, avec 3x10min en zone 3 dans le dernier tiers si semaine non-décharge.",
              "completed": false,
              "durationMinutes": 116,
              "distanceMeters": 48300,
              "primaryZone": "Zone 2-3"
            },
            {
              "id": "w25-sam-brick",
              "sport": "brick",
              "type": "brick",
              "name": "Course - transition (brick)",
              "description": "Enchaîné immédiatement après le vélo: course à allure facile-modérée, objectif = habituer les jambes à la transition vélo-course.",
              "completed": false,
              "durationMinutes": 28,
              "distanceMeters": 5200,
              "primaryZone": "Zone 2-3"
            }
          ]
        },
        {
          "date": "2027-01-24",
          "dayOfWeek": "Dimanche",
          "workouts": [
            {
              "id": "w25-dim-runlong",
              "sport": "run",
              "type": "long",
              "name": "Course - sortie longue",
              "description": "Zone 2, allure stable. Pratiquer la nutrition de course (gel aux 45min).",
              "completed": false,
              "durationMinutes": 104,
              "distanceMeters": 18300,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 9.0,
        "bySport": {
          "swim": {
            "sessions": 2,
            "hours": 1.62
          },
          "bike": {
            "sessions": 2,
            "hours": 2.97,
            "km": 74.3
          },
          "run": {
            "sessions": 2,
            "hours": 2.68,
            "km": 34.8
          },
          "strength": {
            "sessions": 1,
            "hours": 1.27
          },
          "brick": {
            "sessions": 1,
            "hours": 0.47
          }
        }
      }
    },
    {
      "weekNumber": 26,
      "startDate": "2027-01-25",
      "endDate": "2027-01-31",
      "phase": "Build",
      "focus": "Introduction de l'intensité, volume progressif",
      "targetHours": 9.5,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2027-01-25",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w26-lun-swim",
              "sport": "swim",
              "type": "recovery",
              "name": "Natation - récupération active",
              "description": "Nage très facile, technique, aucune pression.",
              "completed": false,
              "durationMinutes": 31,
              "distanceMeters": 1250,
              "primaryZone": "Zone 1"
            }
          ]
        },
        {
          "date": "2027-01-26",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w26-mar-bike",
              "sport": "bike",
              "type": "threshold",
              "name": "Vélo - sweet spot",
              "description": "3x20min @ 88-92% FTP (ou zone 4 FC), 5min facile entre les blocs.",
              "completed": false,
              "durationMinutes": 66,
              "distanceMeters": 27400,
              "primaryZone": "Zone 4"
            }
          ]
        },
        {
          "date": "2027-01-27",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w26-mer-run",
              "sport": "run",
              "type": "tempo",
              "name": "Course - tempo",
              "description": "Échauffement 15min facile + 4x100m lignes droites. Bloc principal: 20-25min continu à allure seuil (zone 4, allure T). Retour au calme 10min.",
              "completed": false,
              "durationMinutes": 60,
              "distanceMeters": 12000,
              "primaryZone": "Zone 4"
            },
            {
              "id": "w26-mer-force",
              "sport": "strength",
              "type": "strength",
              "name": "Musculation - développement",
              "description": "3-4 séries x 6-8 reps, charge modérée-élevée. Squats, soulevé de terre roumain unilatéral, tirage vertical, step-ups.",
              "completed": false,
              "durationMinutes": 80
            }
          ]
        },
        {
          "date": "2027-01-28",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w26-jeu-swim",
              "sport": "swim",
              "type": "threshold",
              "name": "Natation - seuil",
              "description": "Échauffement 400m + 3x(4x100m @ allure CSS, 10-15s repos), 60s entre séries. Retour au calme 200m.",
              "completed": false,
              "durationMinutes": 72,
              "distanceMeters": 2850,
              "primaryZone": "Zone 4"
            }
          ]
        },
        {
          "date": "2027-01-29",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w26-ven-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2027-01-30",
          "dayOfWeek": "Samedi",
          "workouts": [
            {
              "id": "w26-sam-bikelong",
              "sport": "bike",
              "type": "long",
              "name": "Vélo - sortie longue",
              "description": "Zone 2 stable, avec 3x10min en zone 3 dans le dernier tiers si semaine non-décharge.",
              "completed": false,
              "durationMinutes": 137,
              "distanceMeters": 57200,
              "primaryZone": "Zone 2-3"
            }
          ]
        },
        {
          "date": "2027-01-31",
          "dayOfWeek": "Dimanche",
          "workouts": [
            {
              "id": "w26-dim-runlong",
              "sport": "run",
              "type": "long",
              "name": "Course - sortie longue",
              "description": "Zone 2, allure stable. Pratiquer la nutrition de course (gel aux 45min).",
              "completed": false,
              "durationMinutes": 125,
              "distanceMeters": 22000,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 9.52,
        "bySport": {
          "swim": {
            "sessions": 2,
            "hours": 1.72
          },
          "bike": {
            "sessions": 2,
            "hours": 3.38,
            "km": 84.6
          },
          "run": {
            "sessions": 2,
            "hours": 3.08,
            "km": 34.0
          },
          "strength": {
            "sessions": 1,
            "hours": 1.33
          }
        }
      }
    },
    {
      "weekNumber": 27,
      "startDate": "2027-02-01",
      "endDate": "2027-02-07",
      "phase": "Build",
      "focus": "Introduction de l'intensité, volume progressif",
      "targetHours": 10.0,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2027-02-01",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w27-lun-swim",
              "sport": "swim",
              "type": "recovery",
              "name": "Natation - récupération active",
              "description": "Nage très facile, technique, aucune pression.",
              "completed": false,
              "durationMinutes": 32,
              "distanceMeters": 1300,
              "primaryZone": "Zone 1"
            }
          ]
        },
        {
          "date": "2027-02-02",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w27-mar-bike",
              "sport": "bike",
              "type": "threshold",
              "name": "Vélo - sweet spot",
              "description": "3x20min @ 88-92% FTP (ou zone 4 FC), 5min facile entre les blocs.",
              "completed": false,
              "durationMinutes": 69,
              "distanceMeters": 28900,
              "primaryZone": "Zone 4"
            }
          ]
        },
        {
          "date": "2027-02-03",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w27-mer-run",
              "sport": "run",
              "type": "tempo",
              "name": "Course - tempo",
              "description": "Échauffement 15min facile + 4x100m lignes droites. Bloc principal: 20-25min continu à allure seuil (zone 4, allure T). Retour au calme 10min.",
              "completed": false,
              "durationMinutes": 63,
              "distanceMeters": 12600,
              "primaryZone": "Zone 4"
            },
            {
              "id": "w27-mer-force",
              "sport": "strength",
              "type": "strength",
              "name": "Musculation - développement",
              "description": "3-4 séries x 6-8 reps, charge modérée-élevée. Squats, soulevé de terre roumain unilatéral, tirage vertical, step-ups.",
              "completed": false,
              "durationMinutes": 84
            }
          ]
        },
        {
          "date": "2027-02-04",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w27-jeu-swim",
              "sport": "swim",
              "type": "threshold",
              "name": "Natation - seuil",
              "description": "Échauffement 400m + 3x(4x100m @ allure CSS, 10-15s repos), 60s entre séries. Retour au calme 200m.",
              "completed": false,
              "durationMinutes": 76,
              "distanceMeters": 3000,
              "primaryZone": "Zone 4"
            }
          ]
        },
        {
          "date": "2027-02-05",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w27-ven-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2027-02-06",
          "dayOfWeek": "Samedi",
          "workouts": [
            {
              "id": "w27-sam-bikelong",
              "sport": "bike",
              "type": "long",
              "name": "Vélo - sortie longue",
              "description": "Zone 2 stable, avec 3x10min en zone 3 dans le dernier tiers si semaine non-décharge.",
              "completed": false,
              "durationMinutes": 129,
              "distanceMeters": 53600,
              "primaryZone": "Zone 2-3"
            },
            {
              "id": "w27-sam-brick",
              "sport": "brick",
              "type": "brick",
              "name": "Course - transition (brick)",
              "description": "Enchaîné immédiatement après le vélo: course à allure facile-modérée, objectif = habituer les jambes à la transition vélo-course.",
              "completed": false,
              "durationMinutes": 32,
              "distanceMeters": 5700,
              "primaryZone": "Zone 2-3"
            }
          ]
        },
        {
          "date": "2027-02-07",
          "dayOfWeek": "Dimanche",
          "workouts": [
            {
              "id": "w27-dim-runlong",
              "sport": "run",
              "type": "long",
              "name": "Course - sortie longue",
              "description": "Zone 2, allure stable. Pratiquer la nutrition de course (gel aux 45min).",
              "completed": false,
              "durationMinutes": 116,
              "distanceMeters": 20400,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 10.02,
        "bySport": {
          "swim": {
            "sessions": 2,
            "hours": 1.8
          },
          "bike": {
            "sessions": 2,
            "hours": 3.3,
            "km": 82.5
          },
          "run": {
            "sessions": 2,
            "hours": 2.98,
            "km": 38.7
          },
          "strength": {
            "sessions": 1,
            "hours": 1.4
          },
          "brick": {
            "sessions": 1,
            "hours": 0.53
          }
        }
      }
    },
    {
      "weekNumber": 28,
      "startDate": "2027-02-08",
      "endDate": "2027-02-14",
      "phase": "Build",
      "focus": "Introduction de l'intensité, volume progressif [semaine de décharge]",
      "targetHours": 7.5,
      "isRecoveryWeek": true,
      "days": [
        {
          "date": "2027-02-08",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w28-lun-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2027-02-09",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w28-mar-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance légère",
              "description": "Sortie facile, zone 2 basse.",
              "completed": false,
              "durationMinutes": 52,
              "distanceMeters": 21700,
              "primaryZone": "Zone 2"
            }
          ]
        },
        {
          "date": "2027-02-10",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w28-mer-run",
              "sport": "run",
              "type": "endurance",
              "name": "Course - facile",
              "description": "Footing facile zone 2.",
              "completed": false,
              "durationMinutes": 47,
              "distanceMeters": 8000,
              "primaryZone": "Zone 2"
            },
            {
              "id": "w28-mer-force",
              "sport": "strength",
              "type": "strength",
              "name": "Musculation - développement",
              "description": "3-4 séries x 6-8 reps, charge modérée-élevée. Squats, soulevé de terre roumain unilatéral, tirage vertical, step-ups.",
              "completed": false,
              "durationMinutes": 63
            }
          ]
        },
        {
          "date": "2027-02-11",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w28-jeu-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - aérobie",
              "description": "Nage continue zone 2 + technique.",
              "completed": false,
              "durationMinutes": 57,
              "distanceMeters": 2250,
              "primaryZone": "Zone 2"
            }
          ]
        },
        {
          "date": "2027-02-12",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w28-ven-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2027-02-13",
          "dayOfWeek": "Samedi",
          "workouts": [
            {
              "id": "w28-sam-bikelong",
              "sport": "bike",
              "type": "long",
              "name": "Vélo - sortie longue",
              "description": "Zone 2 stable, aucune intensité.",
              "completed": false,
              "durationMinutes": 97,
              "distanceMeters": 40200,
              "primaryZone": "Zone 2"
            }
          ]
        },
        {
          "date": "2027-02-14",
          "dayOfWeek": "Dimanche",
          "workouts": [
            {
              "id": "w28-dim-runlong",
              "sport": "run",
              "type": "long",
              "name": "Course - sortie longue",
              "description": "Zone 2, allure stable. Pratiquer la nutrition de course (gel aux 45min).",
              "completed": false,
              "durationMinutes": 110,
              "distanceMeters": 19500,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 7.1,
        "bySport": {
          "swim": {
            "sessions": 1,
            "hours": 0.95
          },
          "bike": {
            "sessions": 2,
            "hours": 2.48,
            "km": 61.9
          },
          "run": {
            "sessions": 2,
            "hours": 2.62,
            "km": 27.5
          },
          "strength": {
            "sessions": 1,
            "hours": 1.05
          }
        }
      }
    },
    {
      "weekNumber": 29,
      "startDate": "2027-02-15",
      "endDate": "2027-02-21",
      "phase": "Build",
      "focus": "Spécificité course 70.3",
      "targetHours": 9.5,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2027-02-15",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w29-lun-swim",
              "sport": "swim",
              "type": "recovery",
              "name": "Natation - récupération active",
              "description": "Nage très facile, technique, aucune pression.",
              "completed": false,
              "durationMinutes": 31,
              "distanceMeters": 1250,
              "primaryZone": "Zone 1"
            }
          ]
        },
        {
          "date": "2027-02-16",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w29-mar-bike",
              "sport": "bike",
              "type": "threshold",
              "name": "Vélo - sweet spot",
              "description": "3x20min @ 88-92% FTP (ou zone 4 FC), 5min facile entre les blocs.",
              "completed": false,
              "durationMinutes": 66,
              "distanceMeters": 27400,
              "primaryZone": "Zone 4"
            }
          ]
        },
        {
          "date": "2027-02-17",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w29-mer-run",
              "sport": "run",
              "type": "tempo",
              "name": "Course - tempo",
              "description": "Échauffement 15min facile + 4x100m lignes droites. Bloc principal: 20-25min continu à allure seuil (zone 4, allure T). Retour au calme 10min.",
              "completed": false,
              "durationMinutes": 60,
              "distanceMeters": 12000,
              "primaryZone": "Zone 4"
            },
            {
              "id": "w29-mer-force",
              "sport": "strength",
              "type": "strength",
              "name": "Musculation - développement",
              "description": "3-4 séries x 6-8 reps, charge modérée-élevée. Squats, soulevé de terre roumain unilatéral, tirage vertical, step-ups.",
              "completed": false,
              "durationMinutes": 80
            }
          ]
        },
        {
          "date": "2027-02-18",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w29-jeu-swim",
              "sport": "swim",
              "type": "threshold",
              "name": "Natation - seuil",
              "description": "Échauffement 400m + 3x(4x100m @ allure CSS, 10-15s repos), 60s entre séries. Retour au calme 200m.",
              "completed": false,
              "durationMinutes": 72,
              "distanceMeters": 2850,
              "primaryZone": "Zone 4"
            }
          ]
        },
        {
          "date": "2027-02-19",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w29-ven-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2027-02-20",
          "dayOfWeek": "Samedi",
          "workouts": [
            {
              "id": "w29-sam-bikelong",
              "sport": "bike",
              "type": "long",
              "name": "Vélo - sortie longue",
              "description": "Zone 2 stable, avec 3x10min en zone 3 dans le dernier tiers si semaine non-décharge.",
              "completed": false,
              "durationMinutes": 122,
              "distanceMeters": 50900,
              "primaryZone": "Zone 2-3"
            },
            {
              "id": "w29-sam-brick",
              "sport": "brick",
              "type": "brick",
              "name": "Course - transition (brick)",
              "description": "Enchaîné immédiatement après le vélo: course à allure facile-modérée, objectif = habituer les jambes à la transition vélo-course.",
              "completed": false,
              "durationMinutes": 30,
              "distanceMeters": 5400,
              "primaryZone": "Zone 2-3"
            }
          ]
        },
        {
          "date": "2027-02-21",
          "dayOfWeek": "Dimanche",
          "workouts": [
            {
              "id": "w29-dim-runlong",
              "sport": "run",
              "type": "long",
              "name": "Course - sortie longue",
              "description": "Zone 2, allure stable. Pratiquer la nutrition de course (gel aux 45min).",
              "completed": false,
              "durationMinutes": 110,
              "distanceMeters": 19400,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 9.52,
        "bySport": {
          "swim": {
            "sessions": 2,
            "hours": 1.72
          },
          "bike": {
            "sessions": 2,
            "hours": 3.13,
            "km": 78.3
          },
          "run": {
            "sessions": 2,
            "hours": 2.83,
            "km": 36.8
          },
          "strength": {
            "sessions": 1,
            "hours": 1.33
          },
          "brick": {
            "sessions": 1,
            "hours": 0.5
          }
        }
      }
    },
    {
      "weekNumber": 30,
      "startDate": "2027-02-22",
      "endDate": "2027-02-28",
      "phase": "Build",
      "focus": "Spécificité course 70.3",
      "targetHours": 10.0,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2027-02-22",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w30-lun-swim",
              "sport": "swim",
              "type": "recovery",
              "name": "Natation - récupération active",
              "description": "Nage très facile, technique, aucune pression.",
              "completed": false,
              "durationMinutes": 32,
              "distanceMeters": 1300,
              "primaryZone": "Zone 1"
            }
          ]
        },
        {
          "date": "2027-02-23",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w30-mar-bike",
              "sport": "bike",
              "type": "threshold",
              "name": "Vélo - sweet spot",
              "description": "3x20min @ 88-92% FTP (ou zone 4 FC), 5min facile entre les blocs.",
              "completed": false,
              "durationMinutes": 69,
              "distanceMeters": 28900,
              "primaryZone": "Zone 4"
            }
          ]
        },
        {
          "date": "2027-02-24",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w30-mer-run",
              "sport": "run",
              "type": "tempo",
              "name": "Course - tempo",
              "description": "Échauffement 15min facile + 4x100m lignes droites. Bloc principal: 20-25min continu à allure seuil (zone 4, allure T). Retour au calme 10min.",
              "completed": false,
              "durationMinutes": 63,
              "distanceMeters": 12600,
              "primaryZone": "Zone 4"
            },
            {
              "id": "w30-mer-force",
              "sport": "strength",
              "type": "strength",
              "name": "Musculation - développement",
              "description": "3-4 séries x 6-8 reps, charge modérée-élevée. Squats, soulevé de terre roumain unilatéral, tirage vertical, step-ups.",
              "completed": false,
              "durationMinutes": 84
            }
          ]
        },
        {
          "date": "2027-02-25",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w30-jeu-swim",
              "sport": "swim",
              "type": "threshold",
              "name": "Natation - seuil",
              "description": "Échauffement 400m + 3x(4x100m @ allure CSS, 10-15s repos), 60s entre séries. Retour au calme 200m.",
              "completed": false,
              "durationMinutes": 76,
              "distanceMeters": 3000,
              "primaryZone": "Zone 4"
            }
          ]
        },
        {
          "date": "2027-02-26",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w30-ven-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2027-02-27",
          "dayOfWeek": "Samedi",
          "workouts": [
            {
              "id": "w30-sam-bikelong",
              "sport": "bike",
              "type": "long",
              "name": "Vélo - sortie longue",
              "description": "Zone 2 stable, avec 3x10min en zone 3 dans le dernier tiers si semaine non-décharge.",
              "completed": false,
              "durationMinutes": 151,
              "distanceMeters": 62900,
              "primaryZone": "Zone 2-3"
            }
          ]
        },
        {
          "date": "2027-02-28",
          "dayOfWeek": "Dimanche",
          "workouts": [
            {
              "id": "w30-dim-runlong",
              "sport": "run",
              "type": "long",
              "name": "Course - sortie longue",
              "description": "Zone 2, allure stable. Pratiquer la nutrition de course (gel aux 45min).",
              "completed": false,
              "durationMinutes": 125,
              "distanceMeters": 22000,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 10.0,
        "bySport": {
          "swim": {
            "sessions": 2,
            "hours": 1.8
          },
          "bike": {
            "sessions": 2,
            "hours": 3.67,
            "km": 91.8
          },
          "run": {
            "sessions": 2,
            "hours": 3.13,
            "km": 34.6
          },
          "strength": {
            "sessions": 1,
            "hours": 1.4
          }
        }
      }
    },
    {
      "weekNumber": 31,
      "startDate": "2027-03-01",
      "endDate": "2027-03-07",
      "phase": "Build",
      "focus": "Spécificité course 70.3",
      "targetHours": 10.5,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2027-03-01",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w31-lun-swim",
              "sport": "swim",
              "type": "recovery",
              "name": "Natation - récupération active",
              "description": "Nage très facile, technique, aucune pression.",
              "completed": false,
              "durationMinutes": 34,
              "distanceMeters": 1350,
              "primaryZone": "Zone 1"
            }
          ]
        },
        {
          "date": "2027-03-02",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w31-mar-bike",
              "sport": "bike",
              "type": "threshold",
              "name": "Vélo - sweet spot",
              "description": "3x20min @ 88-92% FTP (ou zone 4 FC), 5min facile entre les blocs.",
              "completed": false,
              "durationMinutes": 73,
              "distanceMeters": 30300,
              "primaryZone": "Zone 4"
            }
          ]
        },
        {
          "date": "2027-03-03",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w31-mer-run",
              "sport": "run",
              "type": "tempo",
              "name": "Course - tempo",
              "description": "Échauffement 15min facile + 4x100m lignes droites. Bloc principal: 20-25min continu à allure seuil (zone 4, allure T). Retour au calme 10min.",
              "completed": false,
              "durationMinutes": 66,
              "distanceMeters": 13200,
              "primaryZone": "Zone 4"
            },
            {
              "id": "w31-mer-force",
              "sport": "strength",
              "type": "strength",
              "name": "Musculation - développement",
              "description": "3-4 séries x 6-8 reps, charge modérée-élevée. Squats, soulevé de terre roumain unilatéral, tirage vertical, step-ups.",
              "completed": false,
              "durationMinutes": 88
            }
          ]
        },
        {
          "date": "2027-03-04",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w31-jeu-swim",
              "sport": "swim",
              "type": "threshold",
              "name": "Natation - seuil",
              "description": "Échauffement 400m + 3x(4x100m @ allure CSS, 10-15s repos), 60s entre séries. Retour au calme 200m.",
              "completed": false,
              "durationMinutes": 79,
              "distanceMeters": 3200,
              "primaryZone": "Zone 4"
            }
          ]
        },
        {
          "date": "2027-03-05",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w31-ven-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2027-03-06",
          "dayOfWeek": "Samedi",
          "workouts": [
            {
              "id": "w31-sam-bikelong",
              "sport": "bike",
              "type": "long",
              "name": "Vélo - sortie longue",
              "description": "Zone 2 stable, avec 3x10min en zone 3 dans le dernier tiers si semaine non-décharge.",
              "completed": false,
              "durationMinutes": 135,
              "distanceMeters": 56300,
              "primaryZone": "Zone 2-3"
            },
            {
              "id": "w31-sam-brick",
              "sport": "brick",
              "type": "brick",
              "name": "Course - transition (brick)",
              "description": "Enchaîné immédiatement après le vélo: course à allure facile-modérée, objectif = habituer les jambes à la transition vélo-course.",
              "completed": false,
              "durationMinutes": 33,
              "distanceMeters": 6000,
              "primaryZone": "Zone 2-3"
            }
          ]
        },
        {
          "date": "2027-03-07",
          "dayOfWeek": "Dimanche",
          "workouts": [
            {
              "id": "w31-dim-runlong",
              "sport": "run",
              "type": "long",
              "name": "Course - sortie longue",
              "description": "Zone 2, allure stable. Pratiquer la nutrition de course (gel aux 45min).",
              "completed": false,
              "durationMinutes": 121,
              "distanceMeters": 21400,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 10.48,
        "bySport": {
          "swim": {
            "sessions": 2,
            "hours": 1.88
          },
          "bike": {
            "sessions": 2,
            "hours": 3.47,
            "km": 86.6
          },
          "run": {
            "sessions": 2,
            "hours": 3.12,
            "km": 40.6
          },
          "strength": {
            "sessions": 1,
            "hours": 1.47
          },
          "brick": {
            "sessions": 1,
            "hours": 0.55
          }
        }
      }
    },
    {
      "weekNumber": 32,
      "startDate": "2027-03-08",
      "endDate": "2027-03-14",
      "phase": "Build",
      "focus": "Spécificité course 70.3 [semaine de décharge]",
      "targetHours": 8.0,
      "isRecoveryWeek": true,
      "days": [
        {
          "date": "2027-03-08",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w32-lun-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2027-03-09",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w32-mar-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance légère",
              "description": "Sortie facile, zone 2 basse.",
              "completed": false,
              "durationMinutes": 55,
              "distanceMeters": 23100,
              "primaryZone": "Zone 2"
            }
          ]
        },
        {
          "date": "2027-03-10",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w32-mer-run",
              "sport": "run",
              "type": "endurance",
              "name": "Course - facile",
              "description": "Footing facile zone 2.",
              "completed": false,
              "durationMinutes": 50,
              "distanceMeters": 8500,
              "primaryZone": "Zone 2"
            },
            {
              "id": "w32-mer-force",
              "sport": "strength",
              "type": "strength",
              "name": "Musculation - développement",
              "description": "3-4 séries x 6-8 reps, charge modérée-élevée. Squats, soulevé de terre roumain unilatéral, tirage vertical, step-ups.",
              "completed": false,
              "durationMinutes": 67
            }
          ]
        },
        {
          "date": "2027-03-11",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w32-jeu-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - aérobie",
              "description": "Nage continue zone 2 + technique.",
              "completed": false,
              "durationMinutes": 60,
              "distanceMeters": 2400,
              "primaryZone": "Zone 2"
            }
          ]
        },
        {
          "date": "2027-03-12",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w32-ven-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2027-03-13",
          "dayOfWeek": "Samedi",
          "workouts": [
            {
              "id": "w32-sam-bikelong",
              "sport": "bike",
              "type": "long",
              "name": "Vélo - sortie longue",
              "description": "Zone 2 stable, aucune intensité.",
              "completed": false,
              "durationMinutes": 103,
              "distanceMeters": 42900,
              "primaryZone": "Zone 2"
            }
          ]
        },
        {
          "date": "2027-03-14",
          "dayOfWeek": "Dimanche",
          "workouts": [
            {
              "id": "w32-dim-runlong",
              "sport": "run",
              "type": "long",
              "name": "Course - sortie longue",
              "description": "Zone 2, allure stable. Pratiquer la nutrition de course (gel aux 45min).",
              "completed": false,
              "durationMinutes": 118,
              "distanceMeters": 20800,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 7.55,
        "bySport": {
          "swim": {
            "sessions": 1,
            "hours": 1.0
          },
          "bike": {
            "sessions": 2,
            "hours": 2.63,
            "km": 66.0
          },
          "run": {
            "sessions": 2,
            "hours": 2.8,
            "km": 29.3
          },
          "strength": {
            "sessions": 1,
            "hours": 1.12
          }
        }
      }
    },
    {
      "weekNumber": 33,
      "startDate": "2027-03-15",
      "endDate": "2027-03-21",
      "phase": "Build",
      "focus": "Spécificité course 70.3",
      "targetHours": 10.0,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2027-03-15",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w33-lun-swim",
              "sport": "swim",
              "type": "recovery",
              "name": "Natation - récupération active",
              "description": "Nage très facile, technique, aucune pression.",
              "completed": false,
              "durationMinutes": 32,
              "distanceMeters": 1300,
              "primaryZone": "Zone 1"
            }
          ]
        },
        {
          "date": "2027-03-16",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w33-mar-bike",
              "sport": "bike",
              "type": "threshold",
              "name": "Vélo - sweet spot",
              "description": "3x20min @ 88-92% FTP (ou zone 4 FC), 5min facile entre les blocs.",
              "completed": false,
              "durationMinutes": 69,
              "distanceMeters": 28900,
              "primaryZone": "Zone 4"
            }
          ]
        },
        {
          "date": "2027-03-17",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w33-mer-run",
              "sport": "run",
              "type": "tempo",
              "name": "Course - tempo",
              "description": "Échauffement 15min facile + 4x100m lignes droites. Bloc principal: 20-25min continu à allure seuil (zone 4, allure T). Retour au calme 10min.",
              "completed": false,
              "durationMinutes": 63,
              "distanceMeters": 12600,
              "primaryZone": "Zone 4"
            },
            {
              "id": "w33-mer-force",
              "sport": "strength",
              "type": "strength",
              "name": "Musculation - développement",
              "description": "3-4 séries x 6-8 reps, charge modérée-élevée. Squats, soulevé de terre roumain unilatéral, tirage vertical, step-ups.",
              "completed": false,
              "durationMinutes": 84
            }
          ]
        },
        {
          "date": "2027-03-18",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w33-jeu-swim",
              "sport": "swim",
              "type": "threshold",
              "name": "Natation - seuil",
              "description": "Échauffement 400m + 3x(4x100m @ allure CSS, 10-15s repos), 60s entre séries. Retour au calme 200m.",
              "completed": false,
              "durationMinutes": 76,
              "distanceMeters": 3000,
              "primaryZone": "Zone 4"
            }
          ]
        },
        {
          "date": "2027-03-19",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w33-ven-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2027-03-20",
          "dayOfWeek": "Samedi",
          "workouts": [
            {
              "id": "w33-sam-bikelong",
              "sport": "bike",
              "type": "long",
              "name": "Vélo - sortie longue",
              "description": "Zone 2 stable, avec 3x10min en zone 3 dans le dernier tiers si semaine non-décharge.",
              "completed": false,
              "durationMinutes": 129,
              "distanceMeters": 53600,
              "primaryZone": "Zone 2-3"
            },
            {
              "id": "w33-sam-brick",
              "sport": "brick",
              "type": "brick",
              "name": "Course - transition (brick)",
              "description": "Enchaîné immédiatement après le vélo: course à allure facile-modérée, objectif = habituer les jambes à la transition vélo-course.",
              "completed": false,
              "durationMinutes": 32,
              "distanceMeters": 5700,
              "primaryZone": "Zone 2-3"
            }
          ]
        },
        {
          "date": "2027-03-21",
          "dayOfWeek": "Dimanche",
          "workouts": [
            {
              "id": "w33-dim-runlong",
              "sport": "run",
              "type": "long",
              "name": "Course - sortie longue",
              "description": "Zone 2, allure stable. Pratiquer la nutrition de course (gel aux 45min).",
              "completed": false,
              "durationMinutes": 116,
              "distanceMeters": 20400,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 10.02,
        "bySport": {
          "swim": {
            "sessions": 2,
            "hours": 1.8
          },
          "bike": {
            "sessions": 2,
            "hours": 3.3,
            "km": 82.5
          },
          "run": {
            "sessions": 2,
            "hours": 2.98,
            "km": 38.7
          },
          "strength": {
            "sessions": 1,
            "hours": 1.4
          },
          "brick": {
            "sessions": 1,
            "hours": 0.53
          }
        }
      }
    },
    {
      "weekNumber": 34,
      "startDate": "2027-03-22",
      "endDate": "2027-03-28",
      "phase": "Build",
      "focus": "Spécificité course 70.3",
      "targetHours": 10.5,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2027-03-22",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w34-lun-swim",
              "sport": "swim",
              "type": "recovery",
              "name": "Natation - récupération active",
              "description": "Nage très facile, technique, aucune pression.",
              "completed": false,
              "durationMinutes": 34,
              "distanceMeters": 1350,
              "primaryZone": "Zone 1"
            }
          ]
        },
        {
          "date": "2027-03-23",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w34-mar-bike",
              "sport": "bike",
              "type": "threshold",
              "name": "Vélo - sweet spot",
              "description": "3x20min @ 88-92% FTP (ou zone 4 FC), 5min facile entre les blocs.",
              "completed": false,
              "durationMinutes": 73,
              "distanceMeters": 30300,
              "primaryZone": "Zone 4"
            }
          ]
        },
        {
          "date": "2027-03-24",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w34-mer-run",
              "sport": "run",
              "type": "tempo",
              "name": "Course - tempo",
              "description": "Échauffement 15min facile + 4x100m lignes droites. Bloc principal: 20-25min continu à allure seuil (zone 4, allure T). Retour au calme 10min.",
              "completed": false,
              "durationMinutes": 66,
              "distanceMeters": 13200,
              "primaryZone": "Zone 4"
            },
            {
              "id": "w34-mer-force",
              "sport": "strength",
              "type": "strength",
              "name": "Musculation - développement",
              "description": "3-4 séries x 6-8 reps, charge modérée-élevée. Squats, soulevé de terre roumain unilatéral, tirage vertical, step-ups.",
              "completed": false,
              "durationMinutes": 88
            }
          ]
        },
        {
          "date": "2027-03-25",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w34-jeu-swim",
              "sport": "swim",
              "type": "threshold",
              "name": "Natation - seuil",
              "description": "Échauffement 400m + 3x(4x100m @ allure CSS, 10-15s repos), 60s entre séries. Retour au calme 200m.",
              "completed": false,
              "durationMinutes": 79,
              "distanceMeters": 3200,
              "primaryZone": "Zone 4"
            }
          ]
        },
        {
          "date": "2027-03-26",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w34-ven-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2027-03-27",
          "dayOfWeek": "Samedi",
          "workouts": [
            {
              "id": "w34-sam-bikelong",
              "sport": "bike",
              "type": "long",
              "name": "Vélo - sortie longue",
              "description": "Zone 2 stable, avec 3x10min en zone 3 dans le dernier tiers si semaine non-décharge.",
              "completed": false,
              "durationMinutes": 165,
              "distanceMeters": 68700,
              "primaryZone": "Zone 2-3"
            }
          ]
        },
        {
          "date": "2027-03-28",
          "dayOfWeek": "Dimanche",
          "workouts": [
            {
              "id": "w34-dim-runlong",
              "sport": "run",
              "type": "long",
              "name": "Course - sortie longue",
              "description": "Zone 2, allure stable. Pratiquer la nutrition de course (gel aux 45min).",
              "completed": false,
              "durationMinutes": 125,
              "distanceMeters": 22000,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 10.5,
        "bySport": {
          "swim": {
            "sessions": 2,
            "hours": 1.88
          },
          "bike": {
            "sessions": 2,
            "hours": 3.97,
            "km": 99.0
          },
          "run": {
            "sessions": 2,
            "hours": 3.18,
            "km": 35.2
          },
          "strength": {
            "sessions": 1,
            "hours": 1.47
          }
        }
      }
    },
    {
      "weekNumber": 35,
      "startDate": "2027-03-29",
      "endDate": "2027-04-04",
      "phase": "Build",
      "focus": "Spécificité course 70.3",
      "targetHours": 11.0,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2027-03-29",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w35-lun-swim",
              "sport": "swim",
              "type": "recovery",
              "name": "Natation - récupération active",
              "description": "Nage très facile, technique, aucune pression.",
              "completed": false,
              "durationMinutes": 36,
              "distanceMeters": 1450,
              "primaryZone": "Zone 1"
            }
          ]
        },
        {
          "date": "2027-03-30",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w35-mar-bike",
              "sport": "bike",
              "type": "threshold",
              "name": "Vélo - sweet spot",
              "description": "3x20min @ 88-92% FTP (ou zone 4 FC), 5min facile entre les blocs.",
              "completed": false,
              "durationMinutes": 76,
              "distanceMeters": 31800,
              "primaryZone": "Zone 4"
            }
          ]
        },
        {
          "date": "2027-03-31",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w35-mer-run",
              "sport": "run",
              "type": "tempo",
              "name": "Course - tempo",
              "description": "Échauffement 15min facile + 4x100m lignes droites. Bloc principal: 20-25min continu à allure seuil (zone 4, allure T). Retour au calme 10min.",
              "completed": false,
              "durationMinutes": 69,
              "distanceMeters": 13900,
              "primaryZone": "Zone 4"
            },
            {
              "id": "w35-mer-force",
              "sport": "strength",
              "type": "strength",
              "name": "Musculation - développement",
              "description": "3-4 séries x 6-8 reps, charge modérée-élevée. Squats, soulevé de terre roumain unilatéral, tirage vertical, step-ups.",
              "completed": false,
              "durationMinutes": 92
            }
          ]
        },
        {
          "date": "2027-04-01",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w35-jeu-swim",
              "sport": "swim",
              "type": "threshold",
              "name": "Natation - seuil",
              "description": "Échauffement 400m + 3x(4x100m @ allure CSS, 10-15s repos), 60s entre séries. Retour au calme 200m.",
              "completed": false,
              "durationMinutes": 83,
              "distanceMeters": 3350,
              "primaryZone": "Zone 4"
            }
          ]
        },
        {
          "date": "2027-04-02",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w35-ven-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2027-04-03",
          "dayOfWeek": "Samedi",
          "workouts": [
            {
              "id": "w35-sam-bikelong",
              "sport": "bike",
              "type": "long",
              "name": "Vélo - sortie longue",
              "description": "Zone 2 stable, avec 3x10min en zone 3 dans le dernier tiers si semaine non-décharge.",
              "completed": false,
              "durationMinutes": 144,
              "distanceMeters": 60000,
              "primaryZone": "Zone 2-3"
            },
            {
              "id": "w35-sam-brick",
              "sport": "brick",
              "type": "brick",
              "name": "Course - transition (brick)",
              "description": "Enchaîné immédiatement après le vélo: course à allure facile-modérée, objectif = habituer les jambes à la transition vélo-course.",
              "completed": false,
              "durationMinutes": 35,
              "distanceMeters": 6300,
              "primaryZone": "Zone 2-3"
            }
          ]
        },
        {
          "date": "2027-04-04",
          "dayOfWeek": "Dimanche",
          "workouts": [
            {
              "id": "w35-dim-runlong",
              "sport": "run",
              "type": "long",
              "name": "Course - sortie longue",
              "description": "Zone 2, allure stable. Pratiquer la nutrition de course (gel aux 45min).",
              "completed": false,
              "durationMinutes": 125,
              "distanceMeters": 22000,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 11.0,
        "bySport": {
          "swim": {
            "sessions": 2,
            "hours": 1.98
          },
          "bike": {
            "sessions": 2,
            "hours": 3.67,
            "km": 91.8
          },
          "run": {
            "sessions": 2,
            "hours": 3.23,
            "km": 42.2
          },
          "strength": {
            "sessions": 1,
            "hours": 1.53
          },
          "brick": {
            "sessions": 1,
            "hours": 0.58
          }
        }
      }
    },
    {
      "weekNumber": 36,
      "startDate": "2027-04-05",
      "endDate": "2027-04-11",
      "phase": "Build",
      "focus": "Spécificité course 70.3 [semaine de décharge]",
      "targetHours": 8.0,
      "isRecoveryWeek": true,
      "days": [
        {
          "date": "2027-04-05",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w36-lun-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2027-04-06",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w36-mar-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance légère",
              "description": "Sortie facile, zone 2 basse.",
              "completed": false,
              "durationMinutes": 55,
              "distanceMeters": 23100,
              "primaryZone": "Zone 2"
            }
          ]
        },
        {
          "date": "2027-04-07",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w36-mer-run",
              "sport": "run",
              "type": "endurance",
              "name": "Course - facile",
              "description": "Footing facile zone 2.",
              "completed": false,
              "durationMinutes": 50,
              "distanceMeters": 8500,
              "primaryZone": "Zone 2"
            },
            {
              "id": "w36-mer-force",
              "sport": "strength",
              "type": "strength",
              "name": "Musculation - développement",
              "description": "3-4 séries x 6-8 reps, charge modérée-élevée. Squats, soulevé de terre roumain unilatéral, tirage vertical, step-ups.",
              "completed": false,
              "durationMinutes": 67
            }
          ]
        },
        {
          "date": "2027-04-08",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w36-jeu-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - aérobie",
              "description": "Nage continue zone 2 + technique.",
              "completed": false,
              "durationMinutes": 60,
              "distanceMeters": 2400,
              "primaryZone": "Zone 2"
            }
          ]
        },
        {
          "date": "2027-04-09",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w36-ven-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2027-04-10",
          "dayOfWeek": "Samedi",
          "workouts": [
            {
              "id": "w36-sam-bikelong",
              "sport": "bike",
              "type": "long",
              "name": "Vélo - sortie longue",
              "description": "Zone 2 stable, aucune intensité.",
              "completed": false,
              "durationMinutes": 103,
              "distanceMeters": 42900,
              "primaryZone": "Zone 2"
            }
          ]
        },
        {
          "date": "2027-04-11",
          "dayOfWeek": "Dimanche",
          "workouts": [
            {
              "id": "w36-dim-runlong",
              "sport": "run",
              "type": "long",
              "name": "Course - sortie longue",
              "description": "Zone 2, allure stable. Pratiquer la nutrition de course (gel aux 45min).",
              "completed": false,
              "durationMinutes": 118,
              "distanceMeters": 20800,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 7.55,
        "bySport": {
          "swim": {
            "sessions": 1,
            "hours": 1.0
          },
          "bike": {
            "sessions": 2,
            "hours": 2.63,
            "km": 66.0
          },
          "run": {
            "sessions": 2,
            "hours": 2.8,
            "km": 29.3
          },
          "strength": {
            "sessions": 1,
            "hours": 1.12
          }
        }
      }
    },
    {
      "weekNumber": 37,
      "startDate": "2027-04-12",
      "endDate": "2027-04-18",
      "phase": "Peak",
      "focus": "Affûtage spécifique, allure course, brick",
      "targetHours": 10.5,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2027-04-12",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w37-lun-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2027-04-13",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w37-mar-bike",
              "sport": "bike",
              "type": "race",
              "name": "Vélo - allure course 70.3",
              "description": "20min échauffement + 40-50min continu à l'allure/puissance cible du 70.3 (70-77% FTP). Simule le pacing de course.",
              "completed": false,
              "durationMinutes": 84,
              "distanceMeters": 34900,
              "primaryZone": "Zone 3 (allure course)"
            }
          ]
        },
        {
          "date": "2027-04-14",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w37-mer-run",
              "sport": "run",
              "type": "tempo",
              "name": "Course - allure seuil/course",
              "description": "20-25min continu à allure seuil, dans les jambes de l'objectif 21,1km du 70.3.",
              "completed": false,
              "durationMinutes": 66,
              "distanceMeters": 12400,
              "primaryZone": "Zone 4"
            },
            {
              "id": "w37-mer-force",
              "sport": "strength",
              "type": "maintenance",
              "name": "Musculation - maintien",
              "description": "2 séries x 8-10 reps, charge légère. Maintien de la force sans fatigue résiduelle.",
              "completed": false,
              "durationMinutes": 63
            }
          ]
        },
        {
          "date": "2027-04-15",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w37-jeu-swim",
              "sport": "swim",
              "type": "race",
              "name": "Natation - seuil + allure course",
              "description": "Échauffement 400m + 2x(3x150m @ allure CSS-seuil, 15s repos) + 500m continu à allure course.",
              "completed": false,
              "durationMinutes": 75,
              "distanceMeters": 3000,
              "primaryZone": "Zone 3-4"
            }
          ]
        },
        {
          "date": "2027-04-16",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w37-ven-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2027-04-17",
          "dayOfWeek": "Samedi",
          "workouts": [
            {
              "id": "w37-sam-bikelong",
              "sport": "bike",
              "type": "long",
              "name": "Vélo - sortie longue spécifique",
              "description": "Zone 2 avec bloc final à l'allure course (60-90min @ 70-77% FTP) pour habituer le corps au pacing du 70.3.",
              "completed": false,
              "durationMinutes": 156,
              "distanceMeters": 64800,
              "primaryZone": "Zone 2-3"
            },
            {
              "id": "w37-sam-brick",
              "sport": "brick",
              "type": "brick",
              "name": "Course - transition (brick)",
              "description": "Immédiatement après le vélo: 20-30min à allure course 70.3, jambes lourdes attendues les premiers kilomètres.",
              "completed": false,
              "durationMinutes": 44,
              "distanceMeters": 8100,
              "primaryZone": "Zone 3"
            }
          ]
        },
        {
          "date": "2027-04-18",
          "dayOfWeek": "Dimanche",
          "workouts": [
            {
              "id": "w37-dim-runlong",
              "sport": "run",
              "type": "long",
              "name": "Course - sortie longue",
              "description": "Zone 2 avec les 20-30 dernières minutes à allure course si semaine non-décharge.",
              "completed": false,
              "durationMinutes": 110,
              "distanceMeters": 19700,
              "primaryZone": "Zone 2-3"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 9.97,
        "bySport": {
          "swim": {
            "sessions": 1,
            "hours": 1.25
          },
          "bike": {
            "sessions": 2,
            "hours": 4.0,
            "km": 99.7
          },
          "run": {
            "sessions": 2,
            "hours": 2.93,
            "km": 40.2
          },
          "strength": {
            "sessions": 1,
            "hours": 1.05
          },
          "brick": {
            "sessions": 1,
            "hours": 0.73
          }
        }
      }
    },
    {
      "weekNumber": 38,
      "startDate": "2027-04-19",
      "endDate": "2027-04-25",
      "phase": "Peak",
      "focus": "Affûtage spécifique, allure course, brick",
      "targetHours": 11.0,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2027-04-19",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w38-lun-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2027-04-20",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w38-mar-bike",
              "sport": "bike",
              "type": "race",
              "name": "Vélo - allure course 70.3",
              "description": "20min échauffement + 40-50min continu à l'allure/puissance cible du 70.3 (70-77% FTP). Simule le pacing de course.",
              "completed": false,
              "durationMinutes": 88,
              "distanceMeters": 36600,
              "primaryZone": "Zone 3 (allure course)"
            }
          ]
        },
        {
          "date": "2027-04-21",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w38-mer-run",
              "sport": "run",
              "type": "tempo",
              "name": "Course - allure seuil/course",
              "description": "20-25min continu à allure seuil, dans les jambes de l'objectif 21,1km du 70.3.",
              "completed": false,
              "durationMinutes": 69,
              "distanceMeters": 13000,
              "primaryZone": "Zone 4"
            },
            {
              "id": "w38-mer-force",
              "sport": "strength",
              "type": "maintenance",
              "name": "Musculation - maintien",
              "description": "2 séries x 8-10 reps, charge légère. Maintien de la force sans fatigue résiduelle.",
              "completed": false,
              "durationMinutes": 66
            }
          ]
        },
        {
          "date": "2027-04-22",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w38-jeu-swim",
              "sport": "swim",
              "type": "race",
              "name": "Natation - seuil + allure course",
              "description": "Échauffement 400m + 2x(3x150m @ allure CSS-seuil, 15s repos) + 500m continu à allure course.",
              "completed": false,
              "durationMinutes": 79,
              "distanceMeters": 3150,
              "primaryZone": "Zone 3-4"
            }
          ]
        },
        {
          "date": "2027-04-23",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w38-ven-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2027-04-24",
          "dayOfWeek": "Samedi",
          "workouts": [
            {
              "id": "w38-sam-bikelong",
              "sport": "bike",
              "type": "long",
              "name": "Vélo - sortie longue spécifique",
              "description": "Zone 2 avec bloc final à l'allure course (60-90min @ 70-77% FTP) pour habituer le corps au pacing du 70.3.",
              "completed": false,
              "durationMinutes": 163,
              "distanceMeters": 67900,
              "primaryZone": "Zone 2-3"
            },
            {
              "id": "w38-sam-brick",
              "sport": "brick",
              "type": "brick",
              "name": "Course - transition (brick)",
              "description": "Immédiatement après le vélo: 20-30min à allure course 70.3, jambes lourdes attendues les premiers kilomètres.",
              "completed": false,
              "durationMinutes": 46,
              "distanceMeters": 8500,
              "primaryZone": "Zone 3"
            }
          ]
        },
        {
          "date": "2027-04-25",
          "dayOfWeek": "Dimanche",
          "workouts": [
            {
              "id": "w38-dim-runlong",
              "sport": "run",
              "type": "long",
              "name": "Course - sortie longue",
              "description": "Zone 2 avec les 20-30 dernières minutes à allure course si semaine non-décharge.",
              "completed": false,
              "durationMinutes": 116,
              "distanceMeters": 20700,
              "primaryZone": "Zone 2-3"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 10.45,
        "bySport": {
          "swim": {
            "sessions": 1,
            "hours": 1.32
          },
          "bike": {
            "sessions": 2,
            "hours": 4.18,
            "km": 104.5
          },
          "run": {
            "sessions": 2,
            "hours": 3.08,
            "km": 42.2
          },
          "strength": {
            "sessions": 1,
            "hours": 1.1
          },
          "brick": {
            "sessions": 1,
            "hours": 0.77
          }
        }
      }
    },
    {
      "weekNumber": 39,
      "startDate": "2027-04-26",
      "endDate": "2027-05-02",
      "phase": "Peak",
      "focus": "Affûtage spécifique, allure course, brick",
      "targetHours": 11.5,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2027-04-26",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w39-lun-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2027-04-27",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w39-mar-bike",
              "sport": "bike",
              "type": "race",
              "name": "Vélo - allure course 70.3",
              "description": "20min échauffement + 40-50min continu à l'allure/puissance cible du 70.3 (70-77% FTP). Simule le pacing de course.",
              "completed": false,
              "durationMinutes": 92,
              "distanceMeters": 38200,
              "primaryZone": "Zone 3 (allure course)"
            }
          ]
        },
        {
          "date": "2027-04-28",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w39-mer-run",
              "sport": "run",
              "type": "tempo",
              "name": "Course - allure seuil/course",
              "description": "20-25min continu à allure seuil, dans les jambes de l'objectif 21,1km du 70.3.",
              "completed": false,
              "durationMinutes": 72,
              "distanceMeters": 13600,
              "primaryZone": "Zone 4"
            },
            {
              "id": "w39-mer-force",
              "sport": "strength",
              "type": "maintenance",
              "name": "Musculation - maintien",
              "description": "2 séries x 8-10 reps, charge légère. Maintien de la force sans fatigue résiduelle.",
              "completed": false,
              "durationMinutes": 69
            }
          ]
        },
        {
          "date": "2027-04-29",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w39-jeu-swim",
              "sport": "swim",
              "type": "race",
              "name": "Natation - seuil + allure course",
              "description": "Échauffement 400m + 2x(3x150m @ allure CSS-seuil, 15s repos) + 500m continu à allure course.",
              "completed": false,
              "durationMinutes": 82,
              "distanceMeters": 3300,
              "primaryZone": "Zone 3-4"
            }
          ]
        },
        {
          "date": "2027-04-30",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w39-ven-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2027-05-01",
          "dayOfWeek": "Samedi",
          "workouts": [
            {
              "id": "w39-sam-bikelong",
              "sport": "bike",
              "type": "long",
              "name": "Vélo - sortie longue spécifique",
              "description": "Zone 2 avec bloc final à l'allure course (60-90min @ 70-77% FTP) pour habituer le corps au pacing du 70.3.",
              "completed": false,
              "durationMinutes": 170,
              "distanceMeters": 71000,
              "primaryZone": "Zone 2-3"
            },
            {
              "id": "w39-sam-brick",
              "sport": "brick",
              "type": "brick",
              "name": "Course - transition (brick)",
              "description": "Immédiatement après le vélo: 20-30min à allure course 70.3, jambes lourdes attendues les premiers kilomètres.",
              "completed": false,
              "durationMinutes": 48,
              "distanceMeters": 8900,
              "primaryZone": "Zone 3"
            }
          ]
        },
        {
          "date": "2027-05-02",
          "dayOfWeek": "Dimanche",
          "workouts": [
            {
              "id": "w39-dim-runlong",
              "sport": "run",
              "type": "long",
              "name": "Course - sortie longue",
              "description": "Zone 2 avec les 20-30 dernières minutes à allure course si semaine non-décharge.",
              "completed": false,
              "durationMinutes": 121,
              "distanceMeters": 21600,
              "primaryZone": "Zone 2-3"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 10.9,
        "bySport": {
          "swim": {
            "sessions": 1,
            "hours": 1.37
          },
          "bike": {
            "sessions": 2,
            "hours": 4.37,
            "km": 109.2
          },
          "run": {
            "sessions": 2,
            "hours": 3.22,
            "km": 44.1
          },
          "strength": {
            "sessions": 1,
            "hours": 1.15
          },
          "brick": {
            "sessions": 1,
            "hours": 0.8
          }
        }
      }
    },
    {
      "weekNumber": 40,
      "startDate": "2027-05-03",
      "endDate": "2027-05-09",
      "phase": "Peak",
      "focus": "Affûtage spécifique, allure course, brick [semaine de décharge]",
      "targetHours": 9.0,
      "isRecoveryWeek": true,
      "days": [
        {
          "date": "2027-05-03",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w40-lun-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2027-05-04",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w40-mar-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance",
              "description": "Zone 2 stable, sans intensité.",
              "completed": false,
              "durationMinutes": 72,
              "distanceMeters": 29900,
              "primaryZone": "Zone 2"
            }
          ]
        },
        {
          "date": "2027-05-05",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w40-mer-run",
              "sport": "run",
              "type": "endurance",
              "name": "Course - facile",
              "description": "Footing facile zone 2.",
              "completed": false,
              "durationMinutes": 57,
              "distanceMeters": 9600,
              "primaryZone": "Zone 2"
            },
            {
              "id": "w40-mer-force",
              "sport": "strength",
              "type": "maintenance",
              "name": "Musculation - maintien",
              "description": "2 séries x 8-10 reps, charge légère. Maintien de la force sans fatigue résiduelle.",
              "completed": false,
              "durationMinutes": 54
            }
          ]
        },
        {
          "date": "2027-05-06",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w40-jeu-swim",
              "sport": "swim",
              "type": "race",
              "name": "Natation - allure course / eau libre",
              "description": "Eau libre si disponible (dégel), sinon piscine: continu à l'allure cible du 1,9km, pratique de la navigation (sighting).",
              "completed": false,
              "durationMinutes": 64,
              "distanceMeters": 2550,
              "primaryZone": "Zone 3-4"
            }
          ]
        },
        {
          "date": "2027-05-07",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w40-ven-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2027-05-08",
          "dayOfWeek": "Samedi",
          "workouts": [
            {
              "id": "w40-sam-bikelong",
              "sport": "bike",
              "type": "long",
              "name": "Vélo - sortie longue spécifique",
              "description": "Zone 2 avec bloc final à l'allure course (60-90min @ 70-77% FTP) pour habituer le corps au pacing du 70.3.",
              "completed": false,
              "durationMinutes": 133,
              "distanceMeters": 55600,
              "primaryZone": "Zone 2-3"
            },
            {
              "id": "w40-sam-brick",
              "sport": "brick",
              "type": "brick",
              "name": "Course - transition (brick)",
              "description": "Immédiatement après le vélo: 20-30min à allure course 70.3, jambes lourdes attendues les premiers kilomètres.",
              "completed": false,
              "durationMinutes": 38,
              "distanceMeters": 7000,
              "primaryZone": "Zone 3"
            }
          ]
        },
        {
          "date": "2027-05-09",
          "dayOfWeek": "Dimanche",
          "workouts": [
            {
              "id": "w40-dim-runlong",
              "sport": "run",
              "type": "long",
              "name": "Course - sortie longue",
              "description": "Zone 2 avec les 20-30 dernières minutes à allure course si semaine non-décharge.",
              "completed": false,
              "durationMinutes": 94,
              "distanceMeters": 16900,
              "primaryZone": "Zone 2-3"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 8.53,
        "bySport": {
          "swim": {
            "sessions": 1,
            "hours": 1.07
          },
          "bike": {
            "sessions": 2,
            "hours": 3.42,
            "km": 85.5
          },
          "run": {
            "sessions": 2,
            "hours": 2.52,
            "km": 33.5
          },
          "strength": {
            "sessions": 1,
            "hours": 0.9
          },
          "brick": {
            "sessions": 1,
            "hours": 0.63
          }
        }
      }
    },
    {
      "weekNumber": 41,
      "startDate": "2027-05-10",
      "endDate": "2027-05-16",
      "phase": "Peak",
      "focus": "Affûtage spécifique, allure course, brick",
      "targetHours": 11.0,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2027-05-10",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w41-lun-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2027-05-11",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w41-mar-bike",
              "sport": "bike",
              "type": "race",
              "name": "Vélo - allure course 70.3",
              "description": "20min échauffement + 40-50min continu à l'allure/puissance cible du 70.3 (70-77% FTP). Simule le pacing de course.",
              "completed": false,
              "durationMinutes": 88,
              "distanceMeters": 36600,
              "primaryZone": "Zone 3 (allure course)"
            }
          ]
        },
        {
          "date": "2027-05-12",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w41-mer-run",
              "sport": "run",
              "type": "tempo",
              "name": "Course - allure seuil/course",
              "description": "20-25min continu à allure seuil, dans les jambes de l'objectif 21,1km du 70.3.",
              "completed": false,
              "durationMinutes": 69,
              "distanceMeters": 13000,
              "primaryZone": "Zone 4"
            },
            {
              "id": "w41-mer-force",
              "sport": "strength",
              "type": "maintenance",
              "name": "Musculation - maintien",
              "description": "2 séries x 8-10 reps, charge légère. Maintien de la force sans fatigue résiduelle.",
              "completed": false,
              "durationMinutes": 66
            }
          ]
        },
        {
          "date": "2027-05-13",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w41-jeu-swim",
              "sport": "swim",
              "type": "race",
              "name": "Natation - allure course / eau libre",
              "description": "Eau libre si disponible (dégel), sinon piscine: continu à l'allure cible du 1,9km, pratique de la navigation (sighting).",
              "completed": false,
              "durationMinutes": 79,
              "distanceMeters": 3150,
              "primaryZone": "Zone 3-4"
            }
          ]
        },
        {
          "date": "2027-05-14",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w41-ven-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2027-05-15",
          "dayOfWeek": "Samedi",
          "workouts": [
            {
              "id": "w41-sam-bikelong",
              "sport": "bike",
              "type": "long",
              "name": "Vélo - sortie longue spécifique",
              "description": "Zone 2 avec bloc final à l'allure course (60-90min @ 70-77% FTP) pour habituer le corps au pacing du 70.3.",
              "completed": false,
              "durationMinutes": 163,
              "distanceMeters": 67900,
              "primaryZone": "Zone 2-3"
            },
            {
              "id": "w41-sam-brick",
              "sport": "brick",
              "type": "brick",
              "name": "Course - transition (brick)",
              "description": "Immédiatement après le vélo: 20-30min à allure course 70.3, jambes lourdes attendues les premiers kilomètres.",
              "completed": false,
              "durationMinutes": 46,
              "distanceMeters": 8500,
              "primaryZone": "Zone 3"
            }
          ]
        },
        {
          "date": "2027-05-16",
          "dayOfWeek": "Dimanche",
          "workouts": [
            {
              "id": "w41-dim-runlong",
              "sport": "run",
              "type": "long",
              "name": "Course - sortie longue",
              "description": "Zone 2 avec les 20-30 dernières minutes à allure course si semaine non-décharge.",
              "completed": false,
              "durationMinutes": 116,
              "distanceMeters": 20700,
              "primaryZone": "Zone 2-3"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 10.45,
        "bySport": {
          "swim": {
            "sessions": 1,
            "hours": 1.32
          },
          "bike": {
            "sessions": 2,
            "hours": 4.18,
            "km": 104.5
          },
          "run": {
            "sessions": 2,
            "hours": 3.08,
            "km": 42.2
          },
          "strength": {
            "sessions": 1,
            "hours": 1.1
          },
          "brick": {
            "sessions": 1,
            "hours": 0.77
          }
        }
      }
    },
    {
      "weekNumber": 42,
      "startDate": "2027-05-17",
      "endDate": "2027-05-23",
      "phase": "Peak",
      "focus": "Affûtage spécifique, allure course, brick",
      "targetHours": 10.0,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2027-05-17",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w42-lun-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2027-05-18",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w42-mar-bike",
              "sport": "bike",
              "type": "race",
              "name": "Vélo - allure course 70.3",
              "description": "20min échauffement + 40-50min continu à l'allure/puissance cible du 70.3 (70-77% FTP). Simule le pacing de course.",
              "completed": false,
              "durationMinutes": 80,
              "distanceMeters": 33200,
              "primaryZone": "Zone 3 (allure course)"
            }
          ]
        },
        {
          "date": "2027-05-19",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w42-mer-run",
              "sport": "run",
              "type": "tempo",
              "name": "Course - allure seuil/course",
              "description": "20-25min continu à allure seuil, dans les jambes de l'objectif 21,1km du 70.3.",
              "completed": false,
              "durationMinutes": 63,
              "distanceMeters": 11800,
              "primaryZone": "Zone 4"
            },
            {
              "id": "w42-mer-force",
              "sport": "strength",
              "type": "maintenance",
              "name": "Musculation - maintien",
              "description": "2 séries x 8-10 reps, charge légère. Maintien de la force sans fatigue résiduelle.",
              "completed": false,
              "durationMinutes": 60
            }
          ]
        },
        {
          "date": "2027-05-20",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w42-jeu-swim",
              "sport": "swim",
              "type": "race",
              "name": "Natation - allure course / eau libre",
              "description": "Eau libre si disponible (dégel), sinon piscine: continu à l'allure cible du 1,9km, pratique de la navigation (sighting).",
              "completed": false,
              "durationMinutes": 71,
              "distanceMeters": 2850,
              "primaryZone": "Zone 3-4"
            }
          ]
        },
        {
          "date": "2027-05-21",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w42-ven-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2027-05-22",
          "dayOfWeek": "Samedi",
          "workouts": [
            {
              "id": "w42-sam-bikelong",
              "sport": "bike",
              "type": "long",
              "name": "Vélo - sortie longue spécifique",
              "description": "Zone 2 avec bloc final à l'allure course (60-90min @ 70-77% FTP) pour habituer le corps au pacing du 70.3.",
              "completed": false,
              "durationMinutes": 148,
              "distanceMeters": 61800,
              "primaryZone": "Zone 2-3"
            },
            {
              "id": "w42-sam-brick",
              "sport": "brick",
              "type": "brick",
              "name": "Course - transition (brick)",
              "description": "Immédiatement après le vélo: 20-30min à allure course 70.3, jambes lourdes attendues les premiers kilomètres.",
              "completed": false,
              "durationMinutes": 42,
              "distanceMeters": 7800,
              "primaryZone": "Zone 3"
            }
          ]
        },
        {
          "date": "2027-05-23",
          "dayOfWeek": "Dimanche",
          "workouts": [
            {
              "id": "w42-dim-runlong",
              "sport": "run",
              "type": "long",
              "name": "Course - sortie longue",
              "description": "Zone 2 avec les 20-30 dernières minutes à allure course si semaine non-décharge.",
              "completed": false,
              "durationMinutes": 105,
              "distanceMeters": 18800,
              "primaryZone": "Zone 2-3"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 9.48,
        "bySport": {
          "swim": {
            "sessions": 1,
            "hours": 1.18
          },
          "bike": {
            "sessions": 2,
            "hours": 3.8,
            "km": 95.0
          },
          "run": {
            "sessions": 2,
            "hours": 2.8,
            "km": 38.4
          },
          "strength": {
            "sessions": 1,
            "hours": 1.0
          },
          "brick": {
            "sessions": 1,
            "hours": 0.7
          }
        }
      }
    },
    {
      "weekNumber": 43,
      "startDate": "2027-05-24",
      "endDate": "2027-05-30",
      "phase": "Peak",
      "focus": "Affûtage spécifique, allure course, brick [semaine de décharge]",
      "targetHours": 8.5,
      "isRecoveryWeek": true,
      "days": [
        {
          "date": "2027-05-24",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w43-lun-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2027-05-25",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w43-mar-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance",
              "description": "Zone 2 stable, sans intensité.",
              "completed": false,
              "durationMinutes": 68,
              "distanceMeters": 28300,
              "primaryZone": "Zone 2"
            }
          ]
        },
        {
          "date": "2027-05-26",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w43-mer-run",
              "sport": "run",
              "type": "endurance",
              "name": "Course - facile",
              "description": "Footing facile zone 2.",
              "completed": false,
              "durationMinutes": 54,
              "distanceMeters": 9100,
              "primaryZone": "Zone 2"
            },
            {
              "id": "w43-mer-force",
              "sport": "strength",
              "type": "maintenance",
              "name": "Musculation - maintien",
              "description": "2 séries x 8-10 reps, charge légère. Maintien de la force sans fatigue résiduelle.",
              "completed": false,
              "durationMinutes": 51
            }
          ]
        },
        {
          "date": "2027-05-27",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w43-jeu-swim",
              "sport": "swim",
              "type": "race",
              "name": "Natation - allure course / eau libre",
              "description": "Eau libre si disponible (dégel), sinon piscine: continu à l'allure cible du 1,9km, pratique de la navigation (sighting).",
              "completed": false,
              "durationMinutes": 61,
              "distanceMeters": 2450,
              "primaryZone": "Zone 3-4"
            }
          ]
        },
        {
          "date": "2027-05-28",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w43-ven-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2027-05-29",
          "dayOfWeek": "Samedi",
          "workouts": [
            {
              "id": "w43-sam-bikelong",
              "sport": "bike",
              "type": "long",
              "name": "Vélo - sortie longue spécifique",
              "description": "Zone 2 avec bloc final à l'allure course (60-90min @ 70-77% FTP) pour habituer le corps au pacing du 70.3.",
              "completed": false,
              "durationMinutes": 126,
              "distanceMeters": 52500,
              "primaryZone": "Zone 2-3"
            },
            {
              "id": "w43-sam-brick",
              "sport": "brick",
              "type": "brick",
              "name": "Course - transition (brick)",
              "description": "Immédiatement après le vélo: 20-30min à allure course 70.3, jambes lourdes attendues les premiers kilomètres.",
              "completed": false,
              "durationMinutes": 36,
              "distanceMeters": 6600,
              "primaryZone": "Zone 3"
            }
          ]
        },
        {
          "date": "2027-05-30",
          "dayOfWeek": "Dimanche",
          "workouts": [
            {
              "id": "w43-dim-runlong",
              "sport": "run",
              "type": "long",
              "name": "Course - sortie longue",
              "description": "Zone 2 avec les 20-30 dernières minutes à allure course si semaine non-décharge.",
              "completed": false,
              "durationMinutes": 89,
              "distanceMeters": 16000,
              "primaryZone": "Zone 2-3"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 8.08,
        "bySport": {
          "swim": {
            "sessions": 1,
            "hours": 1.02
          },
          "bike": {
            "sessions": 2,
            "hours": 3.23,
            "km": 80.8
          },
          "run": {
            "sessions": 2,
            "hours": 2.38,
            "km": 31.7
          },
          "strength": {
            "sessions": 1,
            "hours": 0.85
          },
          "brick": {
            "sessions": 1,
            "hours": 0.6
          }
        }
      }
    },
    {
      "weekNumber": 44,
      "startDate": "2027-05-31",
      "endDate": "2027-06-06",
      "phase": "Taper",
      "focus": "Réduction du volume, maintien de l'intensité",
      "targetHours": 6.5,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2027-05-31",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w44-lun-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2027-06-01",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w44-mar-swim",
              "sport": "swim",
              "type": "race",
              "name": "Natation - allure course (réduit)",
              "description": "Volume réduit, quelques répétitions courtes à allure course pour garder les sensations sans fatigue.",
              "completed": false,
              "durationMinutes": 58,
              "distanceMeters": 2350,
              "primaryZone": "Zone 3-4"
            }
          ]
        },
        {
          "date": "2027-06-02",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w44-mer-bike",
              "sport": "bike",
              "type": "race",
              "name": "Vélo - allure course (réduit)",
              "description": "30-40min avec 3x8min à allure course 70.3, reste facile.",
              "completed": false,
              "durationMinutes": 44,
              "distanceMeters": 18200,
              "primaryZone": "Zone 3"
            }
          ]
        },
        {
          "date": "2027-06-03",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w44-jeu-run",
              "sport": "run",
              "type": "race",
              "name": "Course - allure course (réduit)",
              "description": "15-20min à allure course dans un footing facile de 30-35min au total.",
              "completed": false,
              "durationMinutes": 66,
              "distanceMeters": 11700,
              "primaryZone": "Zone 3"
            }
          ]
        },
        {
          "date": "2027-06-04",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w44-ven-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2027-06-05",
          "dayOfWeek": "Samedi",
          "workouts": [
            {
              "id": "w44-sam-bikelong",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - sortie modérée",
              "description": "Volume réduit par rapport au pic, intensité douce, zone 2.",
              "completed": false,
              "durationMinutes": 66,
              "distanceMeters": 27300,
              "primaryZone": "Zone 2"
            }
          ]
        },
        {
          "date": "2027-06-06",
          "dayOfWeek": "Dimanche",
          "workouts": [
            {
              "id": "w44-dim-runlong",
              "sport": "run",
              "type": "endurance",
              "name": "Course - sortie modérée",
              "description": "Volume réduit, zone 2, aucune intensité.",
              "completed": false,
              "durationMinutes": 98,
              "distanceMeters": 16800,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 5.53,
        "bySport": {
          "swim": {
            "sessions": 1,
            "hours": 0.97
          },
          "bike": {
            "sessions": 2,
            "hours": 1.83,
            "km": 45.5
          },
          "run": {
            "sessions": 2,
            "hours": 2.73,
            "km": 28.5
          }
        }
      }
    },
    {
      "weekNumber": 45,
      "startDate": "2027-06-07",
      "endDate": "2027-06-13",
      "phase": "Taper",
      "focus": "Réduction du volume, maintien de l'intensité",
      "targetHours": 4.5,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2027-06-07",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w45-lun-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2027-06-08",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w45-mar-swim",
              "sport": "swim",
              "type": "race",
              "name": "Natation - allure course (réduit)",
              "description": "Volume réduit, quelques répétitions courtes à allure course pour garder les sensations sans fatigue.",
              "completed": false,
              "durationMinutes": 40,
              "distanceMeters": 1600,
              "primaryZone": "Zone 3-4"
            }
          ]
        },
        {
          "date": "2027-06-09",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w45-mer-bike",
              "sport": "bike",
              "type": "race",
              "name": "Vélo - allure course (réduit)",
              "description": "30-40min avec 3x8min à allure course 70.3, reste facile.",
              "completed": false,
              "durationMinutes": 30,
              "distanceMeters": 12600,
              "primaryZone": "Zone 3"
            }
          ]
        },
        {
          "date": "2027-06-10",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w45-jeu-run",
              "sport": "run",
              "type": "race",
              "name": "Course - allure course (réduit)",
              "description": "15-20min à allure course dans un footing facile de 30-35min au total.",
              "completed": false,
              "durationMinutes": 45,
              "distanceMeters": 8100,
              "primaryZone": "Zone 3"
            }
          ]
        },
        {
          "date": "2027-06-11",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w45-ven-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2027-06-12",
          "dayOfWeek": "Samedi",
          "workouts": [
            {
              "id": "w45-sam-bikelong",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - sortie modérée",
              "description": "Volume réduit par rapport au pic, intensité douce, zone 2.",
              "completed": false,
              "durationMinutes": 45,
              "distanceMeters": 18900,
              "primaryZone": "Zone 2"
            }
          ]
        },
        {
          "date": "2027-06-13",
          "dayOfWeek": "Dimanche",
          "workouts": [
            {
              "id": "w45-dim-runlong",
              "sport": "run",
              "type": "endurance",
              "name": "Course - sortie modérée",
              "description": "Volume réduit, zone 2, aucune intensité.",
              "completed": false,
              "durationMinutes": 68,
              "distanceMeters": 11700,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 3.8,
        "bySport": {
          "swim": {
            "sessions": 1,
            "hours": 0.67
          },
          "bike": {
            "sessions": 2,
            "hours": 1.25,
            "km": 31.5
          },
          "run": {
            "sessions": 2,
            "hours": 1.88,
            "km": 19.8
          }
        }
      }
    },
    {
      "weekNumber": 46,
      "startDate": "2027-06-14",
      "endDate": "2027-06-20",
      "phase": "Taper",
      "focus": "Semaine de course - IRONMAN 70.3 Mont-Tremblant",
      "targetHours": 3.5,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2027-06-14",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w46-lun-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2027-06-15",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w46-mar-swim",
              "sport": "swim",
              "type": "recovery",
              "name": "Natation - activation légère",
              "description": "15-20min facile avec quelques accélérations courtes de 20-30s.",
              "completed": false,
              "durationMinutes": 20,
              "distanceMeters": 800,
              "primaryZone": "Zone 1-2"
            }
          ]
        },
        {
          "date": "2027-06-16",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w46-mer-bike",
              "sport": "bike",
              "type": "recovery",
              "name": "Vélo - jambes légères",
              "description": "30-40min très facile avec 4-5x30s à allure course pour réveiller les jambes.",
              "completed": false,
              "durationMinutes": 35,
              "distanceMeters": 14600,
              "primaryZone": "Zone 1-2"
            }
          ]
        },
        {
          "date": "2027-06-17",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w46-jeu-run",
              "sport": "run",
              "type": "recovery",
              "name": "Course - jambes légères",
              "description": "20min très facile avec 3-4x20s strides.",
              "completed": false,
              "durationMinutes": 20,
              "distanceMeters": 3300,
              "primaryZone": "Zone 1-2"
            }
          ]
        },
        {
          "date": "2027-06-18",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w46-ven-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
            }
          ]
        },
        {
          "date": "2027-06-19",
          "dayOfWeek": "Samedi",
          "workouts": [
            {
              "id": "w46-sam-activation",
              "sport": "bike",
              "type": "recovery",
              "name": "Vélo - activation courte + repos",
              "description": "15-20min très facile, vérification matériel (vélo, transition). Repos le reste de la journée.",
              "completed": false,
              "durationMinutes": 15,
              "distanceMeters": 6200,
              "primaryZone": "Zone 1"
            }
          ]
        },
        {
          "date": "2027-06-20",
          "dayOfWeek": "Dimanche",
          "workouts": [
            {
              "id": "w46-dim-race",
              "sport": "race",
              "type": "race",
              "name": "IRONMAN 70.3 Mont-Tremblant",
              "description": "Jour de course: 1,9km natation + 90km vélo + 21,1km course. Voir raceStrategy pour le pacing détaillé.",
              "completed": false,
              "primaryZone": "Course"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 1.5,
        "bySport": {
          "swim": {
            "sessions": 1,
            "hours": 0.33
          },
          "bike": {
            "sessions": 2,
            "hours": 0.83,
            "km": 20.8
          },
          "run": {
            "sessions": 1,
            "hours": 0.33,
            "km": 3.3
          }
        }
      }
    }
  ],
  "raceStrategy": {
    "event": {
      "name": "IRONMAN 70.3 Mont-Tremblant",
      "date": "2027-06-20",
      "type": "70.3",
      "distances": {
        "swim": 1900,
        "bike": 90000,
        "run": 21100
      }
    },
    "pacing": {
      "swim": {
        "target": "Allure légèrement plus lente que le CSS de piscine (+5-10% en eau libre)",
        "notes": "Départ très conservateur - les 200 premiers mètres donnent le ton de toute la course. Chercher des appuis pour drafter sans sprinter pour les rejoindre. Coup de pied minimal (2-temps) pour épargner les jambes."
      },
      "bike": {
        "targetPower": "70-77% FTP (à ajuster une fois le FTP mesuré au test de terrain)",
        "targetHR": "≤161 bpm (zone 4 basse, sous le seuil vélo estimé de 158)",
        "notes": "30 premières minutes: 5-10W sous la cible pour laisser le corps s'échauffer. Piloter à la puissance normalisée, pas à la vitesse - réduire dans les descentes, pousser dans les montées (parcours vallonné de Mont-Tremblant)."
      },
      "run": {
        "targetPace": "5:15-5:30/km (à ajuster selon le test de seuil et la progression du plan)",
        "targetHR": "146-155 bpm (80-85% du LTHR course mesuré de 182 bpm)",
        "notes": "Les 2 premiers kilomètres seront inconfortables - normal après le vélo. Se laisser 2-3km pour retrouver des jambes de course. Marcher les ravitaillements si besoin, c'est une stratégie valide sur 70.3."
      }
    },
    "nutrition": {
      "preRace": "2-3h avant: 100-150g de glucides (gruau, banane, rôties). 30min avant: 20-30g (demi-gel ou boisson sportive).",
      "during": {
        "carbsPerHour": 70,
        "fluidPerHour": "600-800ml",
        "products": [
          "Gels (à tester en entraînement dès la phase Build)",
          "Boisson sportive",
          "Cola (portion course à pied)"
        ]
      },
      "notes": "L'entraînement de l'intestin est essentiel: commencer à 30g/h en phase Build et augmenter progressivement sur 4-6 semaines jusqu'à la cible de 70-90g/h. Ne jamais essayer un nouveau produit le jour de la course."
    },
    "taper": {
      "startDate": "2027-05-31",
      "volumeReduction": 55,
      "notes": "Réduction progressive sur 3 semaines (44-46). Maintenir de courtes touches d'intensité à allure course pour ne pas perdre les sensations. Priorité au sommeil et à l'alimentation."
    },
    "raceDay": {
      "wakeUpTime": "4h00 (départ de vague probable ~7h00-7h30)",
      "preRaceMeal": "Petit-déjeuner familier et déjà testé en entraînement, 2,5-3h avant le départ (100-150g glucides)",
      "warmUp": "10-15min de mobilité légère + quelques longueurs de nage faciles si un accès à l'eau est possible avant le départ",
      "mentalCues": [
        "Départ conservateur - la course se gagne dans les 2 dernières heures, pas les 20 premières minutes",
        "Sur le vélo: puissance/effort, pas vitesse",
        "Les 2 premiers km de course sembleront horribles - c'est normal, ça passe",
        "Un objectif: terminer et bien progresser - pas de pression de temps"
      ]
    }
  },
  "notes": {
    "zonesEstimation": "Zones course basées sur le LTHR réellement mesuré par Garmin (182 bpm, moyenne des 5 dernières lectures de juin-juillet 2026), pas une estimation. Zones vélo et natation encore estimées faute de test formel (aucune donnée de puissance ni de CSS) - à valider et ajuster via les tests de terrain prévus semaines 1-2 (vélo: test FTP/FC 20min; natation: test CSS 400m/200m). L'allure de course au seuil sera aussi confirmée par le test de 30min prévu semaine 1-2, même si le LTHR cardiaque est déjà connu.",
    "eventDateStatus": "Date du 20 juin 2027 estimée (dimanche, cohérente avec le format habituel mi-juin de l'épreuve). L'édition 2026 a eu lieu le 21 juin 2026; la date officielle 2027 n'était pas encore publiée par IRONMAN au moment de la création du plan (4 août 2026, source: finishers.com). À confirmer et ajuster dès publication officielle."
  }
};
