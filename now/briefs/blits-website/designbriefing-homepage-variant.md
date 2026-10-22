# Designbriefing homepage-variant (Bart, 2026-10-22)

Aanleiding (Bart): de huidige homepage heeft te veel kleuren, voelt druk en mist samenhang. Deze briefing is gemaakt uit websites die Bart mooi vindt en geldt voor **variant B** van de homepage (`site/variant-b.html`). De bestaande homepage (`site/index.html`) blijft ongewijzigd bestaan om te vergelijken.

## Blijft staan, ook als de briefing iets anders suggereert

- Niets over speeltoestellen; het gaat over buitenspeelgoed.
- Alleen de aangeleverde schildlogo's, geen eigen lockup.
- Taal is Engels, "you" blijft.
- Geen verzonnen dealercijfers: placeholders blijven placeholders.
- Productfoto's zijn tijdelijk. Uitgeknipte producten mogen, maar markeer ze als tijdelijk.
- Handschrift mag, maar alleen als **krijt** (bijgesteld besluit, vervangt besluit 8, zie besluit 25 in [[blits-open-punten-2026-10-20]]): een losse, handgeschreven penseelletter die eruitziet als krijt op een ondergrond, geen gladde digitale script. Google Font met krijt- of penseelkarakter, met een SVG-filter of mask voor de krijtlook (korrelige randen, ongelijkmatige dekking, licht stoffig). Alleen in wit/crème of in de secundaire kleur, het liefst op donkere of asfalt/beton-vlakken.
- Krijtletters zijn een accentlaag: korte kreten, productnotities, stempel-achtige kwaliteitslabels, een kort citaat, schuin over een foto. Nooit voor kopteksten, lopende tekst, knoppen, prijzen of dealerinformatie.
- Eén herbruikbaar onderdeel (ChalkText) met kleur, hoek en grootte als instelling, samen met ChalkDoodle en ChalkDivider zodat alles hetzelfde krijt lijkt.

## 1. Strategische balans: dealers en klanten

De homepage zet een uitgesproken merkwereld neer die twee doelgroepen tegelijk overtuigt:
- **Dealers (B2B):** het fundament straalt autoriteit, vakmanschap, traditie en betrouwbaarheid uit door een doordachte lay-out, heldere datastructuren en hoogwaardige afwerking.
- **Klanten (B2C):** het ontwerp prikkelt de verbeelding door fysieke speelsheid, dynamische gelaagdheid en een tastbaar gevoel van plezier en karakter.

De homepage vermijdt het steriele gevoel van een standaard digitale interface en voelt als een tastbaar merk met een rijke ziel en geschiedenis.

## 2. Kleurarchitectuur en visuele samenhang

Een strak gedefinieerde kleurhiërarchie; de eigen merkkleuren zijn het bindmiddel over de hele pagina.
- **Neutrale basis:** geen kil, klinisch digitaal wit. Warme lichte achtergrond (Beachball Volley Beige) met diepe donkere contrasttinten (Night Pitch Green) voor teksten en zware vlakken.
- **Primaire merkkleur (actie en merkfocus): Soccer Green.**
  - a) Geometrische kleurblokken: strakke rechthoeken en horizontale kleurstroken achter en onder beelden om zones af te bakenen.
  - b) Typografische focuswoorden: titels overwegend in de donkere basistint, binnen een zin licht exact één kernwoord op in de primaire kleur.
  - c) Interactieve elementen: knoppen, swipe-indicators, navigatie-accenten en functionele icoontjes dragen consequent de primaire kleur.
- **Secundaire merkkleur (accent en dynamiek):** één uit het palet (voorstel Tour de Yellow, tenzij Basketball Red beter werkt), selectief voor krijtnotities, secundaire badges, stempels en subtiele markeringen.
- **Maximaal drie kleuren per scherm.** Andere paletkleuren alleen waar een product of sectie dat echt vraagt (bijvoorbeeld veldlijnen), nooit als vulling voor de variatie.
- **Integratie met productfotografie:** primaire en secundaire kleur harmoniëren met de beelden, zodat content en website in elkaar overlopen.

## 3. Compositie, gelaagdheid en tastbare diepte

