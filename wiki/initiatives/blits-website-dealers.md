---
type: initiative
title: "BLITS-website voor dealers"
status: seed
created: 2026-10-20
updated: 2026-10-20
tags: [blits, website, b2b, claude-design]
related: ["[[blits]]", "[[blits-ontwerpelementen-heritage]]", "[[blits-open-punten-2026-10-20]]", "[[blits-launch-rollout]]", "[[blits-tone-of-voice-definitief]]"]
aliases: ["BLITS website", "BLITS for Professionals"]
phase: "idea"
owner: "Bart Schilten"
target: "Een zeer visuele, professionele merkwebsite (geen webshop) waarop dealers denken: dit is geen private label maar een sterk merk dat ik wil voeren — en versteld staan van lage prijzen en hoge marge."
---

Merkwebsite voor B2B-dealers, gebouwd met Claude Design. Gebruikt voor het
overtuigen van dealers om BLITS in te kopen (dealerkanaal, zie
`bartschilten/kennisbank` § B2B dealernetwerk Europa). Doel is professionele
merkindruk; verkopen gebeurt via het dealeraanvraagformulier.

## Pagina's (vastgesteld 2026-10-20)

1. **Home**
2. **Brand** — het verhaal: waarom BLITS bestaat
3. **Assortment** — alle live BLITS-producten (buitenspeelgoed; geen speeltoestellen)
4. **BLITS for Professionals** — waarom dealer worden; leidt naar het
   **dealeraanvraagformulier**

Meer is niet nodig. Geen webshop.

## Aanpak

1. Brief schrijven uit de vault: `now/briefs/blits-website/designbrief.md`.
2. BLITS krijgt een **eigen** Claude Design design system. Het standaard
   Toppy-design-system van de organisatie hanteert regels die haaks staan op
   BLITS (o.a. "nooit een zwarte achtergrond", "nooit pill-knoppen") en mag
   niet worden toegepast.
3. In het design system werken Bart en Claude Design aan: kleurgebruiksregels
   per paginatype en de **merkvormen** (vormtaal). Daarna de bouwstenen
   uit [[blits-ontwerpelementen-heritage]], weinig en herbruikbaar.
4. Eerst één proefpagina (Home), daarna de overige pagina's één voor één.
5. Samenvoegen, toetsen (contrast, tone of voice), live. Domein registreren
   of publiceren alleen na expliciet akkoord van Bart.

## BLITS design system (gebouwd 2026-10-20)

Eigen Claude-design-system, privé-Artifact: https://claude.ai/artifact/7nxXx7V2161nWAmFmCUznh ("BLITS Design System"). Bevat: tokens (9 palet-kleuren plus semantische tokens, licht en donker thema), README met merkregels en scope-regel (geen speeltoestellen), Archia-fonts, zes logo-varianten (staand en liggend in night-pitch-green, wit, soccer-green; alleen omgekleurd, vorm ongewijzigd), zes componenten met preview (Button, Heading met outline-accentwoord, PlaqueCard, SpecPlate, Divider, Marker) en een cover.

Bekende beperkingen: TT Autonomous staat als eerste in de fontstack, maar is niet beschikbaar; het stand-in is Unbounded (Google Fonts) en wisselt vanzelf zodra TT Autonomous beschikbaar is. De afgesneden hoek van PlaqueCard is een startvoorstel uit de kleurenpdf, geen vastgestelde merkvorm. Kleurgebruiksregels en merkvormen volgen met Bart. Productfoto's zitten niet in het design system. Link is privé: alleen de eigenaar kan hem openen tot hij gedeeld wordt.

## Aan te leveren door Bart

- Pinterest-moodboards: **binnen** (campagne, lifestyle, packshots, 5 beelden per bord, zie [[blits-moodboard-campagne]], [[blits-moodboard-lifestyle]], [[blits-moodboard-packshots]]). Aanvullen mag.
- Productbeeld: de 45 live producten en hun huidige foto's staan in `now/briefs/blits-website/producten-live.md` (met kanttekeningen: oud merk, geen BLITS-merk, AI-gegenereerd). Vervangende foto's of renders zijn gewenst; de moodboardbeelden zijn alleen referentie.
- Fontbestanden: **Archia** (Regular, SemiBold, Bold, `.otf`) binnen, in `.raw/2026-10-20/fonts/`. **TT Autonomous**: geen bestanden, alleen via Adobe Fonts (TypeType). Aanpak: Adobe Web Project aanmaken en de kit-link delen; zelf hosten kan alleen met een aparte licentie bij TypeType. Tot die tijd een tijdelijk vergelijkbaar font in het design.
- Logo: alleen de aangeleverde standaard schildlogo's (zwart-wit, staand en liggend); geen "Outside Wins."-lockup (zie [[blits-open-punten-2026-10-20]]). Omkleuren op donkere of gekleurde vlakken doet Claude Design met de bestaande vorm, niet herontworpen.
- Handschriftaccent: besloten nee.

## Open

- Is de site publiek vindbaar voor consumenten? Dan blijft het
  dealer-/margefrustratie-ontstaansverhaal alleen op de Professionals-pagina
  en in milde vorm (governance: nooit richting consument).
- Dealercijfers (marge, prijzen) zijn geen voorwaarde om te bouwen: tot ze er
  zijn staan er duidelijke placeholders, nooit verzonnen getallen.

---

## Timeline

- **2026-10-20** | assistent, op verzoek van Bart — BLITS design system gebouwd en gepubliceerd (tokens, README, Archia, logo's, zes componenten, cover); volgende stap: merkvormen en kleurregels met Bart, daarna proefpagina Home.
- **2026-10-20** | Bart — eerste versie met bestaande afbeeldingen en huidige productuiterlijken; nieuwe beelden en vervanging later; beeldplan geparkeerd.
- **2026-10-20** | Bart — geen speeltoestellen op de website of in het merkverhaal (generiek: buitenspeelgoed); alle productbeelden worden nieuw gemaakt, huidige foto's tijdelijk; beeldplan opgesteld (`now/briefs/blits-website/beeldplan.md`).
- **2026-10-20** | Bart — één beeldlijn voor sport en speeltoestellen; startassortiment = alle live BLITS-producten bij Toppy (45, sport-lijn); Apple-ontwerpregels (emilkowalski/skills) gelden voor de website, skills geïmporteerd.
- **2026-10-20** | Bart — Archia-fontbestanden (Regular, SemiBold, Bold) aangeleverd; TT Autonomous nog niet.
- **2026-10-20** | Bart — drie Pinterest-moodboards (campagne, lifestyle, packshots) aangeleverd; beeldtaal en gebruiksregel per beeldtype (campagne = homepage/campagnes, lifestyle en packshots = productpagina) vastgelegd.
- **2026-10-20** | Bart + assistent — initiatief gestart; pagina's, aanpak en open punten vastgelegd; logobestanden en actuele kleur-/font-pdf's in `.raw/2026-10-20/`.
