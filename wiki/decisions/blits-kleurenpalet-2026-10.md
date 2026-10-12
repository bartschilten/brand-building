---
type: decision
title: "BLITS kleurenpalet 2026-10 (Tarmac Black vervangen door donkergroen)"
status: developing
created: 2026-10-12
updated: 2026-10-12
tags: [blits, visuele-identiteit, kleur]
related: ["[[blits]]"]
aliases: []
date: 2026-10-12
decided_by: "Bart Schilten"
affects: ["[[blits]]"]
---

## De beslissing

Het BLITS-palet wordt uitgebreid van groen/rood/zand naar het volledige
palet uit de aangeleverde `BLITS_COLORS.pdf` (zie [[blits]] voor de
hex-waardes), met één afwijking: **Tarmac Black (#1D2020) vervalt** en wordt
vervangen door een heel donker groen dat bij een gedimd scherm als zwart
leest, maar dichter bij het merkgroen blijft dan een neutraal zwart.

Werkwaarde: **Night Pitch Green `#06150E`** (naam en hex zijn een voorstel —
nog te bevestigen door Bart, zie open punten op [[blits]]).

## Waarom

- Een groen-getinte "zwart" houdt het palet in één kleurfamilie met Soccer
  Green en voorkomt dat de neutrale Tarmac-grijsstint als losse, koude kleur
  naast de zandkleur/beige staat.
- Contrast blijft sterk: Night Pitch Green haalt ca. 13:1 tegen Concrete
  Grey, ca. 8,9:1 tegen Soccer Green en ca. 13,7:1 tegen Beachball Volley
  Beige (WCAG-berekening).

## Gevolgen

- Overal waar de PDF "BG-TEXT / Tarmac Black" noemt (tekst op lichte
  achtergrond, donkere vlakken), geldt nu Night Pitch Green.
- Rood (#D74A23) met wit tekst haalt maar ca. 4,3:1 — voldoende voor grote
  tekst/knoppen in TT Autonomous Bold, krap voor kleine broodtekst.
