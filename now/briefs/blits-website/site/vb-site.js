/* BLITS site, variant B: shared parts for every page (assets, header, footer, closing band, product data).
   Loaded after bundle.js and before the page script. Pages: variant-b.html (Home), brand.html, assortment.html, professionals.html. */
(function () {
  var B = window.Blits, h = React.createElement;
  var T = 'assets/textures/blits-textuur-';
  var L = 'assets/logos/blits-schild-';
  var P = 'assets/products/';
  B.configureAssets({
    textures: { concrete: T + 'beton.jpg', asphalt: T + 'asfalt.jpg', sand: T + 'zand.jpg', grass: T + 'gras.jpg', puddle: T + 'regenplas.jpg', tartan: T + 'tartan.jpg', mud: T + 'modder.jpg' },
    logos: {
      'staand-night-pitch-green': L + 'staand-night-pitch-green.png', 'staand-white': L + 'staand-white.png', 'staand-soccer-green': L + 'staand-soccer-green.png',
      'liggend-night-pitch-green': L + 'liggend-night-pitch-green.png', 'liggend-white': L + 'liggend-white.png', 'liggend-soccer-green': L + 'liggend-soccer-green.png'
    }
  });

  var HOME = 'variant-b.html';
  var STORE = HOME + '#store';
  var NAV = [['Brand', 'brand.html', 'brand'], ['Assortment', 'assortment.html', 'assortment'], ['For retailers', 'professionals.html', 'professionals']];
  function cx() { return Array.prototype.filter.call(arguments, Boolean).join(' '); }
  function closeMenu(e) { var d = e.currentTarget.closest('details'); if (d) d.open = false; }

  function Header(props) {
    function link(n, extra) { return h('a', Object.assign({ key: n[1], href: n[1], 'aria-current': props.page === n[2] ? 'page' : undefined }, extra), n[0]); }
    return h('header', { className: 'vb-header' },
      h('div', { className: 'wrap wrap--wide vb-header__in' },
        h('a', { className: 'vb-header__logo', href: HOME, 'aria-label': 'BLITS home' }, h('img', { src: B.assets.logos['liggend-night-pitch-green'], alt: 'BLITS' })),
        h('nav', { className: 'vb-nav', 'aria-label': 'Main' }, NAV.map(function (n) { return link(n); })),
        h(B.Button, { href: STORE, variant: 'brand' }, 'Find a store'),
        h('details', { className: 'vb-menu' }, h('summary', null, h('span', { className: 'vb-menu__open' }, 'Menu'), h('span', { className: 'vb-menu__close' }, 'Close')),
          h('nav', { 'aria-label': 'Main' }, NAV.concat([['Find a store', STORE, 'store']]).map(function (n) { return link(n, { onClick: closeMenu }); })))));
  }

  function Footer() {
    return h('footer', { className: 'vb-footer', 'data-theme': 'dark' },
      h('div', { className: 'wrap' },
        h('div', { className: 'vb-footer__top' },
          h('a', { href: HOME, 'aria-label': 'BLITS home' }, h('img', { src: B.assets.logos['liggend-white'], alt: 'BLITS' })),
          h('nav', { 'aria-label': 'Footer' }, NAV.concat([['Find a store', STORE]]).map(function (n) { return h('a', { key: n[1], href: n[1] }, n[0]); }))),
        h('div', { className: 'vb-footer__retail', id: 'retailers' },
          h(B.IndexLabel, { label: 'For retailers' }),
          h('p', { className: 'body' }, 'Stock BLITS in your shop or webshop. ', h('a', { className: 'vb-footer__link', href: 'professionals.html#apply' }, 'Become a dealer'))),
        h(B.Divider, null),
        h('div', { className: 'vb-footer__bottom' },
          h('p', { className: 'display-s' }, 'Outside ', h(B.Keyword, null, 'Wins.')),
          h('div', { className: 'vb-footer__meta' },
            h('p', { className: 'lang', 'aria-label': 'Language' }, h('b', null, 'EN'), ' / ', h('span', { 'aria-disabled': 'true', title: 'Dutch version follows' }, 'NL')),
            h('p', { className: 'body' }, 'Contact ', h('span', { className: 'ph' }, '[CONTACT E-MAIL]'))))));
  }

  /* Closing band before the footer: one clear next step per audience. */
  function NextStep(props) {
    return h('section', { className: 'vb-section vb-next', 'aria-labelledby': 'next-h' },
      h(B.DotGrid, { className: 'vb-next__dots', frame: true }),
      h('div', { className: 'wrap vb-next__in' },
        h('div', null,
          h(B.IndexLabel, { index: props.index, label: props.label || 'Next step' }),
          h('h2', { id: 'next-h', className: 'blits-heading display-l' }, props.title, ' ', h(B.Keyword, null, props.keyword))),
        h('div', { className: 'vb-next__actions' }, props.children)));
  }

  /* All 45 live BLITS products, grouped into models (one card per model, sizes as chips). Photos are temporary. */
  var FAMILIES = [
    { id: 'football-goals', title: 'Football goals', lines: 'football', models: [
      { name: 'Arena aluminium goal', feature: true, img: P + 'blits-arena-voetbaldoel-300x200-uitsnede.webp', note: 'Aluminium frame · 5 years warranty', sizes: ['180 × 120 cm', '300 × 200 cm', '500 × 200 cm'] },
      { name: 'Street goal', img: P + 'blits-voetbaldoel-street-300x200-uitsnede.webp', sizes: ['180 × 120 cm', '240 × 160 cm', '300 × 200 cm', '500 × 200 cm'] },
      { name: 'Street goal set', img: P + 'blits-street-voetbaldoelen-set-90x60-uitsnede.webp', note: 'Two goals', sizes: ['90 × 60 cm'] },
      { name: 'Hattrick Pack', img: P + 'blits-hattrick-pack-uitsnede.webp', sizes: ['240 × 160 cm', '300 × 200 cm', '500 × 200 cm'] },
      { name: 'Arena Ultimate Training Pack', img: P + 'blits-arena-ultimate-training-pack-uitsnede.webp', sizes: ['300 × 200 cm', '500 × 200 cm'] }
    ] },
    { id: 'target-walls', title: 'Target walls', lines: 'goal', models: [
      { name: 'Target wall with holes', img: P + 'blits-doelwand-met-gaten-uitsnede.webp', sizes: ['240 × 160 cm', '300 × 200 cm', '500 × 200 cm'] }
    ] },
    { id: 'basketball-poles', title: 'Basketball poles', lines: 'basketball', models: [
      { name: 'Basketball pole', img: P + 'blits-basketbalpaal-210-260.png', tall: true, note: 'Height range per model', sizes: ['135 – 305 cm', '160 – 210 cm', '210 – 260 cm'] }
    ] },
    { id: 'trampolines', title: 'Trampolines', lines: 'trampoline', models: [
      { name: 'Urban Sports inground trampoline', img: P + 'blits-trampoline-inground-305-uitsnede.webp', note: 'Inground · black', sizes: ['Ø 244 cm', 'Ø 305 cm', 'Ø 427 cm', '305 × 214 cm', '366 × 244 cm'] },
      { name: 'Urban trampoline', img: P + 'blits-urban-trampoline-uitsnede.webp', note: 'Above ground · black', sizes: ['Ø 244 cm', 'Ø 305 cm', 'Ø 427 cm', '305 × 214 cm', '366 × 244 cm'] }
    ] },
    { id: 'rebounders', title: 'Rebounders', lines: 'goal', models: [
      { name: 'Adjustable rebounder', img: P + 'blits-rebounder-100x100-uitsnede.webp', sizes: ['100 × 100 cm', '124 × 124 cm', '164 × 164 cm'] }
    ] },
    { id: 'trampoline-parts', title: 'Trampoline parts', lines: 'trampoline', models: [
      { name: 'Trampoline safety pad', img: P + 'blits-trampoline-rand-uitsnede.webp', sizes: ['214 × 153 cm', '305 × 214 cm', '244 × 366 cm', 'Ø 330 cm', 'Ø 366 cm', 'Ø 427 cm', 'Ø 430 cm'] },
      { name: 'Premium safety pad', img: P + 'blits-trampoline-rand-uitsnede.webp', sizes: ['Ø 244 cm', 'Ø 305 cm'] },
      { name: 'Premium springs, 10 pieces', img: P + 'blits-trampoline-veren-premium-uitsnede.webp', sizes: ['140 mm', '165 mm', '190 mm', '215 mm'] }
    ] }
  ];
  FAMILIES.forEach(function (f) { f.count = f.models.reduce(function (n, m) { return n + m.sizes.length; }, 0); });

  function mount(App) { ReactDOM.createRoot(document.getElementById('root')).render(h(App)); }

  window.VB = { HOME: HOME, STORE: STORE, NAV: NAV, cx: cx, Header: Header, Footer: Footer, NextStep: NextStep, FAMILIES: FAMILIES, mount: mount };
})();
