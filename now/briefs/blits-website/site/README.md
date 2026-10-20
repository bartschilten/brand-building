# BLITS-website — bron

Proefversie van de dealerwebsite, gebouwd met het BLITS design system (https://claude.ai/artifact/7nxXx7V2161nWAmFmCUznh, reservekopie in `../design-system-bron/`).

- `index.html` + `home.js` + `home.css` = de Home-pagina (React 18 via jsDelivr, alleen `window.Blits`-componenten plus layout).
- `build.py` maakt `tokens.css` uit `../design-system-bron/project/tokens.json` en kopieert `bundle.js`/`bundle.css`. Draai het na elke wijziging aan het design system.
- `assets/` = kopieën van de logo's, texturen (`.raw/2026-10-20/`) en vier tijdelijke productfoto's van de Toppy-CDN (verkleind). `fonts/` = Archia.
- Gepubliceerd als privé-Artifact: https://claude.ai/artifact/JsHhQ3bo83pSqvNJ5k61kX (publiceren met `file_path` = `index.html`, `root` = deze map).
- Lokaal bekijken: `python3 -m http.server` in deze map, dan `http://localhost:8000/`.
