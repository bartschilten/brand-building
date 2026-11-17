/* BLITS product listing page (PLP) per group (variant B look): group.html#<group-id>. Compact header, then every product of the group
   (one card per size) with filters and sorting. No prices (decision 21): each card opens its product page (product.html). Without a known group in the hash it sends you back to the assortment. */
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
          h('h1', { id: 'group-h', className: 'blits-heading display-xl vb-hero__title vb-pagehero__title' }, words.length ? words.join(' ') + ' ' : '', h(B.Keyword, null, last + '.')),
          ),
        h('p', { className: 'body vb-grouphero__intro' }, f.intro)),
      h('div', { className: 'wrap wrap--wide' },
        h('div', { className: 'vb-chips vb-grouphero__chips', role: 'navigation', 'aria-label': 'Other product groups' },
          h('a', { className: 'vb-chip', href: 'assortment.html' }, '← All groups'),
          FAMILIES.map(function (g) {
            return h('a', { key: g.id, className: VB.cx('vb-chip', g.id === f.id && 'is-on'), href: VB.GROUP + g.id, 'aria-current': g.id === f.id ? 'page' : undefined }, g.title, h('span', { className: 'vb-chip__count' }, g.count));
          }))));
  }

  /* Product listing: every product (one per size), filters per group, sort. Facts only come from the product names. */
  var FACETS = {
    'football-goals': [['model', 'Model'], ['type', 'Type'], ['width', 'Width']],
    'target-walls': [['size', 'Size']],
    'basketball-poles': [['size', 'Height range']],
    'trampolines': [['placement', 'Placement'], ['shape', 'Shape'], ['size', 'Size']],
    'rebounders': [['size', 'Size']],
    'trampoline-parts': [['part', 'Part'], ['shape', 'Shape'], ['size', 'Size']]
  };
  var SORTS = [['recommended', 'Recommended'], ['size-asc', 'Size: small to large'], ['size-desc', 'Size: large to small'], ['name', 'Name: A to Z']];
  function num(size) { var m = /[\d.]+/.exec(size); return m ? +m[0] : 0; }
  function products(f) {
    var out = [];
    f.models.forEach(function (m) {
      m.sizes.forEach(function (size) {
        var round = size.indexOf('Ø') === 0, rect = size.indexOf('×') !== -1;
        out.push({ id: m.name + ' ' + size, name: m.name, size: size, img: m.img, tall: m.tall, order: out.length,
          attrs: { model: m.name, type: m.type, placement: m.placement, part: m.part, size: size,
            shape: round ? 'Round' : rect ? 'Rectangular' : null,
            width: rect ? size.split(' × ')[0] + ' cm' : null } });
      });
    });
    return out;
  }
  function facetValues(list, key) {
    var seen = [];
    list.forEach(function (p) { var v = p.attrs[key]; if (v && seen.indexOf(v) === -1) seen.push(v); });
    if (key === 'size' || key === 'width') seen.sort(function (x, y) { return (x.indexOf('Ø') === 0) - (y.indexOf('Ø') === 0) || num(x) - num(y); });
    return seen;
  }
  function matches(p, sel, skip) {
    return Object.keys(sel).every(function (k) { return k === skip || !sel[k].length || sel[k].indexOf(p.attrs[k]) !== -1; });
  }

  function ProductCard(props) {
    var p = props.product, a = p.attrs;
    var meta = props.metaKeys.map(function (k) { return a[k]; }).filter(Boolean).join(' · ');
    return h('a', { className: 'vb-pcard', href: VB.productHref(p.name, p.size), 'aria-label': 'BLITS ' + p.name + ', ' + p.size },
      h('span', { className: VB.cx('vb-pcard__media', p.tall && 'is-tall') },
        h('img', { src: p.img, alt: '', loading: 'lazy' }),
        h('span', { className: 'blits-temp' }, 'Temporary photo')),
      h('span', { className: 'vb-pcard__body' },
        h('span', { className: 'eyebrow vb-pcard__meta' }, meta || 'BLITS'),
        h('span', { className: 'blits-heading display-s vb-pcard__name' }, p.name),
        h('span', { className: 'vb-pcard__size' }, p.size)),
      h('span', { className: 'vb-pcard__foot' },
        h('span', { className: 'eyebrow' }, 'View product'),
        h('span', { className: 'blits-sqbtn vb-pcard__go', 'aria-hidden': 'true' },
          h('svg', { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2.5, strokeLinecap: 'square' }, h('path', { d: 'M7 17L17 7M9 7H17V15' })))));
  }

  function Filters(props) {
    var all = props.all, sel = props.sel;
    return h('div', { className: 'vb-filters__groups' }, props.facets.map(function (fc) {
      var key = fc[0], values = facetValues(all, key);
      if (values.length < 2) return null;
      return h('fieldset', { key: key, className: 'vb-facet' },
        h('legend', { className: 'eyebrow vb-facet__title' }, fc[1]),
        values.map(function (v) {
          var count = all.filter(function (p) { return p.attrs[key] === v && matches(p, sel, key); }).length;
          var on = sel[key].indexOf(v) !== -1;
          return h('label', { key: v, className: VB.cx('vb-check', !count && !on && 'is-empty') },
            h('input', { type: 'checkbox', checked: on, disabled: !count && !on, onChange: function () { props.toggle(key, v); } }),
            h('span', { className: 'vb-check__box', 'aria-hidden': 'true' }),
            h('span', { className: 'vb-check__label' }, v),
            h('span', { className: 'vb-check__count' }, count));
        }));
    }));
  }

  function Listing(props) {
    var f = props.family, facets = FACETS[f.id] || [];
    var all = React.useMemo(function () { return products(f); }, [f]);
    function empty() { var o = {}; facets.forEach(function (fc) { o[fc[0]] = []; }); return o; }
    var st = React.useState(empty), sel = st[0], setSel = st[1];
    var so = React.useState('recommended'), sort = so[0], setSort = so[1];
    function toggle(key, v) { setSel(function (o) { var n = Object.assign({}, o), arr = n[key].slice(), i = arr.indexOf(v); if (i === -1) arr.push(v); else arr.splice(i, 1); n[key] = arr; return n; }); }
    function clear() { setSel(empty()); }
    var shown = all.filter(function (p) { return matches(p, sel); });
    shown.sort(function (x, y) {
      if (sort === 'size-asc') return num(x.size) - num(y.size) || x.order - y.order;
      if (sort === 'size-desc') return num(y.size) - num(x.size) || x.order - y.order;
      if (sort === 'name') return x.name.localeCompare(y.name) || num(x.size) - num(y.size);
      return x.order - y.order;
    });
    var active = [];
    facets.forEach(function (fc) { sel[fc[0]].forEach(function (v) { active.push([fc[0], v]); }); });
    var hasFilters = facets.some(function (fc) { return facetValues(all, fc[0]).length > 1; });
    var metaKeys = facets.map(function (fc) { return fc[0]; }).filter(function (k) { return k === 'type' || k === 'placement' || (k === 'shape' && f.id === 'trampolines'); });
    var filterBody = h(Filters, { all: all, sel: sel, facets: facets, toggle: toggle });
    return h('section', { className: 'vb-plp', 'aria-labelledby': 'products-h' },
      h('div', { className: 'wrap wrap--wide vb-plp__in' },
        h('aside', { className: 'vb-filters', 'aria-label': 'Filters' },
          h('div', { className: 'vb-filters__head' }, h('p', { className: 'eyebrow' }, 'Filter'),
            active.length ? h('button', { type: 'button', className: 'vb-linkbtn', onClick: clear }, 'Clear all') : null),
          filterBody),
        h('div', { className: 'vb-plp__main' },
          h('h2', { id: 'products-h', className: 'vb-sr' }, 'All ' + f.title.toLowerCase()),
          h('div', { className: 'vb-plp__bar' },
            h('p', { className: 'eyebrow vb-plp__count', 'aria-live': 'polite' }, shown.length + (shown.length === 1 ? ' product' : ' products')),
            hasFilters ? h('details', { className: 'vb-plp__mobilefilter' },
              h('summary', { className: 'vb-chip' }, 'Filter' + (active.length ? ' (' + active.length + ')' : '')),
              h('div', { className: 'vb-plp__sheet' }, filterBody)) : null,
            h('label', { className: 'vb-sort' }, h('span', { className: 'eyebrow' }, 'Sort'),
              h('select', { value: sort, onChange: function (e) { setSort(e.target.value); } }, SORTS.map(function (s) { return h('option', { key: s[0], value: s[0] }, s[1]); })))),
          active.length ? h('ul', { className: 'vb-plp__active', 'aria-label': 'Active filters' },
            active.map(function (a) { return h('li', { key: a.join() }, h('button', { type: 'button', className: 'vb-chip is-on', onClick: function () { toggle(a[0], a[1]); }, 'aria-label': 'Remove filter ' + a[1] }, a[1], h('span', { 'aria-hidden': 'true' }, ' ×'))); }),
            h('li', null, h('button', { type: 'button', className: 'vb-linkbtn', onClick: clear }, 'Clear all'))) : null,
          shown.length ? h('ul', { className: 'vb-plp__grid' }, shown.map(function (p) { return h('li', { key: p.id }, h(ProductCard, { product: p, metaKeys: metaKeys })); }))
            : h('div', { className: 'vb-plp__empty' }, h('p', { className: 'body-l' }, 'No products match these filters.'), h(B.Button, { variant: 'secondary', onClick: clear }, 'Clear filters')))));
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
      h('main', { id: 'top', key: family.id }, h(Hero, { family: family }), h(Listing, { family: family }), h(Others, { family: family })),
      h(VB.Footer));
  }
  VB.mount(App);
})();
