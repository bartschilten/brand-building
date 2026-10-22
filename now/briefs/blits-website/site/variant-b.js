/* BLITS Home, variant B (2026-10-22): warm beige base, Night Pitch Green for type and heavy fields, Soccer Green as the one primary colour, Tour de Yellow as the chalk accent.
   Built from window.Blits components plus layout in variant-b.css. The original Home (index.html, home.js) stays untouched. */
(function () {
  var B = window.Blits, h = React.createElement;
  var T = 'assets/textures/blits-textuur-';
  var L = 'assets/logos/blits-schild-';
  B.configureAssets({
    textures: { concrete: T + 'beton.jpg', asphalt: T + 'asfalt.jpg', sand: T + 'zand.jpg', grass: T + 'gras.jpg', puddle: T + 'regenplas.jpg', tartan: T + 'tartan.jpg', mud: T + 'modder.jpg' },
    logos: {
      'staand-night-pitch-green': L + 'staand-night-pitch-green.png', 'staand-white': L + 'staand-white.png', 'staand-soccer-green': L + 'staand-soccer-green.png',
      'liggend-night-pitch-green': L + 'liggend-night-pitch-green.png', 'liggend-white': L + 'liggend-white.png', 'liggend-soccer-green': L + 'liggend-soccer-green.png'
    }
  });
  var BEIGE = 'var(--beachball-volley-beige)';

  var NAV = [['Brand', '#brand'], ['Assortment', '#assortment'], ['For retailers', '#retailers']];
  function closeMenu(e) { var d = e.currentTarget.closest('details'); if (d) d.open = false; }

  function Header() {
    var links = NAV.map(function (n) { return h('a', { key: n[1], href: n[1] }, n[0]); });
    var menuLinks = NAV.concat([['Find a store', '#store']]).map(function (n) { return h('a', { key: n[1], href: n[1], onClick: closeMenu }, n[0]); });
    return h('header', { className: 'vb-header' },
      h('div', { className: 'wrap vb-header__in' },
        h('a', { className: 'vb-header__logo', href: '#top', 'aria-label': 'BLITS home' }, h('img', { src: B.assets.logos['liggend-night-pitch-green'], alt: 'BLITS' })),
        h('nav', { className: 'vb-nav', 'aria-label': 'Main' }, links),
        h(B.Button, { href: '#store', variant: 'brand' }, 'Find a store'),
        h('details', { className: 'vb-menu' }, h('summary', null, h('span', { className: 'vb-menu__open' }, 'Menu'), h('span', { className: 'vb-menu__close' }, 'Close')), h('nav', { 'aria-label': 'Main' }, menuLinks))));
  }

  /* 001 · Hero: headline left, collage right (campaign photo breaking out of a green block, a polaroid, a floating backboard, a chalk note). */
  function Hero() {
    return h('section', { className: 'vb-section vb-hero', 'aria-labelledby': 'hero-h' },
      h(B.DotGrid, { className: 'vb-hero__dots', frame: true }),
      h('div', { className: 'wrap vb-hero__in' },
        h('div', { className: 'vb-hero__copy' },
          h(B.IndexLabel, { index: '001', label: 'Outdoor toys for kids' }),
          h('h1', { id: 'hero-h', className: 'blits-heading display-xl vb-hero__title' }, h(B.Keyword, null, 'Outside'), h('br'), 'wins.'),
          h('p', { className: 'body-l vb-hero__intro' }, 'Goals, basketball poles, trampolines and rebounders that get kids outside, together. Through every age and every fall.'),
          h('div', { className: 'vb-actions' },
            h(B.Button, { href: '#store', variant: 'brand' }, 'Find a store'),
            h(B.Button, { href: '#assortment', variant: 'secondary' }, 'Explore the range'))),
        h('div', { className: 'vb-collage vb-collage--hero', 'aria-hidden': 'false' },
          h('div', { className: 'vb-block vb-block--hero' }),
          h(B.Photo, { className: 'vb-collage__main vb-hero__photo', cut: true, ratio: '4 / 5', eager: true, src: 'assets/campaign/blits-campagne-straatvoetbal-modder.jpg', alt: 'Kids playing street football in the rain, one sliding through a muddy puddle, laughing, the ball flying towards the camera', position: '50% 62%' },
            h(B.ChalkText, { className: 'vb-hero__chalk', size: 44, rotate: -5 }, 'Dirty knees', h('br'), 'are medals.')),
          h(B.PolaroidFrame, { className: 'vb-collage__polaroid', rotate: 5, caption: '002 · Splash', src: 'assets/campaign/blits-campagne-straatvoetbal-modder-detail.jpg', alt: 'Close-up: a boy sliding through a muddy puddle, laughing' }),
          h(B.FloatingCutout, { className: 'vb-hero__float', src: 'assets/products/blits-basketbalbord-uitsnede.png', alt: '', rotate: 6, temp: true }))));
  }

  var PILLARS = [
    ['01', 'Real time, not screen time', 'Mud, rain, wind, and a ball that keeps rolling into next door’s garden. The good stuff happens out there.'],
    ['02', 'Built to be used, not admired', 'Honest materials, real specs on every product. Made to be used hard, not to look good in a box.'],
    ['03', 'Every kid finds their own place', 'The kid who practises alone till dinner. The one who brings the whole street. Outside has room for both.']
  ];

  /* 002 · Story: photo collage left on a green strip, text right. The beige paper tears open onto the asphalt below. */
  function Story() {
    return h('section', { className: 'vb-section vb-story', id: 'brand', 'aria-labelledby': 'story-h' },
      h('div', { className: 'wrap vb-story__in' },
        h('div', { className: 'vb-collage vb-collage--story' },
          h('div', { className: 'vb-strip' }),
          h(B.Photo, { className: 'vb-collage__main vb-story__photo', cut: true, ratio: '4 / 5', src: 'assets/campaign/blits-campagne-vrienden-bij-het-hek.jpg', alt: 'Two boys with an arm around each other at a fence, kids playing street football behind them at sunset', position: '50% 55%' },
            h(B.ChalkText, { className: 'vb-story__chalk', size: 46, rotate: -6 }, 'Back before dark!')),
          h(B.PolaroidFrame, { className: 'vb-collage__polaroid', rotate: 6, caption: '003 · Friends', src: 'assets/campaign/blits-campagne-vrienden-bij-het-hek-detail.jpg', alt: 'Close-up: an arm around a friend at the fence' })),
        h('div', { className: 'vb-story__text' },
          h(B.IndexLabel, { index: '002', label: 'Why we exist' }),
          h('h2', { id: 'story-h', className: 'blits-heading display-l' }, 'Kids grow up ', h(B.Keyword, null, 'outside.')),
          h('p', { className: 'body-l vb-lede' },
            'Kids don’t grow up on a screen. They grow up ', h('b', null, 'outside'), ', with friends they haven’t met yet, knees they’ll scrape, and a world only they can find on their own. We build outdoor toys that are honest about that: ', h('b', null, 'built to be used'), ', not admired from a distance.'),
          h(B.Divider, null),
          h('ol', { className: 'vb-pillars' }, PILLARS.map(function (p) {
            return h('li', { key: p[0], className: 'vb-pillar' },
              h('span', { className: 'vb-pillar__num' }, p[0]),
              h('div', null, h('h3', { className: 'blits-heading display-s' }, p[1]), h('p', { className: 'body' }, p[2])));
          })))),
      h(B.TornEdge, { position: 'bottom', color: BEIGE, seed: 21 }));
  }

  var FACTS = [
    { value: '0', label: 'Screens included', note: 'no charger!' },
    { value: '0', label: 'Batteries needed', note: null },
    { value: '1', label: 'Ball to get started', note: 'any ball will do' },
    { value: '2', label: 'Knees, ready to get dirty', note: null }
  ];

  /* 003 · Facts on asphalt: the place chalk belongs. */
  function Facts() {
    return h(B.Texture, { as: 'section', material: 'asphalt', shade: 0.55, className: 'vb-section vb-facts', style: { '--accent-fill': 'transparent' } },
      h('div', { 'data-theme': 'dark', className: 'vb-facts__theme' },
        h('div', { className: 'vb-facts__doodle', 'aria-hidden': 'true' }, h(B.ChalkDoodle, { name: 'hopscotch', opacity: 0.55 })),
        h('div', { className: 'wrap' },
          h(B.IndexLabel, { index: '003', label: 'Counted the old way' }),
          h('h2', { className: 'blits-heading display-l vb-facts__title' }, 'Outside, ', h(B.Keyword, null, 'counted.')),
          h('ul', { className: 'vb-facts__list' }, FACTS.map(function (f) {
            return h('li', { key: f.label },
              h(B.FlipDigits, { value: f.value, label: f.label, size: 'lg' }),
              f.note ? h(B.ChalkText, { className: 'vb-facts__note', color: 'secondary', size: 30, rotate: -7 }, f.note) : null);
          })))));
  }

  var FAMILIES = [
    { title: 'Football goals', count: '13 models', img: 'assets/products/blits-voetbaldoel-street-300x200-uitsnede.webp', alt: 'BLITS Street football goal, 300 x 200 cm', text: 'From a first 90 × 60 cm goal to a full 500 × 200 cm.' },
    { title: 'Basketball poles', count: '3 models', img: 'assets/products/blits-basketbalpaal-210-260.png', alt: 'BLITS basketball pole, adjustable 210 to 260 cm', text: 'Adjustable from 135 to 305 cm. The hoop grows with the player.', tall: true },
    { title: 'Trampolines', count: '10 models', img: 'assets/products/blits-trampoline-inground-305-uitsnede.webp', alt: 'BLITS Urban Sports inground trampoline', text: 'Above ground or inground, round or rectangular, up to Ø 427 cm. Room for one more.' },
    { title: 'Rebounders', count: '3 models', img: 'assets/products/blits-rebounder-100x100-uitsnede.webp', alt: 'BLITS adjustable rebounder, 100 x 100 cm', text: 'The ball always comes back. Adjustable, from 100 to 164 cm.' }
  ];

  /* 004 · Range: products break out of green blocks. */
  function Range() {
    return h('section', { className: 'vb-section vb-range', id: 'assortment', 'aria-labelledby': 'range-h' },
      h(B.TornEdge, { position: 'top', color: BEIGE, seed: 5 }),
      h('div', { className: 'wrap' },
        h('div', { className: 'vb-head' },
          h('div', null, h(B.IndexLabel, { index: '004', label: 'The range' }), h('h2', { id: 'range-h', className: 'blits-heading display-l' }, 'Four ways ', h(B.Keyword, null, 'out.'))),
          h(B.Button, { href: '#assortment', variant: 'secondary' }, 'See the full range')),
        h('div', { className: 'vb-range__list' }, FAMILIES.map(function (f, i) {
          return h('article', { key: f.title, className: 'vb-card' },
            h('div', { className: cx('vb-card__media', f.tall && 'vb-card__media--tall') },
              h('div', { className: 'vb-block vb-block--card' }),
              h('img', { src: f.img, alt: f.alt, loading: 'lazy' }),
              h('span', { className: 'blits-temp' }, 'Temporary photo')),
            h(B.IndexLabel, { index: 'No. 0' + (i + 1) }),
            h('h3', { className: 'blits-heading display-s vb-card__title' }, f.title),
            h('p', { className: 'body vb-card__text' }, f.text),
            h('div', { className: 'vb-card__foot' },
              h('p', { className: 'eyebrow' }, f.count),
              h(B.SquareArrowButton, { href: '#assortment', label: 'See all ' + f.title.toLowerCase() })));
        }))));
  }
  function cx() { return Array.prototype.filter.call(arguments, Boolean).join(' '); }

  /* 005 · The streetlight lights a wall of polaroids, chalk notes on the brick. */
  function Film() {
    return h(B.Streetlight, { label: 'Until the streetlights come on' },
      h('div', { className: 'vb-section vb-film' }, h('div', { className: 'wrap' },
        h('div', { className: 'vb-film__head' },
          h(B.IndexLabel, { index: '005', label: 'After school, before dinner' }),
          h('h2', { className: 'blits-heading display-l' }, 'Until the ', h(B.Keyword, null, 'streetlights'), ' come on.')),
        h('div', { className: 'vb-film__wall' },
          h('div', { className: 'vb-film__item vb-film__item--a' },
            h(B.PolaroidFrame, { rotate: -4, caption: '01 · Street', src: 'assets/campaign/blits-campagne-straat-schemer.jpg', alt: 'Kids chasing a ball on a street court at dusk, the streetlights just on' }),
            h(B.ChalkText, { size: 32, rotate: -3 }, 'till they call us in')),
          h('div', { className: 'vb-film__item vb-film__item--b' },
            h(B.PolaroidFrame, { rotate: 3, caption: '02 · Puddle', brief: 'A kid in rain boots jumping into a big puddle.' }),
            h(B.ChalkText, { size: 32, rotate: 4 }, 'puddle = pool')),
          h('div', { className: 'vb-film__item vb-film__item--c' },
            h(B.PolaroidFrame, { rotate: -2, caption: '03 · Last light', src: 'assets/campaign/blits-campagne-basketbal-van-boven.jpg', alt: 'Seen from above through the hoop: four kids on a street court at dusk, one holding the ball' }),
            h(B.ChalkText, { size: 32, rotate: -5 }, 'one more shot'))),
        h('p', { className: 'vb-film__tag' }, h(B.ChalkText, { color: 'secondary', size: 40, rotate: -3 }, 'Show us yours: #OutsideWins')))));
  }

  /* 006 · Spotlight: the Arena breaks out of a green block, a chalk stamp on a dark plate. */
  function Spotlight() {
    return h('section', { className: 'vb-section vb-spot', 'aria-labelledby': 'spot-h' },
      h('div', { className: 'wrap vb-spot__in' },
        h('div', { className: 'vb-spot__media' },
          h('div', { className: 'vb-block vb-block--spot' }),
          h('img', { src: 'assets/products/blits-arena-voetbaldoel-300x200-uitsnede.webp', alt: 'BLITS Arena aluminium football goal, 300 x 200 cm', loading: 'lazy' }),
          h('span', { className: 'blits-temp' }, 'Temporary photo'),
          h('div', { className: 'vb-stamp' }, h(B.ChalkText, { color: 'secondary', size: 34, rotate: 0 }, '5 years', h('br'), 'warranty'))),
        h('div', { className: 'vb-spot__copy' },
          h(B.DotGrid, { className: 'vb-spot__dots', frame: true }),
          h(B.IndexLabel, { index: '006', label: 'Start here' }),
          h('h2', { id: 'spot-h', className: 'blits-heading display-l' }, 'The Arena ', h(B.Keyword, null, 'goal')),
          h('p', { className: 'body-l vb-lede' }, 'An aluminium goal in three sizes, from a first goal in the garden to a full 500 × 200 cm.'),
          h(B.SpecPlate, { title: 'BLITS Arena', rows: [
            { label: 'Frame', value: 'Aluminium' },
            { label: 'Sizes', value: '180 × 120 cm\n300 × 200 cm\n500 × 200 cm' },
            { label: 'Warranty', value: '5 years' }
          ] }),
          h('div', { className: 'vb-actions' },
            h(B.Button, { href: '#store', variant: 'brand' }, 'Where to buy the Arena'),
            h('span', { className: 'vb-arrowlink' }, h('a', { className: 'text-link', href: '#assortment' }, 'All football goals'), h(B.SquareArrowButton, { href: '#assortment', label: 'All football goals', tone: 'dark' }))))),
      h(B.TornEdge, { position: 'bottom', color: BEIGE, seed: 33 }));
  }

  /* 007 · Store finder on the dark field. */
  function Store() {
    var st = React.useState(false), searched = st[0], setSearched = st[1];
    return h('section', { className: 'vb-section vb-store', id: 'store', 'data-theme': 'dark', 'aria-labelledby': 'store-h' },
      h('div', { className: 'wrap vb-store__in' },
        h('div', null,
          h(B.IndexLabel, { index: '007', label: 'Where to buy' }),
          h('h2', { id: 'store-h', className: 'blits-heading display-l' }, 'Find BLITS ', h(B.Keyword, null, 'near you')),
          h('p', { className: 'body-l vb-lede' }, 'Shops and webshops near you, in one search.'),
          h(B.ChalkText, { className: 'vb-store__chalk', size: 38, rotate: -4 }, 'Try the bounce, feel the frame.')),
        h('div', null,
          h('form', { className: 'vb-store__form', role: 'search', onSubmit: function (e) { e.preventDefault(); setSearched(true); } },
            h(B.Field, { label: 'Postcode or city', placeholder: 'e.g. 3011 AB', autoComplete: 'postal-code' }, h(B.Button, { type: 'submit', variant: 'brand' }, 'Show stores'))),
          h('p', { className: 'body vb-store__result', 'aria-live': 'polite' }, searched ? ['The store finder is coming soon ', h('span', { key: 'p', className: 'ph' }, '[STORE FINDER]'), '.'] : null))));
  }

  function Footer() {
    return h('footer', { className: 'vb-footer', 'data-theme': 'dark' },
      h('div', { className: 'wrap' },
        h('div', { className: 'vb-footer__top' },
          h('img', { src: B.assets.logos['liggend-white'], alt: 'BLITS' }),
          h('nav', { 'aria-label': 'Footer' }, NAV.map(function (n) { return h('a', { key: n[1], href: n[1] }, n[0]); }))),
        h('div', { className: 'vb-footer__retail', id: 'retailers' },
          h(B.IndexLabel, { index: '008', label: 'For retailers' }),
          h('p', { className: 'body' }, 'Stock BLITS in your shop or webshop. ', h('span', { className: 'ph' }, '[BLITS FOR PROFESSIONALS PAGE]'))),
        h(B.Divider, null),
        h('div', { className: 'vb-footer__bottom' },
          h('p', { className: 'display-s' }, 'Outside ', h(B.Keyword, null, 'Wins.')),
          h('div', { className: 'vb-footer__meta' },
            h('p', { className: 'lang', 'aria-label': 'Language' }, h('b', null, 'EN'), ' / ', h('span', { 'aria-disabled': 'true', title: 'Dutch version follows' }, 'NL')),
            h('p', { className: 'body' }, 'Contact ', h('span', { className: 'ph' }, '[CONTACT E-MAIL]'))))));
  }

  function App() {
    return h(React.Fragment, null, h(Header), h('main', { id: 'top' }, h(Hero), h(Story), h(Facts), h(Range), h(Film), h(Spotlight), h(Store)), h(Footer));
  }
  ReactDOM.createRoot(document.getElementById('root')).render(h(App));
})();
