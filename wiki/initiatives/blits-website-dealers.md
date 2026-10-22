---
type: initiative
title: "BLITS-website voor dealers"
status: developing
created: 2026-10-20
updated: 2026-10-22
tags: [blits, website, b2b, claude-design]
related: ["[[blits]]", "[[blits-ontwerpelementen-heritage]]", "[[blits-open-punten-2026-10-20]]", "[[blits-launch-rollout]]", "[[blits-tone-of-voice-definitief]]"]
aliases: ["BLITS website", "BLITS for Professionals"]
phase: "build"
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

Bekende beperkingen: TT Autonomous staat als eerste in de fontstack, maar is niet beschikbaar; het stand-in is Orbitron Black (Google Fonts, synthetische italic; gekozen na vergelijking met Barts voorbeelden "BLITS COLORS"/"BLITS ELEMENTS", na Unbounded en Archivo die te rond of te lijkend op een gewone grotesk bleken) en wisselt vanzelf zodra TT Autonomous beschikbaar is. **Revisie 2026-10-20 na feedback van Bart:** kaarten hebben nu een getrapte uitsnede in alle vier de hoeken (als de hoeken van een voetbaldoel), de SpecPlate is een geborsteld aluminium naamplaatje (gegraveerde tekst, vier schroefkoppen, kaderlijn; enige element met textuur) en het outline-accentwoord is schoon. De hoekvorm blijft een werkvoorstel, geen vastgestelde merkvorm. Open: er zit nog weinig ziel en herkenbare 'analoog van vroeger' in; die analoge elementen worden in de volgende ronde uitgewerkt. Kleurgebruiksregels en merkvormen volgen met Bart. Productfoto's zitten niet in het design system. Link is privé: alleen de eigenaar kan hem openen tot hij gedeeld wordt.

## Home-pagina proef (gebouwd 2026-10-20)

Privé-Artifact: https://claude.ai/artifact/JsHhQ3bo83pSqvNJ5k61kX ("BLITS — Outside Wins."). Bron in de vault: `now/briefs/blits-website/site/` (`index.html`, `home.js`, `home.css`, `build.py` maakt `tokens.css` en kopieert de bundle uit het design system). Versie 5 (laatste puntjes van Bart, besluit 24; daarvoor versie 4 na een design- en merkreview door twee agents, zie `now/briefs/blits-website/review-home-2026-10-20.md` en besluit 23) staat op dezelfde link; volgorde nu: hero, merkverhaal, feiten ("Outside, counted."), assortiment ("Four ways out."), lantaarn-filmstrip ("Until the streetlights come on."), Arena, winkelzoeker ("Find BLITS near you"); wacht op akkoord van Bart, daarna Brand, Assortment en BLITS for Professionals.

Opbouw (voorstel uit de overdracht, zo gebouwd): navigatie (liggend schild wit, Brand / Assortment / BLITS for Professionals, knop "Become a dealer"), LanternHero "OUTSIDE WINS.", merkverhaal met drie pijlers (Marker 01-03) en krijtlijn I3 naast een asfaltpaneel met hinkelbaan C1, vier productfamilies als PlaqueCards (veldlijnen A1/A2/A3/A5 achter de huidige productfoto, bies E1, J3-stuiter bij landen en hover), echte feiten als klapcijfers (45 producten, 6 families, grootste doel 500×200 cm, grootste trampoline Ø427 cm; garantie en norm als placeholder) met gestanst schild D2, filmstrip K3 met drie placeholders, Professionals-teaser op Soccer Green met chassisplaatje D4 (`[MARGIN %]`, `[DEALER PRICE]`, `[MOQ]`), donkere footer met middenlijn I1. Getest op 1440 px en 390 px (geen horizontale scroll, geen consolefouten).

Nieuwe componenten in het design system (versie 10): `LanternHero`, `FieldLines`, `Icon`, `ChalkDoodle`, `ChalkDivider`, `FlipDigits`, `StampedShield`, `ChassisPlate`, `FilmStrip`, `Texture`; `PlaqueCard` kreeg `media`, `backdrop`, bies E1/E6 en de gedeelde J3-stuiter. `Blits.configureAssets()` laat een site eigen kopieën van logo's en texturen gebruiken.

