/* BLITS Assortment page (variant B look): every live BLITS product, one card per model with its sizes. No prices (decision 21):
   every card leads to the store finder. Product data in vb-site.js; photos are temporary cut-outs. */
(function () {
  var B = window.Blits, VB = window.VB, h = React.createElement;
  var FAMILIES = VB.FAMILIES;

  function Hero(props) {
    return h('section', { className: 'vb-section vb-rangehero', 'aria-labelledby': 'range-h' },
      h(B.DotGrid, { className: 'vb-rangehero__dots', frame: true }),
      h('div', { className: 'wrap vb-rangehero__in' },
        h('div', { className: 'vb-rangehero__copy' },
          h(B.IndexLabel, { index: '001', label: 'Assortment' }),
          h('h1', { id: 'range-h', className: 'blits-heading display-xl vb-hero__title' }, 'The whole ', h(B.Keyword, null, 'range.')),
          h('p', { className: 'body-l vb-hero__intro' }, 'Goals, target walls, basketball poles, trampolines, rebounders and the parts that keep them going. No prices here: find a store near you to see them.')),
        h(B.FloatingCutout, { className: 'vb-rangehero__float', src: 'assets/products/blits-rebounder-100x100-uitsnede.webp', alt: '', rotate: -8, temp: true })),
      h('div', { className: 'wrap' },
        h('div', { className: 'vb-chips', role: 'group', 'aria-label': 'Show product group' },
          [{ id: 'all', title: 'All', count: null }].concat(FAMILIES).map(function (f) {
            var on = props.filter === f.id;
            return h('button', { key: f.id, type: 'button', className: VB.cx('vb-chip', on && 'is-on'), 'aria-pressed': on, onClick: function () { props.setFilter(f.id); } },
              f.title, f.count ? h('span', { className: 'vb-chip__count' }, f.count) : null);
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

  function Family(props) {
    var f = props.family, span = props.full ? 4 : Math.min(f.models.length, 4);
    return h('section', { className: VB.cx('vb-family', span === 1 && 'vb-family--narrow'), id: f.id, 'aria-labelledby': f.id + '-h', style: { '--span': span } },
      h('div', { className: 'vb-family__field', 'aria-hidden': 'true' }, h(B.FieldLines, { type: f.lines, opacity: 0.12 })),
      h('div', { className: 'vb-family__head' },
        h(B.IndexLabel, { index: props.index, label: f.count + (f.count === 1 ? ' product' : ' products') }),
        h('h2', { id: f.id + '-h', className: 'blits-heading display-l vb-family__title' }, f.title)),
      h('div', { className: 'vb-family__grid' }, f.models.map(function (m, i) {
        return h(ModelCard, { key: m.name, model: m, index: 'No. ' + props.num + '.' + (i + 1) });
      })));
  }

  function App() {
    var st = React.useState('all'), filter = st[0], setFilter = st[1];
    React.useEffect(function () {
      var id = location.hash.slice(1), el = id && document.getElementById(id);
      if (el) requestAnimationFrame(function () { el.scrollIntoView(); });
    }, []);
    var shown = FAMILIES.filter(function (f) { return filter === 'all' || f.id === filter; });
    return h(React.Fragment, null, h(VB.Header, { page: 'assortment' }),
      h('main', { id: 'top' },
        h(Hero, { filter: filter, setFilter: setFilter }),
        h('div', { className: 'vb-section vb-families' }, h('div', { className: 'wrap vb-families__grid' }, shown.map(function (f) {
          var n = FAMILIES.indexOf(f) + 1;
          return h(Family, { key: f.id, family: f, num: n, index: '00' + (n + 1), full: filter !== 'all' });
        }))),
        h(VB.NextStep, { index: '00' + (FAMILIES.length + 2), label: 'Where to buy', title: 'Seen enough? Find one', keyword: 'near you.' },
          h(B.Button, { href: VB.STORE, variant: 'brand' }, 'Find a store'),
          h(B.Button, { href: 'professionals.html', variant: 'secondary' }, 'Stock BLITS'))),
      h(VB.Footer));
  }
  VB.mount(App);
})();
