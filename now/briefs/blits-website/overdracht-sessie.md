# Overdracht: BLITS-website, Home-pagina bouwen (stand 2026-10-20)

Voor de volgende sessie. Lees in deze volgorde: dit bestand, `wiki/initiatives/blits-website-dealers.md`, `wiki/decisions/blits-open-punten-2026-10-20.md` (besluiten 1 t/m 20), `now/briefs/blits-website/designbrief.md`. Open daarna het design system: https://claude.ai/artifact/7nxXx7V2161nWAmFmCUznh (read-actie met de Artifact-tool; het is privé, alleen Bart kan het openen).

## Doel

Een zeer visuele, professionele merkwebsite voor B2B-dealers (geen webshop). Pagina's: Home, Brand, Assortment, BLITS for Professionals (met dealeraanvraagformulier). Engels is de master. **Niets over speeltoestellen.** Eerst de Home-pagina als proef; daarna de rest uit hetzelfde design system.

## Wat er staat

- **Design system** (Claude-Artifact): tokens (9 kleuren, licht en donker thema), README met merkregels, Archia-fonts, zes logo-varianten, zes basis-componenten (Button, Heading, PlaqueCard, SpecPlate, Divider, Marker), cover, de analoge galerij A t/m K met "gekozen"-labels, de animatie-hero `LanternHero`, zeven textuurfoto's. Bronreservekopie: `now/briefs/blits-website/design-system-bron/`.
- **Producten:** 45 live BLITS-producten bij Toppy (`producten-live.md`), alleen sport-lijn, huidige foto's op de Toppy-CDN (tijdelijk, oude uitstraling). Voor Home volstaat één foto per productfamilie.
- **Beeld:** drie Pinterest-moodboards (campagne, lifestyle, packshots) als bron-pagina's in `wiki/sources/`. Het zijn referenties van derden, niet voor publicatie. Campagnebeeld = Home en Brand, lifestyle en packshots = assortiment.
- **Texturen:** zeven echte foto's (`.raw/2026-10-20/textures/`).

## Keuzes van Bart (kort; volledig in besluit 17 t/m 20)

Stuiter J3 · scheidingslijnen I1 (middenlijn) en I3 (krijtlijn) · schemer B2 met animatie (klaar: LanternHero) · bies E1 en E6 · plaatjes D2 (gestanst schild) en D4 (chassisplaatje) · klapcijfers G2 · filmstrip K3 · texturen beton, asfalt, zand, gras, modder, tartanbaan, regenplas · veldlijnen (A), stoepkrijt (C) en lijniconen (H) allemaal beschikbaar, per pagina of product in de kleur van de sectie. Kraft vervalt.

## Wat er nog gebouwd moet worden (als echte componenten)

De galerij-opties zijn voorbeelden, nog geen herbruikbare componenten. Voor Home nodig: `FieldLines` (type: voetbal, basketbal, trampoline, atletiekbaan, doel; kleur als instelling), `Icon` (twaalf lijniconen, `currentColor`), `ChalkDoodle` (zes tekeningen), `ChalkDivider` (I3), `FlipDigits` (G2), `StampedShield` (D2), `ChassisPlate` (D4), bies-opties op `PlaqueCard` (E1, E6), `FilmStrip` (K3), textuur-achtergrond (zeven foto's), en de J3-stuiter als gedeelde beweging (hover en openen van kaarten).

## Voorstel Home-structuur (te bevestigen door Bart)

1. **Hero:** LanternHero, kop "OUTSIDE WINS.", knop "Become a dealer".
2. **Merkverhaal kort:** drie pijlers met outline-cijfers 01, 02, 03 (Marker) en een krijttekening (C1 hinkelbaan), tekst uit `designbrief.md` §2.
3. **Assortiment-teasers:** vier productfamilies (voetbaldoelen, basketbalpalen, trampolines, rebounders) als PlaqueCards, elk met bijpassende veldlijnen (A1 voetbal, A2 basketbal, A3 trampoline), stuiter bij hover. Productfoto's tijdelijk.
4. **Feiten:** klapcijfers (maat, aantal producten), alleen echte feiten; placeholders zichtbaar als ze er niet zijn.
5. **Beeldstrook:** filmstrip met drie beelden (placeholder, later campagnefoto's).
6. **BLITS for Professionals:** teaser met chassisplaatje (D4) en knop naar het formulier.
7. **Footer:** donker, logo wit of soccer-green, gestippelde middenlijn.

## Bekende beperkingen en open punten

- **Kopfont:** TT Autonomous is alleen via Adobe Fonts beschikbaar en Bart kan geen kit-link maken. Stand-in is Orbitron Black (past het best bij zijn voorbeelden). Optie: Bart exporteert enkele grote koppen als SVG met het echte font.
- **Productfoto's:** huidige Toppy-foto's, oude uitstraling, deels AI-gegenereerd; later vervangen (beeldplan staat geparkeerd in `beeldplan.md`).
- **Dealercijfers (marge, prijs):** nog geen; placeholders zoals `[MARGIN %]`, nooit verzonnen.
- **Handschrift:** geen. **Logo:** alleen de aangeleverde schilden, geen "Outside Wins."-lockup.
- **Domein registreren of publiceren:** alleen na expliciet akkoord van Bart.
- **Delen:** het design system is privé; collega's kunnen het pas openen als Bart het deelt.
- **Werkwijze die goed werkte:** zelf bouwen, in een browser (Playwright, chromium staat klaar) screenshots bekijken, daarna publiceren; elke afgeronde stap een PR naar `main` en zelf mergen (vault-regel).

## Startprompt voor de nieuwe sessie (plakken)

> Lees `now/briefs/blits-website/overdracht-sessie.md` in brand-building en volg de leesvolgorde daarin. Bouw de Home-pagina van de BLITS-dealerwebsite als proef met het BLITS design system (https://claude.ai/artifact/7nxXx7V2161nWAmFmCUznh). Begin met de nog ontbrekende componenten uit de lijst "Wat er nog gebouwd moet worden", laat me daarna de Home-pagina zien, en pas na mijn akkoord de overige pagina's. Niets over speeltoestellen. Elke afgeronde stap: commit, PR naar main, zelf mergen.
