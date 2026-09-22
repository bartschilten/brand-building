---
type: meta
title: "How to use"
updated: 2026-09-22
---

# How to use

## Dagelijkse cheat sheet

- **Nieuwe bron binnen?** ("ingest deze podcast/video/skill") → `ingest`-skill:
  maak/update een `source`-pagina, bewaar het transcript in `.raw/transcripts/`,
  distilleer de kernideeën naar een of meer `framework`-pagina's.
- **Vraag over een merk of framework?** → `query`-skill: leest hot.md →
  index.md → de relevante pagina's, geen giswerk.
- **Bart corrigeert iets?** → `correction-capture`: fix de pagina meteen,
  niet wachten op de volgende lint.
- **Wekelijks, of op aanvraag** → `lint`: dode links, orphans, index-drift.
- **Een sub-agent nodig voor een concreet klusje** (merknaam bedenken,
  positionering scherpstellen, brand voice uitschrijven) → gebruik de
  bijpassende skill uit `.claude/skills/domain/` (bv. `brand-naming`,
  `brand-positioning`, `brand-voice`, `brand-identity`). Geef die skill de
  relevante `wiki/brands/<merk>.md`-pagina en toepasselijke
  `wiki/frameworks/*.md`-pagina's mee als context.

## Werkvolgorde bij een nieuw merk (zoals Eigen Merk Tuininrichting)

1. `reason-for-existence`-achtige vraag beantwoorden: waarom bestaat dit
   merk (zie [[reason-for-existence]]).
2. Vijand/verhaal bepalen (zie [[villain-and-contagious-ideas]]).
3. Pas dán naamgeving (`brand-naming`-skill) en positionering
   (`brand-positioning`-skill).
4. Identiteit/visuele stijl (`brand-identity`-skill), voice
   (`brand-voice`-skill), guidelines (`brand-guidelines`-skill).
5. Leg elke keuze vast als `decision`-pagina, en de samengestelde aanpak
   voor dit merk als `playbook`-pagina.

## Waar iets leeft

- Cijfers/targets/fase van een merk → `bartschilten/kennisbank` (Toppy-vault).
- Hoe je een merk bouwt (het vak) → deze vault.
- Ruwe input (transcripts) → `.raw/transcripts/`, nooit bewerken.
- Bart's eigen samengestelde aanpak (niet één framework, maar zíjn synthese)
  → `wiki/playbooks/`.
