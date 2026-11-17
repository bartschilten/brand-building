/* BLITS Assortment (variant B look): the product group selection page. A compact intro, then the six groups straight away,
   so the first row is visible above the fold. Calm cards: the product on a quiet tinted panel, name and count below.
   A card opens the product page of that group (group.html#<id>). No prices (decision 21). */
(function () {
  var B = window.Blits, VB = window.VB, h = React.createElement;
  var FAMILIES = VB.FAMILIES;
  var ORDER = ['football-goals', 'trampolines', 'basketball-poles', 'rebounders', 'target-walls', 'trampoline-parts'];

  function Intro() {
    return h('section', { className: 'vb-pickintro', 'aria-labelledby': 'pick-h' },
      h('div', { className: 'wrap wrap--wide vb-pickintro__in' },
        h('div', null,
          h(B.IndexLabel, { index: '001', label: 'Assortment' }),
          h('h1', { id: 'pick-h', className: 'blits-heading display-l vb-pickintro__title' }, 'Pick your ', h(B.Keyword, null, 'game.'))),
        h('p', { className: 'body vb-pickintro__text' }, 'Six groups, one brand. Choose a group to see every product in it. No prices here: find a store near you to see them.')));
  }

  function Card(props) {
    var f = props.family;
    return h('a', { className: 'vb-groupcard', href: VB.GROUP + f.id },
      h('span', { className: 'vb-groupcard__media', 'aria-hidden': 'true' },
        h('img', { className: VB.cx(f.models[0].tall && 'is-tall'), src: f.hero, alt: '', loading: props.n < 4 ? 'eager' : 'lazy' }),
        h('span', { className: 'blits-temp' }, 'Temporary photo')),
      h('span', { className: 'vb-groupcard__foot' },
        h('span', { className: 'vb-groupcard__text' },
          h('span', { className: 'eyebrow vb-groupcard__count' }, '0' + props.n + ' · ' + f.count + ' products'),
          h('span', { className: 'blits-heading display-s vb-groupcard__title' }, f.title),
          h('span', { className: 'body vb-groupcard__short' }, f.short)),
        h('span', { className: 'blits-sqbtn vb-groupcard__go', 'aria-hidden': 'true' },
          h('svg', { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2.5, strokeLinecap: 'square' }, h('path', { d: 'M7 17L17 7M9 7H17V15' })))));
  }

  function Groups() {
    var list = ORDER.map(function (id) { return FAMILIES.filter(function (f) { return f.id === id; })[0]; });
    return h('section', { className: 'vb-groups', id: 'groups', 'aria-label': 'Product groups' },
      h('div', { className: 'wrap wrap--wide' },
        h('ul', { className: 'vb-groupgrid' }, list.map(function (f, i) {
          return h('li', { key: f.id }, h(Card, { family: f, n: i + 1 }));
        }))));
  }

  function App() {
    return h(React.Fragment, null, h(VB.Header, { page: 'assortment' }),
      h('main', { id: 'top' }, h(Intro), h(Groups),
        h(VB.NextStep, { index: '002', label: 'Where to buy', title: 'Seen enough? Find one', keyword: 'near you.' },
          h(B.Button, { href: VB.STORE, variant: 'brand' }, 'Find a store'),
          h(B.Button, { href: 'professionals.html', variant: 'secondary' }, 'Stock BLITS'))),
      h(VB.Footer));
  }
  VB.mount(App);
})();
