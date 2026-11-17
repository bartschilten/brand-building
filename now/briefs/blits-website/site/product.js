/* BLITS product page (variant B look): product.html#<model-slug>/<size-slug>. A brand page per model, no buy button and no prices
   (decision 21): the next step is always "find a store". Copy follows the BLITS tone of voice (warm, playful, short sentences, "you",
   no winning or competition, mud and friends welcome). Facts come only from the product names and Bart's decisions (Arena: aluminium,
   5 years warranty); everything else is a visible placeholder until it is confirmed. */
(function () {
  var B = window.Blits, VB = window.VB, h = React.createElement;
  var C = 'assets/campaign/blits-campagne-';

  /* Brand copy per model. tagline: one line under the name. story: two short paragraphs under the brand pillar. chalk: a short note on the photo. */
  var COPY = {
    'Arena aluminium goal': {
      tagline: 'A real goal for the garden.',
      story: ['The goal you remember from the club pitch, brought home. An aluminium frame, five years of warranty and a net that is there to be hit. Again. And again.',
        'Three sizes, from a first goal of 180 × 120 cm to the full 500 × 200 cm. Pick the one that fits your garden, then go out and get it muddy.'],
      chalk: 'one more shot', photo: 'straatvoetbal-modder-detail.jpg', caption: 'Splash' },
    'Street goal': {
      tagline: 'Jumpers for goalposts, upgraded.',
      story: ['Two jumpers on the grass did the job for years. This does it better. The Street goal stands in the garden, on the lawn or on the square behind the flats.',
        'Four sizes, from 180 × 120 cm to 500 × 200 cm. Put it up, call your friends, lose track of time.'],
      chalk: 'back before dark!', photo: 'straat-schemer.jpg', caption: 'Street' },
    'Street goal set': {
      tagline: 'Two goals. Every game starts here.',
      story: ['Two small goals of 90 × 60 cm, one for each end. Enough for a game in the garden, the park or the beach.',
        'Small enough for the smallest feet, big enough for the whole street. Set them up and see who is still out there when the streetlights come on.'],
      chalk: 'first game!', photo: 'straatvoetbal-modder-detail.jpg', caption: 'Splash' },
    'Hattrick Pack': {
      tagline: 'Everything for a long afternoon.',
      story: ['More than a goal: one box with more ways to keep the ball moving, for the kid who never wants to stop.',
        'Three sizes: 240 × 160, 300 × 200 and 500 × 200 cm. What is in the box: [PACK CONTENTS].'],
      chalk: 'one more round', photo: 'straat-schemer.jpg', caption: 'Street' },
    'Arena Ultimate Training Pack': {
      tagline: 'The Arena, with extras.',
      story: ['The aluminium Arena goal, packed together with more to play with. For gardens where the ball is out every single day.',
        'Two sizes: 300 × 200 and 500 × 200 cm. What is in the box: [PACK CONTENTS].'],
      chalk: 'till they call us in', photo: 'straatvoetbal-modder-detail.jpg', caption: 'Splash' },
    'Target wall with holes': {
      tagline: 'Something to aim for.',
      story: ['A whole wall to miss and a few holes to find. Practise alone until dinner, or make up a game with whoever is around.',
        'Made in the same three sizes as our goals: 240 × 160, 300 × 200 and 500 × 200 cm.'],
      chalk: 'almost!', photo: 'straat-schemer.jpg', caption: 'Street' },
    'Basketball pole': {
      tagline: 'A hoop for every height.',
      story: ['Start low, grow tall. Three poles with their own height range, together from 135 up to 305 cm.',
        'On the drive, in the garden, next to the shed. Keep shooting until it is too dark to see the ring.'],
      chalk: 'one more shot', photo: 'basketbal-van-boven.jpg', caption: 'Last light' },
    'Urban Sports inground trampoline': {
      tagline: 'Level with the lawn.',
      story: ['Dug in, out of sight, ready to jump. An inground trampoline sits level with the grass, so the garden stays a garden until someone starts bouncing.',
        'Round or rectangular, from Ø 244 up to Ø 427 cm. In black.'],
      chalk: 'higher!', photo: 'trampoline-tuin.jpg', caption: 'Lift-off' },
    'Urban trampoline': {
      tagline: 'Room for one more.',
      story: ['The one you spot over every garden fence, and for good reason. Jump, fall, laugh, get up, jump again.',
        'Above ground, round or rectangular, from Ø 244 up to Ø 427 cm. In black.'],
      chalk: 'higher!', photo: 'trampoline-tuin.jpg', caption: 'Lift-off' },
    'Adjustable rebounder': {
      tagline: 'The ball always comes back.',
      story: ['Kick it, throw it, head it. The rebounder sends it straight back, so you can keep going on your own, or turn it into a game with a friend.',
        'Adjustable, in three sizes: 100 × 100, 124 × 124 and 164 × 164 cm.'],
      chalk: 'again!', photo: 'thuis-na-het-spelen.jpg', caption: 'Home' },
    'Trampoline safety pad': {
      tagline: 'Fresh edges for an old favourite.',
      story: ['Sun, rain and a thousand jumps wear a pad out. A new one makes the trampoline feel new again.',
        'Seven sizes, round and rectangular. Check the size of your trampoline before you choose. Fits: [COMPATIBILITY].'],
      chalk: 'good as new', photo: 'trampoline-tuin.jpg', caption: 'Lift-off' },
    'Premium safety pad': {
      tagline: 'Soft edges, long summers.',
      story: ['Our premium pad for round trampolines. For the edges that get landed on, sat on and jumped over all summer long.',
        'Two sizes: Ø 244 and Ø 305 cm. Fits: [COMPATIBILITY].'],
      chalk: 'good as new', photo: 'trampoline-tuin.jpg', caption: 'Lift-off' },
    'Premium springs, 10 pieces': {
      tagline: 'The bounce is in the springs.',
      story: ['Ten premium springs to bring the bounce back. Swap the tired ones and the trampoline is ready for another summer.',
        'Four lengths: 140, 165, 190 and 215 mm. Measure an old spring and pick the same length.'],
      chalk: 'boing!', photo: 'trampoline-tuin.jpg', caption: 'Lift-off' }
  };

  /* What goes well with each group: other models in the group first, then a neighbour group. */
  var NEIGHBOURS = { 'football-goals': ['target-walls', 'rebounders'], 'target-walls': ['football-goals'], 'rebounders': ['football-goals'],
    'trampolines': ['trampoline-parts'], 'trampoline-parts': ['trampolines'], 'basketball-poles': ['football-goals'] };

  function famById(id) { return VB.FAMILIES.filter(function (f) { return f.id === id; })[0]; }
  function attrs(model, size) {
    var round = size.indexOf('Ø') === 0, rect = size.indexOf('×') !== -1;
    return { type: model.type, placement: model.placement, part: model.part, shape: round ? 'Round' : rect ? 'Rectangular' : null };
  }
  function nameWithKeyword(name) { var w = name.split(' '), last = w.pop(); return [w.length ? w.join(' ') + ' ' : '', h(B.Keyword, { key: 'k' }, last + '.')]; }

  function Hero(props) {
    var f = props.family, m = props.model, size = props.size, c = COPY[m.name] || {}, a = attrs(m, size);
    var arena = m.name.indexOf('Arena') === 0;
    var meta = [a.type, a.placement, f.id === 'trampolines' ? a.shape : null].filter(Boolean).join(' · ') || f.title;
    return h('section', { className: 'vb-pdp', 'aria-labelledby': 'pdp-h' },
      h('div', { className: 'wrap wrap--wide' },
        h('nav', { className: 'vb-crumbs', 'aria-label': 'Breadcrumb' },
          h('a', { href: 'assortment.html' }, 'Assortment'), h('span', { 'aria-hidden': 'true' }, ' / '),
          h('a', { href: VB.GROUP + f.id }, f.title), h('span', { 'aria-hidden': 'true' }, ' / '),
          h('span', { 'aria-current': 'page' }, m.name)),
        h('div', { className: 'vb-pdp__in' },
          h('div', { className: VB.cx('vb-pdp__media', m.tall && 'is-tall') },
            h('img', { src: m.img, alt: 'BLITS ' + m.name + ', ' + size }),
            h('span', { className: 'blits-temp' }, 'Temporary photo')),
          h('div', { className: 'vb-pdp__copy' },
            h('p', { className: 'eyebrow vb-pdp__meta' }, meta),
            h('h1', { id: 'pdp-h', className: 'blits-heading display-l vb-pdp__title' }, nameWithKeyword(m.name)),
            c.tagline ? h('p', { className: 'vb-pdp__tagline' }, c.tagline) : null,
            m.sizes.length > 1 ? h('fieldset', { className: 'vb-pdp__sizes' },
              h('legend', { className: 'eyebrow' }, m.name.indexOf('pole') !== -1 ? 'Height range' : m.name.indexOf('springs') !== -1 ? 'Length' : 'Size'),
              h('div', { className: 'vb-chips' }, m.sizes.map(function (s) {
                var on = s === size;
                return h('a', { key: s, className: VB.cx('vb-chip', on && 'is-on'), href: VB.productHref(m.name, s), 'aria-current': on ? 'true' : undefined, onClick: function (e) { e.preventDefault(); history.replaceState(null, '', VB.productHref(m.name, s)); props.setSize(s); } }, s);
              }))) : h('p', { className: 'vb-pdp__onesize' }, h('span', { className: 'eyebrow' }, 'Size'), ' ', size),
            h('dl', { className: 'vb-pdp__facts' },
              h('div', null, h('dt', { className: 'eyebrow' }, 'Size'), h('dd', null, size)),
              h('div', null, h('dt', { className: 'eyebrow' }, 'Warranty'), h('dd', null, arena ? '5 years' : h('span', { className: 'ph' }, '[WARRANTY]'))),
              h('div', null, h('dt', { className: 'eyebrow' }, 'Price'), h('dd', null, 'At your local store'))),
            h('div', { className: 'vb-actions' },
              h(B.Button, { href: VB.STORE, variant: 'brand' }, 'Find a store'),
              h('span', { className: 'vb-arrowlink' }, h('a', { className: 'text-link', href: 'professionals.html' }, 'Stock it in your shop'), h(B.SquareArrowButton, { href: 'professionals.html', label: 'Stock it in your shop' })))))));
  }

  function Story(props) {
    var m = props.model, c = COPY[m.name];
    if (!c) return null;
    return h('section', { className: 'vb-section vb-pdpstory', 'aria-labelledby': 'story-h' },
      h('div', { className: 'wrap vb-pdpstory__in' },
        h('div', null,
          h(B.IndexLabel, { index: '002', label: 'The story' }),
          h('h2', { id: 'story-h', className: 'blits-heading display-l' }, 'Built to be used, not ', h(B.Keyword, null, 'admired.'))),
        h('div', null, c.story.map(function (t, i) {
          var parts = t.split(/(\[[A-Z ]+\])/);
          return h('p', { key: i, className: i ? 'body vb-pdpstory__p' : 'body-l vb-pdpstory__p' }, parts.map(function (x, j) { return /^\[/.test(x) ? h('span', { key: j, className: 'ph' }, x) : x; }));
        }))));
  }

  /* 003 · Honest specs on the dark field: the plate holds only what is true or a visible placeholder. */
  function Specs(props) {
    var f = props.family, m = props.model, size = props.size, c = COPY[m.name] || {}, a = attrs(m, size);
    var arena = m.name.indexOf('Arena') === 0, ph = function (t) { return '[' + t + ']'; };
    var rows = [{ label: 'Model', value: m.name }, { label: m.name.indexOf('pole') !== -1 ? 'Height' : 'Size', value: size }];
    if (a.type) rows.push({ label: 'Type', value: a.type });
    if (a.placement) rows.push({ label: 'Placement', value: a.placement });
    if (a.shape && f.id !== 'football-goals' && f.id !== 'target-walls') rows.push({ label: 'Shape', value: a.shape });
    if (/Pack/.test(m.name)) rows.push({ label: 'In the box', value: ph('PACK CONTENTS') });
    rows.push({ label: 'Frame', value: arena ? 'Aluminium' : ph('MATERIAL') });
    if (f.id !== 'trampoline-parts') rows.push({ label: 'Age', value: ph('AGE') });
    rows.push({ label: 'Warranty', value: arena ? '5 years' : ph('WARRANTY') });
    return h('section', { className: 'vb-section vb-pdpspecs', 'data-theme': 'dark', 'aria-labelledby': 'specs-h' },
      h(B.TornEdge, { position: 'top', color: 'var(--night-pitch-green)', seed: 31 }),
      h('div', { className: 'wrap vb-pdpspecs__in' },
        h('div', null,
          h(B.IndexLabel, { index: '003', label: 'Specs' }),
          h('h2', { id: 'specs-h', className: 'blits-heading display-l' }, 'Honest ', h(B.Keyword, null, 'specs.')),
          h('p', { className: 'body-l vb-lede' }, 'If it is on the plate, it is true. Values in brackets are still being confirmed.'),
          h(B.ChassisPlate, { className: 'vb-pdpspecs__plate', title: 'BLITS ' + m.name, rows: rows })),
        h('div', { className: 'vb-pdpspecs__photo' },
          h(B.PolaroidFrame, { rotate: 4, caption: c.caption || 'Outside', src: C + (c.photo || 'straatvoetbal-modder-detail.jpg'), alt: '' }),
          c.chalk ? h(B.ChalkText, { className: 'vb-pdpspecs__chalk', color: 'secondary', size: 40, rotate: -6 }, c.chalk) : null)),
      h(B.TornEdge, { position: 'bottom', color: 'var(--night-pitch-green)', seed: 37 }));
  }

  /* 004 · Goes well with: up to four product cards, linking to their own product pages. */
  function Related(props) {
    var f = props.family, m = props.model, list = [];
    f.models.forEach(function (o) { if (o !== m) list.push({ f: f, m: o }); });
    (NEIGHBOURS[f.id] || []).forEach(function (id) { var g = famById(id); g.models.forEach(function (o) { list.push({ f: g, m: o }); }); });
    list = list.slice(0, 4);
    if (!list.length) return null;
    return h('section', { className: 'vb-section vb-pdprel', 'aria-labelledby': 'rel-h' },
      h('div', { className: 'wrap wrap--wide' },
        h('div', { className: 'vb-head' },
          h('div', null, h(B.IndexLabel, { index: '004', label: 'Keep playing' }), h('h2', { id: 'rel-h', className: 'blits-heading display-l' }, 'Goes well ', h(B.Keyword, null, 'with.'))),
          h(B.Button, { href: VB.GROUP + f.id, variant: 'secondary' }, 'All ' + f.title.toLowerCase())),
        h('ul', { className: 'vb-plp__grid vb-pdprel__grid' }, list.map(function (r) {
          return h('li', { key: r.m.name }, h('a', { className: 'vb-pcard', href: VB.productHref(r.m.name) },
            h('span', { className: VB.cx('vb-pcard__media', r.m.tall && 'is-tall') }, h('img', { src: r.m.img, alt: '', loading: 'lazy' }), h('span', { className: 'blits-temp' }, 'Temporary photo')),
            h('span', { className: 'vb-pcard__body' },
              h('span', { className: 'eyebrow vb-pcard__meta' }, r.f.title),
              h('span', { className: 'blits-heading display-s vb-pcard__name' }, r.m.name),
              h('span', { className: 'vb-pcard__size' }, r.m.sizes.length === 1 ? r.m.sizes[0] : r.m.sizes.length + ' sizes')),
            h('span', { className: 'vb-pcard__foot' }, h('span', { className: 'eyebrow' }, 'View product'),
              h('span', { className: 'blits-sqbtn vb-pcard__go', 'aria-hidden': 'true' },
                h('svg', { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2.5, strokeLinecap: 'square' }, h('path', { d: 'M7 17L17 7M9 7H17V15' }))))));
        }))));
  }

  function App() {
    var st = React.useState(VB.findProduct(location.hash)), hit = st[0], setHit = st[1];
    var sz = React.useState(hit && hit.size), size = sz[0], setSize = sz[1];
    React.useEffect(function () {
      if (!hit) { location.replace('assortment.html'); return; }
      function onHash() { var n = VB.findProduct(location.hash); if (!n) { location.replace('assortment.html'); return; } setHit(n); setSize(n.size); window.scrollTo(0, 0); }
      window.addEventListener('hashchange', onHash);
      return function () { window.removeEventListener('hashchange', onHash); };
    }, []);
    React.useEffect(function () { if (hit) document.title = 'BLITS ' + hit.model.name + ' ' + size; }, [hit, size]);
    if (!hit) return null;
    var p = { family: hit.family, model: hit.model, size: size, setSize: setSize };
    return h(React.Fragment, null, h(VB.Header, { page: 'assortment' }),
      h('main', { id: 'top', key: hit.model.name }, h(Hero, p), h(Story, p), h(Specs, p), h(Related, p),
        h(VB.NextStep, { index: '005', label: 'See it for real', title: 'Try the bounce, feel the frame. Find one', keyword: 'near you.' },
          h(B.Button, { href: VB.STORE, variant: 'brand' }, 'Find a store'),
          h(B.Button, { href: 'professionals.html', variant: 'secondary' }, 'For retailers'))),
      h(VB.Footer));
  }
  VB.mount(App);
})();
