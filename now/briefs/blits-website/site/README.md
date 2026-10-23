# BLITS-website — bron

Proefversie van de dealerwebsite, gebouwd met het BLITS design system (https://claude.ai/artifact/7nxXx7V2161nWAmFmCUznh, reservekopie in `../design-system-bron/`).

- `index.html` + `home.js` + `home.css` = de Home-pagina (React 18 via jsDelivr, alleen `window.Blits`-componenten plus layout).
- `build.py` maakt `tokens.css` uit `../design-system-bron/project/tokens.json` en kopieert `bundle.js`/`bundle.css`. Draai het na elke wijziging aan het design system.
- `assets/` = kopieën van de logo's, texturen (`.raw/2026-10-20/`) en vier tijdelijke productfoto's van de Toppy-CDN (verkleind). `fonts/` = Archia.
- Gepubliceerd als privé-Artifact: https://claude.ai/artifact/JsHhQ3bo83pSqvNJ5k61kX (publiceren met `file_path` = `index.html`, `root` = deze map).
- Lokaal bekijken: `python3 -m http.server` in deze map, dan `http://localhost:8000/`.

## Variant B (2026-10-22)

- `variant-b.html` + `variant-b.js` + `variant-b.css` = homepage-variant B volgens `../designbriefing-homepage-variant.md`. De bestaande Home (`index.html`, `home.js`, `home.css`) blijft ongewijzigd.
- Gepubliceerd als apart privé-Artifact: https://claude.ai/artifact/JfNqxDCZME5UVppz1WpDDK (publiceren met `file_path` = `variant-b.html`, `root` = deze map).
- Lokaal: `http://localhost:8000/variant-b.html`.

## Overige pagina's in variant-B-stijl (2026-10-23)

- `brand.html` + `brand.js`, `assortment.html` + `assortment.js`, `professionals.html` + `professionals.js`. Laden `variant-b.css` plus `vb-pages.css`.
- `vb-site.js` = gedeeld voor alle variant-B-pagina's: assets, kop, footer, slotband (`NextStep`) en de productdata (alle 45 producten als modellen met maten). Wordt na `bundle.js` en vóór het paginascript geladen, ook door `variant-b.html`.
- Alles zit in dezelfde Artifact als variant B (de pagina's als extra bestanden in `files`), zodat de links tussen de pagina's werken.
- Het dealerformulier controleert in de browser en toont een bevestiging, maar verstuurt niets (`[FORM HANDLING]`).
