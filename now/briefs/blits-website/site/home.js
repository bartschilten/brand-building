/* BLITS Home (proef v4). Built only from window.Blits components plus layout in home.css. */
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

  var NAV = [['Brand', '#brand'], ['Assortment', '#assortment'], ['For retailers', '#retailers']];

  function closeMenu(e) { var d = e.currentTarget.closest('details'); if (d) d.open = false; }

  function Header() {
    var links = NAV.map(function (n) { return h('a', { key: n[1], href: n[1] }, n[0]); });
    var menuLinks = NAV.concat([['Find a store', '#store']]).map(function (n) { return h('a', { key: n[1], href: n[1], onClick: closeMenu }, n[0]); });
    return h('header', { className: 'site-header', 'data-theme': 'dark' },
      h('div', { className: 'wrap site-header__in' },
        h('a', { className: 'site-header__logo', href: '#top', 'aria-label': 'BLITS home' }, h('img', { src: B.assets.logos['liggend-white'], alt: 'BLITS' })),
        h('nav', { className: 'site-nav', 'aria-label': 'Main' }, links),
        h(B.Button, { href: '#store' }, 'Find a store'),
        h('details', { className: 'site-menu' }, h('summary', null, h('span', { className: 'site-menu__open' }, 'Menu'), h('span', { className: 'site-menu__close' }, 'Close')), h('nav', { 'aria-label': 'Main' }, menuLinks))));
  }

  function Hero() {
    return h(B.CampaignHero, {
      label: 'Outside Wins.',
      eyebrow: 'Outdoor toys for kids',
      title: [h('span', { key: 'a', className: 'blits-accent' }, 'Outside'), ' wins.'],
      intro: 'Goals, basketball poles, trampolines and rebounders that get kids outside, together. Through every age and every fall.',
      brief: 'Kids in full motion on a street pitch at golden hour: a ball mid-air, dust kicking up, shot from ground level so the kids stand tall against the sky. Mesh fence, worn asphalt, saturated yellow, blue and green. Film grain, a little motion blur, nobody posing.'
    },
      h(B.Button, { href: '#store' }, 'Find a store'),
      h(B.Button, { href: '#assortment', variant: 'secondary' }, 'Explore the range'));
  }

  var PILLARS = [
    ['01', 'Real time, not screen time', 'Mud, rain, wind, and a ball that keeps rolling into next door’s garden. The good stuff happens out there.'],
    ['02', 'Built to be used, not admired', 'Honest materials, real specs on every product. Made to be used hard, not to look good in a box.'],
    ['03', 'Every kid finds their own place', 'The kid who practises alone till dinner. The one who brings the whole street. Outside has room for both.']
  ];

  function Story() {
    return h('section', { className: 'section', id: 'brand', 'aria-labelledby': 'story-h' },
      h('div', { className: 'wrap' },
        h('div', { className: 'story' },
          h('div', null,
            h('p', { className: 'eyebrow eyebrow-row' }, 'Why BLITS exists'),
            h(B.Heading, { id: 'story-h', size: 'l' }, 'Kids grow up outside.'),
            h('p', { className: 'body-l story__lede' },
              'Kids don’t grow up on a screen. They grow up ', h('b', null, 'outside'), ', with friends they haven’t met yet, knees they’ll scrape, and a world only they can find on their own. We build outdoor toys that are honest about that: ', h('b', null, 'built to be used'), ', not admired from a distance.')),
          h('figure', { className: 'story__media' },
            h(B.Photo, { cut: true, ratio: '4 / 5', brief: 'Two or three kids just off the pitch, covered in mud, arms around each other, laughing. Low angle, soft overcast light, dirt on knees and shirts. Real, not posed.' }),
            h('figcaption', { className: 'display-m story__caption' }, 'Dirty knees are medals.'))),
        h(B.ChalkDivider, { className: 'story__divider' }),
        h('ol', { className: 'pillars' }, PILLARS.map(function (p) {
          return h('li', { key: p[0], className: 'pillar' },
            h(B.Marker, null, p[0]),
            h('h3', { className: 'blits-heading display-s' }, p[1]),
            h('p', { className: 'body' }, p[2]));
        }))));
  }

  var FACTS = [
    { value: '0', label: 'Screens included' },
    { value: '0', label: 'Batteries needed' },
    { value: '1', label: 'Ball to get started' },
    { value: '2', label: 'Knees, ready to get dirty' }
  ];

  function Facts() {
    return h('section', { className: 'section', 'data-theme': 'dark', 'aria-labelledby': 'facts-h' },
      h('div', { className: 'wrap' },
        h('div', { className: 'facts-head' },
          h(B.StampedShield, { size: 112 }),
          h('div', null, h('p', { className: 'eyebrow eyebrow-row' }, 'Counted the old way'), h(B.Heading, { id: 'facts-h', size: 'l' }, 'Outside, counted.'))),
        h('ul', { className: 'facts' }, FACTS.map(function (f) { return h('li', { key: f.label }, h(B.FlipDigits, Object.assign({ size: 'lg' }, f))); }))));
  }

  var FAMILIES = [
    { title: 'Football goals', count: '13 models', img: 'assets/products/blits-voetbaldoel-street-300x200.jpg', alt: 'BLITS Street football goal, 300 x 200 cm', text: 'From a first 90 × 60 cm goal to a full 500 × 200 cm.' },
    { title: 'Basketball poles', count: '3 models', img: 'assets/products/blits-basketbalpaal-210-260.png', alt: 'BLITS basketball pole, adjustable 210 to 260 cm', text: 'Adjustable from 135 to 305 cm. The hoop grows with the player.' },
    { title: 'Trampolines', count: '10 models', img: 'assets/products/blits-trampoline-inground-305.jpg', alt: 'BLITS Urban Sports inground trampoline', text: 'Above ground or inground, round or rectangular, up to Ø 427 cm. Room for one more.' },
    { title: 'Rebounders', count: '3 models', img: 'assets/products/blits-rebounder-100x100.jpg', alt: 'BLITS adjustable rebounder, 100 x 100 cm', text: 'The ball always comes back. Adjustable, from 100 to 164 cm.' }
  ];

  function Range() {
    return h('section', { className: 'section section--warm', id: 'assortment', 'aria-labelledby': 'range-h' },
      h('div', { className: 'wrap' },
        h('div', { className: 'section-head' },
          h('div', null, h('p', { className: 'eyebrow eyebrow-row' }, 'The range'), h(B.Heading, { id: 'range-h', size: 'l' }, 'Four ways out.')),
          h(B.Button, { href: '#assortment', variant: 'secondary' }, 'See the full range')),
        h('div', { className: 'range' }, FAMILIES.map(function (f, i) {
          return h(B.PlaqueCard, {
            key: f.title, tone: 'grey', piping: 'underline', land: true, delay: i * 60, title: f.title,
            media: h('img', { src: f.img, alt: f.alt, loading: 'lazy' })
          },
            h('p', { className: 'body' }, f.text),
            h('p', { className: 'eyebrow range__count' }, f.count));
        }))));
  }

  function Film() {
    return h(B.Streetlight, { label: 'Until the streetlights come on' },
      h('div', { className: 'section' }, h('div', { className: 'wrap film' },
        h('div', { className: 'film-head' }, h('p', { className: 'eyebrow eyebrow-row' }, 'After school, before dinner'), h('h2', { id: 'film-h', className: 'blits-heading display-l' }, 'Until the ', h('span', { className: 'blits-accent' }, 'streetlights'), ' come on.')),
        h(B.FilmStrip, {
          frames: [
            { label: 'Street', placeholder: '[CAMPAIGN PHOTO 01 · street football at dusk]' },
            { label: 'Puddle', placeholder: '[CAMPAIGN PHOTO 02 · rain boots in a puddle]' },
            { label: 'Last light', placeholder: '[CAMPAIGN PHOTO 03 · basketball under the streetlight]' }
          ],
          caption: 'Show us yours: #OutsideWins'
        }))));
  }

  function Spotlight() {
    return h('section', { className: 'section', 'aria-labelledby': 'spot-h' },
      h('div', { className: 'wrap spotlight' },
        h('div', { className: 'spotlight__media' },
          h('img', { src: 'assets/products/blits-arena-voetbaldoel-300x200.jpg', alt: 'BLITS Arena aluminium football goal, 300 x 200 cm', loading: 'lazy' })),
        h('div', { className: 'spotlight__copy' },
          h('p', { className: 'eyebrow eyebrow-row' }, 'Start here'),
          h(B.Heading, { id: 'spot-h', size: 'l' }, 'The Arena goal'),
          h('p', { className: 'body-l spotlight__intro' }, 'An aluminium goal in three sizes, from a first goal in the garden to a full 500 × 200 cm.'),
          h(B.SpecPlate, { title: 'BLITS Arena', rows: [
            { label: 'Frame', value: 'Aluminium' },
            { label: 'Sizes', value: '180 × 120 cm\n300 × 200 cm\n500 × 200 cm' },
            { label: 'Also in', value: 'Ultimate Training Pack (300 × 200, 500 × 200)' },
            { label: 'Norm', value: '[NORM]' },
            { label: 'Warranty', value: '[X YEARS]' }
          ] }),
          h('div', { className: 'spotlight__actions' },
            h(B.Button, { href: '#store' }, 'Where to buy the Arena'),
            h('a', { className: 'text-link', href: '#assortment' }, 'All football goals →')))));
  }

  function Store() {
    var st = React.useState(false), searched = st[0], setSearched = st[1];
    return h('section', { className: 'section section--warm', id: 'store', 'aria-labelledby': 'store-h' },
      h('div', { className: 'wrap dealer' },
        h('div', null,
          h('p', { className: 'eyebrow eyebrow-row' }, 'Where to buy'),
          h(B.Heading, { id: 'store-h', size: 'l' }, 'Find BLITS near you'),
          h('p', { className: 'body-l dealer__lede' }, 'See BLITS for real, at a shop near you. Try the bounce, feel the frame.')),
        h('div', null,
          h('form', { className: 'dealer__form', role: 'search', onSubmit: function (e) { e.preventDefault(); setSearched(true); } },
            h(B.Field, { label: 'Postcode or city', placeholder: 'e.g. 3011 AB', autoComplete: 'postal-code' }, h(B.Button, { type: 'submit' }, 'Show stores'))),
          h('p', { className: 'body dealer__result', 'aria-live': 'polite' }, searched ? ['The store finder is coming soon ', h('span', { key: 'p', className: 'ph' }, '[STORE FINDER]'), '.'] : null),
          h('p', { className: 'body dealer__online' }, 'Rather order online? ', h('span', { className: 'ph' }, '[ONLINE RETAILERS]')),
          h('p', { className: 'body dealer__pro' }, 'Run a shop or webshop? ', h('a', { className: 'text-link', href: '#retailers' }, 'Stock BLITS →')))));
  }

  function Footer() {
    return h('footer', { className: 'site-footer', 'data-theme': 'dark' },
      h('div', { className: 'wrap' },
        h('div', { className: 'site-footer__top' },
          h('img', { src: B.assets.logos['liggend-white'], alt: 'BLITS' }),
          h('nav', { 'aria-label': 'Footer' }, NAV.map(function (n) { return h('a', { key: n[1], href: n[1] }, n[0]); }))),
        h('div', { className: 'site-footer__retail', id: 'retailers' },
          h('p', { className: 'eyebrow' }, 'For retailers'),
          h('p', { className: 'body' }, 'Stock BLITS in your shop or webshop. ', h('span', { className: 'ph' }, '[BLITS FOR PROFESSIONALS PAGE]'))),
        h(B.Divider, null),
        h('div', { className: 'site-footer__bottom' },
          h('p', { className: 'display-s' }, 'Outside Wins.'),
          h('div', { className: 'site-footer__meta' },
            h('p', { className: 'lang', 'aria-label': 'Language' }, h('b', null, 'EN'), ' / ', h('span', { 'aria-disabled': 'true', title: 'Dutch version follows' }, 'NL')),
            h('p', { className: 'body' }, 'Contact ', h('span', { className: 'ph' }, '[CONTACT E-MAIL]'))))));
  }

  function App() {
    return h(React.Fragment, null, h(Header), h('main', { id: 'top' }, h(Hero), h(Story), h(Facts), h(Range), h(Film), h(Spotlight), h(Store)), h(Footer));
  }

  ReactDOM.createRoot(document.getElementById('root')).render(h(App));
})();
