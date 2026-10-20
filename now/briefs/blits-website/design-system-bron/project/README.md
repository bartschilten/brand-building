BLITS is outdoor play gear (goals, basketball poles, trampolines, rebounders). The brand is **real, outside, honest and sharp**: premium in execution, accessible in price. This system builds the BLITS website for dealers. It is **not** a webshop.

## Scope rules (read first)

- Write about **outdoor toys** in general. **Never** mention playhouses, swings, sandboxes, "play equipment" or "two lines". Those products do not exist yet.
- Product photography in the first version is the existing packshots, shown as they are today (black, "PLAY MORE"). They are temporary: build every image slot so a file can be swapped later (fixed aspect ratio per slot, image separate from text).
- Language: English first, Dutch follows. Address the reader with "you".

## Content fundamentals

- **Tagline:** "Outside Wins." (NL: "Buiten wint."). Use it as a headline or sign-off, never as a promise to beat others.
- **Voice:** warm, direct, a little playful. Short, rhythmic sentences on the website. Humour is allowed, through nostalgic winks to growing up outside, never through sarcasm.
- **Words that belong:** falling and getting up, pushing your own limits, real friendships, discovering together, dirty knees, mud, rain, wind, freedom, your own place outside. "Dirty knees are medals" may stay.
- **Words that do not:** winners, losers, champions, warriors, fight, competition, "last goal wins", cute, sweet, super fun, vague "safe/cosy/together" as filler.
- **Screen time:** show, never accuse. Evoke mud and fresh air against the screen. Never say "we are against screens", never make a parent feel guilty.
- **Casing:** headlines and button labels UPPERCASE. Body in sentence case. Numerals as "01", "02", "03".
- **Premium sits in execution, not in words.** The copy stays accessible; images, detail and layout carry the premium feel.
- **Numbers:** never invent prices or margins. Use visible placeholders such as `[MARGIN %]` until real figures exist.
- **Reader:** a dealer who wants a better margin and a brand with a story, not "yet another private label". Be concrete and proud, not salesy.

## Visual foundations

- **Colour.** One system for the whole brand, no colour code per product. `surface` (concrete grey) is the page; `ink` (night pitch green) is text and dark fields; `brand` (soccer green) is the signature colour; `action` (basketball red) is only for buttons and small signals. Yellow, beige, blues and stuntpark grey are accents. Set text on soccer green, yellow, beige, light blue and concrete grey in `ink`, never white. White on `action` (4.3:1) is for large bold button labels only. To invert a section set `data-theme="dark"` on it.
- **Type.** Headlines: `display-*` (TT Autonomous Bold Italic, uppercase, line-height 1 em). The font is not available as a file; the stack falls back to Orbitron Black (Google Fonts, `wght` 700..900, load it; synthetic italic) until TT Autonomous is installed. Body: `body` / `body-l` (Archia Regular 400, line-height 1.8 em, important words bold). Buttons: `button` (display family Bold, uppercase, 0.15em tracking). One accent word in a headline may be outline italic in a contrast colour (`action` or `brand`). The outline is drawn as a stroke with the fill set to the section background (`--accent-fill`, default `surface`); on a section with another background set `--accent-fill` to that colour. When the real TT Autonomous Outline Italic is available, use it and drop the stroke. No handwriting font.
- **Tracking and leading by size.** Large headlines slightly tighter, small labels slightly looser; the styles already encode this. Do not set one letter-spacing for all sizes.
- **Shape.** Flat and plate-like. Cards have no shadow and no rounded corners (`radius-none`). **Only buttons are pills (`radius-pill`).** Cards and the spec plate have a stepped notch cut from **all four corners**, like the corners of a goal (sizes `cut-sm`, `cut-md`, `cut-lg`). This is a working proposal, not a settled brand shape: the brand shapes are still to be designed with Bart. Do not add more shapes until then.
- **The one exception to flat: the SpecPlate.** It is a brushed aluminium name plate (engraved text, four screw heads, a stamped frame line) using the `aluminium-*` tokens, because the real product carries such a plate. Nothing else gets texture, bevel or shadow.
- **Spacing.** An 8px rhythm (`space-2` base). Page gutter 16px on a phone (`space-4`), section padding `space-8`/`space-9`.
- **Imagery.** Packshots on `surface` (concrete grey); a white-background photo sits on it with `mix-blend-mode: multiply`. Campaign images (kids in motion, low angle, film grain, saturated yellow/blue/green) are for Home and Brand only, never on product pages. Lifestyle images (a product still-life in a real place, hard light, muted palette plus one saturated accent) are for product pages.
- **Texture and background.** Large, low-contrast pitch lines (centre circle, penalty area) cut off by the page edge are an allowed section background, in `brand` on `ink` or `stuntpark-grey` on `surface`. A soft gradient from `ink` to `tour-de-yellow` may be used for a hero (the hour the streetlights come on). No sepia, no fake grunge, no invented dates.
- **Motion.** Only where it does something: press feedback, a card that responds, explaining a feature. `ease-out`, 100-250 ms, never `ease-in`. One motif: a short bounce (slight overshoot) when a card opens or is hovered. Animate `transform` and `opacity` only. Never animate things seen often, such as navigation. Under `prefers-reduced-motion` use a short cross-fade without the bounce.
- **Focus.** A 3px solid `focus-ring` outline with 2px offset on every interactive element.
- **Borders and shadows.** Neither as decoration. Separate with space, colour fields or the dashed centre-line Divider.