**Versie 2 na feedback van Bart (2026-10-20):** hero is één grote campagnefoto (`CampaignHero`, placeholder met beeldomschrijving tot het beeld er is), de lantaarn zit niet meer in de hero maar verlicht de filmstrip-sectie (`Streetlight`: lantaarnpaal voor een onopvallende bakstenen muur, licht gaat aan en uit, foto's lichter of donkerder); merkverhaal krijgt een fotovak (kinderen in de modder die elkaar omhelzen) in plaats van de krijttekening; assortiment rustiger (veldlijnen alleen als vage vloer onder het product, geen lijniconen, geen "45 products"-zin); feiten inspirerend in plaats van assortimentscijfers (0 screens included, 0 batteries needed, en placeholders voor kinderen buiten en uren buiten, nog zonder bron); de Professionals-teaser is van Home gehaald (consumenten landen ook op de site) en vervangen door wat D2C-merken doen: één productgroep uitgelicht (Arena-doel met SpecPlate) en "Find a dealer" (postcode-zoeker, nog niet werkend) met een link voor winkels. Beeldprompts: `now/briefs/blits-website/campagne-prompts.md`.

Aannames om te toetsen (v1): copy van hero, pijlers en productkaarten is nieuw geschreven binnen de tone of voice; links wijzen nog naar ankers op Home (de andere pagina's bestaan nog niet); "Become a dealer" en "Apply as a dealer" gaan nu naar de Professionals-teaser.

## Homepage-variant B (2026-10-22)

Bart vond de homepage te kleurrijk, druk en met te weinig samenhang en schreef een nieuwe designbriefing (`now/briefs/blits-website/designbriefing-homepage-variant.md`). Variant B staat als aparte pagina naast de bestaande Home: https://claude.ai/artifact/JfNqxDCZME5UVppz1WpDDK (bron `site/variant-b.*`). De bestaande Home (https://claude.ai/artifact/JsHhQ3bo83pSqvNJ5k61kX) blijft ongewijzigd. Variant B gebruikt beige als basis, Night Pitch Green voor tekst en zware vlakken, Soccer Green als enige hoofdkleur (kleurblokken, één kernwoord per kop, knoppen) en Tour de Yellow alleen voor krijt. Nieuw in het design system: ChalkText, TornEdge, PolaroidFrame, DotGrid, IndexLabel, SquareArrowButton, FloatingCutout, Keyword. Handschrift mag nu, alleen als krijt (besluit 25). Wacht op Barts vergelijking.

## Analoge zielelementen: keuzes van Bart (2026-10-20)

Uit de keuze-galerij in het design system (zie [[blits-open-punten-2026-10-20]] besluit 17 voor de volledige lijst): **J3** speelse stuiter, **I1** middenlijn en **I3** krijtlijn, **B2** lantaarnhero met animatie (gebouwd als `LanternHero`: het licht flikkert aan en uit, textuur en veldlijnen in het verlichte vlak), **E1 + E6** bies, **D2 + D4** plaatjes, **G2** klapcijfers, **K3** filmstrip, **F1 beton, F2 asfalt, F3 kraft en zand**. Veldlijnen (A), stoepkrijt (C) en lijniconen (H) blijven allemaal beschikbaar, per pagina of product gekozen en in de kleur van de sectie. Texturen na ronde 2: beton, asfalt, kraft en zand, gras, modder, tartanbaan, regenplas (F1 t/m F7); kunstgras, grind, hout, leer, filmkorrel, hekwerk en tegels vervallen. De getekende texturen zijn placeholders; echte texturen via Nano Banana (`now/briefs/blits-website/texture-prompts.md`). De groene boog in de lantaarnhero is verwijderd.

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

- **2026-10-22** | Bart — vijfde campagnefoto (modderige jongen thuis in de gang, duimen omhoog, vader droogt broertje af) als polaroid 02 "Home" (met krijt "mud = proof"); alle vijf campagnebeelden voor variant B zijn nu binnen. Krijt overal een tintje witter en dekkender, gelijk over de hele pagina; krijtteksten in hero en merkverhaal iets verder de foto in.
- **2026-10-22** | Bart — vierde campagnefoto (straatvoetbal in de schemer, lantaarns net aan) als polaroid 01 "Street" in de lantaarnsectie van variant B.
- **2026-10-22** | Bart — krijtteksten omgewisseld ("Dirty knees are medals." bij de modderfoto in de hero, "Back before dark!" bij de zonsondergang in het merkverhaal); derde campagnefoto (basketbal van bovenaf door de ring) als polaroid 03 "Last light" in de lantaarnsectie.
- **2026-10-22** | Bart — tweede campagnefoto (twee vrienden met de arm om elkaar bij het hek, straatvoetbal bij zonsondergang) bij "Kids grow up outside" in variant B; polaroid-detail met de omhelzing. Let op: op de sneakers staan Nike-logo's (zichtbaar in de hoofdfoto); bij voorkeur wegwerken voor publicatie.
- **2026-10-22** | Bart — eerste eigen campagnefoto aangeleverd (straatvoetbal in de regen, jongen glijdt door een modderplas, bal naar de camera); nu de hero van variant B, met een uitsnede als polaroid. Origineel in `.raw/2026-10-22/campagne/`.
- **2026-10-22** | Bart — variant B "echt heel dik"; producten staan nu als echte uitsnede vóór de groene vlakken (aluminium blijft aluminium) in plaats van erdoor te kleuren.
- **2026-10-22** | Bart — nieuwe designbriefing (minder kleur, meer samenhang, gelaagdheid, krijtletters); homepage-variant B gebouwd naast de bestaande Home; handschrift alleen als krijt (besluit 25); design system v16.
- **2026-10-20** | Bart — "heel blij"; laatste punten in v5: merkverhaal strakker opgemaakt (geen bovenregel, pijlers onder elkaar, "Dirty knees are medals." op de foto), Arena-plaatje zonder Norm/Also in en met garantie 5 jaar, Arena-foto vult het vlak, winkelzoeker zonder losse regels voor online en retailers.
- **2026-10-20** | Bart + twee review-agents (Apple-design, branding) — review van Home v3, Bart akkoord op vrijwel alles behalve adviesprijzen (nergens prijzen, besluit 21) en "gear" ("toys" blijft, besluit 22); doorgevoerd in Home v4 en design system v13.
- **2026-10-20** | Bart — v3: feitensectie en Arena-spotlight gewisseld (geen twee keer assortiment of twee donkere secties achter elkaar), titel feiten nu "OUTSIDE, COUNTED.", zoekveld bij Find a dealer vervangen door `Field` (plaatje met gestanste hoeken en gestippelde schrijflijn).
- **2026-10-20** | Bart — feedback op Home v1 verwerkt in v2 (campagnehero, lantaarn verlicht de filmstrip voor een bakstenen muur, fotovak in merkverhaal, rustiger assortiment, inspirerende feiten, productspotlight en Find a dealer i.p.v. Professionals-teaser); campagne-prompts opgesteld.
- **2026-10-20** | assistent, op verzoek van Bart — ontbrekende analoge componenten gebouwd (design system v10) en de Home-pagina als proef gebouwd en gepubliceerd (privé-Artifact); wacht op akkoord van Bart voor de overige pagina's.
- **2026-10-20** | Bart — modder en tartanbaan aangeleverd, kraft vervalt: alle zeven texturen zijn nu echte foto's in het design system.
- **2026-10-20** | Bart — echte texturen (beton, asfalt, zand, gras, regenplas) aangeleverd en ingebouwd; lantaarnhero gebruikt nu de asfaltfoto; kraft, modder en tartanbaan volgen.
- **2026-10-20** | Bart — lantaarnhero goedgekeurd (groene boog verwijderd); texturen gekozen (zeven materialen); wil professionelere uitvoering; texture-prompts voor Nano Banana opgesteld.
- **2026-10-20** | Bart — keuzes uit de analoge galerij (zie boven); lantaarnhero B2 met animatie gebouwd; echte-materiaaltexturen uitgebreid; nog te kiezen: de nieuwe texturen en het gebruik van A, C, H per pagina.
- **2026-10-20** | Bart — kopfont nog te lelijk, twee voorbeelden aangeleverd (stand-in nu Orbitron Black); vraagt zoveel mogelijk analoge zielelementen gevisualiseerd om uit te kiezen. Gebouwd: keuze-galerij A t/m K (zie sectie hierboven). Wacht op keuzes.
- **2026-10-20** | Bart — feedback op design system: koppen te lelijk (stand-in font vervangen door Archivo Expanded Black Italic), kaarten uitsnijden in alle vier de hoeken, SpecPlate moet een aluminium kwaliteitsplaatje lijken; analoge verwijzingen nog te weinig ziel (volgende ronde). Verwerkt in het design system.
- **2026-10-20** | assistent, op verzoek van Bart — BLITS design system gebouwd en gepubliceerd (tokens, README, Archia, logo's, zes componenten, cover); volgende stap: merkvormen en kleurregels met Bart, daarna proefpagina Home.
- **2026-10-20** | Bart — eerste versie met bestaande afbeeldingen en huidige productuiterlijken; nieuwe beelden en vervanging later; beeldplan geparkeerd.
- **2026-10-20** | Bart — geen speeltoestellen op de website of in het merkverhaal (generiek: buitenspeelgoed); alle productbeelden worden nieuw gemaakt, huidige foto's tijdelijk; beeldplan opgesteld (`now/briefs/blits-website/beeldplan.md`).
- **2026-10-20** | Bart — één beeldlijn voor sport en speeltoestellen; startassortiment = alle live BLITS-producten bij Toppy (45, sport-lijn); Apple-ontwerpregels (emilkowalski/skills) gelden voor de website, skills geïmporteerd.
- **2026-10-20** | Bart — Archia-fontbestanden (Regular, SemiBold, Bold) aangeleverd; TT Autonomous nog niet.
- **2026-10-20** | Bart — drie Pinterest-moodboards (campagne, lifestyle, packshots) aangeleverd; beeldtaal en gebruiksregel per beeldtype (campagne = homepage/campagnes, lifestyle en packshots = productpagina) vastgelegd.
- **2026-10-20** | Bart + assistent — initiatief gestart; pagina's, aanpak en open punten vastgelegd; logobestanden en actuele kleur-/font-pdf's in `.raw/2026-10-20/`.
