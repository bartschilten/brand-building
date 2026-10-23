/* BLITS product page per group (variant B look): group.html#<group-id>. Every product of the group, one card per model with its sizes.
   No prices (decision 21): each card leads to the store finder. Without a known group in the hash it sends you back to the assortment. */
(function () {
  var B = window.Blits, VB = window.VB, h = React.createElement;
  var FAMILIES = VB.FAMILIES;
  function current() { var id = location.hash.slice(1); return FAMILIES.filter(function (f) { return f.id === id; })[0]; }

  function Hero(props) {
    var f = props.family, n = FAMILIES.indexOf(f) + 1;
    var words = f.title.split(' '), last = words.pop();
    return h('section', { className: 'vb-section vb-grouphero', 'aria-labelledby': 'group-h' },
      h(B.DotGrid, { className: 'vb-grouphero__dots', frame: true }),
      h('div', { className: 'wrap wrap--wide vb-grouphero__in' },
        h('div', { className: 'vb-grouphero__copy' },
          h('nav', { className: 'vb-crumbs', 'aria-label': 'Breadcrumb' },
            h('a', { href: 'assortment.html' }, 'Assortment'), h('span', { 'aria-hidden': 'true' }, ' / '), h('span', { 'aria-current': 'page' }, f.title)),
          h(B.IndexLabel, { index: '00' + n, label: f.count + ' products' }),
          h('h1', { id: 'group-h', className: 'blits-heading display-xl vb-hero__title vb-pagehero__title' }, words.length ? words.join(' ') + ' ' : '', h(B.Keyword, null, last + '.')),
          h('p', { className: 'body-l vb-hero__intro' }, f.intro)),
        h('div', { className: 'vb-grouphero__media' },
          h('div', { className: 'vb-grouphero__field', 'aria-hidden': 'true' }, h(B.FieldLines, { type: f.lines, opacity: 0.25 })),
          h('div', { className: 'vb-block vb-block--group' }),
          h('img', { src: f.hero, alt: '', className: VB.cx(f.models[0].tall && 'is-tall') }),
          h('span', { className: 'blits-temp' }, 'Temporary photo'))),
      h('div', { className: 'wrap wrap--wide' },
        h('div', { className: 'vb-chips vb-grouphero__chips', role: 'navigation', 'aria-label': 'Other product groups' },
          h('a', { className: 'vb-chip', href: 'assortment.html' }, '← All groups'),
          FAMILIES.map(function (g) {
            return h('a', { key: g.id, className: VB.cx('vb-chip', g.id === f.id && 'is-on'), href: VB.GROUP + g.id, 'aria-current': g.id === f.id ? 'page' : undefined }, g.title, h('span', { className: 'vb-chip__count' }, g.count));
          }))));
  }

  function ModelCard(props) {
    var m = props.model;
    return h('article', { className: VB.cx('vb-card vb-model', m.feature && 'vb-model--feature') },
      h('div', { className: VB.cx('vb-card__media', m.tall && 'vb-card__media--tall') },
        h('div', { className: 'vb-block vb-block--card' }),
        h('img', { src: m.img, alt: 'BLITS ' + m.name, loading: 'lazy' }),
        h('span', { className: 'blits-temp' }, 'Temporary photo')),
      h(B.IndexLabel, { index: props.index }),
      h('h3', { className: 'blits-heading display-s vb-card__title' }, m.name),
      m.note ? h('p', { className: 'body vb-card__text' }, m.note) : null,
      h('ul', { className: 'vb-sizes', 'aria-label': 'Sizes' }, m.sizes.map(function (s) { return h('li', { key: s }, s); })),
      h('div', { className: 'vb-card__foot' },
        h('p', { className: 'eyebrow' }, m.sizes.length === 1 ? '1 size' : m.sizes.length + ' sizes'),
        h(B.SquareArrowButton, { href: VB.STORE, label: 'Where to buy the ' + m.name })));
  }

  function Products(props) {
    var f = props.family, n = FAMILIES.indexOf(f) + 1;
    var cols = Math.min(Math.max(f.models.length, 2), 4);
    return h('section', { className: 'vb-section vb-products', 'aria-labelledby': 'products-h' },
      h('div', { className: 'wrap wrap--wide' },
        h('div', { className: 'vb-head' },
          h('div', null, h(B.IndexLabel, { index: 'No. ' + n, label: f.models.length === 1 ? '1 model' : f.models.length + ' models' }),
            h('h2', { id: 'products-h', className: 'blits-heading display-l' }, 'All ', f.title.toLowerCase())),
          h(B.Button, { href: VB.STORE, variant: 'secondary' }, 'Find a store')),
        h('div', { className: VB.cx('vb-products__grid', f.models.length === 1 && 'vb-products__grid--single'), style: { '--cols': f.models.length === 1 ? 1 : cols } }, f.models.map(function (m, i) {
          return h(ModelCard, { key: m.name, model: m, index: 'No. ' + n + '.' + (i + 1) });
        }))));
  }

  /* Other groups as small dark tiles, so you never hit a dead end. */
  function Others(props) {
    var rest = FAMILIES.filter(function (g) { return g.id !== props.family.id; });
    return h('section', { className: 'vb-section vb-others', 'data-theme': 'dark', 'aria-labelledby': 'others-h' },
      h(B.TornEdge, { position: 'top', color: 'var(--night-pitch-green)', seed: 23 }),
      h('div', { className: 'wrap wrap--wide' },
        h('div', { className: 'vb-head' },
          h('div', null, h(B.IndexLabel, { label: 'Keep looking' }), h('h2', { id: 'others-h', className: 'blits-heading display-l' }, 'More ways ', h(B.Keyword, null, 'out.'))),
          h(B.Button, { href: 'assortment.html', variant: 'secondary' }, 'All groups')),
        h('ul', { className: 'vb-others__list' }, rest.map(function (g) {
          return h('li', { key: g.id }, h('a', { className: 'vb-mini', href: VB.GROUP + g.id },
            h('span', { className: 'vb-mini__media', 'aria-hidden': 'true' }, h('span', { className: 'vb-block vb-mini__block' }), h('img', { src: g.hero, alt: '', loading: 'lazy' })),
            h('span', { className: 'eyebrow vb-mini__count' }, g.count + ' products'),
            h('span', { className: 'blits-heading display-s vb-mini__title' }, g.title)));
        }))));
  }

  function App() {
    var st = React.useState(current()), family = st[0], setFamily = st[1];
    React.useEffect(function () {
      function onHash() { var f = current(); if (!f) { location.replace('assortment.html'); return; } setFamily(f); window.scrollTo(0, 0); }
      if (!family) { location.replace('assortment.html'); return; }
      window.addEventListener('hashchange', onHash);
      return function () { window.removeEventListener('hashchange', onHash); };
    }, []);
    React.useEffect(function () { if (family) document.title = 'BLITS ' + family.title; }, [family]);
    if (!family) return null;
    return h(React.Fragment, null, h(VB.Header, { page: 'assortment' }),
      h('main', { id: 'top', key: family.id }, h(Hero, { family: family }), h(Products, { family: family }), h(Others, { family: family })),
      h(VB.Footer));
  }
  VB.mount(App);
})();
