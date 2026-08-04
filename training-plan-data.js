// Données du plan d'entraînement IRONMAN 70.3 Mont-Tremblant — généré par Claude Coach (v2, mode mise à jour incrémentale disponible)
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
    "updatedAt": "2026-08-04T17:27:39Z",
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
        "Musculation quasi ininterrompue depuis janvier 2026, routine fixe 2x/semaine (bas du corps+abdos / haut du corps)"
      ],
      "peakTrainingLoad": 9,
      "foundationLevel": "intermediate",
      "yearsInSport": 3
    },
    "currentForm": {
      "weeklyVolume": {
        "total": 6.5,
        "swim": 0.4,
        "bike": 2.0,
        "run": 2.5
      },
      "longestSessions": {
        "swim": 1.1,
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
        "evidence": "Routine de musculation fixe et non-négociable 2x/semaine (bas du corps+abdos, haut du corps) - excellente base de robustesse, maintenue telle quelle tout au long du plan"
      }
    ],
    "limiters": [
      {
        "sport": "swim",
        "evidence": "Capacité actuelle réelle limitée à 1000-1200m (confirmé par l'athlète), quasi aucune expérience de nage structurée. Limiteur principal pour le 70.3 (1,9km à nager) - progression volontairement très graduelle pour protéger les épaules"
      },
      {
        "sport": "bike",
        "evidence": "Volume récréatif présent (sorties 20-60km) mais aucune structure par zones ni donnée de puissance - sport à faible risque de blessure donc volume augmenté plus agressivement que la natation"
      }
    ],
    "constraints": [
      "Stage coop à temps plein automne 2026 (~semaines 5 à 20 du plan, sept-déc) - natation limitée à 1x/semaine durant cette période pour respecter le temps disponible et la progression prudente à l'épaule",
      "2 séances de musculation fixes et non-négociables chaque semaine, 60min chacune (bas du corps+abdos le lundi, haut du corps le jeudi), durée fixe qui n'augmente jamais",
      "Risque de blessure aux épaules en natation - progression de volume délibérément lente",
      "Natation en piscine seulement jusqu'au dégel (eau libre non praticable au Québec avant fin mai / début juin)"
    ]
  },
  "zones": {
    "run": {
      "hr": {
        "lthr": 182,
        "lthrSource": "Mesuré par Garmin (lactate_threshold_hr), moyenne des 5 dernières lectures juin-juillet 2026: 182, 183, 183, 180, 182 bpm.",
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
      "cssSeconds": 165,
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
      "focus": "Reconstruction aérobie post-ultra, natation 1x/semaine (progression très graduelle depuis 1000-1200m, protection des épaules), vélo dès 90min et volume croissant, musculation fixe 2x60min/semaine, course courte du mercredi avec intensité. Recouvre le stage coop (~semaines 5-20).",
      "weeklyHoursRange": {
        "low": 4.7,
        "high": 7.6
      },
      "keyWorkouts": [
        "Tests de terrain (course/vélo/natation, semaines 1-2)",
        "Natation 1x/semaine (mardi)",
        "Vélo long + court (mardi/samedi)",
        "Course qualité mercredi + longue dimanche",
        "Musculation bas du corps (lundi) + haut du corps (jeudi), 60min fixe"
      ],
      "physiologicalGoals": [
        "Rétablir l'équilibre aérobie après l'ultra du 18 juillet",
        "Construire la technique de nage prudemment à partir de 1000-1200m",
        "Développer la capillarisation et la densité mitochondriale (zone 2)",
        "Maintenir la routine de musculation existante sans interruption"
      ]
    },
    {
      "name": "Build",
      "startWeek": 21,
      "endWeek": 36,
      "focus": "Natation 2x/semaine (stage coop terminé), intensité accrue en course (intervalles seuil mercredi), vélo sweet spot, brick une semaine sur deux, musculation fixe inchangée.",
      "weeklyHoursRange": {
        "low": 6.9,
        "high": 10.1
      },
      "keyWorkouts": [
        "Natation mardi + vendredi",
        "Vélo sweet spot (mardi court) + long (samedi)",
        "Course intervalles seuil (mercredi) + longue (dimanche)",
        "Brick vélo-course (samedi, semaines alternées)"
      ],
      "physiologicalGoals": [
        "Élever le seuil lactique dans les 3 disciplines",
        "Poursuivre la progression prudente en natation vers 1900-2000m",
        "Développer la tolérance à l'effort prolongé à allure course"
      ]
    },
    {
      "name": "Peak",
      "startWeek": 37,
      "endWeek": 43,
      "focus": "Spécificité course: allure et puissance cible du 70.3, brick chaque semaine, natation en eau libre dès que possible (dégel), musculation réduite en charge mais durée inchangée.",
      "weeklyHoursRange": {
        "low": 8.3,
        "high": 11.0
      },
      "keyWorkouts": [
        "Vélo à allure course 70.3",
        "Brick hebdomadaire",
        "Natation eau libre / sighting",
        "Course VO2max/allure course (mercredi) + longue avec segment allure course (dimanche)"
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
      "focus": "Réduction progressive du volume cardio (40-60%), musculation maintenue à charge légère mais durée inchangée, courtes touches d'intensité à allure course. Course le dimanche 20 juin 2027.",
      "weeklyHoursRange": {
        "low": 3.3,
        "high": 7.7
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
      "targetHours": 5.73,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2026-08-03",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w1-lun-force",
              "sport": "strength",
              "type": "foundation",
              "name": "Musculation - bas du corps + abdos",
              "description": "Bas du corps + abdos. 3 séries x 12-15 reps: squats gobelet, fentes marchées, soulevé de terre roumain, pont fessier. Gainage: planche 3x45s, planche latérale 2x30s/côté.",
              "completed": false,
              "durationMinutes": 60
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
              "description": "Séance d'introduction en douceur: familiarisation avec l'eau, respiration bilatérale, battements de jambes avec planche. Beaucoup de pauses, aucune pression de temps ni de distance - priorité à la technique pour protéger les épaules.",
              "completed": false,
              "durationMinutes": 29,
              "distanceMeters": 1000,
              "primaryZone": "Technique"
            },
            {
              "id": "w1-mar-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance facile (2e séance)",
              "description": "Sortie ou home-trainer facile en zone 2, cadence fluide 85-95rpm. Séance courte et à faible risque - sert à augmenter le volume vélo sans stress articulaire.",
              "completed": false,
              "durationMinutes": 30,
              "distanceMeters": 12500,
              "primaryZone": "Zone 2"
            }
          ]
        },
        {
          "date": "2026-08-05",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w1-mer-run",
              "sport": "run",
              "type": "tempo",
              "name": "Course - fartlek / tempo court",
              "description": "Échauffement 10min facile. Bloc principal: 15min fartlek non structuré (30s-1min plus soutenu / 1-2min facile en alternance) OU 10min continu à allure tempo (zone 3). Retour au calme 5-10min.",
              "completed": false,
              "durationMinutes": 25,
              "distanceMeters": 4410,
              "primaryZone": "Zone 3-4"
            }
          ]
        },
        {
          "date": "2026-08-06",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w1-jeu-force",
              "sport": "strength",
              "type": "foundation",
              "name": "Musculation - haut du corps",
              "description": "Haut du corps. 3 séries x 12-15 reps: tirage horizontal, développé haltères, tirage vertical, élévations latérales légères, biceps/triceps. Gainage: dead bug 2x12/côté.",
              "completed": false,
              "durationMinutes": 60
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
              "name": "Vélo - sortie longue",
              "description": "Zone 2 stable. Sport à faible risque de blessure: volume augmenté progressivement et plus rapidement que la natation. Pratiquer l'hydratation/nutrition en continu.",
              "completed": false,
              "durationMinutes": 90,
              "distanceMeters": 37500,
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
              "durationMinutes": 50,
              "distanceMeters": 8220,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 5.73,
        "bySport": {
          "strength": {
            "sessions": 2,
            "hours": 2.0
          },
          "swim": {
            "sessions": 1,
            "hours": 0.48
          },
          "bike": {
            "sessions": 2,
            "hours": 2.0,
            "km": 50.0
          },
          "run": {
            "sessions": 2,
            "hours": 1.25,
            "km": 12.6
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
      "targetHours": 5.47,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2026-08-10",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w2-lun-force",
              "sport": "strength",
              "type": "foundation",
              "name": "Musculation - bas du corps + abdos",
              "description": "Bas du corps + abdos. 3 séries x 12-15 reps: squats gobelet, fentes marchées, soulevé de terre roumain, pont fessier. Gainage: planche 3x45s, planche latérale 2x30s/côté.",
              "completed": false,
              "durationMinutes": 60
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
              "description": "Test de terrain CSS (adapté à la distance actuelle ~1000m): 300m échauffement + 200m chrono + 5min récup active + 100m chrono. Sert à calibrer les zones de nage sans dépasser la capacité actuelle.",
              "completed": false,
              "durationMinutes": 30,
              "distanceMeters": 1050,
              "primaryZone": "Technique"
            },
            {
              "id": "w2-mar-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - test FTP/FC 20min",
              "description": "Test de terrain: 20min échauffement avec 3x1min cadence élevée, puis 20min à l'effort maximal soutenable. FC moyenne de ce bloc ≈ seuil vélo.",
              "completed": false,
              "durationMinutes": 27,
              "distanceMeters": 11200,
              "primaryZone": "Test"
            }
          ]
        },
        {
          "date": "2026-08-12",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w2-mer-run",
              "sport": "run",
              "type": "tempo",
              "name": "Course - fartlek / tempo court",
              "description": "Échauffement 10min facile. Bloc principal: 15min fartlek non structuré (30s-1min plus soutenu / 1-2min facile en alternance) OU 10min continu à allure tempo (zone 3). Retour au calme 5-10min.",
              "completed": false,
              "durationMinutes": 23,
              "distanceMeters": 4070,
              "primaryZone": "Zone 3-4"
            }
          ]
        },
        {
          "date": "2026-08-13",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w2-jeu-force",
              "sport": "strength",
              "type": "foundation",
              "name": "Musculation - haut du corps",
              "description": "Haut du corps. 3 séries x 12-15 reps: tirage horizontal, développé haltères, tirage vertical, élévations latérales légères, biceps/triceps. Gainage: dead bug 2x12/côté.",
              "completed": false,
              "durationMinutes": 60
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
              "name": "Vélo - sortie longue",
              "description": "Zone 2 stable. Sport à faible risque de blessure: volume augmenté progressivement et plus rapidement que la natation. Pratiquer l'hydratation/nutrition en continu.",
              "completed": false,
              "durationMinutes": 84,
              "distanceMeters": 35000,
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
              "durationMinutes": 44,
              "distanceMeters": 7250,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 5.47,
        "bySport": {
          "strength": {
            "sessions": 2,
            "hours": 2.0
          },
          "swim": {
            "sessions": 1,
            "hours": 0.5
          },
          "bike": {
            "sessions": 2,
            "hours": 1.85,
            "km": 46.2
          },
          "run": {
            "sessions": 2,
            "hours": 1.12,
            "km": 11.3
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
              "id": "w3-lun-force",
              "sport": "strength",
              "type": "foundation",
              "name": "Musculation - bas du corps + abdos",
              "description": "Bas du corps + abdos. 3 séries x 12-15 reps: squats gobelet, fentes marchées, soulevé de terre roumain, pont fessier. Gainage: planche 3x45s, planche latérale 2x30s/côté.",
              "completed": false,
              "durationMinutes": 60
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
              "description": "Progression très graduelle (protection des épaules). 6-8x50m technique (rattrapé, doigt qui traîne, respiration bilatérale) puis nage continue/fractionnée en zone 1-2 jusqu'à ~1050m au total. Arrêter si sensation inhabituelle à l'épaule.",
              "completed": false,
              "durationMinutes": 30,
              "distanceMeters": 1050,
              "primaryZone": "Zone 1-2"
            },
            {
              "id": "w3-mar-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance facile (2e séance)",
              "description": "Sortie ou home-trainer facile en zone 2, cadence fluide 85-95rpm. Séance courte et à faible risque - sert à augmenter le volume vélo sans stress articulaire.",
              "completed": false,
              "durationMinutes": 28,
              "distanceMeters": 11700,
              "primaryZone": "Zone 2"
            }
          ]
        },
        {
          "date": "2026-08-19",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w3-mer-run",
              "sport": "run",
              "type": "tempo",
              "name": "Course - fartlek / tempo court",
              "description": "Échauffement 10min facile. Bloc principal: 15min fartlek non structuré (30s-1min plus soutenu / 1-2min facile en alternance) OU 10min continu à allure tempo (zone 3). Retour au calme 5-10min.",
              "completed": false,
              "durationMinutes": 23,
              "distanceMeters": 4080,
              "primaryZone": "Zone 3-4"
            }
          ]
        },
        {
          "date": "2026-08-20",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w3-jeu-force",
              "sport": "strength",
              "type": "foundation",
              "name": "Musculation - haut du corps",
              "description": "Haut du corps. 3 séries x 12-15 reps: tirage horizontal, développé haltères, tirage vertical, élévations latérales légères, biceps/triceps. Gainage: dead bug 2x12/côté.",
              "completed": false,
              "durationMinutes": 60
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
              "name": "Vélo - sortie longue",
              "description": "Zone 2 stable. Sport à faible risque de blessure: volume augmenté progressivement et plus rapidement que la natation. Pratiquer l'hydratation/nutrition en continu.",
              "completed": false,
              "durationMinutes": 87,
              "distanceMeters": 36200,
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
              "durationMinutes": 42,
              "distanceMeters": 6930,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 5.5,
        "bySport": {
          "strength": {
            "sessions": 2,
            "hours": 2.0
          },
          "swim": {
            "sessions": 1,
            "hours": 0.5
          },
          "bike": {
            "sessions": 2,
            "hours": 1.92,
            "km": 47.9
          },
          "run": {
            "sessions": 2,
            "hours": 1.08,
            "km": 11.0
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
      "targetHours": 4.73,
      "isRecoveryWeek": true,
      "days": [
        {
          "date": "2026-08-24",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w4-lun-force",
              "sport": "strength",
              "type": "foundation",
              "name": "Musculation - bas du corps + abdos",
              "description": "Semaine de décharge: Bas du corps + abdos. 3 séries x 12-15 reps: squats gobelet, fentes marchées, soulevé de terre roumain, pont fessier. Gainage: planche 3x45s, planche latérale 2x30s/côté. Réduire la charge de 20-30%.",
              "completed": false,
              "durationMinutes": 60
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
              "description": "Progression très graduelle (protection des épaules). 6-8x50m technique (rattrapé, doigt qui traîne, respiration bilatérale) puis nage continue/fractionnée en zone 1-2 jusqu'à ~850m au total. Arrêter si sensation inhabituelle à l'épaule.",
              "completed": false,
              "durationMinutes": 24,
              "distanceMeters": 850,
              "primaryZone": "Zone 1-2"
            },
            {
              "id": "w4-mar-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance facile (2e séance)",
              "description": "Sortie ou home-trainer facile en zone 2, cadence fluide 85-95rpm. Séance courte et à faible risque - sert à augmenter le volume vélo sans stress articulaire.",
              "completed": false,
              "durationMinutes": 23,
              "distanceMeters": 9600,
              "primaryZone": "Zone 2"
            }
          ]
        },
        {
          "date": "2026-08-26",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w4-mer-run",
              "sport": "run",
              "type": "intervals",
              "name": "Course - facile + accélérations",
              "description": "Footing facile avec 4-6x20s accélérations progressives (strides), retour au calme complet entre chaque.",
              "completed": false,
              "durationMinutes": 20,
              "distanceMeters": 3550,
              "primaryZone": "Zone 2 + strides"
            }
          ]
        },
        {
          "date": "2026-08-27",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w4-jeu-force",
              "sport": "strength",
              "type": "foundation",
              "name": "Musculation - haut du corps",
              "description": "Semaine de décharge: Haut du corps. 3 séries x 12-15 reps: tirage horizontal, développé haltères, tirage vertical, élévations latérales légères, biceps/triceps. Gainage: dead bug 2x12/côté. Réduire la charge de 20-30%.",
              "completed": false,
              "durationMinutes": 60
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
              "name": "Vélo - sortie longue",
              "description": "Zone 2 stable. Sport à faible risque de blessure: volume augmenté progressivement et plus rapidement que la natation. Pratiquer l'hydratation/nutrition en continu.",
              "completed": false,
              "durationMinutes": 67,
              "distanceMeters": 27900,
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
              "description": "Sortie longue en zone 2, allure stable. Pratiquer la nutrition de course sur les séances >75min.",
              "completed": false,
              "durationMinutes": 30,
              "distanceMeters": 4960,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 4.73,
        "bySport": {
          "strength": {
            "sessions": 2,
            "hours": 2.0
          },
          "swim": {
            "sessions": 1,
            "hours": 0.4
          },
          "bike": {
            "sessions": 2,
            "hours": 1.5,
            "km": 37.5
          },
          "run": {
            "sessions": 2,
            "hours": 0.83,
            "km": 8.5
          }
        }
      }
    },
    {
      "weekNumber": 5,
      "startDate": "2026-08-31",
      "endDate": "2026-09-06",
      "phase": "Base",
      "focus": "Construction aérobie pendant le stage coop (natation 1x/semaine)",
      "targetHours": 5.77,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2026-08-31",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w5-lun-force",
              "sport": "strength",
              "type": "foundation",
              "name": "Musculation - bas du corps + abdos",
              "description": "Bas du corps + abdos. 3 séries x 12-15 reps: squats gobelet, fentes marchées, soulevé de terre roumain, pont fessier. Gainage: planche 3x45s, planche latérale 2x30s/côté.",
              "completed": false,
              "durationMinutes": 60
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
              "description": "Progression très graduelle (protection des épaules). 6-8x50m technique (rattrapé, doigt qui traîne, respiration bilatérale) puis nage continue/fractionnée en zone 1-2 jusqu'à ~1100m au total. Arrêter si sensation inhabituelle à l'épaule.",
              "completed": false,
              "durationMinutes": 31,
              "distanceMeters": 1100,
              "primaryZone": "Zone 1-2"
            },
            {
              "id": "w5-mar-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance facile (2e séance)",
              "description": "Sortie ou home-trainer facile en zone 2, cadence fluide 85-95rpm. Séance courte et à faible risque - sert à augmenter le volume vélo sans stress articulaire.",
              "completed": false,
              "durationMinutes": 29,
              "distanceMeters": 12100,
              "primaryZone": "Zone 2"
            }
          ]
        },
        {
          "date": "2026-09-02",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w5-mer-run",
              "sport": "run",
              "type": "tempo",
              "name": "Course - fartlek / tempo court",
              "description": "Échauffement 10min facile. Bloc principal: 15min fartlek non structuré (30s-1min plus soutenu / 1-2min facile en alternance) OU 10min continu à allure tempo (zone 3). Retour au calme 5-10min.",
              "completed": false,
              "durationMinutes": 24,
              "distanceMeters": 4270,
              "primaryZone": "Zone 3-4"
            }
          ]
        },
        {
          "date": "2026-09-03",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w5-jeu-force",
              "sport": "strength",
              "type": "foundation",
              "name": "Musculation - haut du corps",
              "description": "Haut du corps. 3 séries x 12-15 reps: tirage horizontal, développé haltères, tirage vertical, élévations latérales légères, biceps/triceps. Gainage: dead bug 2x12/côté.",
              "completed": false,
              "durationMinutes": 60
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
              "name": "Vélo - sortie longue",
              "description": "Zone 2 stable. Sport à faible risque de blessure: volume augmenté progressivement et plus rapidement que la natation. Pratiquer l'hydratation/nutrition en continu.",
              "completed": false,
              "durationMinutes": 92,
              "distanceMeters": 38300,
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
              "description": "Sortie longue en zone 2, allure stable. Pratiquer la nutrition de course sur les séances >75min.",
              "completed": false,
              "durationMinutes": 50,
              "distanceMeters": 8290,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 5.77,
        "bySport": {
          "strength": {
            "sessions": 2,
            "hours": 2.0
          },
          "swim": {
            "sessions": 1,
            "hours": 0.52
          },
          "bike": {
            "sessions": 2,
            "hours": 2.02,
            "km": 50.4
          },
          "run": {
            "sessions": 2,
            "hours": 1.23,
            "km": 12.6
          }
        }
      }
    },
    {
      "weekNumber": 6,
      "startDate": "2026-09-07",
      "endDate": "2026-09-13",
      "phase": "Base",
      "focus": "Construction aérobie pendant le stage coop (natation 1x/semaine)",
      "targetHours": 5.88,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2026-09-07",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w6-lun-force",
              "sport": "strength",
              "type": "foundation",
              "name": "Musculation - bas du corps + abdos",
              "description": "Bas du corps + abdos. 3 séries x 12-15 reps: squats gobelet, fentes marchées, soulevé de terre roumain, pont fessier. Gainage: planche 3x45s, planche latérale 2x30s/côté.",
              "completed": false,
              "durationMinutes": 60
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
              "description": "Progression très graduelle (protection des épaules). 6-8x50m technique (rattrapé, doigt qui traîne, respiration bilatérale) puis nage continue/fractionnée en zone 1-2 jusqu'à ~1150m au total. Arrêter si sensation inhabituelle à l'épaule.",
              "completed": false,
              "durationMinutes": 33,
              "distanceMeters": 1150,
              "primaryZone": "Zone 1-2"
            },
            {
              "id": "w6-mar-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance facile (2e séance)",
              "description": "Sortie ou home-trainer facile en zone 2, cadence fluide 85-95rpm. Séance courte et à faible risque - sert à augmenter le volume vélo sans stress articulaire.",
              "completed": false,
              "durationMinutes": 29,
              "distanceMeters": 12100,
              "primaryZone": "Zone 2"
            }
          ]
        },
        {
          "date": "2026-09-09",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w6-mer-run",
              "sport": "run",
              "type": "tempo",
              "name": "Course - fartlek / tempo court",
              "description": "Échauffement 10min facile. Bloc principal: 15min fartlek non structuré (30s-1min plus soutenu / 1-2min facile en alternance) OU 10min continu à allure tempo (zone 3). Retour au calme 5-10min.",
              "completed": false,
              "durationMinutes": 25,
              "distanceMeters": 4460,
              "primaryZone": "Zone 3-4"
            }
          ]
        },
        {
          "date": "2026-09-10",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w6-jeu-force",
              "sport": "strength",
              "type": "foundation",
              "name": "Musculation - haut du corps",
              "description": "Haut du corps. 3 séries x 12-15 reps: tirage horizontal, développé haltères, tirage vertical, élévations latérales légères, biceps/triceps. Gainage: dead bug 2x12/côté.",
              "completed": false,
              "durationMinutes": 60
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
              "name": "Vélo - sortie longue",
              "description": "Zone 2 stable. Sport à faible risque de blessure: volume augmenté progressivement et plus rapidement que la natation. Pratiquer l'hydratation/nutrition en continu.",
              "completed": false,
              "durationMinutes": 95,
              "distanceMeters": 39600,
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
              "description": "Sortie longue en zone 2, allure stable. Pratiquer la nutrition de course sur les séances >75min.",
              "completed": false,
              "durationMinutes": 51,
              "distanceMeters": 8480,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 5.88,
        "bySport": {
          "strength": {
            "sessions": 2,
            "hours": 2.0
          },
          "swim": {
            "sessions": 1,
            "hours": 0.55
          },
          "bike": {
            "sessions": 2,
            "hours": 2.07,
            "km": 51.7
          },
          "run": {
            "sessions": 2,
            "hours": 1.27,
            "km": 12.9
          }
        }
      }
    },
    {
      "weekNumber": 7,
      "startDate": "2026-09-14",
      "endDate": "2026-09-20",
      "phase": "Base",
      "focus": "Construction aérobie pendant le stage coop (natation 1x/semaine)",
      "targetHours": 5.95,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2026-09-14",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w7-lun-force",
              "sport": "strength",
              "type": "foundation",
              "name": "Musculation - bas du corps + abdos",
              "description": "Bas du corps + abdos. 3 séries x 12-15 reps: squats gobelet, fentes marchées, soulevé de terre roumain, pont fessier. Gainage: planche 3x45s, planche latérale 2x30s/côté.",
              "completed": false,
              "durationMinutes": 60
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
              "description": "Progression très graduelle (protection des épaules). 6-8x50m technique (rattrapé, doigt qui traîne, respiration bilatérale) puis nage continue/fractionnée en zone 1-2 jusqu'à ~1150m au total. Arrêter si sensation inhabituelle à l'épaule.",
              "completed": false,
              "durationMinutes": 32,
              "distanceMeters": 1150,
              "primaryZone": "Zone 1-2"
            },
            {
              "id": "w7-mar-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance facile (2e séance)",
              "description": "Sortie ou home-trainer facile en zone 2, cadence fluide 85-95rpm. Séance courte et à faible risque - sert à augmenter le volume vélo sans stress articulaire.",
              "completed": false,
              "durationMinutes": 30,
              "distanceMeters": 12500,
              "primaryZone": "Zone 2"
            }
          ]
        },
        {
          "date": "2026-09-16",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w7-mer-run",
              "sport": "run",
              "type": "tempo",
              "name": "Course - fartlek / tempo court",
              "description": "Échauffement 10min facile. Bloc principal: 15min fartlek non structuré (30s-1min plus soutenu / 1-2min facile en alternance) OU 10min continu à allure tempo (zone 3). Retour au calme 5-10min.",
              "completed": false,
              "durationMinutes": 25,
              "distanceMeters": 4470,
              "primaryZone": "Zone 3-4"
            }
          ]
        },
        {
          "date": "2026-09-17",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w7-jeu-force",
              "sport": "strength",
              "type": "foundation",
              "name": "Musculation - haut du corps",
              "description": "Haut du corps. 3 séries x 12-15 reps: tirage horizontal, développé haltères, tirage vertical, élévations latérales légères, biceps/triceps. Gainage: dead bug 2x12/côté.",
              "completed": false,
              "durationMinutes": 60
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
              "name": "Vélo - sortie longue",
              "description": "Zone 2 stable. Sport à faible risque de blessure: volume augmenté progressivement et plus rapidement que la natation. Pratiquer l'hydratation/nutrition en continu.",
              "completed": false,
              "durationMinutes": 98,
              "distanceMeters": 40800,
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
              "description": "Sortie longue en zone 2, allure stable. Pratiquer la nutrition de course sur les séances >75min.",
              "completed": false,
              "durationMinutes": 52,
              "distanceMeters": 8660,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 5.95,
        "bySport": {
          "strength": {
            "sessions": 2,
            "hours": 2.0
          },
          "swim": {
            "sessions": 1,
            "hours": 0.53
          },
          "bike": {
            "sessions": 2,
            "hours": 2.13,
            "km": 53.3
          },
          "run": {
            "sessions": 2,
            "hours": 1.28,
            "km": 13.1
          }
        }
      }
    },
    {
      "weekNumber": 8,
      "startDate": "2026-09-21",
      "endDate": "2026-09-27",
      "phase": "Base",
      "focus": "Construction aérobie pendant le stage coop (natation 1x/semaine) [semaine de décharge]",
      "targetHours": 5.15,
      "isRecoveryWeek": true,
      "days": [
        {
          "date": "2026-09-21",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w8-lun-force",
              "sport": "strength",
              "type": "foundation",
              "name": "Musculation - bas du corps + abdos",
              "description": "Semaine de décharge: Bas du corps + abdos. 3 séries x 12-15 reps: squats gobelet, fentes marchées, soulevé de terre roumain, pont fessier. Gainage: planche 3x45s, planche latérale 2x30s/côté. Réduire la charge de 20-30%.",
              "completed": false,
              "durationMinutes": 60
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
              "description": "Progression très graduelle (protection des épaules). 6-8x50m technique (rattrapé, doigt qui traîne, respiration bilatérale) puis nage continue/fractionnée en zone 1-2 jusqu'à ~950m au total. Arrêter si sensation inhabituelle à l'épaule.",
              "completed": false,
              "durationMinutes": 27,
              "distanceMeters": 950,
              "primaryZone": "Zone 1-2"
            },
            {
              "id": "w8-mar-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance facile (2e séance)",
              "description": "Sortie ou home-trainer facile en zone 2, cadence fluide 85-95rpm. Séance courte et à faible risque - sert à augmenter le volume vélo sans stress articulaire.",
              "completed": false,
              "durationMinutes": 24,
              "distanceMeters": 10000,
              "primaryZone": "Zone 2"
            }
          ]
        },
        {
          "date": "2026-09-23",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w8-mer-run",
              "sport": "run",
              "type": "intervals",
              "name": "Course - facile + accélérations",
              "description": "Footing facile avec 4-6x20s accélérations progressives (strides), retour au calme complet entre chaque.",
              "completed": false,
              "durationMinutes": 22,
              "distanceMeters": 3950,
              "primaryZone": "Zone 2 + strides"
            }
          ]
        },
        {
          "date": "2026-09-24",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w8-jeu-force",
              "sport": "strength",
              "type": "foundation",
              "name": "Musculation - haut du corps",
              "description": "Semaine de décharge: Haut du corps. 3 séries x 12-15 reps: tirage horizontal, développé haltères, tirage vertical, élévations latérales légères, biceps/triceps. Gainage: dead bug 2x12/côté. Réduire la charge de 20-30%.",
              "completed": false,
              "durationMinutes": 60
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
              "name": "Vélo - sortie longue",
              "description": "Zone 2 stable. Sport à faible risque de blessure: volume augmenté progressivement et plus rapidement que la natation. Pratiquer l'hydratation/nutrition en continu.",
              "completed": false,
              "durationMinutes": 76,
              "distanceMeters": 31700,
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
              "description": "Sortie longue en zone 2, allure stable. Pratiquer la nutrition de course sur les séances >75min.",
              "completed": false,
              "durationMinutes": 40,
              "distanceMeters": 6680,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 5.15,
        "bySport": {
          "strength": {
            "sessions": 2,
            "hours": 2.0
          },
          "swim": {
            "sessions": 1,
            "hours": 0.45
          },
          "bike": {
            "sessions": 2,
            "hours": 1.67,
            "km": 41.7
          },
          "run": {
            "sessions": 2,
            "hours": 1.03,
            "km": 10.6
          }
        }
      }
    },
    {
      "weekNumber": 9,
      "startDate": "2026-09-28",
      "endDate": "2026-10-04",
      "phase": "Base",
      "focus": "Construction aérobie pendant le stage coop (natation 1x/semaine)",
      "targetHours": 6.17,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2026-09-28",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w9-lun-force",
              "sport": "strength",
              "type": "foundation",
              "name": "Musculation - bas du corps + abdos",
              "description": "Bas du corps + abdos. 3 séries x 12-15 reps: squats gobelet, fentes marchées, soulevé de terre roumain, pont fessier. Gainage: planche 3x45s, planche latérale 2x30s/côté.",
              "completed": false,
              "durationMinutes": 60
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
              "description": "Progression très graduelle (protection des épaules). 6-8x50m technique (rattrapé, doigt qui traîne, respiration bilatérale) puis nage continue/fractionnée en zone 1-2 jusqu'à ~1200m au total. Arrêter si sensation inhabituelle à l'épaule.",
              "completed": false,
              "durationMinutes": 33,
              "distanceMeters": 1200,
              "primaryZone": "Zone 1-2"
            },
            {
              "id": "w9-mar-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance facile (2e séance)",
              "description": "Sortie ou home-trainer facile en zone 2, cadence fluide 85-95rpm. Séance courte et à faible risque - sert à augmenter le volume vélo sans stress articulaire.",
              "completed": false,
              "durationMinutes": 31,
              "distanceMeters": 12900,
              "primaryZone": "Zone 2"
            }
          ]
        },
        {
          "date": "2026-09-30",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w9-mer-run",
              "sport": "run",
              "type": "tempo",
              "name": "Course - fartlek / tempo court",
              "description": "Échauffement 10min facile. Bloc principal: 15min fartlek non structuré (30s-1min plus soutenu / 1-2min facile en alternance) OU 10min continu à allure tempo (zone 3). Retour au calme 5-10min.",
              "completed": false,
              "durationMinutes": 26,
              "distanceMeters": 4680,
              "primaryZone": "Zone 3-4"
            }
          ]
        },
        {
          "date": "2026-10-01",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w9-jeu-force",
              "sport": "strength",
              "type": "foundation",
              "name": "Musculation - haut du corps",
              "description": "Haut du corps. 3 séries x 12-15 reps: tirage horizontal, développé haltères, tirage vertical, élévations latérales légères, biceps/triceps. Gainage: dead bug 2x12/côté.",
              "completed": false,
              "durationMinutes": 60
            }
          ]
        },
        {
          "date": "2026-10-02",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w9-ven-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
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
              "name": "Vélo - sortie longue",
              "description": "Zone 2 stable. Sport à faible risque de blessure: volume augmenté progressivement et plus rapidement que la natation. Pratiquer l'hydratation/nutrition en continu.",
              "completed": false,
              "durationMinutes": 104,
              "distanceMeters": 43300,
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
              "description": "Sortie longue en zone 2, allure stable. Pratiquer la nutrition de course sur les séances >75min.",
              "completed": false,
              "durationMinutes": 56,
              "distanceMeters": 9370,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 6.17,
        "bySport": {
          "strength": {
            "sessions": 2,
            "hours": 2.0
          },
          "swim": {
            "sessions": 1,
            "hours": 0.55
          },
          "bike": {
            "sessions": 2,
            "hours": 2.25,
            "km": 56.2
          },
          "run": {
            "sessions": 2,
            "hours": 1.37,
            "km": 14.0
          }
        }
      }
    },
    {
      "weekNumber": 10,
      "startDate": "2026-10-05",
      "endDate": "2026-10-11",
      "phase": "Base",
      "focus": "Construction aérobie pendant le stage coop (natation 1x/semaine)",
      "targetHours": 6.67,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2026-10-05",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w10-lun-force",
              "sport": "strength",
              "type": "foundation",
              "name": "Musculation - bas du corps + abdos",
              "description": "Bas du corps + abdos. 3 séries x 12-15 reps: squats gobelet, fentes marchées, soulevé de terre roumain, pont fessier. Gainage: planche 3x45s, planche latérale 2x30s/côté.",
              "completed": false,
              "durationMinutes": 60
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
              "description": "Progression très graduelle (protection des épaules). 6-8x50m technique (rattrapé, doigt qui traîne, respiration bilatérale) puis nage continue/fractionnée en zone 1-2 jusqu'à ~1250m au total. Arrêter si sensation inhabituelle à l'épaule.",
              "completed": false,
              "durationMinutes": 34,
              "distanceMeters": 1250,
              "primaryZone": "Zone 1-2"
            },
            {
              "id": "w10-mar-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance facile (2e séance)",
              "description": "Sortie ou home-trainer facile en zone 2, cadence fluide 85-95rpm. Séance courte et à faible risque - sert à augmenter le volume vélo sans stress articulaire.",
              "completed": false,
              "durationMinutes": 35,
              "distanceMeters": 14600,
              "primaryZone": "Zone 2"
            }
          ]
        },
        {
          "date": "2026-10-07",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w10-mer-run",
              "sport": "run",
              "type": "tempo",
              "name": "Course - fartlek / tempo court",
              "description": "Échauffement 10min facile. Bloc principal: 15min fartlek non structuré (30s-1min plus soutenu / 1-2min facile en alternance) OU 10min continu à allure tempo (zone 3). Retour au calme 5-10min.",
              "completed": false,
              "durationMinutes": 30,
              "distanceMeters": 5410,
              "primaryZone": "Zone 3-4"
            }
          ]
        },
        {
          "date": "2026-10-08",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w10-jeu-force",
              "sport": "strength",
              "type": "foundation",
              "name": "Musculation - haut du corps",
              "description": "Haut du corps. 3 séries x 12-15 reps: tirage horizontal, développé haltères, tirage vertical, élévations latérales légères, biceps/triceps. Gainage: dead bug 2x12/côté.",
              "completed": false,
              "durationMinutes": 60
            }
          ]
        },
        {
          "date": "2026-10-09",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w10-ven-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
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
              "name": "Vélo - sortie longue",
              "description": "Zone 2 stable. Sport à faible risque de blessure: volume augmenté progressivement et plus rapidement que la natation. Pratiquer l'hydratation/nutrition en continu.",
              "completed": false,
              "durationMinutes": 118,
              "distanceMeters": 49200,
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
              "description": "Sortie longue en zone 2, allure stable. Pratiquer la nutrition de course sur les séances >75min.",
              "completed": false,
              "durationMinutes": 63,
              "distanceMeters": 10560,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 6.67,
        "bySport": {
          "strength": {
            "sessions": 2,
            "hours": 2.0
          },
          "swim": {
            "sessions": 1,
            "hours": 0.57
          },
          "bike": {
            "sessions": 2,
            "hours": 2.55,
            "km": 63.8
          },
          "run": {
            "sessions": 2,
            "hours": 1.55,
            "km": 16.0
          }
        }
      }
    },
    {
      "weekNumber": 11,
      "startDate": "2026-10-12",
      "endDate": "2026-10-18",
      "phase": "Base",
      "focus": "Construction aérobie pendant le stage coop (natation 1x/semaine)",
      "targetHours": 6.77,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2026-10-12",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w11-lun-force",
              "sport": "strength",
              "type": "foundation",
              "name": "Musculation - bas du corps + abdos",
              "description": "Bas du corps + abdos. 3 séries x 12-15 reps: squats gobelet, fentes marchées, soulevé de terre roumain, pont fessier. Gainage: planche 3x45s, planche latérale 2x30s/côté.",
              "completed": false,
              "durationMinutes": 60
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
              "description": "Progression très graduelle (protection des épaules). 6-8x50m technique (rattrapé, doigt qui traîne, respiration bilatérale) puis nage continue/fractionnée en zone 1-2 jusqu'à ~1250m au total. Arrêter si sensation inhabituelle à l'épaule.",
              "completed": false,
              "durationMinutes": 34,
              "distanceMeters": 1250,
              "primaryZone": "Zone 1-2"
            },
            {
              "id": "w11-mar-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance facile (2e séance)",
              "description": "Sortie ou home-trainer facile en zone 2, cadence fluide 85-95rpm. Séance courte et à faible risque - sert à augmenter le volume vélo sans stress articulaire.",
              "completed": false,
              "durationMinutes": 35,
              "distanceMeters": 14600,
              "primaryZone": "Zone 2"
            }
          ]
        },
        {
          "date": "2026-10-14",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w11-mer-run",
              "sport": "run",
              "type": "tempo",
              "name": "Course - fartlek / tempo court",
              "description": "Échauffement 10min facile. Bloc principal: 15min fartlek non structuré (30s-1min plus soutenu / 1-2min facile en alternance) OU 10min continu à allure tempo (zone 3). Retour au calme 5-10min.",
              "completed": false,
              "durationMinutes": 30,
              "distanceMeters": 5420,
              "primaryZone": "Zone 3-4"
            }
          ]
        },
        {
          "date": "2026-10-15",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w11-jeu-force",
              "sport": "strength",
              "type": "foundation",
              "name": "Musculation - haut du corps",
              "description": "Haut du corps. 3 séries x 12-15 reps: tirage horizontal, développé haltères, tirage vertical, élévations latérales légères, biceps/triceps. Gainage: dead bug 2x12/côté.",
              "completed": false,
              "durationMinutes": 60
            }
          ]
        },
        {
          "date": "2026-10-16",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w11-ven-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
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
              "name": "Vélo - sortie longue",
              "description": "Zone 2 stable. Sport à faible risque de blessure: volume augmenté progressivement et plus rapidement que la natation. Pratiquer l'hydratation/nutrition en continu.",
              "completed": false,
              "durationMinutes": 122,
              "distanceMeters": 50800,
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
              "description": "Sortie longue en zone 2, allure stable. Pratiquer la nutrition de course sur les séances >75min.",
              "completed": false,
              "durationMinutes": 65,
              "distanceMeters": 10920,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 6.77,
        "bySport": {
          "strength": {
            "sessions": 2,
            "hours": 2.0
          },
          "swim": {
            "sessions": 1,
            "hours": 0.57
          },
          "bike": {
            "sessions": 2,
            "hours": 2.62,
            "km": 65.4
          },
          "run": {
            "sessions": 2,
            "hours": 1.58,
            "km": 16.3
          }
        }
      }
    },
    {
      "weekNumber": 12,
      "startDate": "2026-10-19",
      "endDate": "2026-10-25",
      "phase": "Base",
      "focus": "Construction aérobie pendant le stage coop (natation 1x/semaine) [semaine de décharge]",
      "targetHours": 5.8,
      "isRecoveryWeek": true,
      "days": [
        {
          "date": "2026-10-19",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w12-lun-force",
              "sport": "strength",
              "type": "foundation",
              "name": "Musculation - bas du corps + abdos",
              "description": "Semaine de décharge: Bas du corps + abdos. 3 séries x 12-15 reps: squats gobelet, fentes marchées, soulevé de terre roumain, pont fessier. Gainage: planche 3x45s, planche latérale 2x30s/côté. Réduire la charge de 20-30%.",
              "completed": false,
              "durationMinutes": 60
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
              "description": "Progression très graduelle (protection des épaules). 6-8x50m technique (rattrapé, doigt qui traîne, respiration bilatérale) puis nage continue/fractionnée en zone 1-2 jusqu'à ~1050m au total. Arrêter si sensation inhabituelle à l'épaule.",
              "completed": false,
              "durationMinutes": 29,
              "distanceMeters": 1050,
              "primaryZone": "Zone 1-2"
            },
            {
              "id": "w12-mar-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance facile (2e séance)",
              "description": "Sortie ou home-trainer facile en zone 2, cadence fluide 85-95rpm. Séance courte et à faible risque - sert à augmenter le volume vélo sans stress articulaire.",
              "completed": false,
              "durationMinutes": 29,
              "distanceMeters": 12100,
              "primaryZone": "Zone 2"
            }
          ]
        },
        {
          "date": "2026-10-21",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w12-mer-run",
              "sport": "run",
              "type": "intervals",
              "name": "Course - facile + accélérations",
              "description": "Footing facile avec 4-6x20s accélérations progressives (strides), retour au calme complet entre chaque.",
              "completed": false,
              "durationMinutes": 26,
              "distanceMeters": 4710,
              "primaryZone": "Zone 2 + strides"
            }
          ]
        },
        {
          "date": "2026-10-22",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w12-jeu-force",
              "sport": "strength",
              "type": "foundation",
              "name": "Musculation - haut du corps",
              "description": "Semaine de décharge: Haut du corps. 3 séries x 12-15 reps: tirage horizontal, développé haltères, tirage vertical, élévations latérales légères, biceps/triceps. Gainage: dead bug 2x12/côté. Réduire la charge de 20-30%.",
              "completed": false,
              "durationMinutes": 60
            }
          ]
        },
        {
          "date": "2026-10-23",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w12-ven-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
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
              "name": "Vélo - sortie longue",
              "description": "Zone 2 stable. Sport à faible risque de blessure: volume augmenté progressivement et plus rapidement que la natation. Pratiquer l'hydratation/nutrition en continu.",
              "completed": false,
              "durationMinutes": 94,
              "distanceMeters": 39200,
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
              "description": "Sortie longue en zone 2, allure stable. Pratiquer la nutrition de course sur les séances >75min.",
              "completed": false,
              "durationMinutes": 50,
              "distanceMeters": 8420,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 5.8,
        "bySport": {
          "strength": {
            "sessions": 2,
            "hours": 2.0
          },
          "swim": {
            "sessions": 1,
            "hours": 0.48
          },
          "bike": {
            "sessions": 2,
            "hours": 2.05,
            "km": 51.3
          },
          "run": {
            "sessions": 2,
            "hours": 1.27,
            "km": 13.1
          }
        }
      }
    },
    {
      "weekNumber": 13,
      "startDate": "2026-10-26",
      "endDate": "2026-11-01",
      "phase": "Base",
      "focus": "Construction aérobie pendant le stage coop (natation 1x/semaine)",
      "targetHours": 6.97,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2026-10-26",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w13-lun-force",
              "sport": "strength",
              "type": "foundation",
              "name": "Musculation - bas du corps + abdos",
              "description": "Bas du corps + abdos. 3 séries x 12-15 reps: squats gobelet, fentes marchées, soulevé de terre roumain, pont fessier. Gainage: planche 3x45s, planche latérale 2x30s/côté.",
              "completed": false,
              "durationMinutes": 60
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
              "description": "Progression très graduelle (protection des épaules). 6-8x50m technique (rattrapé, doigt qui traîne, respiration bilatérale) puis nage continue/fractionnée en zone 1-2 jusqu'à ~1300m au total. Arrêter si sensation inhabituelle à l'épaule.",
              "completed": false,
              "durationMinutes": 35,
              "distanceMeters": 1300,
              "primaryZone": "Zone 1-2"
            },
            {
              "id": "w13-mar-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance facile (2e séance)",
              "description": "Sortie ou home-trainer facile en zone 2, cadence fluide 85-95rpm. Séance courte et à faible risque - sert à augmenter le volume vélo sans stress articulaire.",
              "completed": false,
              "durationMinutes": 36,
              "distanceMeters": 15000,
              "primaryZone": "Zone 2"
            }
          ]
        },
        {
          "date": "2026-10-28",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w13-mer-run",
              "sport": "run",
              "type": "tempo",
              "name": "Course - fartlek / tempo court",
              "description": "Échauffement 10min facile. Bloc principal: 15min fartlek non structuré (30s-1min plus soutenu / 1-2min facile en alternance) OU 10min continu à allure tempo (zone 3). Retour au calme 5-10min.",
              "completed": false,
              "durationMinutes": 31,
              "distanceMeters": 5630,
              "primaryZone": "Zone 3-4"
            }
          ]
        },
        {
          "date": "2026-10-29",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w13-jeu-force",
              "sport": "strength",
              "type": "foundation",
              "name": "Musculation - haut du corps",
              "description": "Haut du corps. 3 séries x 12-15 reps: tirage horizontal, développé haltères, tirage vertical, élévations latérales légères, biceps/triceps. Gainage: dead bug 2x12/côté.",
              "completed": false,
              "durationMinutes": 60
            }
          ]
        },
        {
          "date": "2026-10-30",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w13-ven-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
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
              "name": "Vélo - sortie longue",
              "description": "Zone 2 stable. Sport à faible risque de blessure: volume augmenté progressivement et plus rapidement que la natation. Pratiquer l'hydratation/nutrition en continu.",
              "completed": false,
              "durationMinutes": 128,
              "distanceMeters": 53300,
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
              "description": "Sortie longue en zone 2, allure stable. Pratiquer la nutrition de course sur les séances >75min.",
              "completed": false,
              "durationMinutes": 68,
              "distanceMeters": 11480,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 6.97,
        "bySport": {
          "strength": {
            "sessions": 2,
            "hours": 2.0
          },
          "swim": {
            "sessions": 1,
            "hours": 0.58
          },
          "bike": {
            "sessions": 2,
            "hours": 2.73,
            "km": 68.3
          },
          "run": {
            "sessions": 2,
            "hours": 1.65,
            "km": 17.1
          }
        }
      }
    },
    {
      "weekNumber": 14,
      "startDate": "2026-11-02",
      "endDate": "2026-11-08",
      "phase": "Base",
      "focus": "Construction aérobie pendant le stage coop (natation 1x/semaine)",
      "targetHours": 7.1,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2026-11-02",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w14-lun-force",
              "sport": "strength",
              "type": "foundation",
              "name": "Musculation - bas du corps + abdos",
              "description": "Bas du corps + abdos. 3 séries x 12-15 reps: squats gobelet, fentes marchées, soulevé de terre roumain, pont fessier. Gainage: planche 3x45s, planche latérale 2x30s/côté.",
              "completed": false,
              "durationMinutes": 60
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
              "description": "Progression très graduelle (protection des épaules). 6-8x50m technique (rattrapé, doigt qui traîne, respiration bilatérale) puis nage continue/fractionnée en zone 1-2 jusqu'à ~1350m au total. Arrêter si sensation inhabituelle à l'épaule.",
              "completed": false,
              "durationMinutes": 36,
              "distanceMeters": 1350,
              "primaryZone": "Zone 1-2"
            },
            {
              "id": "w14-mar-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance facile (2e séance)",
              "description": "Sortie ou home-trainer facile en zone 2, cadence fluide 85-95rpm. Séance courte et à faible risque - sert à augmenter le volume vélo sans stress articulaire.",
              "completed": false,
              "durationMinutes": 37,
              "distanceMeters": 15400,
              "primaryZone": "Zone 2"
            }
          ]
        },
        {
          "date": "2026-11-04",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w14-mer-run",
              "sport": "run",
              "type": "tempo",
              "name": "Course - fartlek / tempo court",
              "description": "Échauffement 10min facile. Bloc principal: 15min fartlek non structuré (30s-1min plus soutenu / 1-2min facile en alternance) OU 10min continu à allure tempo (zone 3). Retour au calme 5-10min.",
              "completed": false,
              "durationMinutes": 32,
              "distanceMeters": 5820,
              "primaryZone": "Zone 3-4"
            }
          ]
        },
        {
          "date": "2026-11-05",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w14-jeu-force",
              "sport": "strength",
              "type": "foundation",
              "name": "Musculation - haut du corps",
              "description": "Haut du corps. 3 séries x 12-15 reps: tirage horizontal, développé haltères, tirage vertical, élévations latérales légères, biceps/triceps. Gainage: dead bug 2x12/côté.",
              "completed": false,
              "durationMinutes": 60
            }
          ]
        },
        {
          "date": "2026-11-06",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w14-ven-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
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
              "name": "Vélo - sortie longue",
              "description": "Zone 2 stable. Sport à faible risque de blessure: volume augmenté progressivement et plus rapidement que la natation. Pratiquer l'hydratation/nutrition en continu.",
              "completed": false,
              "durationMinutes": 131,
              "distanceMeters": 54600,
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
              "description": "Sortie longue en zone 2, allure stable. Pratiquer la nutrition de course sur les séances >75min.",
              "completed": false,
              "durationMinutes": 70,
              "distanceMeters": 11840,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 7.1,
        "bySport": {
          "strength": {
            "sessions": 2,
            "hours": 2.0
          },
          "swim": {
            "sessions": 1,
            "hours": 0.6
          },
          "bike": {
            "sessions": 2,
            "hours": 2.8,
            "km": 70.0
          },
          "run": {
            "sessions": 2,
            "hours": 1.7,
            "km": 17.7
          }
        }
      }
    },
    {
      "weekNumber": 15,
      "startDate": "2026-11-09",
      "endDate": "2026-11-15",
      "phase": "Base",
      "focus": "Construction aérobie pendant le stage coop (natation 1x/semaine)",
      "targetHours": 7.18,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2026-11-09",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w15-lun-force",
              "sport": "strength",
              "type": "foundation",
              "name": "Musculation - bas du corps + abdos",
              "description": "Bas du corps + abdos. 3 séries x 12-15 reps: squats gobelet, fentes marchées, soulevé de terre roumain, pont fessier. Gainage: planche 3x45s, planche latérale 2x30s/côté.",
              "completed": false,
              "durationMinutes": 60
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
              "description": "Progression très graduelle (protection des épaules). 6-8x50m technique (rattrapé, doigt qui traîne, respiration bilatérale) puis nage continue/fractionnée en zone 1-2 jusqu'à ~1350m au total. Arrêter si sensation inhabituelle à l'épaule.",
              "completed": false,
              "durationMinutes": 36,
              "distanceMeters": 1350,
              "primaryZone": "Zone 1-2"
            },
            {
              "id": "w15-mar-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance facile (2e séance)",
              "description": "Sortie ou home-trainer facile en zone 2, cadence fluide 85-95rpm. Séance courte et à faible risque - sert à augmenter le volume vélo sans stress articulaire.",
              "completed": false,
              "durationMinutes": 37,
              "distanceMeters": 15400,
              "primaryZone": "Zone 2"
            }
          ]
        },
        {
          "date": "2026-11-11",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w15-mer-run",
              "sport": "run",
              "type": "tempo",
              "name": "Course - fartlek / tempo court",
              "description": "Échauffement 10min facile. Bloc principal: 15min fartlek non structuré (30s-1min plus soutenu / 1-2min facile en alternance) OU 10min continu à allure tempo (zone 3). Retour au calme 5-10min.",
              "completed": false,
              "durationMinutes": 32,
              "distanceMeters": 5840,
              "primaryZone": "Zone 3-4"
            }
          ]
        },
        {
          "date": "2026-11-12",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w15-jeu-force",
              "sport": "strength",
              "type": "foundation",
              "name": "Musculation - haut du corps",
              "description": "Haut du corps. 3 séries x 12-15 reps: tirage horizontal, développé haltères, tirage vertical, élévations latérales légères, biceps/triceps. Gainage: dead bug 2x12/côté.",
              "completed": false,
              "durationMinutes": 60
            }
          ]
        },
        {
          "date": "2026-11-13",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w15-ven-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
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
              "name": "Vélo - sortie longue",
              "description": "Zone 2 stable. Sport à faible risque de blessure: volume augmenté progressivement et plus rapidement que la natation. Pratiquer l'hydratation/nutrition en continu.",
              "completed": false,
              "durationMinutes": 134,
              "distanceMeters": 55800,
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
              "description": "Sortie longue en zone 2, allure stable. Pratiquer la nutrition de course sur les séances >75min.",
              "completed": false,
              "durationMinutes": 72,
              "distanceMeters": 12210,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 7.18,
        "bySport": {
          "strength": {
            "sessions": 2,
            "hours": 2.0
          },
          "swim": {
            "sessions": 1,
            "hours": 0.6
          },
          "bike": {
            "sessions": 2,
            "hours": 2.85,
            "km": 71.2
          },
          "run": {
            "sessions": 2,
            "hours": 1.73,
            "km": 18.1
          }
        }
      }
    },
    {
      "weekNumber": 16,
      "startDate": "2026-11-16",
      "endDate": "2026-11-22",
      "phase": "Base",
      "focus": "Construction aérobie pendant le stage coop (natation 1x/semaine) [semaine de décharge]",
      "targetHours": 6.08,
      "isRecoveryWeek": true,
      "days": [
        {
          "date": "2026-11-16",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w16-lun-force",
              "sport": "strength",
              "type": "foundation",
              "name": "Musculation - bas du corps + abdos",
              "description": "Semaine de décharge: Bas du corps + abdos. 3 séries x 12-15 reps: squats gobelet, fentes marchées, soulevé de terre roumain, pont fessier. Gainage: planche 3x45s, planche latérale 2x30s/côté. Réduire la charge de 20-30%.",
              "completed": false,
              "durationMinutes": 60
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
              "description": "Progression très graduelle (protection des épaules). 6-8x50m technique (rattrapé, doigt qui traîne, respiration bilatérale) puis nage continue/fractionnée en zone 1-2 jusqu'à ~1100m au total. Arrêter si sensation inhabituelle à l'épaule.",
              "completed": false,
              "durationMinutes": 29,
              "distanceMeters": 1100,
              "primaryZone": "Zone 1-2"
            },
            {
              "id": "w16-mar-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance facile (2e séance)",
              "description": "Sortie ou home-trainer facile en zone 2, cadence fluide 85-95rpm. Séance courte et à faible risque - sert à augmenter le volume vélo sans stress articulaire.",
              "completed": false,
              "durationMinutes": 30,
              "distanceMeters": 12500,
              "primaryZone": "Zone 2"
            }
          ]
        },
        {
          "date": "2026-11-18",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w16-mer-run",
              "sport": "run",
              "type": "intervals",
              "name": "Course - facile + accélérations",
              "description": "Footing facile avec 4-6x20s accélérations progressives (strides), retour au calme complet entre chaque.",
              "completed": false,
              "durationMinutes": 28,
              "distanceMeters": 5120,
              "primaryZone": "Zone 2 + strides"
            }
          ]
        },
        {
          "date": "2026-11-19",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w16-jeu-force",
              "sport": "strength",
              "type": "foundation",
              "name": "Musculation - haut du corps",
              "description": "Semaine de décharge: Haut du corps. 3 séries x 12-15 reps: tirage horizontal, développé haltères, tirage vertical, élévations latérales légères, biceps/triceps. Gainage: dead bug 2x12/côté. Réduire la charge de 20-30%.",
              "completed": false,
              "durationMinutes": 60
            }
          ]
        },
        {
          "date": "2026-11-20",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w16-ven-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
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
              "name": "Vélo - sortie longue",
              "description": "Zone 2 stable. Sport à faible risque de blessure: volume augmenté progressivement et plus rapidement que la natation. Pratiquer l'hydratation/nutrition en continu.",
              "completed": false,
              "durationMinutes": 103,
              "distanceMeters": 42900,
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
              "description": "Sortie longue en zone 2, allure stable. Pratiquer la nutrition de course sur les séances >75min.",
              "completed": false,
              "durationMinutes": 55,
              "distanceMeters": 9340,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 6.08,
        "bySport": {
          "strength": {
            "sessions": 2,
            "hours": 2.0
          },
          "swim": {
            "sessions": 1,
            "hours": 0.48
          },
          "bike": {
            "sessions": 2,
            "hours": 2.22,
            "km": 55.4
          },
          "run": {
            "sessions": 2,
            "hours": 1.38,
            "km": 14.5
          }
        }
      }
    },
    {
      "weekNumber": 17,
      "startDate": "2026-11-23",
      "endDate": "2026-11-29",
      "phase": "Base",
      "focus": "Construction aérobie pendant le stage coop (natation 1x/semaine)",
      "targetHours": 7.4,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2026-11-23",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w17-lun-force",
              "sport": "strength",
              "type": "foundation",
              "name": "Musculation - bas du corps + abdos",
              "description": "Bas du corps + abdos. 3 séries x 12-15 reps: squats gobelet, fentes marchées, soulevé de terre roumain, pont fessier. Gainage: planche 3x45s, planche latérale 2x30s/côté.",
              "completed": false,
              "durationMinutes": 60
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
              "description": "Progression très graduelle (protection des épaules). 6-8x50m technique (rattrapé, doigt qui traîne, respiration bilatérale) puis nage continue/fractionnée en zone 1-2 jusqu'à ~1400m au total. Arrêter si sensation inhabituelle à l'épaule.",
              "completed": false,
              "durationMinutes": 37,
              "distanceMeters": 1400,
              "primaryZone": "Zone 1-2"
            },
            {
              "id": "w17-mar-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance facile (2e séance)",
              "description": "Sortie ou home-trainer facile en zone 2, cadence fluide 85-95rpm. Séance courte et à faible risque - sert à augmenter le volume vélo sans stress articulaire.",
              "completed": false,
              "durationMinutes": 38,
              "distanceMeters": 15800,
              "primaryZone": "Zone 2"
            }
          ]
        },
        {
          "date": "2026-11-25",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w17-mer-run",
              "sport": "run",
              "type": "tempo",
              "name": "Course - fartlek / tempo court",
              "description": "Échauffement 10min facile. Bloc principal: 15min fartlek non structuré (30s-1min plus soutenu / 1-2min facile en alternance) OU 10min continu à allure tempo (zone 3). Retour au calme 5-10min.",
              "completed": false,
              "durationMinutes": 33,
              "distanceMeters": 6050,
              "primaryZone": "Zone 3-4"
            }
          ]
        },
        {
          "date": "2026-11-26",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w17-jeu-force",
              "sport": "strength",
              "type": "foundation",
              "name": "Musculation - haut du corps",
              "description": "Haut du corps. 3 séries x 12-15 reps: tirage horizontal, développé haltères, tirage vertical, élévations latérales légères, biceps/triceps. Gainage: dead bug 2x12/côté.",
              "completed": false,
              "durationMinutes": 60
            }
          ]
        },
        {
          "date": "2026-11-27",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w17-ven-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
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
              "name": "Vélo - sortie longue",
              "description": "Zone 2 stable. Sport à faible risque de blessure: volume augmenté progressivement et plus rapidement que la natation. Pratiquer l'hydratation/nutrition en continu.",
              "completed": false,
              "durationMinutes": 141,
              "distanceMeters": 58800,
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
              "description": "Sortie longue en zone 2, allure stable. Pratiquer la nutrition de course sur les séances >75min.",
              "completed": false,
              "durationMinutes": 75,
              "distanceMeters": 12770,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 7.4,
        "bySport": {
          "strength": {
            "sessions": 2,
            "hours": 2.0
          },
          "swim": {
            "sessions": 1,
            "hours": 0.62
          },
          "bike": {
            "sessions": 2,
            "hours": 2.98,
            "km": 74.6
          },
          "run": {
            "sessions": 2,
            "hours": 1.8,
            "km": 18.8
          }
        }
      }
    },
    {
      "weekNumber": 18,
      "startDate": "2026-11-30",
      "endDate": "2026-12-06",
      "phase": "Base",
      "focus": "Construction aérobie pendant le stage coop (natation 1x/semaine)",
      "targetHours": 7.53,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2026-11-30",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w18-lun-force",
              "sport": "strength",
              "type": "foundation",
              "name": "Musculation - bas du corps + abdos",
              "description": "Bas du corps + abdos. 3 séries x 12-15 reps: squats gobelet, fentes marchées, soulevé de terre roumain, pont fessier. Gainage: planche 3x45s, planche latérale 2x30s/côté.",
              "completed": false,
              "durationMinutes": 60
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
              "description": "Progression très graduelle (protection des épaules). 6-8x50m technique (rattrapé, doigt qui traîne, respiration bilatérale) puis nage continue/fractionnée en zone 1-2 jusqu'à ~1450m au total. Arrêter si sensation inhabituelle à l'épaule.",
              "completed": false,
              "durationMinutes": 38,
              "distanceMeters": 1450,
              "primaryZone": "Zone 1-2"
            },
            {
              "id": "w18-mar-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance facile (2e séance)",
              "description": "Sortie ou home-trainer facile en zone 2, cadence fluide 85-95rpm. Séance courte et à faible risque - sert à augmenter le volume vélo sans stress articulaire.",
              "completed": false,
              "durationMinutes": 39,
              "distanceMeters": 16200,
              "primaryZone": "Zone 2"
            }
          ]
        },
        {
          "date": "2026-12-02",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w18-mer-run",
              "sport": "run",
              "type": "tempo",
              "name": "Course - fartlek / tempo court",
              "description": "Échauffement 10min facile. Bloc principal: 15min fartlek non structuré (30s-1min plus soutenu / 1-2min facile en alternance) OU 10min continu à allure tempo (zone 3). Retour au calme 5-10min.",
              "completed": false,
              "durationMinutes": 34,
              "distanceMeters": 6250,
              "primaryZone": "Zone 3-4"
            }
          ]
        },
        {
          "date": "2026-12-03",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w18-jeu-force",
              "sport": "strength",
              "type": "foundation",
              "name": "Musculation - haut du corps",
              "description": "Haut du corps. 3 séries x 12-15 reps: tirage horizontal, développé haltères, tirage vertical, élévations latérales légères, biceps/triceps. Gainage: dead bug 2x12/côté.",
              "completed": false,
              "durationMinutes": 60
            }
          ]
        },
        {
          "date": "2026-12-04",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w18-ven-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
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
              "name": "Vélo - sortie longue",
              "description": "Zone 2 stable. Sport à faible risque de blessure: volume augmenté progressivement et plus rapidement que la natation. Pratiquer l'hydratation/nutrition en continu.",
              "completed": false,
              "durationMinutes": 144,
              "distanceMeters": 60000,
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
              "description": "Sortie longue en zone 2, allure stable. Pratiquer la nutrition de course sur les séances >75min.",
              "completed": false,
              "durationMinutes": 77,
              "distanceMeters": 13140,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 7.53,
        "bySport": {
          "strength": {
            "sessions": 2,
            "hours": 2.0
          },
          "swim": {
            "sessions": 1,
            "hours": 0.63
          },
          "bike": {
            "sessions": 2,
            "hours": 3.05,
            "km": 76.2
          },
          "run": {
            "sessions": 2,
            "hours": 1.85,
            "km": 19.4
          }
        }
      }
    },
    {
      "weekNumber": 19,
      "startDate": "2026-12-07",
      "endDate": "2026-12-13",
      "phase": "Base",
      "focus": "Construction aérobie pendant le stage coop (natation 1x/semaine)",
      "targetHours": 7.6,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2026-12-07",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w19-lun-force",
              "sport": "strength",
              "type": "foundation",
              "name": "Musculation - bas du corps + abdos",
              "description": "Bas du corps + abdos. 3 séries x 12-15 reps: squats gobelet, fentes marchées, soulevé de terre roumain, pont fessier. Gainage: planche 3x45s, planche latérale 2x30s/côté.",
              "completed": false,
              "durationMinutes": 60
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
              "description": "Progression très graduelle (protection des épaules). 6-8x50m technique (rattrapé, doigt qui traîne, respiration bilatérale) puis nage continue/fractionnée en zone 1-2 jusqu'à ~1450m au total. Arrêter si sensation inhabituelle à l'épaule.",
              "completed": false,
              "durationMinutes": 38,
              "distanceMeters": 1450,
              "primaryZone": "Zone 1-2"
            },
            {
              "id": "w19-mar-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance facile (2e séance)",
              "description": "Sortie ou home-trainer facile en zone 2, cadence fluide 85-95rpm. Séance courte et à faible risque - sert à augmenter le volume vélo sans stress articulaire.",
              "completed": false,
              "durationMinutes": 39,
              "distanceMeters": 16200,
              "primaryZone": "Zone 2"
            }
          ]
        },
        {
          "date": "2026-12-09",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w19-mer-run",
              "sport": "run",
              "type": "tempo",
              "name": "Course - fartlek / tempo court",
              "description": "Échauffement 10min facile. Bloc principal: 15min fartlek non structuré (30s-1min plus soutenu / 1-2min facile en alternance) OU 10min continu à allure tempo (zone 3). Retour au calme 5-10min.",
              "completed": false,
              "durationMinutes": 34,
              "distanceMeters": 6260,
              "primaryZone": "Zone 3-4"
            }
          ]
        },
        {
          "date": "2026-12-10",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w19-jeu-force",
              "sport": "strength",
              "type": "foundation",
              "name": "Musculation - haut du corps",
              "description": "Haut du corps. 3 séries x 12-15 reps: tirage horizontal, développé haltères, tirage vertical, élévations latérales légères, biceps/triceps. Gainage: dead bug 2x12/côté.",
              "completed": false,
              "durationMinutes": 60
            }
          ]
        },
        {
          "date": "2026-12-11",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w19-ven-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
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
              "name": "Vélo - sortie longue",
              "description": "Zone 2 stable. Sport à faible risque de blessure: volume augmenté progressivement et plus rapidement que la natation. Pratiquer l'hydratation/nutrition en continu.",
              "completed": false,
              "durationMinutes": 147,
              "distanceMeters": 61300,
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
              "description": "Sortie longue en zone 2, allure stable. Pratiquer la nutrition de course sur les séances >75min.",
              "completed": false,
              "durationMinutes": 78,
              "distanceMeters": 13340,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 7.6,
        "bySport": {
          "strength": {
            "sessions": 2,
            "hours": 2.0
          },
          "swim": {
            "sessions": 1,
            "hours": 0.63
          },
          "bike": {
            "sessions": 2,
            "hours": 3.1,
            "km": 77.5
          },
          "run": {
            "sessions": 2,
            "hours": 1.87,
            "km": 19.6
          }
        }
      }
    },
    {
      "weekNumber": 20,
      "startDate": "2026-12-14",
      "endDate": "2026-12-20",
      "phase": "Base",
      "focus": "Construction aérobie pendant le stage coop (natation 1x/semaine) [semaine de décharge]",
      "targetHours": 6.42,
      "isRecoveryWeek": true,
      "days": [
        {
          "date": "2026-12-14",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w20-lun-force",
              "sport": "strength",
              "type": "foundation",
              "name": "Musculation - bas du corps + abdos",
              "description": "Semaine de décharge: Bas du corps + abdos. 3 séries x 12-15 reps: squats gobelet, fentes marchées, soulevé de terre roumain, pont fessier. Gainage: planche 3x45s, planche latérale 2x30s/côté. Réduire la charge de 20-30%.",
              "completed": false,
              "durationMinutes": 60
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
              "description": "Progression très graduelle (protection des épaules). 6-8x50m technique (rattrapé, doigt qui traîne, respiration bilatérale) puis nage continue/fractionnée en zone 1-2 jusqu'à ~1200m au total. Arrêter si sensation inhabituelle à l'épaule.",
              "completed": false,
              "durationMinutes": 31,
              "distanceMeters": 1200,
              "primaryZone": "Zone 1-2"
            },
            {
              "id": "w20-mar-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance facile (2e séance)",
              "description": "Sortie ou home-trainer facile en zone 2, cadence fluide 85-95rpm. Séance courte et à faible risque - sert à augmenter le volume vélo sans stress articulaire.",
              "completed": false,
              "durationMinutes": 32,
              "distanceMeters": 13300,
              "primaryZone": "Zone 2"
            }
          ]
        },
        {
          "date": "2026-12-16",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w20-mer-run",
              "sport": "run",
              "type": "intervals",
              "name": "Course - facile + accélérations",
              "description": "Footing facile avec 4-6x20s accélérations progressives (strides), retour au calme complet entre chaque.",
              "completed": false,
              "durationMinutes": 30,
              "distanceMeters": 5540,
              "primaryZone": "Zone 2 + strides"
            }
          ]
        },
        {
          "date": "2026-12-17",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w20-jeu-force",
              "sport": "strength",
              "type": "foundation",
              "name": "Musculation - haut du corps",
              "description": "Semaine de décharge: Haut du corps. 3 séries x 12-15 reps: tirage horizontal, développé haltères, tirage vertical, élévations latérales légères, biceps/triceps. Gainage: dead bug 2x12/côté. Réduire la charge de 20-30%.",
              "completed": false,
              "durationMinutes": 60
            }
          ]
        },
        {
          "date": "2026-12-18",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w20-ven-repos",
              "sport": "rest",
              "type": "rest",
              "name": "Repos complet",
              "description": "Journée de repos complet - aucune activité structurée.",
              "completed": false
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
              "name": "Vélo - sortie longue",
              "description": "Zone 2 stable. Sport à faible risque de blessure: volume augmenté progressivement et plus rapidement que la natation. Pratiquer l'hydratation/nutrition en continu.",
              "completed": false,
              "durationMinutes": 112,
              "distanceMeters": 46700,
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
              "description": "Sortie longue en zone 2, allure stable. Pratiquer la nutrition de course sur les séances >75min.",
              "completed": false,
              "durationMinutes": 60,
              "distanceMeters": 10290,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 6.42,
        "bySport": {
          "strength": {
            "sessions": 2,
            "hours": 2.0
          },
          "swim": {
            "sessions": 1,
            "hours": 0.52
          },
          "bike": {
            "sessions": 2,
            "hours": 2.4,
            "km": 60.0
          },
          "run": {
            "sessions": 2,
            "hours": 1.5,
            "km": 15.8
          }
        }
      }
    },
    {
      "weekNumber": 21,
      "startDate": "2026-12-21",
      "endDate": "2026-12-27",
      "phase": "Build",
      "focus": "Introduction de l'intensité, natation 2x/semaine dès maintenant",
      "targetHours": 8.3,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2026-12-21",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w21-lun-force",
              "sport": "strength",
              "type": "strength",
              "name": "Musculation - bas du corps + abdos",
              "description": "Bas du corps + abdos. 3-4 séries x 6-8 reps charge modérée-élevée: squats, soulevé de terre roumain unilatéral, step-ups, hip thrust. Gainage anti-rotation (Pallof press, bird dog).",
              "completed": false,
              "durationMinutes": 60
            }
          ]
        },
        {
          "date": "2026-12-22",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w21-mar-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique + aérobie",
              "description": "Progression très graduelle (protection des épaules). 6-8x50m technique (rattrapé, doigt qui traîne, respiration bilatérale) puis nage continue/fractionnée en zone 1-2 jusqu'à ~1500m au total. Arrêter si sensation inhabituelle à l'épaule.",
              "completed": false,
              "durationMinutes": 39,
              "distanceMeters": 1500,
              "primaryZone": "Zone 1-2"
            },
            {
              "id": "w21-mar-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance facile (2e séance)",
              "description": "Sortie ou home-trainer facile en zone 2, cadence fluide 85-95rpm. Séance courte et à faible risque - sert à augmenter le volume vélo sans stress articulaire.",
              "completed": false,
              "durationMinutes": 40,
              "distanceMeters": 16700,
              "primaryZone": "Zone 2"
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
              "type": "threshold",
              "name": "Course - intervalles seuil",
              "description": "Échauffement 12min facile + 4x100m lignes droites. Bloc principal: 4-5 x 4min à allure seuil (zone 4, ~4:45-4:55/km), récupération 2min trot entre chaque. Retour au calme 8-10min. Inspiré des séances d'intervalles suggérées par la montre Garmin.",
              "completed": false,
              "durationMinutes": 35,
              "distanceMeters": 6460,
              "primaryZone": "Zone 4-5"
            }
          ]
        },
        {
          "date": "2026-12-24",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w21-jeu-force",
              "sport": "strength",
              "type": "strength",
              "name": "Musculation - haut du corps",
              "description": "Haut du corps. 3-4 séries x 6-8 reps: tractions/lat pulldown, développé militaire, rowing, bench press. Priorité au dos/épaules pour la natation et la posture vélo.",
              "completed": false,
              "durationMinutes": 60
            }
          ]
        },
        {
          "date": "2026-12-25",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w21-ven-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique (2e séance)",
              "description": "Séance courte, focus pur sur la technique: drills + nage aisée en zone 1-2. Fréquence augmentée maintenant que la charge du stage coop est terminée.",
              "completed": false,
              "durationMinutes": 19,
              "distanceMeters": 700,
              "primaryZone": "Zone 1-2"
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
              "description": "Zone 2 stable. Sport à faible risque de blessure: volume augmenté progressivement et plus rapidement que la natation. Pratiquer l'hydratation/nutrition en continu.",
              "completed": false,
              "durationMinutes": 150,
              "distanceMeters": 62500,
              "primaryZone": "Zone 2-3"
            },
            {
              "id": "w21-sam-brick",
              "sport": "brick",
              "type": "brick",
              "name": "Course - transition (brick)",
              "description": "Enchaîné immédiatement après le vélo: course à allure facile-modérée, objectif = habituer les jambes à la transition vélo-course.",
              "completed": false,
              "durationMinutes": 15,
              "distanceMeters": 2690,
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
              "description": "Sortie longue en zone 2, allure stable. Pratiquer la nutrition de course sur les séances >75min.",
              "completed": false,
              "durationMinutes": 80,
              "distanceMeters": 13710,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 8.3,
        "bySport": {
          "strength": {
            "sessions": 2,
            "hours": 2.0
          },
          "swim": {
            "sessions": 2,
            "hours": 0.97
          },
          "bike": {
            "sessions": 2,
            "hours": 3.17,
            "km": 79.2
          },
          "run": {
            "sessions": 2,
            "hours": 1.92,
            "km": 22.9
          },
          "brick": {
            "sessions": 1,
            "hours": 0.25
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
      "targetHours": 8.18,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2026-12-28",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w22-lun-force",
              "sport": "strength",
              "type": "strength",
              "name": "Musculation - bas du corps + abdos",
              "description": "Bas du corps + abdos. 3-4 séries x 6-8 reps charge modérée-élevée: squats, soulevé de terre roumain unilatéral, step-ups, hip thrust. Gainage anti-rotation (Pallof press, bird dog).",
              "completed": false,
              "durationMinutes": 60
            }
          ]
        },
        {
          "date": "2026-12-29",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w22-mar-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique + aérobie",
              "description": "Progression très graduelle (protection des épaules). 6-8x50m technique (rattrapé, doigt qui traîne, respiration bilatérale) puis nage continue/fractionnée en zone 1-2 jusqu'à ~1550m au total. Arrêter si sensation inhabituelle à l'épaule.",
              "completed": false,
              "durationMinutes": 40,
              "distanceMeters": 1550,
              "primaryZone": "Zone 1-2"
            },
            {
              "id": "w22-mar-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance facile (2e séance)",
              "description": "Sortie ou home-trainer facile en zone 2, cadence fluide 85-95rpm. Séance courte et à faible risque - sert à augmenter le volume vélo sans stress articulaire.",
              "completed": false,
              "durationMinutes": 41,
              "distanceMeters": 17100,
              "primaryZone": "Zone 2"
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
              "type": "threshold",
              "name": "Course - intervalles seuil",
              "description": "Échauffement 12min facile + 4x100m lignes droites. Bloc principal: 4-5 x 4min à allure seuil (zone 4, ~4:45-4:55/km), récupération 2min trot entre chaque. Retour au calme 8-10min. Inspiré des séances d'intervalles suggérées par la montre Garmin.",
              "completed": false,
              "durationMinutes": 36,
              "distanceMeters": 6670,
              "primaryZone": "Zone 4-5"
            }
          ]
        },
        {
          "date": "2026-12-31",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w22-jeu-force",
              "sport": "strength",
              "type": "strength",
              "name": "Musculation - haut du corps",
              "description": "Haut du corps. 3-4 séries x 6-8 reps: tractions/lat pulldown, développé militaire, rowing, bench press. Priorité au dos/épaules pour la natation et la posture vélo.",
              "completed": false,
              "durationMinutes": 60
            }
          ]
        },
        {
          "date": "2027-01-01",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w22-ven-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique (2e séance)",
              "description": "Séance courte, focus pur sur la technique: drills + nage aisée en zone 1-2. Fréquence augmentée maintenant que la charge du stage coop est terminée.",
              "completed": false,
              "durationMinutes": 19,
              "distanceMeters": 700,
              "primaryZone": "Zone 1-2"
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
              "description": "Zone 2 stable. Sport à faible risque de blessure: volume augmenté progressivement et plus rapidement que la natation. Pratiquer l'hydratation/nutrition en continu.",
              "completed": false,
              "durationMinutes": 153,
              "distanceMeters": 63700,
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
              "description": "Sortie longue en zone 2, allure stable. Pratiquer la nutrition de course sur les séances >75min.",
              "completed": false,
              "durationMinutes": 82,
              "distanceMeters": 14100,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 8.18,
        "bySport": {
          "strength": {
            "sessions": 2,
            "hours": 2.0
          },
          "swim": {
            "sessions": 2,
            "hours": 0.98
          },
          "bike": {
            "sessions": 2,
            "hours": 3.23,
            "km": 80.8
          },
          "run": {
            "sessions": 2,
            "hours": 1.97,
            "km": 20.8
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
      "targetHours": 8.55,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2027-01-04",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w23-lun-force",
              "sport": "strength",
              "type": "strength",
              "name": "Musculation - bas du corps + abdos",
              "description": "Bas du corps + abdos. 3-4 séries x 6-8 reps charge modérée-élevée: squats, soulevé de terre roumain unilatéral, step-ups, hip thrust. Gainage anti-rotation (Pallof press, bird dog).",
              "completed": false,
              "durationMinutes": 60
            }
          ]
        },
        {
          "date": "2027-01-05",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w23-mar-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique + aérobie",
              "description": "Progression très graduelle (protection des épaules). 6-8x50m technique (rattrapé, doigt qui traîne, respiration bilatérale) puis nage continue/fractionnée en zone 1-2 jusqu'à ~1550m au total. Arrêter si sensation inhabituelle à l'épaule.",
              "completed": false,
              "durationMinutes": 40,
              "distanceMeters": 1550,
              "primaryZone": "Zone 1-2"
            },
            {
              "id": "w23-mar-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance facile (2e séance)",
              "description": "Sortie ou home-trainer facile en zone 2, cadence fluide 85-95rpm. Séance courte et à faible risque - sert à augmenter le volume vélo sans stress articulaire.",
              "completed": false,
              "durationMinutes": 41,
              "distanceMeters": 17100,
              "primaryZone": "Zone 2"
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
              "type": "threshold",
              "name": "Course - intervalles seuil",
              "description": "Échauffement 12min facile + 4x100m lignes droites. Bloc principal: 4-5 x 4min à allure seuil (zone 4, ~4:45-4:55/km), récupération 2min trot entre chaque. Retour au calme 8-10min. Inspiré des séances d'intervalles suggérées par la montre Garmin.",
              "completed": false,
              "durationMinutes": 36,
              "distanceMeters": 6690,
              "primaryZone": "Zone 4-5"
            }
          ]
        },
        {
          "date": "2027-01-07",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w23-jeu-force",
              "sport": "strength",
              "type": "strength",
              "name": "Musculation - haut du corps",
              "description": "Haut du corps. 3-4 séries x 6-8 reps: tractions/lat pulldown, développé militaire, rowing, bench press. Priorité au dos/épaules pour la natation et la posture vélo.",
              "completed": false,
              "durationMinutes": 60
            }
          ]
        },
        {
          "date": "2027-01-08",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w23-ven-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique (2e séance)",
              "description": "Séance courte, focus pur sur la technique: drills + nage aisée en zone 1-2. Fréquence augmentée maintenant que la charge du stage coop est terminée.",
              "completed": false,
              "durationMinutes": 20,
              "distanceMeters": 750,
              "primaryZone": "Zone 1-2"
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
              "description": "Zone 2 stable. Sport à faible risque de blessure: volume augmenté progressivement et plus rapidement que la natation. Pratiquer l'hydratation/nutrition en continu.",
              "completed": false,
              "durationMinutes": 156,
              "distanceMeters": 65000,
              "primaryZone": "Zone 2-3"
            },
            {
              "id": "w23-sam-brick",
              "sport": "brick",
              "type": "brick",
              "name": "Course - transition (brick)",
              "description": "Enchaîné immédiatement après le vélo: course à allure facile-modérée, objectif = habituer les jambes à la transition vélo-course.",
              "completed": false,
              "durationMinutes": 17,
              "distanceMeters": 3060,
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
              "description": "Sortie longue en zone 2, allure stable. Pratiquer la nutrition de course sur les séances >75min.",
              "completed": false,
              "durationMinutes": 83,
              "distanceMeters": 14310,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 8.55,
        "bySport": {
          "strength": {
            "sessions": 2,
            "hours": 2.0
          },
          "swim": {
            "sessions": 2,
            "hours": 1.0
          },
          "bike": {
            "sessions": 2,
            "hours": 3.28,
            "km": 82.1
          },
          "run": {
            "sessions": 2,
            "hours": 1.98,
            "km": 24.1
          },
          "brick": {
            "sessions": 1,
            "hours": 0.28
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
      "targetHours": 6.93,
      "isRecoveryWeek": true,
      "days": [
        {
          "date": "2027-01-11",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w24-lun-force",
              "sport": "strength",
              "type": "strength",
              "name": "Musculation - bas du corps + abdos",
              "description": "Semaine de décharge: Bas du corps + abdos. 3-4 séries x 6-8 reps charge modérée-élevée: squats, soulevé de terre roumain unilatéral, step-ups, hip thrust. Gainage anti-rotation (Pallof press, bird dog). Réduire la charge de 20-30%.",
              "completed": false,
              "durationMinutes": 60
            }
          ]
        },
        {
          "date": "2027-01-12",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w24-mar-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique + aérobie",
              "description": "Progression très graduelle (protection des épaules). 6-8x50m technique (rattrapé, doigt qui traîne, respiration bilatérale) puis nage continue/fractionnée en zone 1-2 jusqu'à ~1250m au total. Arrêter si sensation inhabituelle à l'épaule.",
              "completed": false,
              "durationMinutes": 32,
              "distanceMeters": 1250,
              "primaryZone": "Zone 1-2"
            },
            {
              "id": "w24-mar-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance facile (2e séance)",
              "description": "Sortie ou home-trainer facile en zone 2, cadence fluide 85-95rpm. Séance courte et à faible risque - sert à augmenter le volume vélo sans stress articulaire.",
              "completed": false,
              "durationMinutes": 34,
              "distanceMeters": 14200,
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
              "type": "intervals",
              "name": "Course - facile + accélérations",
              "description": "Footing facile avec 4-6x20s accélérations progressives (strides), retour au calme complet entre chaque.",
              "completed": false,
              "durationMinutes": 31,
              "distanceMeters": 5780,
              "primaryZone": "Zone 2 + strides"
            }
          ]
        },
        {
          "date": "2027-01-14",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w24-jeu-force",
              "sport": "strength",
              "type": "strength",
              "name": "Musculation - haut du corps",
              "description": "Semaine de décharge: Haut du corps. 3-4 séries x 6-8 reps: tractions/lat pulldown, développé militaire, rowing, bench press. Priorité au dos/épaules pour la natation et la posture vélo. Réduire la charge de 20-30%.",
              "completed": false,
              "durationMinutes": 60
            }
          ]
        },
        {
          "date": "2027-01-15",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w24-ven-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique (2e séance)",
              "description": "Séance courte, focus pur sur la technique: drills + nage aisée en zone 1-2. Fréquence augmentée maintenant que la charge du stage coop est terminée.",
              "completed": false,
              "durationMinutes": 16,
              "distanceMeters": 600,
              "primaryZone": "Zone 1-2"
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
              "description": "Zone 2 stable. Sport à faible risque de blessure: volume augmenté progressivement et plus rapidement que la natation. Pratiquer l'hydratation/nutrition en continu.",
              "completed": false,
              "durationMinutes": 119,
              "distanceMeters": 49600,
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
              "description": "Sortie longue en zone 2, allure stable. Pratiquer la nutrition de course sur les séances >75min.",
              "completed": false,
              "durationMinutes": 64,
              "distanceMeters": 11070,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 6.93,
        "bySport": {
          "strength": {
            "sessions": 2,
            "hours": 2.0
          },
          "swim": {
            "sessions": 2,
            "hours": 0.8
          },
          "bike": {
            "sessions": 2,
            "hours": 2.55,
            "km": 63.8
          },
          "run": {
            "sessions": 2,
            "hours": 1.58,
            "km": 16.9
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
      "targetHours": 8.83,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2027-01-18",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w25-lun-force",
              "sport": "strength",
              "type": "strength",
              "name": "Musculation - bas du corps + abdos",
              "description": "Bas du corps + abdos. 3-4 séries x 6-8 reps charge modérée-élevée: squats, soulevé de terre roumain unilatéral, step-ups, hip thrust. Gainage anti-rotation (Pallof press, bird dog).",
              "completed": false,
              "durationMinutes": 60
            }
          ]
        },
        {
          "date": "2027-01-19",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w25-mar-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique + aérobie",
              "description": "Progression très graduelle (protection des épaules). 6-8x50m technique (rattrapé, doigt qui traîne, respiration bilatérale) puis nage continue/fractionnée en zone 1-2 jusqu'à ~1600m au total. Arrêter si sensation inhabituelle à l'épaule.",
              "completed": false,
              "durationMinutes": 40,
              "distanceMeters": 1600,
              "primaryZone": "Zone 1-2"
            },
            {
              "id": "w25-mar-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance facile (2e séance)",
              "description": "Sortie ou home-trainer facile en zone 2, cadence fluide 85-95rpm. Séance courte et à faible risque - sert à augmenter le volume vélo sans stress articulaire.",
              "completed": false,
              "durationMinutes": 43,
              "distanceMeters": 17900,
              "primaryZone": "Zone 2"
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
              "type": "threshold",
              "name": "Course - intervalles seuil",
              "description": "Échauffement 12min facile + 4x100m lignes droites. Bloc principal: 4-5 x 4min à allure seuil (zone 4, ~4:45-4:55/km), récupération 2min trot entre chaque. Retour au calme 8-10min. Inspiré des séances d'intervalles suggérées par la montre Garmin.",
              "completed": false,
              "durationMinutes": 38,
              "distanceMeters": 7100,
              "primaryZone": "Zone 4-5"
            }
          ]
        },
        {
          "date": "2027-01-21",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w25-jeu-force",
              "sport": "strength",
              "type": "strength",
              "name": "Musculation - haut du corps",
              "description": "Haut du corps. 3-4 séries x 6-8 reps: tractions/lat pulldown, développé militaire, rowing, bench press. Priorité au dos/épaules pour la natation et la posture vélo.",
              "completed": false,
              "durationMinutes": 60
            }
          ]
        },
        {
          "date": "2027-01-22",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w25-ven-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique (2e séance)",
              "description": "Séance courte, focus pur sur la technique: drills + nage aisée en zone 1-2. Fréquence augmentée maintenant que la charge du stage coop est terminée.",
              "completed": false,
              "durationMinutes": 21,
              "distanceMeters": 800,
              "primaryZone": "Zone 1-2"
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
              "description": "Zone 2 stable. Sport à faible risque de blessure: volume augmenté progressivement et plus rapidement que la natation. Pratiquer l'hydratation/nutrition en continu.",
              "completed": false,
              "durationMinutes": 162,
              "distanceMeters": 67500,
              "primaryZone": "Zone 2-3"
            },
            {
              "id": "w25-sam-brick",
              "sport": "brick",
              "type": "brick",
              "name": "Course - transition (brick)",
              "description": "Enchaîné immédiatement après le vélo: course à allure facile-modérée, objectif = habituer les jambes à la transition vélo-course.",
              "completed": false,
              "durationMinutes": 19,
              "distanceMeters": 3440,
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
              "description": "Sortie longue en zone 2, allure stable. Pratiquer la nutrition de course sur les séances >75min.",
              "completed": false,
              "durationMinutes": 87,
              "distanceMeters": 15090,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 8.83,
        "bySport": {
          "strength": {
            "sessions": 2,
            "hours": 2.0
          },
          "swim": {
            "sessions": 2,
            "hours": 1.02
          },
          "bike": {
            "sessions": 2,
            "hours": 3.42,
            "km": 85.4
          },
          "run": {
            "sessions": 2,
            "hours": 2.08,
            "km": 25.6
          },
          "brick": {
            "sessions": 1,
            "hours": 0.32
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
      "targetHours": 8.6,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2027-01-25",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w26-lun-force",
              "sport": "strength",
              "type": "strength",
              "name": "Musculation - bas du corps + abdos",
              "description": "Bas du corps + abdos. 3-4 séries x 6-8 reps charge modérée-élevée: squats, soulevé de terre roumain unilatéral, step-ups, hip thrust. Gainage anti-rotation (Pallof press, bird dog).",
              "completed": false,
              "durationMinutes": 60
            }
          ]
        },
        {
          "date": "2027-01-26",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w26-mar-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique + aérobie",
              "description": "Progression très graduelle (protection des épaules). 6-8x50m technique (rattrapé, doigt qui traîne, respiration bilatérale) puis nage continue/fractionnée en zone 1-2 jusqu'à ~1650m au total. Arrêter si sensation inhabituelle à l'épaule.",
              "completed": false,
              "durationMinutes": 41,
              "distanceMeters": 1650,
              "primaryZone": "Zone 1-2"
            },
            {
              "id": "w26-mar-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance facile (2e séance)",
              "description": "Sortie ou home-trainer facile en zone 2, cadence fluide 85-95rpm. Séance courte et à faible risque - sert à augmenter le volume vélo sans stress articulaire.",
              "completed": false,
              "durationMinutes": 43,
              "distanceMeters": 17900,
              "primaryZone": "Zone 2"
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
              "type": "threshold",
              "name": "Course - intervalles seuil",
              "description": "Échauffement 12min facile + 4x100m lignes droites. Bloc principal: 4-5 x 4min à allure seuil (zone 4, ~4:45-4:55/km), récupération 2min trot entre chaque. Retour au calme 8-10min. Inspiré des séances d'intervalles suggérées par la montre Garmin.",
              "completed": false,
              "durationMinutes": 38,
              "distanceMeters": 7120,
              "primaryZone": "Zone 4-5"
            }
          ]
        },
        {
          "date": "2027-01-28",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w26-jeu-force",
              "sport": "strength",
              "type": "strength",
              "name": "Musculation - haut du corps",
              "description": "Haut du corps. 3-4 séries x 6-8 reps: tractions/lat pulldown, développé militaire, rowing, bench press. Priorité au dos/épaules pour la natation et la posture vélo.",
              "completed": false,
              "durationMinutes": 60
            }
          ]
        },
        {
          "date": "2027-01-29",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w26-ven-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique (2e séance)",
              "description": "Séance courte, focus pur sur la technique: drills + nage aisée en zone 1-2. Fréquence augmentée maintenant que la charge du stage coop est terminée.",
              "completed": false,
              "durationMinutes": 21,
              "distanceMeters": 800,
              "primaryZone": "Zone 1-2"
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
              "description": "Zone 2 stable. Sport à faible risque de blessure: volume augmenté progressivement et plus rapidement que la natation. Pratiquer l'hydratation/nutrition en continu.",
              "completed": false,
              "durationMinutes": 165,
              "distanceMeters": 68800,
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
              "description": "Sortie longue en zone 2, allure stable. Pratiquer la nutrition de course sur les séances >75min.",
              "completed": false,
              "durationMinutes": 88,
              "distanceMeters": 15300,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 8.6,
        "bySport": {
          "strength": {
            "sessions": 2,
            "hours": 2.0
          },
          "swim": {
            "sessions": 2,
            "hours": 1.03
          },
          "bike": {
            "sessions": 2,
            "hours": 3.47,
            "km": 86.7
          },
          "run": {
            "sessions": 2,
            "hours": 2.1,
            "km": 22.4
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
      "targetHours": 9.07,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2027-02-01",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w27-lun-force",
              "sport": "strength",
              "type": "strength",
              "name": "Musculation - bas du corps + abdos",
              "description": "Bas du corps + abdos. 3-4 séries x 6-8 reps charge modérée-élevée: squats, soulevé de terre roumain unilatéral, step-ups, hip thrust. Gainage anti-rotation (Pallof press, bird dog).",
              "completed": false,
              "durationMinutes": 60
            }
          ]
        },
        {
          "date": "2027-02-02",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w27-mar-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique + aérobie",
              "description": "Progression très graduelle (protection des épaules). 6-8x50m technique (rattrapé, doigt qui traîne, respiration bilatérale) puis nage continue/fractionnée en zone 1-2 jusqu'à ~1650m au total. Arrêter si sensation inhabituelle à l'épaule.",
              "completed": false,
              "durationMinutes": 41,
              "distanceMeters": 1650,
              "primaryZone": "Zone 1-2"
            },
            {
              "id": "w27-mar-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance facile (2e séance)",
              "description": "Sortie ou home-trainer facile en zone 2, cadence fluide 85-95rpm. Séance courte et à faible risque - sert à augmenter le volume vélo sans stress articulaire.",
              "completed": false,
              "durationMinutes": 44,
              "distanceMeters": 18300,
              "primaryZone": "Zone 2"
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
              "type": "threshold",
              "name": "Course - intervalles seuil",
              "description": "Échauffement 12min facile + 4x100m lignes droites. Bloc principal: 4-5 x 4min à allure seuil (zone 4, ~4:45-4:55/km), récupération 2min trot entre chaque. Retour au calme 8-10min. Inspiré des séances d'intervalles suggérées par la montre Garmin.",
              "completed": false,
              "durationMinutes": 39,
              "distanceMeters": 7340,
              "primaryZone": "Zone 4-5"
            }
          ]
        },
        {
          "date": "2027-02-04",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w27-jeu-force",
              "sport": "strength",
              "type": "strength",
              "name": "Musculation - haut du corps",
              "description": "Haut du corps. 3-4 séries x 6-8 reps: tractions/lat pulldown, développé militaire, rowing, bench press. Priorité au dos/épaules pour la natation et la posture vélo.",
              "completed": false,
              "durationMinutes": 60
            }
          ]
        },
        {
          "date": "2027-02-05",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w27-ven-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique (2e séance)",
              "description": "Séance courte, focus pur sur la technique: drills + nage aisée en zone 1-2. Fréquence augmentée maintenant que la charge du stage coop est terminée.",
              "completed": false,
              "durationMinutes": 21,
              "distanceMeters": 800,
              "primaryZone": "Zone 1-2"
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
              "description": "Zone 2 stable. Sport à faible risque de blessure: volume augmenté progressivement et plus rapidement que la natation. Pratiquer l'hydratation/nutrition en continu.",
              "completed": false,
              "durationMinutes": 168,
              "distanceMeters": 70000,
              "primaryZone": "Zone 2-3"
            },
            {
              "id": "w27-sam-brick",
              "sport": "brick",
              "type": "brick",
              "name": "Course - transition (brick)",
              "description": "Enchaîné immédiatement après le vélo: course à allure facile-modérée, objectif = habituer les jambes à la transition vélo-course.",
              "completed": false,
              "durationMinutes": 21,
              "distanceMeters": 3830,
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
              "description": "Sortie longue en zone 2, allure stable. Pratiquer la nutrition de course sur les séances >75min.",
              "completed": false,
              "durationMinutes": 90,
              "distanceMeters": 15700,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 9.07,
        "bySport": {
          "strength": {
            "sessions": 2,
            "hours": 2.0
          },
          "swim": {
            "sessions": 2,
            "hours": 1.03
          },
          "bike": {
            "sessions": 2,
            "hours": 3.53,
            "km": 88.3
          },
          "run": {
            "sessions": 2,
            "hours": 2.15,
            "km": 26.9
          },
          "brick": {
            "sessions": 1,
            "hours": 0.35
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
      "targetHours": 7.28,
      "isRecoveryWeek": true,
      "days": [
        {
          "date": "2027-02-08",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w28-lun-force",
              "sport": "strength",
              "type": "strength",
              "name": "Musculation - bas du corps + abdos",
              "description": "Semaine de décharge: Bas du corps + abdos. 3-4 séries x 6-8 reps charge modérée-élevée: squats, soulevé de terre roumain unilatéral, step-ups, hip thrust. Gainage anti-rotation (Pallof press, bird dog). Réduire la charge de 20-30%.",
              "completed": false,
              "durationMinutes": 60
            }
          ]
        },
        {
          "date": "2027-02-09",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w28-mar-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique + aérobie",
              "description": "Progression très graduelle (protection des épaules). 6-8x50m technique (rattrapé, doigt qui traîne, respiration bilatérale) puis nage continue/fractionnée en zone 1-2 jusqu'à ~1350m au total. Arrêter si sensation inhabituelle à l'épaule.",
              "completed": false,
              "durationMinutes": 33,
              "distanceMeters": 1350,
              "primaryZone": "Zone 1-2"
            },
            {
              "id": "w28-mar-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance facile (2e séance)",
              "description": "Sortie ou home-trainer facile en zone 2, cadence fluide 85-95rpm. Séance courte et à faible risque - sert à augmenter le volume vélo sans stress articulaire.",
              "completed": false,
              "durationMinutes": 36,
              "distanceMeters": 15000,
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
              "type": "intervals",
              "name": "Course - facile + accélérations",
              "description": "Footing facile avec 4-6x20s accélérations progressives (strides), retour au calme complet entre chaque.",
              "completed": false,
              "durationMinutes": 34,
              "distanceMeters": 6420,
              "primaryZone": "Zone 2 + strides"
            }
          ]
        },
        {
          "date": "2027-02-11",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w28-jeu-force",
              "sport": "strength",
              "type": "strength",
              "name": "Musculation - haut du corps",
              "description": "Semaine de décharge: Haut du corps. 3-4 séries x 6-8 reps: tractions/lat pulldown, développé militaire, rowing, bench press. Priorité au dos/épaules pour la natation et la posture vélo. Réduire la charge de 20-30%.",
              "completed": false,
              "durationMinutes": 60
            }
          ]
        },
        {
          "date": "2027-02-12",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w28-ven-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique (2e séance)",
              "description": "Séance courte, focus pur sur la technique: drills + nage aisée en zone 1-2. Fréquence augmentée maintenant que la charge du stage coop est terminée.",
              "completed": false,
              "durationMinutes": 17,
              "distanceMeters": 650,
              "primaryZone": "Zone 1-2"
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
              "description": "Zone 2 stable. Sport à faible risque de blessure: volume augmenté progressivement et plus rapidement que la natation. Pratiquer l'hydratation/nutrition en continu.",
              "completed": false,
              "durationMinutes": 128,
              "distanceMeters": 53300,
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
              "description": "Sortie longue en zone 2, allure stable. Pratiquer la nutrition de course sur les séances >75min.",
              "completed": false,
              "durationMinutes": 69,
              "distanceMeters": 12070,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 7.28,
        "bySport": {
          "strength": {
            "sessions": 2,
            "hours": 2.0
          },
          "swim": {
            "sessions": 2,
            "hours": 0.83
          },
          "bike": {
            "sessions": 2,
            "hours": 2.73,
            "km": 68.3
          },
          "run": {
            "sessions": 2,
            "hours": 1.72,
            "km": 18.5
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
      "targetHours": 9.32,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2027-02-15",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w29-lun-force",
              "sport": "strength",
              "type": "strength",
              "name": "Musculation - bas du corps + abdos",
              "description": "Bas du corps + abdos. 3-4 séries x 6-8 reps charge modérée-élevée: squats, soulevé de terre roumain unilatéral, step-ups, hip thrust. Gainage anti-rotation (Pallof press, bird dog).",
              "completed": false,
              "durationMinutes": 60
            }
          ]
        },
        {
          "date": "2027-02-16",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w29-mar-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique + aérobie",
              "description": "Progression très graduelle (protection des épaules). 6-8x50m technique (rattrapé, doigt qui traîne, respiration bilatérale) puis nage continue/fractionnée en zone 1-2 jusqu'à ~1700m au total. Arrêter si sensation inhabituelle à l'épaule.",
              "completed": false,
              "durationMinutes": 42,
              "distanceMeters": 1700,
              "primaryZone": "Zone 1-2"
            },
            {
              "id": "w29-mar-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance facile (2e séance)",
              "description": "Sortie ou home-trainer facile en zone 2, cadence fluide 85-95rpm. Séance courte et à faible risque - sert à augmenter le volume vélo sans stress articulaire.",
              "completed": false,
              "durationMinutes": 45,
              "distanceMeters": 18800,
              "primaryZone": "Zone 2"
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
              "type": "threshold",
              "name": "Course - intervalles seuil",
              "description": "Échauffement 12min facile + 4x100m lignes droites. Bloc principal: 4-5 x 4min à allure seuil (zone 4, ~4:45-4:55/km), récupération 2min trot entre chaque. Retour au calme 8-10min. Inspiré des séances d'intervalles suggérées par la montre Garmin.",
              "completed": false,
              "durationMinutes": 40,
              "distanceMeters": 7570,
              "primaryZone": "Zone 4-5"
            }
          ]
        },
        {
          "date": "2027-02-18",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w29-jeu-force",
              "sport": "strength",
              "type": "strength",
              "name": "Musculation - haut du corps",
              "description": "Haut du corps. 3-4 séries x 6-8 reps: tractions/lat pulldown, développé militaire, rowing, bench press. Priorité au dos/épaules pour la natation et la posture vélo.",
              "completed": false,
              "durationMinutes": 60
            }
          ]
        },
        {
          "date": "2027-02-19",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w29-ven-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique (2e séance)",
              "description": "Séance courte, focus pur sur la technique: drills + nage aisée en zone 1-2. Fréquence augmentée maintenant que la charge du stage coop est terminée.",
              "completed": false,
              "durationMinutes": 22,
              "distanceMeters": 850,
              "primaryZone": "Zone 1-2"
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
              "description": "Zone 2 stable. Sport à faible risque de blessure: volume augmenté progressivement et plus rapidement que la natation. Pratiquer l'hydratation/nutrition en continu.",
              "completed": false,
              "durationMinutes": 174,
              "distanceMeters": 72500,
              "primaryZone": "Zone 2-3"
            },
            {
              "id": "w29-sam-brick",
              "sport": "brick",
              "type": "brick",
              "name": "Course - transition (brick)",
              "description": "Enchaîné immédiatement après le vélo: course à allure facile-modérée, objectif = habituer les jambes à la transition vélo-course.",
              "completed": false,
              "durationMinutes": 23,
              "distanceMeters": 4220,
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
              "description": "Sortie longue en zone 2, allure stable. Pratiquer la nutrition de course sur les séances >75min.",
              "completed": false,
              "durationMinutes": 93,
              "distanceMeters": 16320,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 9.32,
        "bySport": {
          "strength": {
            "sessions": 2,
            "hours": 2.0
          },
          "swim": {
            "sessions": 2,
            "hours": 1.07
          },
          "bike": {
            "sessions": 2,
            "hours": 3.65,
            "km": 91.3
          },
          "run": {
            "sessions": 2,
            "hours": 2.22,
            "km": 28.1
          },
          "brick": {
            "sessions": 1,
            "hours": 0.38
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
      "targetHours": 9.08,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2027-02-22",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w30-lun-force",
              "sport": "strength",
              "type": "strength",
              "name": "Musculation - bas du corps + abdos",
              "description": "Bas du corps + abdos. 3-4 séries x 6-8 reps charge modérée-élevée: squats, soulevé de terre roumain unilatéral, step-ups, hip thrust. Gainage anti-rotation (Pallof press, bird dog).",
              "completed": false,
              "durationMinutes": 60
            }
          ]
        },
        {
          "date": "2027-02-23",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w30-mar-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique + aérobie",
              "description": "Progression très graduelle (protection des épaules). 6-8x50m technique (rattrapé, doigt qui traîne, respiration bilatérale) puis nage continue/fractionnée en zone 1-2 jusqu'à ~1750m au total. Arrêter si sensation inhabituelle à l'épaule.",
              "completed": false,
              "durationMinutes": 43,
              "distanceMeters": 1750,
              "primaryZone": "Zone 1-2"
            },
            {
              "id": "w30-mar-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance facile (2e séance)",
              "description": "Sortie ou home-trainer facile en zone 2, cadence fluide 85-95rpm. Séance courte et à faible risque - sert à augmenter le volume vélo sans stress articulaire.",
              "completed": false,
              "durationMinutes": 46,
              "distanceMeters": 19200,
              "primaryZone": "Zone 2"
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
              "type": "threshold",
              "name": "Course - intervalles seuil",
              "description": "Échauffement 12min facile + 4x100m lignes droites. Bloc principal: 4-5 x 4min à allure seuil (zone 4, ~4:45-4:55/km), récupération 2min trot entre chaque. Retour au calme 8-10min. Inspiré des séances d'intervalles suggérées par la montre Garmin.",
              "completed": false,
              "durationMinutes": 41,
              "distanceMeters": 7780,
              "primaryZone": "Zone 4-5"
            }
          ]
        },
        {
          "date": "2027-02-25",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w30-jeu-force",
              "sport": "strength",
              "type": "strength",
              "name": "Musculation - haut du corps",
              "description": "Haut du corps. 3-4 séries x 6-8 reps: tractions/lat pulldown, développé militaire, rowing, bench press. Priorité au dos/épaules pour la natation et la posture vélo.",
              "completed": false,
              "durationMinutes": 60
            }
          ]
        },
        {
          "date": "2027-02-26",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w30-ven-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique (2e séance)",
              "description": "Séance courte, focus pur sur la technique: drills + nage aisée en zone 1-2. Fréquence augmentée maintenant que la charge du stage coop est terminée.",
              "completed": false,
              "durationMinutes": 23,
              "distanceMeters": 900,
              "primaryZone": "Zone 1-2"
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
              "description": "Zone 2 stable. Sport à faible risque de blessure: volume augmenté progressivement et plus rapidement que la natation. Pratiquer l'hydratation/nutrition en continu.",
              "completed": false,
              "durationMinutes": 177,
              "distanceMeters": 73800,
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
              "description": "Sortie longue en zone 2, allure stable. Pratiquer la nutrition de course sur les séances >75min.",
              "completed": false,
              "durationMinutes": 95,
              "distanceMeters": 16720,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 9.08,
        "bySport": {
          "strength": {
            "sessions": 2,
            "hours": 2.0
          },
          "swim": {
            "sessions": 2,
            "hours": 1.1
          },
          "bike": {
            "sessions": 2,
            "hours": 3.72,
            "km": 93.0
          },
          "run": {
            "sessions": 2,
            "hours": 2.27,
            "km": 24.5
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
      "targetHours": 9.6,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2027-03-01",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w31-lun-force",
              "sport": "strength",
              "type": "strength",
              "name": "Musculation - bas du corps + abdos",
              "description": "Bas du corps + abdos. 3-4 séries x 6-8 reps charge modérée-élevée: squats, soulevé de terre roumain unilatéral, step-ups, hip thrust. Gainage anti-rotation (Pallof press, bird dog).",
              "completed": false,
              "durationMinutes": 60
            }
          ]
        },
        {
          "date": "2027-03-02",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w31-mar-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique + aérobie",
              "description": "Progression très graduelle (protection des épaules). 6-8x50m technique (rattrapé, doigt qui traîne, respiration bilatérale) puis nage continue/fractionnée en zone 1-2 jusqu'à ~1750m au total. Arrêter si sensation inhabituelle à l'épaule.",
              "completed": false,
              "durationMinutes": 42,
              "distanceMeters": 1750,
              "primaryZone": "Zone 1-2"
            },
            {
              "id": "w31-mar-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance facile (2e séance)",
              "description": "Sortie ou home-trainer facile en zone 2, cadence fluide 85-95rpm. Séance courte et à faible risque - sert à augmenter le volume vélo sans stress articulaire.",
              "completed": false,
              "durationMinutes": 47,
              "distanceMeters": 19600,
              "primaryZone": "Zone 2"
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
              "type": "threshold",
              "name": "Course - intervalles seuil",
              "description": "Échauffement 12min facile + 4x100m lignes droites. Bloc principal: 4-5 x 4min à allure seuil (zone 4, ~4:45-4:55/km), récupération 2min trot entre chaque. Retour au calme 8-10min. Inspiré des séances d'intervalles suggérées par la montre Garmin.",
              "completed": false,
              "durationMinutes": 42,
              "distanceMeters": 8000,
              "primaryZone": "Zone 4-5"
            }
          ]
        },
        {
          "date": "2027-03-04",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w31-jeu-force",
              "sport": "strength",
              "type": "strength",
              "name": "Musculation - haut du corps",
              "description": "Haut du corps. 3-4 séries x 6-8 reps: tractions/lat pulldown, développé militaire, rowing, bench press. Priorité au dos/épaules pour la natation et la posture vélo.",
              "completed": false,
              "durationMinutes": 60
            }
          ]
        },
        {
          "date": "2027-03-05",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w31-ven-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique (2e séance)",
              "description": "Séance courte, focus pur sur la technique: drills + nage aisée en zone 1-2. Fréquence augmentée maintenant que la charge du stage coop est terminée.",
              "completed": false,
              "durationMinutes": 23,
              "distanceMeters": 900,
              "primaryZone": "Zone 1-2"
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
              "description": "Zone 2 stable. Sport à faible risque de blessure: volume augmenté progressivement et plus rapidement que la natation. Pratiquer l'hydratation/nutrition en continu.",
              "completed": false,
              "durationMinutes": 180,
              "distanceMeters": 75000,
              "primaryZone": "Zone 2-3"
            },
            {
              "id": "w31-sam-brick",
              "sport": "brick",
              "type": "brick",
              "name": "Course - transition (brick)",
              "description": "Enchaîné immédiatement après le vélo: course à allure facile-modérée, objectif = habituer les jambes à la transition vélo-course.",
              "completed": false,
              "durationMinutes": 25,
              "distanceMeters": 4620,
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
              "description": "Sortie longue en zone 2, allure stable. Pratiquer la nutrition de course sur les séances >75min.",
              "completed": false,
              "durationMinutes": 97,
              "distanceMeters": 17120,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 9.6,
        "bySport": {
          "strength": {
            "sessions": 2,
            "hours": 2.0
          },
          "swim": {
            "sessions": 2,
            "hours": 1.08
          },
          "bike": {
            "sessions": 2,
            "hours": 3.78,
            "km": 94.6
          },
          "run": {
            "sessions": 2,
            "hours": 2.32,
            "km": 29.7
          },
          "brick": {
            "sessions": 1,
            "hours": 0.42
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
      "targetHours": 7.65,
      "isRecoveryWeek": true,
      "days": [
        {
          "date": "2027-03-08",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w32-lun-force",
              "sport": "strength",
              "type": "strength",
              "name": "Musculation - bas du corps + abdos",
              "description": "Semaine de décharge: Bas du corps + abdos. 3-4 séries x 6-8 reps charge modérée-élevée: squats, soulevé de terre roumain unilatéral, step-ups, hip thrust. Gainage anti-rotation (Pallof press, bird dog). Réduire la charge de 20-30%.",
              "completed": false,
              "durationMinutes": 60
            }
          ]
        },
        {
          "date": "2027-03-09",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w32-mar-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique + aérobie",
              "description": "Progression très graduelle (protection des épaules). 6-8x50m technique (rattrapé, doigt qui traîne, respiration bilatérale) puis nage continue/fractionnée en zone 1-2 jusqu'à ~1450m au total. Arrêter si sensation inhabituelle à l'épaule.",
              "completed": false,
              "durationMinutes": 35,
              "distanceMeters": 1450,
              "primaryZone": "Zone 1-2"
            },
            {
              "id": "w32-mar-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance facile (2e séance)",
              "description": "Sortie ou home-trainer facile en zone 2, cadence fluide 85-95rpm. Séance courte et à faible risque - sert à augmenter le volume vélo sans stress articulaire.",
              "completed": false,
              "durationMinutes": 38,
              "distanceMeters": 15800,
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
              "type": "intervals",
              "name": "Course - facile + accélérations",
              "description": "Footing facile avec 4-6x20s accélérations progressives (strides), retour au calme complet entre chaque.",
              "completed": false,
              "durationMinutes": 36,
              "distanceMeters": 6880,
              "primaryZone": "Zone 2 + strides"
            }
          ]
        },
        {
          "date": "2027-03-11",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w32-jeu-force",
              "sport": "strength",
              "type": "strength",
              "name": "Musculation - haut du corps",
              "description": "Semaine de décharge: Haut du corps. 3-4 séries x 6-8 reps: tractions/lat pulldown, développé militaire, rowing, bench press. Priorité au dos/épaules pour la natation et la posture vélo. Réduire la charge de 20-30%.",
              "completed": false,
              "durationMinutes": 60
            }
          ]
        },
        {
          "date": "2027-03-12",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w32-ven-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique (2e séance)",
              "description": "Séance courte, focus pur sur la technique: drills + nage aisée en zone 1-2. Fréquence augmentée maintenant que la charge du stage coop est terminée.",
              "completed": false,
              "durationMinutes": 19,
              "distanceMeters": 750,
              "primaryZone": "Zone 1-2"
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
              "description": "Zone 2 stable. Sport à faible risque de blessure: volume augmenté progressivement et plus rapidement que la natation. Pratiquer l'hydratation/nutrition en continu.",
              "completed": false,
              "durationMinutes": 137,
              "distanceMeters": 57100,
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
              "description": "Sortie longue en zone 2, allure stable. Pratiquer la nutrition de course sur les séances >75min.",
              "completed": false,
              "durationMinutes": 74,
              "distanceMeters": 13100,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 7.65,
        "bySport": {
          "strength": {
            "sessions": 2,
            "hours": 2.0
          },
          "swim": {
            "sessions": 2,
            "hours": 0.9
          },
          "bike": {
            "sessions": 2,
            "hours": 2.92,
            "km": 72.9
          },
          "run": {
            "sessions": 2,
            "hours": 1.83,
            "km": 20.0
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
      "targetHours": 9.85,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2027-03-15",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w33-lun-force",
              "sport": "strength",
              "type": "strength",
              "name": "Musculation - bas du corps + abdos",
              "description": "Bas du corps + abdos. 3-4 séries x 6-8 reps charge modérée-élevée: squats, soulevé de terre roumain unilatéral, step-ups, hip thrust. Gainage anti-rotation (Pallof press, bird dog).",
              "completed": false,
              "durationMinutes": 60
            }
          ]
        },
        {
          "date": "2027-03-16",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w33-mar-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique + aérobie",
              "description": "Progression très graduelle (protection des épaules). 6-8x50m technique (rattrapé, doigt qui traîne, respiration bilatérale) puis nage continue/fractionnée en zone 1-2 jusqu'à ~1800m au total. Arrêter si sensation inhabituelle à l'épaule.",
              "completed": false,
              "durationMinutes": 43,
              "distanceMeters": 1800,
              "primaryZone": "Zone 1-2"
            },
            {
              "id": "w33-mar-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance facile (2e séance)",
              "description": "Sortie ou home-trainer facile en zone 2, cadence fluide 85-95rpm. Séance courte et à faible risque - sert à augmenter le volume vélo sans stress articulaire.",
              "completed": false,
              "durationMinutes": 48,
              "distanceMeters": 20000,
              "primaryZone": "Zone 2"
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
              "type": "threshold",
              "name": "Course - intervalles seuil",
              "description": "Échauffement 12min facile + 4x100m lignes droites. Bloc principal: 4-5 x 4min à allure seuil (zone 4, ~4:45-4:55/km), récupération 2min trot entre chaque. Retour au calme 8-10min. Inspiré des séances d'intervalles suggérées par la montre Garmin.",
              "completed": false,
              "durationMinutes": 43,
              "distanceMeters": 8240,
              "primaryZone": "Zone 4-5"
            }
          ]
        },
        {
          "date": "2027-03-18",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w33-jeu-force",
              "sport": "strength",
              "type": "strength",
              "name": "Musculation - haut du corps",
              "description": "Haut du corps. 3-4 séries x 6-8 reps: tractions/lat pulldown, développé militaire, rowing, bench press. Priorité au dos/épaules pour la natation et la posture vélo.",
              "completed": false,
              "durationMinutes": 60
            }
          ]
        },
        {
          "date": "2027-03-19",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w33-ven-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique (2e séance)",
              "description": "Séance courte, focus pur sur la technique: drills + nage aisée en zone 1-2. Fréquence augmentée maintenant que la charge du stage coop est terminée.",
              "completed": false,
              "durationMinutes": 24,
              "distanceMeters": 950,
              "primaryZone": "Zone 1-2"
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
              "description": "Zone 2 stable. Sport à faible risque de blessure: volume augmenté progressivement et plus rapidement que la natation. Pratiquer l'hydratation/nutrition en continu.",
              "completed": false,
              "durationMinutes": 186,
              "distanceMeters": 77500,
              "primaryZone": "Zone 2-3"
            },
            {
              "id": "w33-sam-brick",
              "sport": "brick",
              "type": "brick",
              "name": "Course - transition (brick)",
              "description": "Enchaîné immédiatement après le vélo: course à allure facile-modérée, objectif = habituer les jambes à la transition vélo-course.",
              "completed": false,
              "durationMinutes": 27,
              "distanceMeters": 5020,
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
              "description": "Sortie longue en zone 2, allure stable. Pratiquer la nutrition de course sur les séances >75min.",
              "completed": false,
              "durationMinutes": 100,
              "distanceMeters": 17750,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 9.85,
        "bySport": {
          "strength": {
            "sessions": 2,
            "hours": 2.0
          },
          "swim": {
            "sessions": 2,
            "hours": 1.12
          },
          "bike": {
            "sessions": 2,
            "hours": 3.9,
            "km": 97.5
          },
          "run": {
            "sessions": 2,
            "hours": 2.38,
            "km": 31.0
          },
          "brick": {
            "sessions": 1,
            "hours": 0.45
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
      "targetHours": 9.53,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2027-03-22",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w34-lun-force",
              "sport": "strength",
              "type": "strength",
              "name": "Musculation - bas du corps + abdos",
              "description": "Bas du corps + abdos. 3-4 séries x 6-8 reps charge modérée-élevée: squats, soulevé de terre roumain unilatéral, step-ups, hip thrust. Gainage anti-rotation (Pallof press, bird dog).",
              "completed": false,
              "durationMinutes": 60
            }
          ]
        },
        {
          "date": "2027-03-23",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w34-mar-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique + aérobie",
              "description": "Progression très graduelle (protection des épaules). 6-8x50m technique (rattrapé, doigt qui traîne, respiration bilatérale) puis nage continue/fractionnée en zone 1-2 jusqu'à ~1850m au total. Arrêter si sensation inhabituelle à l'épaule.",
              "completed": false,
              "durationMinutes": 44,
              "distanceMeters": 1850,
              "primaryZone": "Zone 1-2"
            },
            {
              "id": "w34-mar-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance facile (2e séance)",
              "description": "Sortie ou home-trainer facile en zone 2, cadence fluide 85-95rpm. Séance courte et à faible risque - sert à augmenter le volume vélo sans stress articulaire.",
              "completed": false,
              "durationMinutes": 49,
              "distanceMeters": 20400,
              "primaryZone": "Zone 2"
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
              "type": "threshold",
              "name": "Course - intervalles seuil",
              "description": "Échauffement 12min facile + 4x100m lignes droites. Bloc principal: 4-5 x 4min à allure seuil (zone 4, ~4:45-4:55/km), récupération 2min trot entre chaque. Retour au calme 8-10min. Inspiré des séances d'intervalles suggérées par la montre Garmin.",
              "completed": false,
              "durationMinutes": 44,
              "distanceMeters": 8460,
              "primaryZone": "Zone 4-5"
            }
          ]
        },
        {
          "date": "2027-03-25",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w34-jeu-force",
              "sport": "strength",
              "type": "strength",
              "name": "Musculation - haut du corps",
              "description": "Haut du corps. 3-4 séries x 6-8 reps: tractions/lat pulldown, développé militaire, rowing, bench press. Priorité au dos/épaules pour la natation et la posture vélo.",
              "completed": false,
              "durationMinutes": 60
            }
          ]
        },
        {
          "date": "2027-03-26",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w34-ven-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique (2e séance)",
              "description": "Séance courte, focus pur sur la technique: drills + nage aisée en zone 1-2. Fréquence augmentée maintenant que la charge du stage coop est terminée.",
              "completed": false,
              "durationMinutes": 24,
              "distanceMeters": 950,
              "primaryZone": "Zone 1-2"
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
              "description": "Zone 2 stable. Sport à faible risque de blessure: volume augmenté progressivement et plus rapidement que la natation. Pratiquer l'hydratation/nutrition en continu.",
              "completed": false,
              "durationMinutes": 189,
              "distanceMeters": 78800,
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
              "description": "Sortie longue en zone 2, allure stable. Pratiquer la nutrition de course sur les séances >75min.",
              "completed": false,
              "durationMinutes": 102,
              "distanceMeters": 18160,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 9.53,
        "bySport": {
          "strength": {
            "sessions": 2,
            "hours": 2.0
          },
          "swim": {
            "sessions": 2,
            "hours": 1.13
          },
          "bike": {
            "sessions": 2,
            "hours": 3.97,
            "km": 99.2
          },
          "run": {
            "sessions": 2,
            "hours": 2.43,
            "km": 26.6
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
      "targetHours": 10.08,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2027-03-29",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w35-lun-force",
              "sport": "strength",
              "type": "strength",
              "name": "Musculation - bas du corps + abdos",
              "description": "Bas du corps + abdos. 3-4 séries x 6-8 reps charge modérée-élevée: squats, soulevé de terre roumain unilatéral, step-ups, hip thrust. Gainage anti-rotation (Pallof press, bird dog).",
              "completed": false,
              "durationMinutes": 60
            }
          ]
        },
        {
          "date": "2027-03-30",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w35-mar-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique + aérobie",
              "description": "Progression très graduelle (protection des épaules). 6-8x50m technique (rattrapé, doigt qui traîne, respiration bilatérale) puis nage continue/fractionnée en zone 1-2 jusqu'à ~1850m au total. Arrêter si sensation inhabituelle à l'épaule.",
              "completed": false,
              "durationMinutes": 43,
              "distanceMeters": 1850,
              "primaryZone": "Zone 1-2"
            },
            {
              "id": "w35-mar-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance facile (2e séance)",
              "description": "Sortie ou home-trainer facile en zone 2, cadence fluide 85-95rpm. Séance courte et à faible risque - sert à augmenter le volume vélo sans stress articulaire.",
              "completed": false,
              "durationMinutes": 49,
              "distanceMeters": 20400,
              "primaryZone": "Zone 2"
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
              "type": "threshold",
              "name": "Course - intervalles seuil",
              "description": "Échauffement 12min facile + 4x100m lignes droites. Bloc principal: 4-5 x 4min à allure seuil (zone 4, ~4:45-4:55/km), récupération 2min trot entre chaque. Retour au calme 8-10min. Inspiré des séances d'intervalles suggérées par la montre Garmin.",
              "completed": false,
              "durationMinutes": 44,
              "distanceMeters": 8490,
              "primaryZone": "Zone 4-5"
            }
          ]
        },
        {
          "date": "2027-04-01",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w35-jeu-force",
              "sport": "strength",
              "type": "strength",
              "name": "Musculation - haut du corps",
              "description": "Haut du corps. 3-4 séries x 6-8 reps: tractions/lat pulldown, développé militaire, rowing, bench press. Priorité au dos/épaules pour la natation et la posture vélo.",
              "completed": false,
              "durationMinutes": 60
            }
          ]
        },
        {
          "date": "2027-04-02",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w35-ven-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique (2e séance)",
              "description": "Séance courte, focus pur sur la technique: drills + nage aisée en zone 1-2. Fréquence augmentée maintenant que la charge du stage coop est terminée.",
              "completed": false,
              "durationMinutes": 25,
              "distanceMeters": 1000,
              "primaryZone": "Zone 1-2"
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
              "description": "Zone 2 stable. Sport à faible risque de blessure: volume augmenté progressivement et plus rapidement que la natation. Pratiquer l'hydratation/nutrition en continu.",
              "completed": false,
              "durationMinutes": 192,
              "distanceMeters": 80000,
              "primaryZone": "Zone 2-3"
            },
            {
              "id": "w35-sam-brick",
              "sport": "brick",
              "type": "brick",
              "name": "Course - transition (brick)",
              "description": "Enchaîné immédiatement après le vélo: course à allure facile-modérée, objectif = habituer les jambes à la transition vélo-course.",
              "completed": false,
              "durationMinutes": 29,
              "distanceMeters": 5420,
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
              "description": "Sortie longue en zone 2, allure stable. Pratiquer la nutrition de course sur les séances >75min.",
              "completed": false,
              "durationMinutes": 103,
              "distanceMeters": 18390,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 10.08,
        "bySport": {
          "strength": {
            "sessions": 2,
            "hours": 2.0
          },
          "swim": {
            "sessions": 2,
            "hours": 1.13
          },
          "bike": {
            "sessions": 2,
            "hours": 4.02,
            "km": 100.4
          },
          "run": {
            "sessions": 2,
            "hours": 2.45,
            "km": 32.3
          },
          "brick": {
            "sessions": 1,
            "hours": 0.48
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
      "targetHours": 7.97,
      "isRecoveryWeek": true,
      "days": [
        {
          "date": "2027-04-05",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w36-lun-force",
              "sport": "strength",
              "type": "strength",
              "name": "Musculation - bas du corps + abdos",
              "description": "Semaine de décharge: Bas du corps + abdos. 3-4 séries x 6-8 reps charge modérée-élevée: squats, soulevé de terre roumain unilatéral, step-ups, hip thrust. Gainage anti-rotation (Pallof press, bird dog). Réduire la charge de 20-30%.",
              "completed": false,
              "durationMinutes": 60
            }
          ]
        },
        {
          "date": "2027-04-06",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w36-mar-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique + aérobie",
              "description": "Progression très graduelle (protection des épaules). 6-8x50m technique (rattrapé, doigt qui traîne, respiration bilatérale) puis nage continue/fractionnée en zone 1-2 jusqu'à ~1500m au total. Arrêter si sensation inhabituelle à l'épaule.",
              "completed": false,
              "durationMinutes": 35,
              "distanceMeters": 1500,
              "primaryZone": "Zone 1-2"
            },
            {
              "id": "w36-mar-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance facile (2e séance)",
              "description": "Sortie ou home-trainer facile en zone 2, cadence fluide 85-95rpm. Séance courte et à faible risque - sert à augmenter le volume vélo sans stress articulaire.",
              "completed": false,
              "durationMinutes": 40,
              "distanceMeters": 16700,
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
              "type": "intervals",
              "name": "Course - facile + accélérations",
              "description": "Footing facile avec 4-6x20s accélérations progressives (strides), retour au calme complet entre chaque.",
              "completed": false,
              "durationMinutes": 38,
              "distanceMeters": 7350,
              "primaryZone": "Zone 2 + strides"
            }
          ]
        },
        {
          "date": "2027-04-08",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w36-jeu-force",
              "sport": "strength",
              "type": "strength",
              "name": "Musculation - haut du corps",
              "description": "Semaine de décharge: Haut du corps. 3-4 séries x 6-8 reps: tractions/lat pulldown, développé militaire, rowing, bench press. Priorité au dos/épaules pour la natation et la posture vélo. Réduire la charge de 20-30%.",
              "completed": false,
              "durationMinutes": 60
            }
          ]
        },
        {
          "date": "2027-04-09",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w36-ven-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique (2e séance)",
              "description": "Séance courte, focus pur sur la technique: drills + nage aisée en zone 1-2. Fréquence augmentée maintenant que la charge du stage coop est terminée.",
              "completed": false,
              "durationMinutes": 20,
              "distanceMeters": 800,
              "primaryZone": "Zone 1-2"
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
              "description": "Zone 2 stable. Sport à faible risque de blessure: volume augmenté progressivement et plus rapidement que la natation. Pratiquer l'hydratation/nutrition en continu.",
              "completed": false,
              "durationMinutes": 146,
              "distanceMeters": 60800,
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
              "description": "Sortie longue en zone 2, allure stable. Pratiquer la nutrition de course sur les séances >75min.",
              "completed": false,
              "durationMinutes": 79,
              "distanceMeters": 14150,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 7.97,
        "bySport": {
          "strength": {
            "sessions": 2,
            "hours": 2.0
          },
          "swim": {
            "sessions": 2,
            "hours": 0.92
          },
          "bike": {
            "sessions": 2,
            "hours": 3.1,
            "km": 77.5
          },
          "run": {
            "sessions": 2,
            "hours": 1.95,
            "km": 21.5
          }
        }
      }
    },
    {
      "weekNumber": 37,
      "startDate": "2027-04-12",
      "endDate": "2027-04-18",
      "phase": "Peak",
      "focus": "Affûtage spécifique, allure course, brick chaque semaine",
      "targetHours": 10.15,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2027-04-12",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w37-lun-force",
              "sport": "strength",
              "type": "power",
              "name": "Musculation - bas du corps + abdos",
              "description": "Bas du corps + abdos, charge modérée avec composante explosive: squats sautés légers, fentes bulgares, mollets. Gainage dynamique. Volume réduit pour préserver la fraîcheur des jambes.",
              "completed": false,
              "durationMinutes": 60
            }
          ]
        },
        {
          "date": "2027-04-13",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w37-mar-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique + aérobie",
              "description": "Progression très graduelle (protection des épaules). 6-8x50m technique (rattrapé, doigt qui traîne, respiration bilatérale) puis nage continue/fractionnée en zone 1-2 jusqu'à ~1900m au total. Arrêter si sensation inhabituelle à l'épaule.",
              "completed": false,
              "durationMinutes": 44,
              "distanceMeters": 1900,
              "primaryZone": "Zone 1-2"
            },
            {
              "id": "w37-mar-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance facile (2e séance)",
              "description": "Sortie ou home-trainer facile en zone 2, cadence fluide 85-95rpm. Séance courte et à faible risque - sert à augmenter le volume vélo sans stress articulaire.",
              "completed": false,
              "durationMinutes": 50,
              "distanceMeters": 20800,
              "primaryZone": "Zone 2"
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
              "type": "vo2max",
              "name": "Course - VO2max / allure course",
              "description": "Échauffement 12min facile + strides. Bloc principal: 5-6 x 3min à allure VO2max (zone 6, ~4:25-4:35/km), récupération 2min trot, OU 20min continu à allure course 70.3 selon la semaine. Retour au calme 8min.",
              "completed": false,
              "durationMinutes": 45,
              "distanceMeters": 8710,
              "primaryZone": "Zone 5-6"
            }
          ]
        },
        {
          "date": "2027-04-15",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w37-jeu-force",
              "sport": "strength",
              "type": "power",
              "name": "Musculation - haut du corps",
              "description": "Haut du corps, charge modérée, volume réduit: tirage, développé léger, gainage. Éviter la fatigue résiduelle des épaules avant les séances de natation.",
              "completed": false,
              "durationMinutes": 60
            }
          ]
        },
        {
          "date": "2027-04-16",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w37-ven-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique (2e séance)",
              "description": "Séance courte, focus pur sur la technique: drills + nage aisée en zone 1-2. Fréquence augmentée maintenant que la charge du stage coop est terminée.",
              "completed": false,
              "durationMinutes": 25,
              "distanceMeters": 1000,
              "primaryZone": "Zone 1-2"
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
              "name": "Vélo - sortie longue",
              "description": "Zone 2 stable. Sport à faible risque de blessure: volume augmenté progressivement et plus rapidement que la natation. Pratiquer l'hydratation/nutrition en continu. Bloc final à allure course (60-90min @ 70-77% FTP).",
              "completed": false,
              "durationMinutes": 195,
              "distanceMeters": 81200,
              "primaryZone": "Zone 2-3"
            },
            {
              "id": "w37-sam-brick",
              "sport": "brick",
              "type": "brick",
              "name": "Course - transition (brick)",
              "description": "Enchaîné immédiatement après le vélo: course à allure facile-modérée, objectif = habituer les jambes à la transition vélo-course.",
              "completed": false,
              "durationMinutes": 25,
              "distanceMeters": 4690,
              "primaryZone": "Zone 2-3"
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
              "description": "Sortie longue en zone 2, allure stable. Pratiquer la nutrition de course sur les séances >75min.",
              "completed": false,
              "durationMinutes": 105,
              "distanceMeters": 18810,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 10.15,
        "bySport": {
          "strength": {
            "sessions": 2,
            "hours": 2.0
          },
          "swim": {
            "sessions": 2,
            "hours": 1.15
          },
          "bike": {
            "sessions": 2,
            "hours": 4.08,
            "km": 102.0
          },
          "run": {
            "sessions": 2,
            "hours": 2.5,
            "km": 32.2
          },
          "brick": {
            "sessions": 1,
            "hours": 0.42
          }
        }
      }
    },
    {
      "weekNumber": 38,
      "startDate": "2027-04-19",
      "endDate": "2027-04-25",
      "phase": "Peak",
      "focus": "Affûtage spécifique, allure course, brick chaque semaine",
      "targetHours": 10.35,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2027-04-19",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w38-lun-force",
              "sport": "strength",
              "type": "power",
              "name": "Musculation - bas du corps + abdos",
              "description": "Bas du corps + abdos, charge modérée avec composante explosive: squats sautés légers, fentes bulgares, mollets. Gainage dynamique. Volume réduit pour préserver la fraîcheur des jambes.",
              "completed": false,
              "durationMinutes": 60
            }
          ]
        },
        {
          "date": "2027-04-20",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w38-mar-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique + aérobie",
              "description": "Progression très graduelle (protection des épaules). 6-8x50m technique (rattrapé, doigt qui traîne, respiration bilatérale) puis nage continue/fractionnée en zone 1-2 jusqu'à ~1950m au total. Arrêter si sensation inhabituelle à l'épaule.",
              "completed": false,
              "durationMinutes": 45,
              "distanceMeters": 1950,
              "primaryZone": "Zone 1-2"
            },
            {
              "id": "w38-mar-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance facile (2e séance)",
              "description": "Sortie ou home-trainer facile en zone 2, cadence fluide 85-95rpm. Séance courte et à faible risque - sert à augmenter le volume vélo sans stress articulaire.",
              "completed": false,
              "durationMinutes": 50,
              "distanceMeters": 20800,
              "primaryZone": "Zone 2"
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
              "type": "vo2max",
              "name": "Course - VO2max / allure course",
              "description": "Échauffement 12min facile + strides. Bloc principal: 5-6 x 3min à allure VO2max (zone 6, ~4:25-4:35/km), récupération 2min trot, OU 20min continu à allure course 70.3 selon la semaine. Retour au calme 8min.",
              "completed": false,
              "durationMinutes": 45,
              "distanceMeters": 8760,
              "primaryZone": "Zone 5-6"
            }
          ]
        },
        {
          "date": "2027-04-22",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w38-jeu-force",
              "sport": "strength",
              "type": "power",
              "name": "Musculation - haut du corps",
              "description": "Haut du corps, charge modérée, volume réduit: tirage, développé léger, gainage. Éviter la fatigue résiduelle des épaules avant les séances de natation.",
              "completed": false,
              "durationMinutes": 60
            }
          ]
        },
        {
          "date": "2027-04-23",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w38-ven-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique (2e séance)",
              "description": "Séance courte, focus pur sur la technique: drills + nage aisée en zone 1-2. Fréquence augmentée maintenant que la charge du stage coop est terminée.",
              "completed": false,
              "durationMinutes": 26,
              "distanceMeters": 1050,
              "primaryZone": "Zone 1-2"
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
              "name": "Vélo - sortie longue",
              "description": "Zone 2 stable. Sport à faible risque de blessure: volume augmenté progressivement et plus rapidement que la natation. Pratiquer l'hydratation/nutrition en continu. Bloc final à allure course (60-90min @ 70-77% FTP).",
              "completed": false,
              "durationMinutes": 200,
              "distanceMeters": 83300,
              "primaryZone": "Zone 2-3"
            },
            {
              "id": "w38-sam-brick",
              "sport": "brick",
              "type": "brick",
              "name": "Course - transition (brick)",
              "description": "Enchaîné immédiatement après le vélo: course à allure facile-modérée, objectif = habituer les jambes à la transition vélo-course.",
              "completed": false,
              "durationMinutes": 28,
              "distanceMeters": 5280,
              "primaryZone": "Zone 2-3"
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
              "description": "Sortie longue en zone 2, allure stable. Pratiquer la nutrition de course sur les séances >75min.",
              "completed": false,
              "durationMinutes": 107,
              "distanceMeters": 19260,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 10.35,
        "bySport": {
          "strength": {
            "sessions": 2,
            "hours": 2.0
          },
          "swim": {
            "sessions": 2,
            "hours": 1.18
          },
          "bike": {
            "sessions": 2,
            "hours": 4.17,
            "km": 104.1
          },
          "run": {
            "sessions": 2,
            "hours": 2.53,
            "km": 33.3
          },
          "brick": {
            "sessions": 1,
            "hours": 0.47
          }
        }
      }
    },
    {
      "weekNumber": 39,
      "startDate": "2027-04-26",
      "endDate": "2027-05-02",
      "phase": "Peak",
      "focus": "Affûtage spécifique, allure course, brick chaque semaine",
      "targetHours": 10.48,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2027-04-26",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w39-lun-force",
              "sport": "strength",
              "type": "power",
              "name": "Musculation - bas du corps + abdos",
              "description": "Bas du corps + abdos, charge modérée avec composante explosive: squats sautés légers, fentes bulgares, mollets. Gainage dynamique. Volume réduit pour préserver la fraîcheur des jambes.",
              "completed": false,
              "durationMinutes": 60
            }
          ]
        },
        {
          "date": "2027-04-27",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w39-mar-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique + aérobie",
              "description": "Progression très graduelle (protection des épaules). 6-8x50m technique (rattrapé, doigt qui traîne, respiration bilatérale) puis nage continue/fractionnée en zone 1-2 jusqu'à ~1950m au total. Arrêter si sensation inhabituelle à l'épaule.",
              "completed": false,
              "durationMinutes": 44,
              "distanceMeters": 1950,
              "primaryZone": "Zone 1-2"
            },
            {
              "id": "w39-mar-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance facile (2e séance)",
              "description": "Sortie ou home-trainer facile en zone 2, cadence fluide 85-95rpm. Séance courte et à faible risque - sert à augmenter le volume vélo sans stress articulaire.",
              "completed": false,
              "durationMinutes": 50,
              "distanceMeters": 20800,
              "primaryZone": "Zone 2"
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
              "type": "vo2max",
              "name": "Course - VO2max / allure course",
              "description": "Échauffement 12min facile + strides. Bloc principal: 5-6 x 3min à allure VO2max (zone 6, ~4:25-4:35/km), récupération 2min trot, OU 20min continu à allure course 70.3 selon la semaine. Retour au calme 8min.",
              "completed": false,
              "durationMinutes": 45,
              "distanceMeters": 8800,
              "primaryZone": "Zone 5-6"
            }
          ]
        },
        {
          "date": "2027-04-29",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w39-jeu-force",
              "sport": "strength",
              "type": "power",
              "name": "Musculation - haut du corps",
              "description": "Haut du corps, charge modérée, volume réduit: tirage, développé léger, gainage. Éviter la fatigue résiduelle des épaules avant les séances de natation.",
              "completed": false,
              "durationMinutes": 60
            }
          ]
        },
        {
          "date": "2027-04-30",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w39-ven-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique (2e séance)",
              "description": "Séance courte, focus pur sur la technique: drills + nage aisée en zone 1-2. Fréquence augmentée maintenant que la charge du stage coop est terminée.",
              "completed": false,
              "durationMinutes": 26,
              "distanceMeters": 1050,
              "primaryZone": "Zone 1-2"
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
              "name": "Vélo - sortie longue",
              "description": "Zone 2 stable. Sport à faible risque de blessure: volume augmenté progressivement et plus rapidement que la natation. Pratiquer l'hydratation/nutrition en continu. Bloc final à allure course (60-90min @ 70-77% FTP).",
              "completed": false,
              "durationMinutes": 205,
              "distanceMeters": 85400,
              "primaryZone": "Zone 2-3"
            },
            {
              "id": "w39-sam-brick",
              "sport": "brick",
              "type": "brick",
              "name": "Course - transition (brick)",
              "description": "Enchaîné immédiatement après le vélo: course à allure facile-modérée, objectif = habituer les jambes à la transition vélo-course.",
              "completed": false,
              "durationMinutes": 30,
              "distanceMeters": 5680,
              "primaryZone": "Zone 2-3"
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
              "description": "Sortie longue en zone 2, allure stable. Pratiquer la nutrition de course sur les séances >75min.",
              "completed": false,
              "durationMinutes": 109,
              "distanceMeters": 19720,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 10.48,
        "bySport": {
          "strength": {
            "sessions": 2,
            "hours": 2.0
          },
          "swim": {
            "sessions": 2,
            "hours": 1.17
          },
          "bike": {
            "sessions": 2,
            "hours": 4.25,
            "km": 106.2
          },
          "run": {
            "sessions": 2,
            "hours": 2.57,
            "km": 34.2
          },
          "brick": {
            "sessions": 1,
            "hours": 0.5
          }
        }
      }
    },
    {
      "weekNumber": 40,
      "startDate": "2027-05-03",
      "endDate": "2027-05-09",
      "phase": "Peak",
      "focus": "Affûtage spécifique, allure course, brick chaque semaine [semaine de décharge]",
      "targetHours": 8.3,
      "isRecoveryWeek": true,
      "days": [
        {
          "date": "2027-05-03",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w40-lun-force",
              "sport": "strength",
              "type": "power",
              "name": "Musculation - bas du corps + abdos",
              "description": "Semaine de décharge: Bas du corps + abdos, charge modérée avec composante explosive: squats sautés légers, fentes bulgares, mollets. Gainage dynamique. Volume réduit pour préserver la fraîcheur des jambes. Réduire la charge de 20-30%.",
              "completed": false,
              "durationMinutes": 60
            }
          ]
        },
        {
          "date": "2027-05-04",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w40-mar-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique + aérobie",
              "description": "Progression très graduelle (protection des épaules). 6-8x50m technique (rattrapé, doigt qui traîne, respiration bilatérale) puis nage continue/fractionnée en zone 1-2 jusqu'à ~1600m au total. Arrêter si sensation inhabituelle à l'épaule.",
              "completed": false,
              "durationMinutes": 36,
              "distanceMeters": 1600,
              "primaryZone": "Zone 1-2"
            },
            {
              "id": "w40-mar-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance facile (2e séance)",
              "description": "Sortie ou home-trainer facile en zone 2, cadence fluide 85-95rpm. Séance courte et à faible risque - sert à augmenter le volume vélo sans stress articulaire.",
              "completed": false,
              "durationMinutes": 40,
              "distanceMeters": 16700,
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
              "type": "intervals",
              "name": "Course - facile + accélérations",
              "description": "Footing facile avec 4-6x20s accélérations progressives (strides), retour au calme complet entre chaque.",
              "completed": false,
              "durationMinutes": 38,
              "distanceMeters": 7480,
              "primaryZone": "Zone 2 + strides"
            }
          ]
        },
        {
          "date": "2027-05-06",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w40-jeu-force",
              "sport": "strength",
              "type": "power",
              "name": "Musculation - haut du corps",
              "description": "Semaine de décharge: Haut du corps, charge modérée, volume réduit: tirage, développé léger, gainage. Éviter la fatigue résiduelle des épaules avant les séances de natation. Réduire la charge de 20-30%.",
              "completed": false,
              "durationMinutes": 60
            }
          ]
        },
        {
          "date": "2027-05-07",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w40-ven-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique (2e séance)",
              "description": "Séance courte, focus pur sur la technique: drills + nage aisée en zone 1-2. Fréquence augmentée maintenant que la charge du stage coop est terminée.",
              "completed": false,
              "durationMinutes": 22,
              "distanceMeters": 900,
              "primaryZone": "Zone 1-2"
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
              "name": "Vélo - sortie longue",
              "description": "Zone 2 stable. Sport à faible risque de blessure: volume augmenté progressivement et plus rapidement que la natation. Pratiquer l'hydratation/nutrition en continu.",
              "completed": false,
              "durationMinutes": 158,
              "distanceMeters": 65800,
              "primaryZone": "Zone 2"
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
              "description": "Sortie longue en zone 2, allure stable. Pratiquer la nutrition de course sur les séances >75min.",
              "completed": false,
              "durationMinutes": 84,
              "distanceMeters": 15270,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 8.3,
        "bySport": {
          "strength": {
            "sessions": 2,
            "hours": 2.0
          },
          "swim": {
            "sessions": 2,
            "hours": 0.97
          },
          "bike": {
            "sessions": 2,
            "hours": 3.3,
            "km": 82.5
          },
          "run": {
            "sessions": 2,
            "hours": 2.03,
            "km": 22.8
          }
        }
      }
    },
    {
      "weekNumber": 41,
      "startDate": "2027-05-10",
      "endDate": "2027-05-16",
      "phase": "Peak",
      "focus": "Affûtage spécifique, allure course, brick chaque semaine",
      "targetHours": 10.87,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2027-05-10",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w41-lun-force",
              "sport": "strength",
              "type": "power",
              "name": "Musculation - bas du corps + abdos",
              "description": "Bas du corps + abdos, charge modérée avec composante explosive: squats sautés légers, fentes bulgares, mollets. Gainage dynamique. Volume réduit pour préserver la fraîcheur des jambes.",
              "completed": false,
              "durationMinutes": 60
            }
          ]
        },
        {
          "date": "2027-05-11",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w41-mar-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique + aérobie",
              "description": "Progression très graduelle (protection des épaules). 6-8x50m technique (rattrapé, doigt qui traîne, respiration bilatérale) puis nage continue/fractionnée en zone 1-2 jusqu'à ~2050m au total. Arrêter si sensation inhabituelle à l'épaule.",
              "completed": false,
              "durationMinutes": 46,
              "distanceMeters": 2050,
              "primaryZone": "Zone 1-2"
            },
            {
              "id": "w41-mar-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance facile (2e séance)",
              "description": "Sortie ou home-trainer facile en zone 2, cadence fluide 85-95rpm. Séance courte et à faible risque - sert à augmenter le volume vélo sans stress articulaire.",
              "completed": false,
              "durationMinutes": 50,
              "distanceMeters": 20800,
              "primaryZone": "Zone 2"
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
              "type": "vo2max",
              "name": "Course - VO2max / allure course",
              "description": "Échauffement 12min facile + strides. Bloc principal: 5-6 x 3min à allure VO2max (zone 6, ~4:25-4:35/km), récupération 2min trot, OU 20min continu à allure course 70.3 selon la semaine. Retour au calme 8min.",
              "completed": false,
              "durationMinutes": 45,
              "distanceMeters": 8900,
              "primaryZone": "Zone 5-6"
            }
          ]
        },
        {
          "date": "2027-05-13",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w41-jeu-force",
              "sport": "strength",
              "type": "power",
              "name": "Musculation - haut du corps",
              "description": "Haut du corps, charge modérée, volume réduit: tirage, développé léger, gainage. Éviter la fatigue résiduelle des épaules avant les séances de natation.",
              "completed": false,
              "durationMinutes": 60
            }
          ]
        },
        {
          "date": "2027-05-14",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w41-ven-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique (2e séance)",
              "description": "Séance courte, focus pur sur la technique: drills + nage aisée en zone 1-2. Fréquence augmentée maintenant que la charge du stage coop est terminée.",
              "completed": false,
              "durationMinutes": 27,
              "distanceMeters": 1150,
              "primaryZone": "Zone 1-2"
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
              "name": "Vélo - sortie longue",
              "description": "Zone 2 stable. Sport à faible risque de blessure: volume augmenté progressivement et plus rapidement que la natation. Pratiquer l'hydratation/nutrition en continu. Bloc final à allure course (60-90min @ 70-77% FTP).",
              "completed": false,
              "durationMinutes": 215,
              "distanceMeters": 89600,
              "primaryZone": "Zone 2-3"
            },
            {
              "id": "w41-sam-brick",
              "sport": "brick",
              "type": "brick",
              "name": "Course - transition (brick)",
              "description": "Enchaîné immédiatement après le vélo: course à allure facile-modérée, objectif = habituer les jambes à la transition vélo-course.",
              "completed": false,
              "durationMinutes": 35,
              "distanceMeters": 6700,
              "primaryZone": "Zone 2-3"
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
              "description": "Sortie longue en zone 2, allure stable. Pratiquer la nutrition de course sur les séances >75min.",
              "completed": false,
              "durationMinutes": 114,
              "distanceMeters": 20830,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 10.87,
        "bySport": {
          "strength": {
            "sessions": 2,
            "hours": 2.0
          },
          "swim": {
            "sessions": 2,
            "hours": 1.22
          },
          "bike": {
            "sessions": 2,
            "hours": 4.42,
            "km": 110.4
          },
          "run": {
            "sessions": 2,
            "hours": 2.65,
            "km": 36.4
          },
          "brick": {
            "sessions": 1,
            "hours": 0.58
          }
        }
      }
    },
    {
      "weekNumber": 42,
      "startDate": "2027-05-17",
      "endDate": "2027-05-23",
      "phase": "Peak",
      "focus": "Affûtage spécifique, allure course, brick chaque semaine",
      "targetHours": 11.02,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2027-05-17",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w42-lun-force",
              "sport": "strength",
              "type": "power",
              "name": "Musculation - bas du corps + abdos",
              "description": "Bas du corps + abdos, charge modérée avec composante explosive: squats sautés légers, fentes bulgares, mollets. Gainage dynamique. Volume réduit pour préserver la fraîcheur des jambes.",
              "completed": false,
              "durationMinutes": 60
            }
          ]
        },
        {
          "date": "2027-05-18",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w42-mar-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique + aérobie",
              "description": "Progression très graduelle (protection des épaules). 6-8x50m technique (rattrapé, doigt qui traîne, respiration bilatérale) puis nage continue/fractionnée en zone 1-2 jusqu'à ~2050m au total. Arrêter si sensation inhabituelle à l'épaule.",
              "completed": false,
              "durationMinutes": 45,
              "distanceMeters": 2050,
              "primaryZone": "Zone 1-2"
            },
            {
              "id": "w42-mar-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance facile (2e séance)",
              "description": "Sortie ou home-trainer facile en zone 2, cadence fluide 85-95rpm. Séance courte et à faible risque - sert à augmenter le volume vélo sans stress articulaire.",
              "completed": false,
              "durationMinutes": 50,
              "distanceMeters": 20800,
              "primaryZone": "Zone 2"
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
              "type": "vo2max",
              "name": "Course - VO2max / allure course",
              "description": "Échauffement 12min facile + strides. Bloc principal: 5-6 x 3min à allure VO2max (zone 6, ~4:25-4:35/km), récupération 2min trot, OU 20min continu à allure course 70.3 selon la semaine. Retour au calme 8min.",
              "completed": false,
              "durationMinutes": 45,
              "distanceMeters": 8950,
              "primaryZone": "Zone 5-6"
            }
          ]
        },
        {
          "date": "2027-05-20",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w42-jeu-force",
              "sport": "strength",
              "type": "power",
              "name": "Musculation - haut du corps",
              "description": "Haut du corps, charge modérée, volume réduit: tirage, développé léger, gainage. Éviter la fatigue résiduelle des épaules avant les séances de natation.",
              "completed": false,
              "durationMinutes": 60
            }
          ]
        },
        {
          "date": "2027-05-21",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w42-ven-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique (2e séance)",
              "description": "Séance courte, focus pur sur la technique: drills + nage aisée en zone 1-2. Fréquence augmentée maintenant que la charge du stage coop est terminée.",
              "completed": false,
              "durationMinutes": 27,
              "distanceMeters": 1150,
              "primaryZone": "Zone 1-2"
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
              "name": "Vélo - sortie longue",
              "description": "Zone 2 stable. Sport à faible risque de blessure: volume augmenté progressivement et plus rapidement que la natation. Pratiquer l'hydratation/nutrition en continu. Bloc final à allure course (60-90min @ 70-77% FTP).",
              "completed": false,
              "durationMinutes": 220,
              "distanceMeters": 91700,
              "primaryZone": "Zone 2-3"
            },
            {
              "id": "w42-sam-brick",
              "sport": "brick",
              "type": "brick",
              "name": "Course - transition (brick)",
              "description": "Enchaîné immédiatement après le vélo: course à allure facile-modérée, objectif = habituer les jambes à la transition vélo-course.",
              "completed": false,
              "durationMinutes": 38,
              "distanceMeters": 7320,
              "primaryZone": "Zone 2-3"
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
              "description": "Sortie longue en zone 2, allure stable. Pratiquer la nutrition de course sur les séances >75min.",
              "completed": false,
              "durationMinutes": 116,
              "distanceMeters": 21310,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 11.02,
        "bySport": {
          "strength": {
            "sessions": 2,
            "hours": 2.0
          },
          "swim": {
            "sessions": 2,
            "hours": 1.2
          },
          "bike": {
            "sessions": 2,
            "hours": 4.5,
            "km": 112.5
          },
          "run": {
            "sessions": 2,
            "hours": 2.68,
            "km": 37.6
          },
          "brick": {
            "sessions": 1,
            "hours": 0.63
          }
        }
      }
    },
    {
      "weekNumber": 43,
      "startDate": "2027-05-24",
      "endDate": "2027-05-30",
      "phase": "Peak",
      "focus": "Affûtage spécifique, allure course, brick chaque semaine [semaine de décharge]",
      "targetHours": 8.57,
      "isRecoveryWeek": true,
      "days": [
        {
          "date": "2027-05-24",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w43-lun-force",
              "sport": "strength",
              "type": "power",
              "name": "Musculation - bas du corps + abdos",
              "description": "Semaine de décharge: Bas du corps + abdos, charge modérée avec composante explosive: squats sautés légers, fentes bulgares, mollets. Gainage dynamique. Volume réduit pour préserver la fraîcheur des jambes. Réduire la charge de 20-30%.",
              "completed": false,
              "durationMinutes": 60
            }
          ]
        },
        {
          "date": "2027-05-25",
          "dayOfWeek": "Mardi",
          "workouts": [
            {
              "id": "w43-mar-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique + aérobie",
              "description": "Progression très graduelle (protection des épaules). 6-8x50m technique (rattrapé, doigt qui traîne, respiration bilatérale) puis nage continue/fractionnée en zone 1-2 jusqu'à ~1700m au total. Arrêter si sensation inhabituelle à l'épaule.",
              "completed": false,
              "durationMinutes": 37,
              "distanceMeters": 1700,
              "primaryZone": "Zone 1-2"
            },
            {
              "id": "w43-mar-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance facile (2e séance)",
              "description": "Sortie ou home-trainer facile en zone 2, cadence fluide 85-95rpm. Séance courte et à faible risque - sert à augmenter le volume vélo sans stress articulaire.",
              "completed": false,
              "durationMinutes": 40,
              "distanceMeters": 16700,
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
              "type": "intervals",
              "name": "Course - facile + accélérations",
              "description": "Footing facile avec 4-6x20s accélérations progressives (strides), retour au calme complet entre chaque.",
              "completed": false,
              "durationMinutes": 38,
              "distanceMeters": 7600,
              "primaryZone": "Zone 2 + strides"
            }
          ]
        },
        {
          "date": "2027-05-27",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w43-jeu-force",
              "sport": "strength",
              "type": "power",
              "name": "Musculation - haut du corps",
              "description": "Semaine de décharge: Haut du corps, charge modérée, volume réduit: tirage, développé léger, gainage. Éviter la fatigue résiduelle des épaules avant les séances de natation. Réduire la charge de 20-30%.",
              "completed": false,
              "durationMinutes": 60
            }
          ]
        },
        {
          "date": "2027-05-28",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w43-ven-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique (2e séance)",
              "description": "Séance courte, focus pur sur la technique: drills + nage aisée en zone 1-2. Fréquence augmentée maintenant que la charge du stage coop est terminée.",
              "completed": false,
              "durationMinutes": 22,
              "distanceMeters": 950,
              "primaryZone": "Zone 1-2"
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
              "name": "Vélo - sortie longue",
              "description": "Zone 2 stable. Sport à faible risque de blessure: volume augmenté progressivement et plus rapidement que la natation. Pratiquer l'hydratation/nutrition en continu.",
              "completed": false,
              "durationMinutes": 169,
              "distanceMeters": 70400,
              "primaryZone": "Zone 2"
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
              "description": "Sortie longue en zone 2, allure stable. Pratiquer la nutrition de course sur les séances >75min.",
              "completed": false,
              "durationMinutes": 88,
              "distanceMeters": 16250,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 8.57,
        "bySport": {
          "strength": {
            "sessions": 2,
            "hours": 2.0
          },
          "swim": {
            "sessions": 2,
            "hours": 0.98
          },
          "bike": {
            "sessions": 2,
            "hours": 3.48,
            "km": 87.1
          },
          "run": {
            "sessions": 2,
            "hours": 2.1,
            "km": 23.9
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
      "targetHours": 7.7,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2027-05-31",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w44-lun-force",
              "sport": "strength",
              "type": "maintenance",
              "name": "Musculation - bas du corps + abdos",
              "description": "Bas du corps + abdos, charge légère, 2 séries x 8-10 reps - maintien sans fatigue résiduelle avant la course.",
              "completed": false,
              "durationMinutes": 60
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
              "type": "technique",
              "name": "Natation - technique + aérobie",
              "description": "Progression très graduelle (protection des épaules). 6-8x50m technique (rattrapé, doigt qui traîne, respiration bilatérale) puis nage continue/fractionnée en zone 1-2 jusqu'à ~1500m au total. Arrêter si sensation inhabituelle à l'épaule.",
              "completed": false,
              "durationMinutes": 36,
              "distanceMeters": 1500,
              "primaryZone": "Zone 1-2"
            },
            {
              "id": "w44-mar-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance facile (2e séance)",
              "description": "Sortie ou home-trainer facile en zone 2, cadence fluide 85-95rpm. Séance courte et à faible risque - sert à augmenter le volume vélo sans stress articulaire.",
              "completed": false,
              "durationMinutes": 35,
              "distanceMeters": 14600,
              "primaryZone": "Zone 2"
            }
          ]
        },
        {
          "date": "2027-06-02",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w44-mer-run",
              "sport": "run",
              "type": "intervals",
              "name": "Course - activation (facile)",
              "description": "Footing facile avec 4-6x20s accélérations progressives (strides), retour au calme complet entre chaque.",
              "completed": false,
              "durationMinutes": 30,
              "distanceMeters": 5780,
              "primaryZone": "Zone 2 + strides"
            }
          ]
        },
        {
          "date": "2027-06-03",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w44-jeu-force",
              "sport": "strength",
              "type": "maintenance",
              "name": "Musculation - haut du corps",
              "description": "Haut du corps, charge légère, 2 séries x 8-10 reps - maintien seulement avant la course.",
              "completed": false,
              "durationMinutes": 60
            }
          ]
        },
        {
          "date": "2027-06-04",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w44-ven-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique (2e séance)",
              "description": "Séance courte, focus pur sur la technique: drills + nage aisée en zone 1-2. Fréquence augmentée maintenant que la charge du stage coop est terminée.",
              "completed": false,
              "durationMinutes": 21,
              "distanceMeters": 800,
              "primaryZone": "Zone 1-2"
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
              "type": "long",
              "name": "Vélo - sortie longue",
              "description": "Zone 2 stable. Sport à faible risque de blessure: volume augmenté progressivement et plus rapidement que la natation. Pratiquer l'hydratation/nutrition en continu.",
              "completed": false,
              "durationMinutes": 150,
              "distanceMeters": 62500,
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
              "type": "long",
              "name": "Course - sortie longue",
              "description": "Sortie longue en zone 2, allure stable. Pratiquer la nutrition de course sur les séances >75min.",
              "completed": false,
              "durationMinutes": 70,
              "distanceMeters": 12480,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 7.7,
        "bySport": {
          "strength": {
            "sessions": 2,
            "hours": 2.0
          },
          "swim": {
            "sessions": 2,
            "hours": 0.95
          },
          "bike": {
            "sessions": 2,
            "hours": 3.08,
            "km": 77.1
          },
          "run": {
            "sessions": 2,
            "hours": 1.67,
            "km": 18.3
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
      "targetHours": 5.8,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2027-06-07",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w45-lun-force",
              "sport": "strength",
              "type": "maintenance",
              "name": "Musculation - bas du corps + abdos",
              "description": "Bas du corps + abdos, charge légère, 2 séries x 8-10 reps - maintien sans fatigue résiduelle avant la course.",
              "completed": false,
              "durationMinutes": 60
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
              "type": "technique",
              "name": "Natation - technique + aérobie",
              "description": "Progression très graduelle (protection des épaules). 6-8x50m technique (rattrapé, doigt qui traîne, respiration bilatérale) puis nage continue/fractionnée en zone 1-2 jusqu'à ~1100m au total. Arrêter si sensation inhabituelle à l'épaule.",
              "completed": false,
              "durationMinutes": 29,
              "distanceMeters": 1100,
              "primaryZone": "Zone 1-2"
            },
            {
              "id": "w45-mar-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance facile (2e séance)",
              "description": "Sortie ou home-trainer facile en zone 2, cadence fluide 85-95rpm. Séance courte et à faible risque - sert à augmenter le volume vélo sans stress articulaire.",
              "completed": false,
              "durationMinutes": 25,
              "distanceMeters": 10400,
              "primaryZone": "Zone 2"
            }
          ]
        },
        {
          "date": "2027-06-09",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w45-mer-run",
              "sport": "run",
              "type": "intervals",
              "name": "Course - activation (facile)",
              "description": "Footing facile avec 4-6x20s accélérations progressives (strides), retour au calme complet entre chaque.",
              "completed": false,
              "durationMinutes": 22,
              "distanceMeters": 4080,
              "primaryZone": "Zone 2 + strides"
            }
          ]
        },
        {
          "date": "2027-06-10",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w45-jeu-force",
              "sport": "strength",
              "type": "maintenance",
              "name": "Musculation - haut du corps",
              "description": "Haut du corps, charge légère, 2 séries x 8-10 reps - maintien seulement avant la course.",
              "completed": false,
              "durationMinutes": 60
            }
          ]
        },
        {
          "date": "2027-06-11",
          "dayOfWeek": "Vendredi",
          "workouts": [
            {
              "id": "w45-ven-swim",
              "sport": "swim",
              "type": "technique",
              "name": "Natation - technique (2e séance)",
              "description": "Séance courte, focus pur sur la technique: drills + nage aisée en zone 1-2. Fréquence augmentée maintenant que la charge du stage coop est terminée.",
              "completed": false,
              "durationMinutes": 17,
              "distanceMeters": 600,
              "primaryZone": "Zone 1-2"
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
              "type": "long",
              "name": "Vélo - sortie longue",
              "description": "Zone 2 stable. Sport à faible risque de blessure: volume augmenté progressivement et plus rapidement que la natation. Pratiquer l'hydratation/nutrition en continu.",
              "completed": false,
              "durationMinutes": 90,
              "distanceMeters": 37500,
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
              "type": "long",
              "name": "Course - sortie longue",
              "description": "Sortie longue en zone 2, allure stable. Pratiquer la nutrition de course sur les séances >75min.",
              "completed": false,
              "durationMinutes": 45,
              "distanceMeters": 7750,
              "primaryZone": "Zone 2"
            }
          ]
        }
      ],
      "summary": {
        "totalHours": 5.8,
        "bySport": {
          "strength": {
            "sessions": 2,
            "hours": 2.0
          },
          "swim": {
            "sessions": 2,
            "hours": 0.77
          },
          "bike": {
            "sessions": 2,
            "hours": 1.92,
            "km": 47.9
          },
          "run": {
            "sessions": 2,
            "hours": 1.12,
            "km": 11.8
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
      "targetHours": 3.27,
      "isRecoveryWeek": false,
      "days": [
        {
          "date": "2027-06-14",
          "dayOfWeek": "Lundi",
          "workouts": [
            {
              "id": "w46-lun-force",
              "sport": "strength",
              "type": "maintenance",
              "name": "Musculation - bas du corps + abdos",
              "description": "Bas du corps + abdos, charge légère, 2 séries x 8-10 reps - maintien sans fatigue résiduelle avant la course.",
              "completed": false,
              "durationMinutes": 60
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
              "type": "technique",
              "name": "Natation - technique + aérobie",
              "description": "Progression très graduelle (protection des épaules). 6-8x50m technique (rattrapé, doigt qui traîne, respiration bilatérale) puis nage continue/fractionnée en zone 1-2 jusqu'à ~600m au total. Arrêter si sensation inhabituelle à l'épaule.",
              "completed": false,
              "durationMinutes": 18,
              "distanceMeters": 600,
              "primaryZone": "Zone 1-2"
            },
            {
              "id": "w46-mar-bike",
              "sport": "bike",
              "type": "endurance",
              "name": "Vélo - endurance facile (2e séance)",
              "description": "Sortie ou home-trainer facile en zone 2, cadence fluide 85-95rpm. Séance courte et à faible risque - sert à augmenter le volume vélo sans stress articulaire.",
              "completed": false,
              "durationMinutes": 15,
              "distanceMeters": 6200,
              "primaryZone": "Zone 2"
            }
          ]
        },
        {
          "date": "2027-06-16",
          "dayOfWeek": "Mercredi",
          "workouts": [
            {
              "id": "w46-mer-run",
              "sport": "run",
              "type": "intervals",
              "name": "Course - activation (facile)",
              "description": "Footing facile avec 4-6x20s accélérations progressives (strides), retour au calme complet entre chaque.",
              "completed": false,
              "durationMinutes": 18,
              "distanceMeters": 3220,
              "primaryZone": "Zone 2 + strides"
            }
          ]
        },
        {
          "date": "2027-06-17",
          "dayOfWeek": "Jeudi",
          "workouts": [
            {
              "id": "w46-jeu-force",
              "sport": "strength",
              "type": "maintenance",
              "name": "Musculation - haut du corps",
              "description": "Haut du corps, charge légère, 2 séries x 8-10 reps - maintien seulement avant la course.",
              "completed": false,
              "durationMinutes": 60
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
              "durationMinutes": 25,
              "distanceMeters": 10400,
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
        "totalHours": 3.27,
        "bySport": {
          "strength": {
            "sessions": 2,
            "hours": 2.0
          },
          "swim": {
            "sessions": 1,
            "hours": 0.3
          },
          "bike": {
            "sessions": 2,
            "hours": 0.67,
            "km": 16.6
          },
          "run": {
            "sessions": 1,
            "hours": 0.3,
            "km": 3.2
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
        "target": "Allure confortable, pas de chrono cible - objectif principal: terminer sereinement sans irriter les épaules. À réévaluer une fois la distance de 1900m maîtrisée à l'entraînement.",
        "notes": "Départ très conservateur. Coup de pied minimal (2-temps) pour épargner les jambes et les épaules."
      },
      "bike": {
        "targetPower": "70-77% FTP (à ajuster une fois le FTP mesuré au test de terrain)",
        "targetHR": "≤161 bpm (zone 4 basse, sous le seuil vélo estimé de 158)",
        "notes": "30 premières minutes: 5-10W sous la cible. Piloter à la puissance normalisée, pas à la vitesse (parcours vallonné de Mont-Tremblant)."
      },
      "run": {
        "targetPace": "5:15-5:30/km (à ajuster selon la progression du plan)",
        "targetHR": "≤151 bpm (80-85% du LTHR course mesuré de 182 bpm)",
        "notes": "Les 2 premiers kilomètres seront inconfortables - normal après le vélo. Marcher les ravitaillements si besoin, c'est une stratégie valide sur 70.3."
      }
    },
    "nutrition": {
      "preRace": "2-3h avant: 100-150g de glucides (gruau, banane, rôties). 30min avant: 20-30g.",
      "during": {
        "carbsPerHour": 70,
        "fluidPerHour": "600-800ml",
        "products": [
          "Gels (à tester en entraînement dès la phase Build)",
          "Boisson sportive",
          "Cola (course à pied)"
        ]
      },
      "notes": "Entraîner l'intestin dès la phase Build: commencer à 30g/h et augmenter progressivement sur 4-6 semaines jusqu'à 70-90g/h."
    },
    "taper": {
      "startDate": "2027-05-31",
      "volumeReduction": 55,
      "notes": "Réduction progressive sur 3 semaines. Musculation maintenue (charge légère, durée inchangée) pour ne pas perdre l'habitude, tout le reste du volume cardio réduit."
    },
    "raceDay": {
      "wakeUpTime": "4h00 (départ de vague probable ~7h00-7h30)",
      "preRaceMeal": "Petit-déjeuner familier et déjà testé en entraînement, 2,5-3h avant le départ",
      "warmUp": "10-15min de mobilité légère + quelques longueurs de nage faciles si possible avant le départ",
      "mentalCues": [
        "Départ conservateur - la course se gagne dans les 2 dernières heures",
        "Sur le vélo: puissance/effort, pas vitesse",
        "Les 2 premiers km de course sembleront horribles - c'est normal, ça passe",
        "Objectif: terminer et bien progresser - pas de pression de temps"
      ]
    }
  },
  "notes": {
    "zonesEstimation": "Zones course basées sur le LTHR réellement mesuré par Garmin (182 bpm). Zones vélo et natation encore estimées faute de test formel - à valider via les tests de terrain prévus semaines 1-2 (vélo: test FTP/FC 20min; natation: test CSS 400m/200m, à réévaluer une fois la distance de 1900m atteinte confortablement).",
    "eventDateStatus": "Date du 20 juin 2027 estimée (dimanche). L'édition 2026 a eu lieu le 21 juin 2026; la date officielle 2027 n'était pas encore publiée par IRONMAN au 4 août 2026 (source: finishers.com). À confirmer dès publication officielle.",
    "constraintsApplied": "Plan révisé le 4 août 2026 selon les contraintes réelles de l'athlète: musculation fixe 2x60min/semaine (lundi bas du corps+abdos, jeudi haut du corps), natation 1x/semaine à l'automne dès 1000-1200m (progression très graduelle, protection des épaules), vélo long dès 90min, course du mercredi toujours la plus courte et toujours avec intensité (tempo/intervalles).",
    "updateLog": [
      {
        "date": "2026-08-04T17:27:39Z",
        "weeksUpdated": [
          2,
          9
        ],
        "volumeAdjust": {
          "swim": 1.0,
          "bike": 0.9,
          "run": 0.9
        },
        "reason": "Semaine du 28 juil-4 août 2026: readiness_score moyen 7j = 47/100 (<50, signal de fatigue), avec un creux à 25 le 31 juillet. ACWR a grimpé jusqu'à 1.3 en fin de semaine (charge aigue en hausse rapide, encore sous le seuil de risque 1.5). HRV moyenne 7j 79 vs 83 les 2 semaines précédentes (-4%, léger). Sommeil resté bon (82/100 moyenne). Un seul signal net (readiness<50) -> réduction modérée et prudente (0.90) vélo/course pour 8 semaines, natation laissée inchangée (aucun signal d'épaule)."
      }
    ]
  }
};
