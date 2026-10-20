# Bron van het BLITS design system

Het design system zelf staat als Claude-Artifact: https://claude.ai/artifact/7nxXx7V2161nWAmFmCUznh (privé). Dit is een reservekopie van de bronbestanden, zodat een nieuwe sessie kan verder bouwen als de werkmap weg is.

- `project/` = de bestanden van het design system (tokens, README, componenten, previews, index `design-system.json`). Zonder de fontbestanden: de drie Archia-bestanden staan in `.raw/2026-10-20/fonts/`. De logo's (zes kleurvarianten, `.raw/2026-10-20/logos-gekleurd/`) en de zeven textuurfoto's (`.raw/2026-10-20/textures/`) staan ook als upload in het artifact (ids in `design-system.json`).
- `generators/` = de Python-scripts die de galerij-pagina's bouwen (`p_a_field.py` t/m `p_l_lantern.py`), `common.py` (stijl, "gekozen"-labels), `mat.py` (materialen), `build_test.py` (lokale testversie met tokens.css) en `shot2.js` (screenshots met Playwright).
- Publiceren: Artifact-tool met `url` van het artifact, `root` de map die `project/` bevat, `file_path` het absolute pad naar `project/design-system.json`, `files` de gewijzigde `project/...`-bestanden. Lees het artifact altijd eerst (action read) voor je iets wijzigt: mensen kunnen het ook bewerken.
- Let op: de scripts verwijzen naar `/tmp/...scratchpad...`-paden; pas `P` en `B` in `common.py` en `build_test.py` aan naar de nieuwe werkmap.