## Iconography

Line icons only, one stroke width, built from pitch lines and measurements. The set is the `Icon` component: twelve icons (`goal`, `ball`, `trampoline`, `rebounder`, `hoop`, `size`, `warranty`, `delivery`, `assembly`, `norm`, `weather`, `box`), single ink via `currentColor`, so they take the colour of the section. No emoji, no filled glyphs, no play-equipment icons. Do not draw icons outside this set.

## Logo

Use only the supplied BLITS shield logos in `assets/Logos/`: standing shield and landscape shield, in `night-pitch-green`, `white` and `soccer-green` (all single-ink PNGs with transparent background). Put the logo on `surface` in night pitch green, on `ink` in white or soccer green. Never redraw, outline, rotate or add a tagline lockup: there is no "Outside Wins." lockup and the old "PLAY MORE" lockup is obsolete.

## Components

Base: `Button` (the red pill), `Heading` (uppercase italic with outline accent word), `PlaqueCard` (flat plate with cut corners; `media`, `backdrop`, piping E1/E6, J3 bounce), `SpecPlate` (aluminium name plate for facts: size, norm, warranty; only real facts), `Divider` (I1 dashed centre line), `Marker` (01 / 02 / 03 outline numerals).

Analog components (group "Analoog: componenten"), built from Bart's picks: `LanternHero` (B2), `FieldLines` (A, five types), `Icon` (H, twelve icons), `ChalkDoodle` (C, six drawings), `ChalkDivider` (I3), `FlipDigits` (G2), `StampedShield` (D2), `ChassisPlate` (D4), `FilmStrip` (K3), `Texture` (F1 to F7), `Photo` (image slot with a shot brief), `CampaignHero` (Home hero: one big campaign photo) and `Streetlight` (B2 as a section: lamp in front of a brick wall that lights the photos) and `Field` (form field as a flat plate with a dashed writing line). Since Bart's feedback of 2026-10-20 the Home hero is `CampaignHero`; the streetlight lights the film strip further down. `LanternHero` stays available for a campaign page. The J3 bounce is shared: classes `blits-bounce` (hover) and `blits-land` (plays once on entering the view), used by `PlaqueCard`.

Assets: components default to this system's uploads (logos, textures). A website that hosts its own copies calls `Blits.configureAssets({ logos: {...}, textures: {...} })` once before rendering.

Everything else on a page is built from these plus type and spacing tokens. Keep the set small. The gallery cards in "Analoog: keuzes" stay as the record of options and choices; build pages from the components, not from the galleries.

## Analog soul elements (chosen by Bart, 2026-10-20)

The gallery cards in the group "Analoog: keuzes" carry a green "gekozen" tag on what Bart picked. What was not picked is not used. Rules that apply to all of them: flat and honest, no kitsch, no playground equipment (no chalkboard, no Home Base), no invented dates, no handwriting font.

- **Motion: J3** the playful bounce (squash and stretch, like a ball or a trampoline landing). The only motion motif. Use it when a card opens or lands, never for navigation, never looping on the page.
- **Dividers: I1** dashed centre line (component `Divider`) and **I3** chalk line. Use one or the other per section, not both side by side.
- **Dusk: B2** the streetlight, **animated**: the light flickers on and off. On Home it is `Streetlight`, a lamp in front of a brick wall that lights the film strip; `LanternHero` is the earlier hero version. Not in the Home hero any more (that is one big campaign photo).
- **Piping: E1** short red line under a heading and **E6** red corner marks. Both allowed; one per card.
- **Plates: D2** stamped metal shield on a dark field and **D4** dark chassis plate with screws. Plus the aluminium `SpecPlate`.
- **Scoreboard digits: G2** flip digits, for real product facts only.
- **Photo treatment: K3** film strip with frame numbers. Film grain is part of the images themselves, not a layer on the site.
- **Textures (all real photographs, by Bart): F1 concrete, F2 asphalt, F3 sand, F4 grass, F5 mud, F6 tartan track, F7 rain puddle with lantern light.** Files in `assets/Textures/`. Use only as section backgrounds, behind a panel or on `ink`, never directly behind running text; at most one material per section. Material colours (grass, mud, tartan) are deliberately not brand colours.
- **Not chosen, all stay available (they depend on what the page says):** **A field lines** (football pitch for goals, basketball court for poles, trampoline from above for trampolines, athletics track in general, goal with net for goal walls; in any palette colour), **C pavement chalk** (pick the drawing that fits the subject of the section), **H line icons** (single ink: take the colour from the section).

## Accessibility

Text 4.5:1 on its ground (3:1 for text 24px+ or bold 19px+). The known exception is white on `action` at 4.3:1, allowed for large bold button labels only. Respect `prefers-reduced-motion`. Tap targets at least 44px. On phones avoid the 100vh bug, keep inputs at 16px to prevent zoom, and remove the tap highlight.
