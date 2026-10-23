/* BLITS Assortment (variant B look): the product group selection page. Six groups as a bento of dark tiles; each product breaks out
   of its green block. A tile opens the product page of that group (group.html#<id>). No prices (decision 21). */
(function () {
  var B = window.Blits, VB = window.VB, h = React.createElement;
  var FAMILIES = VB.FAMILIES;
  /* Bento order and size on the 4-column grid: one large, three wide, two square. */
  var LAYOUT = { 'football-goals': 'xl', 'trampolines': 'wide', 'basketball-poles': 'sq', 'rebounders': 'sq', 'target-walls': 'wide', 'trampoline-parts': 'wide' };
  var ORDER = ['football-goals', 'trampolines', 'basketball-poles', 'rebounders', 'target-walls', 'trampoline-parts'];

  function Hero() {
    return h('section', { className: 'vb-section vb-hero vb-pickhero', 'aria-labelledby': 'pick-h' },
      h(B.DotGrid, { className: 'vb-hero__dots', frame: true }),
      h('div', { className: 'wrap wrap--wide vb-hero__in' },
        h('div', { className: 'vb-hero__copy' },
          h(B.IndexLabel, { index: '001', label: 'Assortment' }),
          h('h1', { id: 'pick-h', className: 'blits-heading display-xl vb-hero__title vb-pagehero__title' }, 'Pick your ', h(B.Keyword, null, 'game.')),
          h('p', { className: 'body-l vb-hero__intro' }, 'Six groups, one brand. Goals, target walls, basketball poles, trampolines, rebounders and the parts that keep them going. No prices here: find a store near you to see them.'),
          h('div', { className: 'vb-actions' },
            h(B.Button, { href: '#groups', variant: 'brand' }, 'Choose a group'),
            h(B.Button, { href: VB.STORE, variant: 'secondary' }, 'Find a store'))),
        h('div', { className: 'vb-collage vb-collage--pick' },
          h('div', { className: 'vb-block vb-block--pick' }),
          h(B.PolaroidFrame, { className: 'vb-pick__polaroid vb-pick__polaroid--a', rotate: -6, caption: '01 · Lift-off', src: 'assets/campaign/blits-campagne-trampoline-tuin.jpg', alt: 'A boy jumping high on a BLITS trampoline in a back garden' }),
          h(B.PolaroidFrame, { className: 'vb-pick__polaroid vb-pick__polaroid--b', rotate: 5, caption: '02 · Splash', src: 'assets/campaign/blits-campagne-straatvoetbal-modder-detail.jpg', alt: 'A boy sliding through a muddy puddle, laughing' }),
          h(B.FloatingCutout, { className: 'vb-pick__float', src: 'assets/products/blits-basketbalbord-uitsnede.png', alt: '', rotate: -6, temp: true }))));
  }

  function Tile(props) {
    var f = props.family, size = LAYOUT[f.id];
    return h('a', { className: VB.cx('vb-tile', 'vb-tile--' + size), href: VB.GROUP + f.id },
      h('span', { className: 'vb-tile__field', 'aria-hidden': 'true' }, h(B.FieldLines, { type: f.lines, opacity: 0.22 })),
      h('span', { className: 'vb-tile__num', 'aria-hidden': 'true' }, '0' + props.n),
      h('span', { className: 'vb-tile__media', 'aria-hidden': 'true' },
        h('span', { className: 'vb-block vb-tile__block' }),
        h('img', { src: f.hero, alt: '', loading: props.n < 3 ? 'eager' : 'lazy' }),
        h('span', { className: 'blits-temp' }, 'Temporary photo')),
      h('span', { className: 'vb-tile__text' },
        h('span', { className: 'eyebrow vb-tile__count' }, f.count + ' products'),
        h('span', { className: 'blits-heading display-m vb-tile__title' }, f.title),
        h('span', { className: 'body vb-tile__short' }, f.short)),
      h('span', { className: 'blits-sqbtn vb-tile__go', 'aria-hidden': 'true' },
        h('svg', { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2.5, strokeLinecap: 'square' }, h('path', { d: 'M7 17L17 7M9 7H17V15' }))));
  }

  function Groups() {
    var list = ORDER.map(function (id) { return FAMILIES.filter(function (f) { return f.id === id; })[0]; });
    return h('section', { className: 'vb-section vb-groups', id: 'groups', 'data-theme': 'dark', 'aria-labelledby': 'groups-h' },
      h(B.TornEdge, { position: 'top', color: 'var(--night-pitch-green)', seed: 13 }),
      h('div', { className: 'wrap wrap--wide' },
        h('div', { className: 'vb-groups__head' },
          h(B.IndexLabel, { index: '002', label: 'Product groups' }),
          h('h2', { id: 'groups-h', className: 'blits-heading display-l' }, 'Six ways ', h(B.Keyword, null, 'out.'))),
        h('ul', { className: 'vb-bento' }, list.map(function (f, i) {
          return h('li', { key: f.id, className: 'vb-bento__item vb-bento__item--' + LAYOUT[f.id] }, h(Tile, { family: f, n: i + 1 }));
        }))),
      h(B.TornEdge, { position: 'bottom', color: 'var(--night-pitch-green)', seed: 19 }));
  }

  function App() {
    return h(React.Fragment, null, h(VB.Header, { page: 'assortment' }),
      h('main', { id: 'top' }, h(Hero), h(Groups),
        h(VB.NextStep, { index: '003', label: 'Where to buy', title: 'Seen enough? Find one', keyword: 'near you.' },
          h(B.Button, { href: VB.STORE, variant: 'brand' }, 'Find a store'),
          h(B.Button, { href: 'professionals.html', variant: 'secondary' }, 'Stock BLITS'))),
      h(VB.Footer));
  }
  VB.mount(App);
})();
