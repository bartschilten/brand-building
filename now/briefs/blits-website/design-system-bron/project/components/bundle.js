/* @ds-bundle: {"format":4,"namespace":"Blits","components":[{"name":"Button"},{"name":"Heading"},{"name":"PlaqueCard"},{"name":"SpecPlate"},{"name":"Divider"},{"name":"Marker"},{"name":"FieldLines"},{"name":"Icon"},{"name":"ChalkDoodle"},{"name":"ChalkDivider"},{"name":"FlipDigits"},{"name":"StampedShield"},{"name":"ChassisPlate"},{"name":"FilmStrip"},{"name":"Texture"},{"name":"LanternHero"},{"name":"Photo"},{"name":"CampaignHero"},{"name":"Streetlight"},{"name":"Field"},{"name":"ChalkText"},{"name":"TornEdge"},{"name":"PolaroidFrame"},{"name":"DotGrid"},{"name":"IndexLabel"},{"name":"SquareArrowButton"},{"name":"FloatingCutout"},{"name":"Keyword"}]} */
(function () {
  var h = React.createElement;
  function cx() { return Array.prototype.filter.call(arguments, Boolean).join(' '); }
  var uid = 0;
  function useId(prefix) { var r = React.useRef(null); if (r.current === null) r.current = prefix + (++uid); return r.current; }
  function svg(markup, attrs) { return h('svg', Object.assign({ dangerouslySetInnerHTML: { __html: markup } }, attrs)); }

  /* Asset URLs. Defaults are this design system's uploads; a site that hosts its own copies calls Blits.configureAssets({...}). */
  var assets = {
    logos: {
      'staand-night-pitch-green': '/_blob/16f913919faad95f91f191b9e5cb20b8', 'staand-white': '/_blob/a22e34bfe5f36cd9b4f54be45eb5a316', 'staand-soccer-green': '/_blob/52e73398578c33ec63254c0318a84c57',
      'liggend-night-pitch-green': '/_blob/b834a1dd81fcc0e9715469e29927b6fb', 'liggend-white': '/_blob/315886cc6395f754a99771a151563548', 'liggend-soccer-green': '/_blob/8de75f976e716a5238a91633f780a040'
    },
    textures: {
      concrete: '/_blob/aa10ef79247decedde3d769d3fe84c30', asphalt: '/_blob/9c011f6a13d940f394bdddbecd9bdf55', sand: '/_blob/886f08359e1f8b6620b62c2e57fc14e7',
      grass: '/_blob/ef42e301c697fa21989961a15792cf33', puddle: '/_blob/863aeb498ca5ad27d4b471487a6b8475', tartan: '/_blob/14ce452a39508d9acb2afe720b6e81cc', mud: '/_blob/114d2b46127b0d1edecbbd5df9c9101b'
    }
  };
  function configureAssets(next) {
    if (next.logos) Object.assign(assets.logos, next.logos);
    if (next.textures) Object.assign(assets.textures, next.textures);
  }

  /* J3 bounce: plays once when the element first scrolls into view. */
  function useLanding(enabled) {
    var ref = React.useRef(null);
    var st = React.useState(false), landed = st[0], setLanded = st[1];
    React.useEffect(function () {
      if (!enabled || !ref.current || !('IntersectionObserver' in window)) { setLanded(true); return; }
      var io = new IntersectionObserver(function (es) { if (es[0].isIntersecting) { setLanded(true); io.disconnect(); } }, { threshold: 0.35 });
      io.observe(ref.current);
      return function () { io.disconnect(); };
    }, [enabled]);
    return [ref, landed];
  }

  function Button(props) {
    var variant = props.variant || 'primary';
    var Tag = props.href ? 'a' : 'button';
    return h(Tag, {
      className: cx('blits-btn', 'blits-btn--' + variant, props.className),
      href: props.href,
      type: props.href ? undefined : (props.type || 'button'),
      disabled: props.disabled,
      onClick: props.onClick
    }, props.children);
  }

  function Heading(props) {
    var size = props.size || 'l';
    var Tag = 'h' + (props.level || 2);
    var kids = [props.children];
    if (props.accent) {
      kids.push(' ', h('span', { key: 'accent', className: cx('blits-accent', props.accentColor === 'green' && 'blits-accent--green') }, props.accent));
    }
    return h.apply(null, [Tag, { className: cx('blits-heading', 'display-' + size, props.className), id: props.id }].concat(kids));
  }

  function PlaqueCard(props) {
    var tone = props.tone || 'warm';
    var size = props.size || 'md';
    var l = useLanding(!!props.land), ref = l[0], landed = l[1];
    var piping = null;
    if (props.piping === 'corners') piping = [h('i', { key: 'a', className: 'blits-plate__corner blits-plate__corner--tl' }), h('i', { key: 'b', className: 'blits-plate__corner blits-plate__corner--br' })];
    var Tag = props.href ? 'a' : 'div';
    return h(Tag, {
      ref: ref, href: props.href,
      className: cx('blits-plate-wrap', props.bounce !== false && 'blits-bounce', props.land && 'blits-land', props.land && landed && 'is-landed', props.href && 'blits-plate--link', props.className),
      style: props.delay ? { animationDelay: props.delay + 'ms' } : null
    },
      h('div', { className: cx('blits-plate', size !== 'md' && 'blits-plate--' + size, tone !== 'warm' && 'blits-plate--' + tone) },
        props.backdrop ? h('div', { className: 'blits-plate__backdrop', 'aria-hidden': 'true' }, props.backdrop) : null,
        piping,
        props.media ? h('div', { className: 'blits-plate__media' }, props.media) : null,
        props.eyebrow ? h('p', { className: 'eyebrow', style: { margin: '0 0 8px', position: 'relative' } }, props.eyebrow) : null,
        props.title ? h('h3', { className: 'blits-heading display-s blits-plate__title' }, props.title) : null,
        props.piping === 'underline' ? h('span', { className: 'blits-plate__underline', 'aria-hidden': 'true' }) : null,
        props.children ? h('div', { className: 'blits-plate__body' }, props.children) : null));
  }

  function SpecPlate(props) {
    var rows = props.rows || [];
    var head = [];
    if (props.logo) head.push(h('img', { key: 'logo', className: 'blits-spec__logo', src: props.logo, alt: '' }));
    if (props.title) head.push(h('p', { key: 'title', className: 'display-s blits-spec__title' }, props.title));
    var list = rows.map(function (r, i) {
      return h('div', { key: 'row' + i, className: 'blits-spec__row' },
        h('dt', { className: 'eyebrow' }, r.label),
        h('dd', { className: 'spec-value' }, r.value));
    });
    return h('div', { className: cx('blits-spec', props.className) },
      head.length ? h('div', { className: 'blits-spec__head' }, head) : null,
      h('dl', { className: 'blits-spec__list' }, list));
  }

  function Divider(props) {
    return h('hr', { className: cx('blits-divider', props.className), 'aria-hidden': 'true' });
  }

  function Marker(props) {
    return h('span', { className: cx('blits-marker', props.className), 'aria-hidden': 'true' }, props.children);
  }

  /* A · field lines. Large, quiet lines of a playing field, cut off by the edge. */
  var FIELD = {
    football: function () { return '<g transform="translate(150 105) scale(1.35) translate(-150 -105)"><line x1="150" y1="-40" x2="150" y2="250"/><circle cx="150" cy="105" r="50"/><circle cx="150" cy="105" r="1" stroke-width="8"/><rect x="-30" y="45" width="85" height="120"/><rect x="-30" y="75" width="40" height="60"/><path d="M55 85 A30 30 0 0 1 55 125"/></g>'; },
    basketball: function () { return '<g transform="translate(150 105) scale(1.2) translate(-150 -105)"><rect x="90" y="-30" width="120" height="125"/><path d="M110 95 A40 40 0 0 0 190 95"/><path d="M110 95 A40 40 0 0 1 190 95" stroke-dasharray="7 7"/><path d="M30 -30 V30 A125 125 0 0 0 270 30 V-30"/><circle cx="150" cy="14" r="8"/><line x1="130" y1="2" x2="170" y2="2" stroke-width="5"/></g>'; },
    trampoline: function () {
      var t = '';
      for (var a = 0; a < 24; a++) { var r = a * Math.PI / 12; t += '<line x1="' + (150 + 80 * Math.cos(r)).toFixed(1) + '" y1="' + (105 + 80 * Math.sin(r)).toFixed(1) + '" x2="' + (150 + 94 * Math.cos(r)).toFixed(1) + '" y2="' + (105 + 94 * Math.sin(r)).toFixed(1) + '"/>'; }
      return '<g transform="translate(150 105) scale(1.25) translate(-150 -105)"><circle cx="150" cy="105" r="94"/><circle cx="150" cy="105" r="80"/>' + t + '<line x1="150" y1="25" x2="150" y2="185" stroke-dasharray="4 8"/><line x1="70" y1="105" x2="230" y2="105" stroke-dasharray="4 8"/></g>';
    },
    track: function () {
      var l = '';
      for (var i = 0; i < 5; i++) l += '<rect x="' + (-60 + i * 14) + '" y="' + (20 + i * 14) + '" width="' + (420 - 2 * i * 14) + '" height="' + (170 - 2 * i * 14) + '" rx="' + (85 - i * 14) + '"/>';
      return '<g>' + l + '<line x1="150" y1="20" x2="150" y2="90" stroke-width="4"/></g>';
    },
    goal: function (id) { return '<defs><pattern id="' + id + '" width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0H14M0 0V14" stroke-width="1"/></pattern></defs><g transform="translate(150 105) scale(1.1) translate(-150 -105)"><rect x="40" y="42" width="220" height="120" stroke-width="6"/><rect x="46" y="48" width="208" height="108" fill="url(#' + id + ')" stroke="none" opacity=".7"/><line x1="-20" y1="162" x2="320" y2="162"/></g>'; }
  };
  function FieldLines(props) {
    var id = useId('blits-net-');
    var draw = FIELD[props.type] || FIELD.football;
    return svg(draw(id), {
      className: cx('blits-field', props.className), 'aria-hidden': 'true', viewBox: '0 0 300 210', preserveAspectRatio: props.fit === 'meet' ? 'xMidYMid meet' : 'xMidYMid slice',
      fill: 'none', stroke: props.color || 'currentColor', strokeWidth: props.strokeWidth || 3, style: { opacity: props.opacity == null ? 1 : props.opacity }
    });
  }

  /* H · line icons. 48 grid, one stroke width, square caps, single ink (currentColor). */
  var ICONS = {
    goal: '<path d="M6 36V14H42V36"/><path d="M6 36H42"/><path d="M14 14V36M22 14V36M30 14V36M38 14V36" stroke-width="1.4"/><path d="M6 22H42M6 29H42" stroke-width="1.4"/>',
    ball: '<circle cx="24" cy="24" r="16"/><path d="M24 17L31 22L28 30H20L17 22Z"/><path d="M24 17V8M31 22L40 19M28 30L33 38M20 30L15 38M17 22L8 19" stroke-width="1.8"/>',
    trampoline: '<ellipse cx="24" cy="16" rx="18" ry="6"/><path d="M8 20V40M40 20V40M24 22V40"/><path d="M14 20L10 32M34 20L38 32" stroke-width="1.4"/><path d="M4 40H44"/>',
    rebounder: '<path d="M10 8H38V36H10Z"/><path d="M10 15H38M10 22H38M10 29H38M17 8V36M24 8V36M31 8V36" stroke-width="1.2"/><path d="M14 36L8 44M34 36L40 44"/>',
    hoop: '<rect x="9" y="5" width="30" height="20"/><rect x="18" y="12" width="12" height="9" stroke-width="2"/><path d="M15 25H33L30 32H18Z" stroke-width="2"/><path d="M24 25V44M16 44H32"/>',
    size: '<rect x="5" y="17" width="38" height="14"/><path d="M11 17V25M17 17V22M23 17V25M29 17V22M35 17V25" stroke-width="2"/>',
    warranty: '<path d="M24 5L40 11V24C40 33 33 40 24 43C15 40 8 33 8 24V11Z"/><path d="M16 24L22 30L32 18"/>',
    delivery: '<path d="M10 34H4V12H28V34H18"/><path d="M28 20H38L44 27V34H40M32 34H28V20"/><circle cx="14" cy="36" r="4"/><circle cx="36" cy="36" r="4"/>',
    assembly: '<path d="M24 5L40 14V32L24 41L8 32V14Z"/><circle cx="24" cy="23" r="7"/><path d="M24 16V5M30 26.5L40 32M18 26.5L8 32" stroke-width="1.2"/>',
    norm: '<circle cx="24" cy="24" r="18"/><path d="M14 24L21 31L34 17"/>',
    weather: '<path d="M24 5C24 5 12 19 12 29C12 36 17 42 24 42C31 42 36 36 36 29C36 19 24 5 24 5Z"/><path d="M19 31C19 34 21 36 24 36" stroke-width="2"/>',
    box: '<path d="M6 14L24 6L42 14V34L24 42L6 34Z"/><path d="M6 14L24 22L42 14M24 22V42"/>'
  };
  function Icon(props) {
    var size = props.size || 48;
    var markup = (props.title ? '<title>' + props.title + '</title>' : '') + (ICONS[props.name] || '');
    return svg(markup, {
      className: cx('blits-icon', props.className), width: size, height: size, viewBox: '0 0 48 48', fill: 'none', stroke: 'currentColor',
      strokeWidth: props.strokeWidth || 2.5, strokeLinecap: 'square', strokeLinejoin: 'miter',
      role: props.title ? 'img' : undefined, 'aria-hidden': props.title ? undefined : 'true'
    });
  }

  /* C · pavement chalk. Illustration only, on dark fields, never behind running text. */
  function chalkFilter(id, freq, scale, seed) {
    return '<defs><filter id="' + id + '" x="-5%" y="-5%" width="110%" height="110%"><feTurbulence type="fractalNoise" baseFrequency="' + freq + '" numOctaves="2" seed="' + seed + '" result="w"/><feDisplacementMap in="SourceGraphic" in2="w" scale="' + scale + '" result="d"/><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="1" seed="8" result="g"/><feColorMatrix in="g" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -2 1.6" result="m"/><feComposite in="d" in2="m" operator="in"/></filter></defs>';
  }
  function hopSquare(x, y, n) {
    return '<rect x="' + x + '" y="' + y + '" width="34" height="34"/><text x="' + (x + 17) + '" y="' + (y + 25) + '" text-anchor="middle" font-family="TT Autonomous,Orbitron,sans-serif" font-weight="800" font-size="19" fill="currentColor" stroke="none">' + n + '</text>';
  }
  var Y = 'var(--tour-de-yellow)', B = 'var(--olympic-pool-blue)', G = 'var(--soccer-green)';
  var DOODLES = {
    hopscotch: function () { return '<g transform="translate(0 -18)">' + hopSquare(133, 176, 1) + hopSquare(100, 142, 2) + hopSquare(134, 142, 3) + hopSquare(133, 108, 4) + hopSquare(100, 74, 5) + hopSquare(134, 74, 6) + hopSquare(133, 40, 7) + hopSquare(100, 6, 8) + hopSquare(134, 6, 9) + '</g>'; },
    tictactoe: function () { return '<path d="M110 40V190M190 40V190M60 90H240M60 140H240"/><path d="M72 52L98 78M98 52L72 78" stroke="' + Y + '"/><circle cx="150" cy="115" r="14" stroke="' + B + '"/><path d="M212 152L238 178M238 152L212 178" stroke="' + Y + '"/><circle cx="85" cy="165" r="14" stroke="' + B + '"/>'; },
    goal: function () { return '<path d="M50 160V70H250V160" stroke-width="5"/><path d="M62 72L50 160M238 72L250 160"/><path d="M80 72V160M110 72V160M140 72V160M170 72V160M200 72V160M220 72V160" stroke-width="1.6" stroke-dasharray="1 7"/><path d="M60 100H240M56 130H244" stroke-width="1.6" stroke-dasharray="1 7"/><circle cx="150" cy="190" r="14" stroke="' + G + '"/><path d="M150 181L158 187L155 196H145L142 187Z" stroke="' + G + '" stroke-width="2"/><path d="M20 168H280"/>'; },
    arrows: function () { return '<path d="M40 60H150M130 42L152 60L130 78" stroke="' + G + '"/><path d="M60 120C100 90 140 150 190 110" stroke="' + Y + '"/><path d="M178 96L192 108L174 118" stroke="' + Y + '"/><path d="M230 70L238 92L260 94L242 108L248 130L230 118L212 130L218 108L200 94L222 92Z" stroke="' + B + '"/><path d="M40 180L65 160L90 190L115 160L140 190L165 160L190 190"/>'; },
    sun: function () { return '<circle cx="150" cy="115" r="32" stroke="' + Y + '"/><path d="M150 60V40M150 190V170M95 115H75M225 115H205M111 76L97 62M203 168L189 154M111 154L97 168M203 62L189 76" stroke="' + Y + '"/><path d="M40 205C70 195 100 215 130 205S190 195 220 205 270 215 290 205"/>'; },
    hoop: function () { return '<ellipse cx="150" cy="85" rx="48" ry="12" stroke="' + Y + '" stroke-width="4"/><path d="M104 88C112 120 120 130 126 134M196 88C188 120 180 130 174 134M150 97V134M128 100C132 118 136 128 140 134M172 100C168 118 164 128 160 134" stroke-width="1.6"/><path d="M150 30V60"/><path d="M120 30H180" stroke-width="5"/><path d="M60 190C100 170 130 200 160 185S230 170 250 188"/>'; }
  };
  function ChalkDoodle(props) {
    var id = useId('blits-chalk-');
    var draw = DOODLES[props.name] || DOODLES.hopscotch;
    return svg(chalkFilter(id, 0.035, 3.5, 3) + '<g filter="url(#' + id + ')">' + draw() + '</g>', {
      className: cx('blits-chalk', props.className), viewBox: '0 0 300 230', preserveAspectRatio: 'xMidYMid meet', 'aria-hidden': 'true',
      fill: 'none', stroke: 'currentColor', strokeWidth: 3.2, strokeLinecap: 'round', strokeLinejoin: 'round',
      style: { color: props.color || 'var(--concrete-grey)', opacity: props.opacity == null ? 1 : props.opacity }
    });
  }

  /* I3 · chalk line between sections. */
  function ChalkDivider(props) {
    var id = useId('blits-chalkline-');
    return h('div', { className: cx('blits-chalkline', props.className), 'aria-hidden': 'true', style: { color: props.color || 'var(--ink)' } },
      svg('<defs><filter id="' + id + '" x="-2%" y="-200%" width="104%" height="500%"><feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" seed="4" result="w"/><feDisplacementMap in="SourceGraphic" in2="w" scale="3" result="d"/><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="1" seed="9" result="g"/><feColorMatrix in="g" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -1.5 1.5" result="m"/><feComposite in="d" in2="m" operator="in"/></filter></defs><g filter="url(#' + id + ')"><path d="M4 20 C120 14 240 26 360 19 S600 22 996 20" stroke="currentColor" stroke-width="6" fill="none" stroke-linecap="round"/></g>',
        { width: '100%', height: 40, viewBox: '0 0 1000 40', preserveAspectRatio: 'none' }));
  }

  /* G2 · flip digits for real product facts. The tiles flip through to the value once, when they come into view. */
  function FlipTile(props) {
    var st = React.useState(props.start), shown = st[0], setShown = st[1];
    var ft = React.useState(0), flips = ft[0], setFlips = ft[1];
    React.useEffect(function () {
      if (!props.run) return;
      if (!/[0-9]/.test(props.ch)) { setShown(props.ch); return; }
      var target = +props.ch, cur = -1, t;
      function tick() {
        cur++;
        setShown(String(cur)); setFlips(function (f) { return f + 1; });
        if (cur < target) t = setTimeout(tick, 70);
      }
      t = setTimeout(tick, props.delay);
      return function () { clearTimeout(t); };
    }, [props.run, props.ch]);
    var sep = props.ph ? /[^0-9A-Z]/.test(props.ch) : !/[0-9A-Z]/.test(props.ch) && props.ch !== '–';
    return h('span', { className: cx('blits-flip__tile', sep && 'blits-flip__tile--sep', props.ph && !sep && 'blits-flip__tile--ph') },
      h('span', { key: flips, className: cx('blits-flip__char', flips && 'is-flipping') }, shown === ' ' ? ' ' : shown),
      h('i', { className: 'blits-flip__hinge' }));
  }
  function FlipDigits(props) {
    var value = String(props.value);
    var placeholder = value.indexOf('[') !== -1;
    var animate = props.animate !== false && !placeholder;
    var l = useLanding(animate), ref = l[0], run = l[1];
    var reduce = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var chars = (placeholder ? value.replace(/[\[\]]/g, '') : value).split('');
    return h('div', { ref: ref, className: cx('blits-flip', props.size && 'blits-flip--' + props.size, placeholder && 'blits-flip--ph', props.className) },
      h('span', { className: 'blits-flip__sr' }, (placeholder ? 'To be confirmed' : value) + (props.unit ? ' ' + props.unit : '')),
      h('span', { className: 'blits-flip__row', 'aria-hidden': 'true' },
        chars.map(function (ch, i) {
          var start = reduce || !animate || !/[0-9]/.test(ch) ? ch : '–';
          return h(FlipTile, { key: i + ch, ch: ch, ph: placeholder, start: start, run: run && !reduce && animate, delay: i * 90 });
        }),
        props.unit ? h('span', { className: 'blits-flip__unit' }, props.unit) : null),
      props.label ? h('p', { className: 'eyebrow blits-flip__label' }, props.label) : null);
  }

  /* D2 · the BLITS shield stamped out of metal, on a dark field. */
  function StampedShield(props) {
    var orient = props.orientation === 'landscape' ? 'liggend' : 'staand';
    var src = props.src || assets.logos[orient + '-night-pitch-green'];
    var size = props.size || 120;
    var w = orient === 'liggend' ? size * 1.5 : size * 0.88;
    return h('div', { className: cx('blits-stamp', props.className), role: 'img', 'aria-label': props.label || 'BLITS' },
      h('div', { className: 'blits-stamp__metal', style: { width: w + 'px', height: size + 'px', WebkitMaskImage: 'url(' + src + ')', maskImage: 'url(' + src + ')' } }));
  }

  /* D4 · dark chassis plate with screws, for a short list of real facts or placeholders. */
  function ChassisPlate(props) {
    var rows = props.rows || [];
    return h('div', { className: cx('blits-chassis', props.className) },
      h('dl', { className: 'blits-chassis__in' },
        props.title ? h('p', { className: 'blits-chassis__hd' }, props.title) : null,
        rows.map(function (r, i) {
          return h(React.Fragment, { key: i }, h('dt', null, r.label), h('dd', null, r.value));
        })));
  }

  /* K3 · film strip with sprocket holes and frame numbers. Frames without src show a visible placeholder. */
  function FilmStrip(props) {
    var frames = props.frames || [];
    var start = props.start || 1;
    var holes = [];
    for (var i = 0; i < (props.holes || 24); i++) holes.push(h('i', { key: i }));
    return h('figure', { className: cx('blits-film', props.className) },
      h('div', { className: 'blits-film__holes', 'aria-hidden': 'true' }, holes),
      h('div', { className: 'blits-film__frames' }, frames.map(function (f, i) {
        var n = (start + i < 10 ? '0' : '') + (start + i);
        return h('div', { key: i, className: 'blits-film__frame' },
          f.src ? h('img', { src: f.src, alt: f.alt || '', loading: 'lazy' }) : h('span', { className: 'blits-film__placeholder' }, f.placeholder || '[CAMPAIGN PHOTO ' + n + ']'),
          h('span', { className: 'blits-film__num', 'aria-hidden': 'true' }, n + (f.label ? ' · ' + f.label : '')));
      })),
      h('div', { className: 'blits-film__holes', 'aria-hidden': 'true' }, holes.slice()),
      props.caption ? h('figcaption', { className: 'eyebrow blits-film__caption' }, props.caption) : null);
  }

  /* F1–F7 · real material photographs as a section or panel background. Never directly behind running text. */
  function Texture(props) {
    var src = props.src || assets.textures[props.material || 'asphalt'];
    var Tag = props.as || 'div';
    return h(Tag, { className: cx('blits-texture', props.className), style: props.style },
      h('div', { className: 'blits-texture__img', 'aria-hidden': 'true', style: { backgroundImage: 'url(' + src + ')', opacity: props.strength == null ? 1 : props.strength } }),
      props.shade !== false ? h('div', { className: 'blits-texture__shade', 'aria-hidden': 'true', style: { opacity: props.shade == null ? 0.55 : props.shade } }) : null,
      h('div', { className: 'blits-texture__content' }, props.children));
  }

  /* B2 · the lantern hero: dusk, the streetlight flickers on, lights the asphalt and the headline, then flickers off. */
  function LanternHero(props) {
    var st = React.useState(0), mode = st[0], setMode = st[1];
    var tex = props.texture || assets.textures.asphalt;
    function toggle(e) { if (props.toggle === false || e.target.closest('a,button')) return; setMode((mode + 1) % 3); }
    return h('section', { className: cx('blits-lantern', mode === 1 && 'on', mode === 2 && 'off', props.className), 'data-theme': 'dark', onClick: toggle, 'aria-label': props.label },
      h('div', { className: 'blits-lantern__layer a-soft' }, h('div', { className: 'blits-lantern__layer blits-lantern__glow' })),
      h('div', { className: 'blits-lantern__layer a-lit' }, h('div', { className: 'blits-lantern__layer blits-lantern__cone' })),
      h('div', { className: 'blits-lantern__layer a-soft' }, h('div', { className: 'blits-lantern__layer blits-lantern__ground', style: { backgroundImage: 'linear-gradient(#ffd24a,#ffd24a),url(' + tex + ')' } })),
      h('div', { className: 'blits-lantern__pole' }), h('div', { className: 'blits-lantern__head' }),
      h('div', { className: 'blits-lantern__layer a-lit', style: { zIndex: 5 } }, h('div', { className: 'blits-lantern__bulb' })),
      h('div', { className: 'blits-lantern__copy' },
        props.eyebrow ? h('p', { className: 'eyebrow a-text', style: { margin: 0 } }, props.eyebrow) : null,
        h('h1', { className: 'display-xl blits-lantern__title a-text' }, props.title || 'Outside wins.'),
        props.intro ? h('p', { className: 'body-l blits-lantern__intro a-text' }, props.intro) : null,
        props.children ? h('div', { className: 'blits-lantern__actions' }, props.children) : null));
  }

  /* Photo slot. Fixed aspect ratio, image separate from text. Without src it shows a visible placeholder that describes the shot. */
  function Photo(props) {
    var Tag = props.as || 'figure';
    return h(Tag, { className: cx('blits-photo', props.cut && 'blits-photo--cut', props.className), style: Object.assign({ aspectRatio: props.ratio || '4 / 5' }, props.style) },
      props.src ? h('img', { src: props.src, alt: props.alt || '', loading: props.eager ? 'eager' : 'lazy', style: props.position ? { objectPosition: props.position } : null })
        : h('div', { className: 'blits-photo__placeholder' },
          h('p', { className: 'eyebrow' }, props.kind || 'Campaign photo'),
          h('p', { className: 'blits-photo__brief' }, props.brief || '[PHOTO]')),
      props.children);
  }

  /* Campaign hero: one large campaign photograph, full bleed, with the headline on a dark gradient. */
  function CampaignHero(props) {
    return h('section', { className: cx('blits-campaign', props.className), 'data-theme': 'dark', 'aria-label': props.label },
      h(Photo, { as: 'div', className: 'blits-campaign__photo', src: props.src, alt: props.alt, brief: props.brief, kind: 'Campaign photo', ratio: 'auto', eager: true, position: props.position }),
      h('div', { className: 'blits-campaign__shade', 'aria-hidden': 'true' }),
      h('div', { className: 'blits-campaign__copy' },
        props.eyebrow ? h('p', { className: 'eyebrow', style: { margin: 0 } }, props.eyebrow) : null,
        h('h1', { className: 'display-xl blits-campaign__title' }, props.title),
        props.intro ? h('p', { className: 'body-l blits-campaign__intro' }, props.intro) : null,
        props.children ? h('div', { className: 'blits-campaign__actions' }, props.children) : null));
  }

  /* B2 · streetlight in front of a brick wall. The light flickers on, lights the wall and the content (photos), then goes out. */
  function Streetlight(props) {
    var st = React.useState(0), mode = st[0], setMode = st[1];
    var ref = React.useRef(null);
    var rs = React.useState(false), running = rs[0], setRunning = rs[1];
    React.useEffect(function () {
      var el = ref.current;
      if (!el || !('IntersectionObserver' in window)) { setRunning(true); return; }
      var io = new IntersectionObserver(function (es) { setRunning(es[0].isIntersecting); }, { threshold: 0.3 });
      io.observe(el);
      return function () { io.disconnect(); };
    }, []);
    var LABELS = ['Auto', 'On', 'Off'];
    return h('section', { ref: ref, className: cx('blits-streetlight', running && 'is-running', mode === 1 && 'on', mode === 2 && 'off', props.side === 'left' && 'blits-streetlight--left', props.className), 'data-theme': 'dark', 'aria-label': props.label, id: props.id, style: { '--brick-grain': 'url(' + assets.textures.concrete + ')' } },
      h('div', { className: 'blits-streetlight__wall', 'aria-hidden': 'true' }),
      h('div', { className: 'blits-streetlight__wall blits-streetlight__wall--lit a-soft', 'aria-hidden': 'true' }),
      h('div', { className: 'blits-streetlight__cone a-lit', 'aria-hidden': 'true' }),
      h('div', { className: 'blits-streetlight__pole', 'aria-hidden': 'true' }),
      h('div', { className: 'blits-streetlight__head', 'aria-hidden': 'true' }),
      h('div', { className: 'blits-streetlight__bulb a-lit', 'aria-hidden': 'true' }),
      h('div', { className: 'blits-streetlight__content' }, props.children),
      h('div', { className: 'blits-streetlight__dim a-dim', 'aria-hidden': 'true' }),
      h('div', { className: 'blits-streetlight__glow a-soft', 'aria-hidden': 'true' }),
      props.toggle === false ? null : h('button', {
        type: 'button', className: 'blits-streetlight__switch', 'aria-pressed': mode === 1 ? 'true' : mode === 2 ? 'false' : 'mixed',
        'aria-label': 'Streetlight: ' + LABELS[mode] + '. Change', onClick: function () { setMode((mode + 1) % 3); }
      }, h('span', { className: 'eyebrow' }, 'Light · ' + LABELS[mode])));
  }

  /* Form field as a flat plate: small label, large input on a dashed writing line, optional action (button) beside it. */
  function Field(props) {
    var id = useId('blits-field-');
    var fid = props.id || id;
    return h('div', { className: cx('blits-fieldplate', props.className) },
      h('div', { className: 'blits-fieldplate__wrap' }, h('div', { className: 'blits-fieldplate__plate' },
        h('label', { className: 'eyebrow blits-fieldplate__label', htmlFor: fid }, props.label),
        h('input', { id: fid, className: 'blits-fieldplate__input', type: props.type || 'text', name: props.name, placeholder: props.placeholder, autoComplete: props.autoComplete, inputMode: props.inputMode, required: props.required, value: props.value, defaultValue: props.defaultValue, onChange: props.onChange }),
        h('span', { className: 'blits-fieldplate__line', 'aria-hidden': 'true' }))),
      props.children ? h('div', { className: 'blits-fieldplate__action' }, props.children) : null);
  }

  /* Variant set (2026-10-22): chalk lettering, torn paper, polaroids, dot grid, index labels, square arrow button, floating cutouts, keyword highlight. */

  /* Chalk handwriting: an accent layer only (short calls, product notes, stamp-like labels, a quote). Never headlines, body, buttons, prices or dealer information. */
  function ChalkText(props) {
    var id = useId('blits-chalktext-');
    var colors = { cream: 'var(--chalk-cream)', white: 'var(--white)', secondary: 'var(--tour-de-yellow)', yellow: 'var(--tour-de-yellow)' };
    var Tag = props.as || 'span';
    return h(Tag, {
      className: cx('blits-chalktext', props.className),
      style: Object.assign({ color: colors[props.color || 'cream'] || props.color, fontSize: typeof props.size === 'number' ? props.size + 'px' : (props.size || '40px'), transform: 'rotate(' + (props.rotate == null ? -4 : props.rotate) + 'deg)', filter: 'url(#' + id + ')' }, props.style)
    },
      svg('<filter id="' + id + '" x="-10%" y="-30%" width="120%" height="160%"><feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" seed="3" result="w"/><feDisplacementMap in="SourceGraphic" in2="w" scale="3" result="d"/><feTurbulence type="fractalNoise" baseFrequency="1.1" numOctaves="1" seed="8" result="g"/><feColorMatrix in="g" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -2.1 1.75" result="m"/><feComposite in="d" in2="m" operator="in" result="c"/><feGaussianBlur in="c" stdDeviation="0.9" result="b"/><feComponentTransfer in="b" result="dust"><feFuncA type="linear" slope="0.4"/></feComponentTransfer><feMerge><feMergeNode in="dust"/><feMergeNode in="c"/></feMerge></filter>', { className: 'blits-chalktext__defs', width: 0, height: 0, 'aria-hidden': 'true', focusable: 'false' }),
      props.children);
  }

  /* Torn paper edge between two sections. Sits on the edge of its parent section (position:relative) and overlaps the neighbour. */
  function tornPath(seed, w, hgt) {
    var s = seed || 7;
    function rnd() { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; }
    var d = 'M0 ' + hgt + ' L0 ' + (hgt * 0.55).toFixed(1), x = 0;
    while (x < w) {
      x += 6 + rnd() * 18;
      var big = rnd() < 0.12 ? rnd() * hgt * 0.35 : 0;
      d += ' L' + Math.min(x, w).toFixed(1) + ' ' + (hgt * (0.25 + rnd() * 0.45) + big - (big ? hgt * 0.2 : 0)).toFixed(1);
    }
    return d + ' L' + w + ' ' + hgt + ' Z';
  }
  function TornEdge(props) {
    var hgt = props.height || 28, w = 1200, pos = props.position || 'top';
    var main = tornPath(props.seed || 11, w, hgt), fibre = tornPath((props.seed || 11) + 5, w, hgt);
    return h('div', { className: cx('blits-torn', 'blits-torn--' + pos, props.className), 'aria-hidden': 'true', style: { height: hgt + 'px' } },
      svg('<path d="' + fibre + '" fill="' + (props.fibre || 'rgba(255,255,255,.55)') + '" transform="translate(0 -3)"/><path d="' + main + '" fill="' + (props.color || 'var(--night-pitch-green)') + '"/>',
        { width: '100%', height: hgt, viewBox: '0 0 ' + w + ' ' + hgt, preserveAspectRatio: 'none' }));
  }

  /* Polaroid-style photo frame: paper border, square photo, a short caption strip. Rotate slightly and let frames overlap. */
  function PolaroidFrame(props) {
    return h('figure', { className: cx('blits-polaroid', props.className), style: Object.assign({ transform: 'rotate(' + (props.rotate || 0) + 'deg)' }, props.style) },
      h(Photo, { as: 'div', src: props.src, alt: props.alt, ratio: props.ratio || '1 / 1', kind: props.kind || 'Campaign photo', brief: props.brief }),
      props.caption ? h('figcaption', { className: 'blits-polaroid__caption' }, props.caption) : null);
  }

  /* Dot grid: a quiet technical background layer for large open areas, optionally with corner ticks. Fills its positioned parent. */
  function DotGrid(props) {
    var gap = props.gap || 16, color = props.color || 'rgba(6,21,14,.22)';
    return h('div', {
      className: cx('blits-dotgrid', props.frame && 'blits-dotgrid--frame', props.className), 'aria-hidden': 'true',
      style: Object.assign({ backgroundImage: 'radial-gradient(' + color + ' 1.2px, transparent 1.4px)', backgroundSize: gap + 'px ' + gap + 'px', '--tick': color }, props.style)
    });
  }

  /* Editorial index number ("001") with an optional label. */
  function IndexLabel(props) {
    return h('p', { className: cx('blits-index', props.className) },
      h('span', { className: 'blits-index__num' }, props.index),
      props.label ? h('span', { className: 'blits-index__label' }, props.label) : null);
  }

  /* Compact square action button with a diagonal arrow. For "open this" on tiles and cards; text actions stay pill buttons. */
  function SquareArrowButton(props) {
    var Tag = props.href ? 'a' : 'button';
    return h(Tag, { className: cx('blits-sqbtn', props.tone === 'dark' && 'blits-sqbtn--dark', props.className), href: props.href, type: props.href ? undefined : (props.type || 'button'), onClick: props.onClick, 'aria-label': props.label },
      svg('<path d="M7 17L17 7M9 7H17V15"/>', { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2.5, strokeLinecap: 'square', 'aria-hidden': 'true' }));
  }

  /* A cut-out object (product, ball, net, shield) floating over sections and frames with a soft, realistic shadow. The one place a shadow is allowed: physical objects. */
  function FloatingCutout(props) {
    return h('div', { className: cx('blits-float', props.className), style: Object.assign({ width: props.width, transform: 'rotate(' + (props.rotate || 0) + 'deg)' }, props.style) },
      props.src ? h('img', { src: props.src, alt: props.alt || '', loading: 'lazy' }) : props.children,
      props.temp ? h('span', { className: 'blits-temp' }, 'Temporary photo') : null);
  }

  /* One keyword per headline in the primary colour: a soccer-green block behind dark type on light sections, green type on dark sections. */
  function Keyword(props) {
    return h('span', { className: cx('blits-keyword', props.className) }, props.children);
  }

  window.Blits = {
    Button: Button, Heading: Heading, PlaqueCard: PlaqueCard, SpecPlate: SpecPlate, Divider: Divider, Marker: Marker,
    FieldLines: FieldLines, Icon: Icon, ChalkDoodle: ChalkDoodle, ChalkDivider: ChalkDivider, FlipDigits: FlipDigits,
    StampedShield: StampedShield, ChassisPlate: ChassisPlate, FilmStrip: FilmStrip, Texture: Texture, LanternHero: LanternHero, Photo: Photo, CampaignHero: CampaignHero, Streetlight: Streetlight, Field: Field, ChalkText: ChalkText, TornEdge: TornEdge, PolaroidFrame: PolaroidFrame, DotGrid: DotGrid, IndexLabel: IndexLabel, SquareArrowButton: SquareArrowButton, FloatingCutout: FloatingCutout, Keyword: Keyword,
    configureAssets: configureAssets, assets: assets, iconNames: Object.keys(ICONS), doodleNames: Object.keys(DOODLES), fieldTypes: Object.keys(FIELD)
  };
})();
