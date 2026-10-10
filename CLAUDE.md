# brand-building — Bart's merkopbouw-brein

Aparte kennisbank van [[bartschilten/kennisbank]] (Bart's Toppy/LDD-werkbrein).
Deze vault gaat over het bouwen van eigen merken (BASTE, BLITS, Luminous,
Eigen Merk Tuininrichting, en toekomstige) als vak: positionering, naamgeving,
visuele identiteit, verhaal, distributie. Bart curateert bronnen (podcasts,
video's, transcripts, skills) en reviewt diffs; de assistent leest/schrijft.
Zelfde patroon: [karpathy's LLM wiki](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f),
scaffold: [toppynl/me-template](https://github.com/toppynl/me-template).

Onboarded op 2026-09-22.

## Waarom een aparte vault

Dit is **methodiek-kennis** (herbruikbare frameworks/denkraamwerken over hoe
je merken bouwt), geen **entiteit-kennis** (wie/wat/wanneer over Toppy/LDD).
Andere levenscyclus, andere frontmatter, ander lint-ritme. De eigen-merk-
pagina's (BASTE/BLITS/Luminous/...) staan in béíde vaults: hier als het
onderwerp waar de merkbouw-kennis op wordt toegepast, in de Toppy-vault als
entiteit binnen de P&L/initiatieven-structuur. Bij tegenstrijdigheid over
cijfers/targets/fase is de Toppy-vault (`bartschilten/kennisbank`) leidend —
hier gaat het om het merk als bouwproject, niet om de business-cijfers.

## Vaste patroon-mechanica

- Drielaags lezen: `hot.md` → `index.md` → volledige pagina's.
- `wiki/` = duurzame kennis, één entiteit per bestand, getypeerde frontmatter, wederkerige `[[wikilinks]]`.
- `.raw/` = onveranderlijk bronmateriaal (transcripts) — alleen toegevoegd, nooit bewerkt.
- `now/` = snel veranderende status (lopend merkbouw-werk).
- `log.md` = append-only operatielog, één regel per operatie.
- `.claude/skills/domain/` = de brand-building skillset (zie hieronder) — dit
  zijn de "sub-agents met kennis" waar Bart mee wil werken: elke skill is een
  losse, aanroepbare expertise (naamgeving, positionering, identiteit, ...).

## Layout

```
hot.md              korte snapshot: welke merken/vraagstukken nu actief zijn
index.md            catalogus: elke pagina, één regel, gegroepeerd per type
log.md              append-only operatielog
me/                 wie Bart is, hoe hij werkt (TMA/talent, overgenomen uit kennisbank)
now/                snel veranderende status (lopend merkbouw-werk)
wiki/
  people/           branding-denkers/specialisten waar bronnen van komen
  brands/           eigen merken (BASTE, BLITS, Luminous, ...) als bouwproject
  sources/          één pagina per bron (podcast/video/post) — metadata + link naar .raw/
  frameworks/        gedistilleerde denkraamwerken/modellen uit de bronnen
  cases/            voorbeelden van merken die iets goed (of fout) deden
  playbooks/        Bart's eigen samengestelde aanpak, opgebouwd uit frameworks
  decisions/        gemaakte naamgevings-/positioneringsbeslissingen
  initiatives/       lopend merkbouw-werk met een levenscyclus
.raw/
  transcripts/       ruwe transcripts van podcasts/video's, ongewijzigd
  _inbox/            nieuwe bronnen wachtend op ingest
_templates/          paginaskeletten per entiteit-type
.claude/
  skills/            ingest, query, lint, context-audit, correction-capture, onboard, usecases (mechaniek)
  skills/domain/     de brand-building skillset (27 skills, zie hieronder) — inhoudelijke expertise
  skills/design/     designsmaak-skillset (apple-design, zie hieronder) — toetsingskader voor identiteitswerk
archive/             overbodig geworden pagina's (nog steeds linkbaar)
```

## Entiteit-types

| type | waarvoor | extra velden |
|---|---|---|
| `person` | branding-denkers/specialisten waar bronnen van komen (Seth Godin, Bob Verlaat, ...) | `role`, `known_for` |
| `brand` | eigen merken van de groep — hier als bouwproject, niet als P&L-entiteit | `category`, `parent`, `owner`, `stage` |
| `source` | één input: podcast/video/post — metadata, wijst naar `.raw/transcripts/` | `medium`, `author`, `url`, `date_consumed` |
| `framework` | een gedistilleerd denkraamwerk/model uit een source | `source`, `core_claim`, `applicability` |
| `case` | een concreet voorbeeld dat een framework illustreert (goed of fout gedaan) | `illustrates`, `brand_example` |
| `playbook` | Bart's eigen samengestelde aanpak — opgebouwd uit frameworks, zijn "house style" | `applies_to`, `built_from` |
| `decision` | een gemaakte (of lopende) naamgevings-/positioneringskeuze, punt-in-tijd | `date`, `decided_by`, `affects` |
| `initiative` | lopend merkbouw-werk met een levenscyclus | `phase`, `owner`, `target` |

Bewust weggelaten voor nu (voeg toe zodra je 'm mist): `organisation`,
`vendor`, `system`, `metric`, `concept`, `policy`, `event`, `topic`, `risk`,
`stance`.

## Base frontmatter (elke pagina)

```yaml
---
type: <een van bovenstaande entiteit-types, of "meta">
title: "Display Name"
status: seed | developing | mature | evergreen
created: YYYY-MM-DD
updated: YYYY-MM-DD
tags: []
related: []          # wikilinks
aliases: []
---
```

Extend per type zoals nodig — zie `_templates/` voor skeletten.

**Status-ladder:** `seed` → `developing` → `mature` → `evergreen` (zie
kennisbank-CLAUDE.md voor de volledige definitie — identiek hier).

**Timeline-conventie:** voor `brand`, `initiative`, `person` en `playbook`
draagt de pagina een `## Timeline`-sectie onderaan (zelfde mechaniek als de
Toppy-vault: append-only, omgekeerd-chronologisch,
`- **YYYY-MM-DD** | <bron/wie> — <wat er gebeurde>.`). `source`, `framework`,
`case` en `decision` blijven punt-in-tijd en dragen geen Timeline.

## Archief & deprecatie

Zelfde two-case mechanisme als de Toppy-vault: **vervangen** (SUPERSEDED-
banner + `superseded_by`) vs. **overbodig** (verplaatsen naar `archive/` +
`archived:`-veld). Zie kennisbank-CLAUDE.md voor het volledige patroon.

## Conventions

Zelfde als kennisbank: kebab-case filenames, wederkerige `[[wikilinks]]`,
één entiteit per bestand, `## [YYYY-MM-DD] <op> | <title>` log-regels.
`.gitattributes` zet `log.md merge=union`.

## De domain-skillset (`.claude/skills/domain/`)

Geïmporteerd van [arnabbagxd/brand-building-skills](https://github.com/arnabbagxd/brand-building-skills)
(2026-09-22). 27 skills, elk een op zichzelf staand expertisegebied — dit
zijn de "sub-agents" waar Bart mee wil werken. O.a.: `brand-strategy`,
`brand-positioning`, `brand-naming`, `brand-identity`, `brand-voice`,
`brand-story`, `brand-manifesto`, `brand-messaging`, `brand-guidelines`,
`brand-packaging`, `brand-launch`, `brand-architecture`, `brand-audit`,
`brand-measurement`, `brand-partnerships`, `rebranding`, `personal-brand`,
`competitor-branding`, `target-audience`, `d2c-marketing`,
`b2b-brand-marketing`, `influencer-marketing`, `ugc-strategy`,
`email-marketing`, `whatsapp-marketing`, `meta-ads`, `google-ads`, `aso`.

Dit is externe, onveranderlijke kennis (net als `.raw/`) — niet handmatig
bewerken. Update door opnieuw te clonen/kopiëren van de bronrepo als die een
nieuwe versie uitbrengt. De `wiki/frameworks/`- en `wiki/playbooks/`-pagina's
zijn waar Bart's *eigen* synthese/aanpassing van deze kennis komt te staan —
dat mag wél vrij bewerkt worden.

## De design-skillset (`.claude/skills/design/`)

Geïmporteerd van [emilkowalski/skills](https://github.com/emilkowalski/skills)
(2026-10-10, MIT-licentie, bewaard als `LICENSE-emilkowalski-skills`).
Bedoeld om Bart en de assistent te helpen "smaak"/designregels consequent
toe te passen bij het beoordelen van merkwerk (naast de inhoudelijke
`domain/`-skillset hierboven). Net als `domain/`: externe, onveranderlijke
kennis — niet handmatig bewerken, update door opnieuw te clonen.

Bewust **niet** het hele bronrepository geïmporteerd — dat bevat vooral
web-/app-interactie-engineering-skills (`animate`, `animate-expo`,
`write-swift`, `ask-sonner`, `pick-ui-library`, `mobile-native`, `break-ui`,
`prototype`, ...) die relevant worden zodra BLITS (of een ander merk) een
website/3D-configurator/app bouwt, maar niets toevoegen aan merk-/
identiteitswerk nu. Alleen geïmporteerd:

- **`apple-design`** — Apple's ontwerpprincipes (uit WWDC-designtalks):
  acht fundamentele designprincipes (Purpose, Agency, Responsibility,
  Familiarity, Flexibility, Simplicity, Craft, Delight), typografieregels
  (optical sizing/tracking/leading), materialen/diepte, en motion-principes.
  Grotendeels geschreven voor interface-/interactiedesign, maar de acht
  principes en de typografie-/craft-discipline zijn direct bruikbaar als
  toetsingskader voor merk-/identiteitsbeslissingen in het algemeen (zie
  toepassing in [[blits-apple-design-review]]).

Als een later merk een website/app/configurator bouwt: haal dan alsnog de
resterende skills uit dezelfde bronrepo op.

## Invariants

1. Een wiki-pagina die je aanraakt krijgt in dezelfde pass een bijgewerkte `index.md`-regel.
2. Een echt significante statusverandering (nieuwe merk-fase, naam definitief gekozen) ververst `hot.md`.
3. Elke operatie voegt één `log.md`-regel toe.
4. Commit na elke afgeronde operatie, klein en beschrijvend.
5. Geen outward-facing actie namens Bart (geen berichten versturen, niets
   posten, geen echte merknamen/domeinen registreren) zonder expliciete
   goedkeuring vooraf.
6. Cijfers/targets/fase van een eigen merk: bij twijfel, de Toppy-vault
   (`bartschilten/kennisbank`) is bronwaarheid, niet deze vault.

## Wat is "hot"

Actieve merkbouw-vraagstukken: welk merk is nu in welke fase, openstaande
naamgevings-/positioneringsbeslissingen, net binnengehaalde bronnen die
relevant zijn voor wat er nu speelt.

## Lint-cadans

Wekelijks, en op aanvraag ("lint" / "health check").

## Bronnen voor ingest

Podcasts, YouTube-video's, Instagram-transcripts, artikelen, en GitHub-
skills over branding/positionering/naamgeving/identiteit. Ad-hoc aangeleverd
door Bart (upload/plakken), geen vaste geautomatiseerde feed.

## Operations

`.claude/skills/` (mechaniek) — `ingest`, `query`, `lint`, `context-audit`,
`correction-capture`, `onboard`, `usecases` — identiek aan de Toppy-vault.

- **ingest** — verwerk een bron (transcript, artikel, of nieuwe skill) in
  de wiki: `source`-pagina aanmaken, `.raw/` origineel bewaren, kernideeën
  distilleren naar `framework`- of `case`-pagina's, `index.md`/`hot.md`/
  `log.md` bijwerken.
- **query** — beantwoord vanuit de vault volgens de leesdiscipline.
- **lint** — dode links, orphans, index-drift, staleness.
- **context-audit** — report-only token-hygiëne pass.
- **correction-capture** — corrigeer direct als Bart een claim corrigeert.

## Meer weten?

Zie `me/how-to-use.md` voor de dagelijkse cheat sheet, `me/about.md` voor
wie Bart is en hoe hij werkt (TMA/talentenanalyse, overgenomen uit de
Toppy-kennisbank omdat dit ook hier relevant is om aan te sluiten op hoe hij
merken wil bouwen).