- **Vrijstaande cutouts over kleurvlakken:** producten en personen breken uit de randen van rechthoekige kleurvlakken.
- **Zwevende speelgoedattributen:** losse onderdelen of merkdetails (bal, net, schild) zweven vrijstaand over secties, kaders en titels met een zachte, realistische schaduw.
- **Collage en scrapbook:** strakke beelden met licht gedraaide, polaroid-achtige fotokaders die elkaar overlappen; titels deels achter, deels vóór de beelden (breaking the grid).
- **Tastbare overgangen:** op een paar overgangen een subtiele torn-paper-rand. Spaarzaam. Herbruikbaar onderdeel (TornEdge).

## 4. Typografisch systeem en micro-details

- **Primaire kopletters:** het koplettertype uit het design system, kapitalen, voor de grote merkstatements.
- **Secundaire accentlaag:** de krijtletter (ChalkText) voor kreten, productnotities, kwaliteitsstempels of korte citaten, schuin over foto's of kleurvlakken. Als het niet op krijt lijkt, niet doen.
- **Zakelijke micro-details:**
  - Indexnummers ("001", "002") bij secties en kernproducten.
  - Subtiele stippenrasters (dot grid) en technische kaders in grotere open vlakken.
  - Minimalistische outline-knoppen plus compacte vierkante actieknoppen met een diagonale pijl (↗). In het design system zijn alleen knoppen pill-vormig; de vierkante actieknop is een toevoeging, met uitleg waar hij past.

## Werkwijze (zoals gevraagd)

Lees eerst overdracht, besluiten en designbrief; benoem hergebruikte en nieuwe onderdelen (ChalkText, TornEdge, PolaroidFrame, DotGrid, IndexLabel, SquareArrowButton, FloatingCutout) en zet ze in het design system vóór de pagina; houd de sectievolgorde van de huidige homepage aan; laat de variant naast de oude zien met wat er veranderde en waar en waarom van de briefing is afgeweken; commit, PR naar main, zelf mergen.

## Uitvoering (2026-10-22)

Variant B: https://claude.ai/artifact/JfNqxDCZME5UVppz1WpDDK (privé). Bestaande homepage: https://claude.ai/artifact/JsHhQ3bo83pSqvNJ5k61kX (ongewijzigd). Bron: `site/variant-b.html`, `variant-b.js`, `variant-b.css`. Design system v16: ChalkText, TornEdge, PolaroidFrame, DotGrid, IndexLabel, SquareArrowButton, FloatingCutout en Keyword (één kernwoord per kop), plus `Button variant="brand"` en het lettertoken `--font-chalk`.

Keuzes en afwijkingen:
- **Krijtletter: Caveat Brush**, vergeleken met Gochi Hand, Covered By Your Grace en Rock Salt naast de hinkelbaan-tekening op asfalt. Caveat Brush leest het meest als krijtstreek in dezelfde lijndikte als de tekeningen en blijft leesbaar; Rock Salt is krijtiger maar te wild, de andere twee lijken meer op stift.
- **Secundaire kleur: Tour de Yellow** (alleen krijt en het stempel). Basketball Red komt in variant B niet voor; knoppen zijn Soccer Green.
- **Kernwoord:** groene tekst op beige haalt het contrast niet (circa 1,5:1), dus op licht staat het kernwoord donker op een groen blok; op donker wordt het woord zelf groen.
- **Opening:** de hero is de grote campagnefoto gebleven (Barts besluit van 2026-10-20), nu als collage in de nieuwe kleurlogica; de lantaarn zit in de filmstrip-sectie. De briefing noemde de LanternHero als opening; dat kan alsnog.
- **Schaduw:** het design system is plat; schaduw alleen op fysieke objecten (FloatingCutout, polaroids), nooit op kaarten of UI.
- **Cutouts:** alle productfoto's zijn nu echte uitsneden met transparante achtergrond (WebP, `*-uitsnede.webp`), zodat het product vóór het groene vlak staat en zijn eigen kleur houdt: het Arena-doel blijft aluminium, netten blijven wit (Bart, 2026-10-22; de eerste versie gebruikte `multiply`, waardoor producten groen kleurden). Uitsnede gemaakt door de witte achtergrond weg te rekenen; door de mazen van het net zie je het groen. Alle productfoto's dragen het label "Temporary photo".
- **Filmstrip:** in variant B vervangen door polaroids op de verlichte bakstenen muur, met krijtnotities op de muur.

- **Krijt (bijgesteld 2026-10-22):** crème is een tintje witter (`--chalk-cream`: beige met 55 % wit), dekkender en met een vage donkere rand voor leesbaarheid op foto's; overal identiek, ingebouwd in `ChalkText`.
