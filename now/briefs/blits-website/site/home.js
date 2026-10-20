/* BLITS Home (proef v2). Built only from window.Blits components plus layout in home.css. */
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

  var NAV = [['Brand', '#brand'], ['Assortment', '#assortment'], ['BLITS for Professionals', '#professionals']];

  function Header() {
    var links = NAV.map(function (n) { return h('a', { key: n[1], href: n[1] }, n[0]); });
    return h('header', { className: 'site-header' },
      h('div', { className: 'wrap site-header__in' },
        h('a', { className: 'site-header__logo', href: '#top', 'aria-label': 'BLITS home' }, h('img', { src: B.assets.logos['liggend-white'], alt: 'BLITS' })),
        h('nav', { className: 'site-nav', 'aria-label': 'Main' }, links),
        h(B.Button, { href: '#dealer' }, 'Find a dealer'),
        h('details', { className: 'site-menu' }, h('summary', null, 'Menu'), h('nav', { 'aria-label': 'Main' }, links.concat(h('a', { key: 'dealer', href: '#dealer' }, 'Find a dealer'))))));
  }

  function Hero() {
    return h(B.CampaignHero, {
      label: 'Outside Wins.',
      eyebrow: 'Outdoor toys, built to be used',
      title: ['Outside ', h('span', { key: 'a', className: 'blits-accent blits-accent--green' }, 'wins.')],
      intro: 'Goals, basketball poles, trampolines and rebounders for kids who grow up outside.',
      brief: 'Kids in full motion on a street pitch at golden hour: a ball mid-air, dust kicking up, shot from ground level so the kids stand tall against the sky. Mesh fence, worn asphalt, saturated yellow, blue and green. Film grain, a little motion blur, nobody posing.'
    },
      h(B.Button, { href: '#dealer' }, 'Find a dealer'),
      h(B.Button, { href: '#assortment', variant: 'secondary' }, 'Explore the range'));
  }

  var PILLARS = [
    ['01', 'Real time, not screen time', 'Mud, rain, wind, and friends you haven’t met yet. That is where kids grow up.'],
    ['02', 'Built to be used, not admired', 'Honest materials and details you can check. Made to take a beating, not to look good in a box.'],
    ['03', 'Every kid finds their own place', 'Their own strength, their own limits, their own spot outside. Found on their own.']
  ];

  function Story() {
    return h('section', { className: 'section', id: 'brand', 'aria-labelledby': 'story-h' },
      h('div', { className: 'wrap' },
        h('div', { className: 'story' },
          h('div', null,
            h('p', { className: 'eyebrow eyebrow-row' }, 'Why BLITS exists'),
            h(B.Heading, { id: 'story-h', size: 'l', accent: 'outside.' }, 'Kids grow up'),
            h('p', { className: 'body-l', style: { margin: '24px 0 0', maxWidth: '58ch' } },
              'Kids don’t grow up on a screen. They grow up ', h('b', null, 'outside'), ', with friends they haven’t met yet, knees they’ll scrape, and a world only they can find on their own. We build outdoor gear that’s honest about that: ', h('b', null, 'built to be used hard'), ', not admired from a distance.'),
            h(B.ChalkDivider, null),
            h('ol', { className: 'pillars' }, PILLARS.map(function (p) {
              return h('li', { key: p[0], className: 'pillar' },
                h(B.Marker, null, p[0]),
                h('h3', { className: 'blits-heading display-s' }, p[1]),
                h('p', { className: 'body' }, p[2]));
            }))),
          h('div', { className: 'story__media' },
            h(B.Photo, { cut: true, ratio: '4 / 5', brief: 'Two or three kids just off the pitch, covered in mud, arms around each other, laughing. Low angle, soft overcast light, dirt on knees and shirts. Real, not posed.' }),
            h('p', { className: 'display-s story__caption' }, 'Dirty knees are medals.')))));
  }

  var FAMILIES = [
    { title: 'Football goals', count: '13 models', field: 'football', img: 'assets/products/blits-voetbaldoel-street-300x200.jpg', alt: 'BLITS Street football goal, 300 x 200 cm', text: 'From 90 x 60 cm to a full 500 x 200 cm, in steel or aluminium.' },
    { title: 'Basketball poles', count: '3 models', field: 'basketball', img: 'assets/products/blits-basketbalpaal-210-260.png', alt: 'BLITS basketball pole, adjustable 210 to 260 cm', text: 'Height-adjustable poles that grow with the player, from 135 to 305 cm.' },
    { title: 'Trampolines', count: '10 models', field: 'trampoline', img: 'assets/products/blits-trampoline-inground-305.jpg', alt: 'BLITS Urban Sports inground trampoline', text: 'Urban and inground, round and rectangular, up to Ø 427 cm.' },
    { title: 'Rebounders', count: '3 models', field: 'track', img: 'assets/products/blits-rebounder-100x100.jpg', alt: 'BLITS adjustable rebounder, 100 x 100 cm', text: 'Adjustable rebounders from 100 to 164 cm. The ball always comes back.' }
  ];

  function Range() {
    return h('section', { className: 'section section--warm', id: 'assortment', 'aria-labelledby': 'range-h' },
      h('div', { className: 'wrap' },
        h('div', { className: 'section-head' },
          h('div', null, h('p', { className: 'eyebrow eyebrow-row' }, 'Assortment'), h(B.Heading, { id: 'range-h', size: 'l', accent: 'range' }, 'The'))),
        h('div', { className: 'range' }, FAMILIES.map(function (f) {
          return h(B.PlaqueCard, {
            key: f.title, href: '#assortment', tone: 'grey', piping: 'underline', land: true, title: f.title,
            media: [h('div', { key: 'f', className: 'field-floor' }, h(B.FieldLines, { type: f.field, strokeWidth: 2 })), h('img', { key: 'i', src: f.img, alt: f.alt, loading: 'lazy' })]
          },
            h('p', { className: 'body' }, f.text),
            h('p', { className: 'eyebrow range__count' }, f.count));
        })),
        h('div', { className: 'range__more' }, h(B.Button, { href: '#assortment', variant: 'secondary' }, 'See the full range'))));
  }

  function Spotlight() {
    return h('section', { className: 'section', 'aria-labelledby': 'spot-h' },
      h('div', { className: 'wrap spotlight' },
        h('div', { className: 'spotlight__media' },
          h('div', { className: 'field-floor field-floor--tall' }, h(B.FieldLines, { type: 'football', strokeWidth: 2 })),
          h('img', { src: 'assets/products/blits-arena-voetbaldoel-300x200.jpg', alt: 'BLITS Arena aluminium football goal, 300 x 200 cm', loading: 'lazy' })),
        h('div', { className: 'spotlight__copy' },
          h('p', { className: 'eyebrow eyebrow-row' }, 'In the spotlight'),
          h(B.Heading, { id: 'spot-h', size: 'l', accent: 'goal', accentColor: 'green' }, 'The Arena'),
          h('p', { className: 'body-l', style: { margin: '24px 0 32px', maxWidth: '46ch' } }, 'An aluminium goal for the street, the garden and the club. Three sizes, from a first goal to the real thing.'),
          h(B.SpecPlate, { title: 'BLITS Arena', rows: [{ label: 'Frame', value: 'Aluminium' }, { label: 'Sizes', value: '180 × 120 · 300 × 200 · 500 × 200 cm' }, { label: 'Also as', value: 'Ultimate Training Pack' }] }),
          h('div', { className: 'spotlight__actions' },
            h(B.Button, { href: '#dealer' }, 'Find a dealer'),
            h(B.Button, { href: '#assortment', variant: 'secondary' }, 'All football goals')))));
  }

  var FACTS = [
    { value: '0', label: 'Screens included' },
    { value: '0', label: 'Batteries needed' },
    { value: '[000.000]', label: 'Kids playing outside on BLITS' },
    { value: '[000.000]', label: 'Hours outside, not on a screen' }
  ];

  function Facts() {
    return h('section', { className: 'section section--facts', 'data-theme': 'dark', 'aria-labelledby': 'facts-h' },
      h('div', { className: 'wrap' },
        h('div', { className: 'facts-head' },
          h(B.StampedShield, { size: 112 }),
          h('div', null, h('p', { className: 'eyebrow eyebrow-row' }, 'On the plate'), h(B.Heading, { id: 'facts-h', size: 'l', accent: 'facts', accentColor: 'green' }, 'Real'))),
        h('ul', { className: 'facts' }, FACTS.map(function (f) { return h('li', { key: f.label }, h(B.FlipDigits, Object.assign({ size: 'lg' }, f))); }))));
  }

  function Film() {
    return h(B.Streetlight, { label: 'Until the streetlights come on' },
      h('div', { className: 'section' }, h('div', { className: 'wrap film' },
        h('div', { className: 'film-head' }, h('p', { className: 'eyebrow eyebrow-row' }, 'Until the streetlights come on'), h(B.Heading, { id: 'film-h', size: 'l', accent: 'outside' }, 'Out there,')),
        h(B.FilmStrip, {
          frames: [
            { label: 'Street', placeholder: '[CAMPAIGN PHOTO 01 · street football at dusk]' },
            { label: 'Puddle', placeholder: '[CAMPAIGN PHOTO 02 · rain boots in a puddle]' },
            { label: 'Last light', placeholder: '[CAMPAIGN PHOTO 03 · basketball under the streetlight]' }
          ]
        }))));
  }

  function Dealer() {
    return h('section', { className: 'section section--warm', id: 'dealer', 'aria-labelledby': 'dealer-h' },
      h('div', { className: 'wrap dealer' },
        h('div', null,
          h('p', { className: 'eyebrow eyebrow-row' }, 'Where to buy'),
          h(B.Heading, { id: 'dealer-h', size: 'l', accent: 'dealer' }, 'Find a'),
          h('p', { className: 'body-l', style: { margin: '24px 0 0', maxWidth: '44ch' } }, 'See BLITS for real, at a shop near you. Try the bounce, feel the frame.')),
        h('form', { className: 'dealer__form', onSubmit: function (e) { e.preventDefault(); } },
          h('label', { className: 'eyebrow', htmlFor: 'dealer-q' }, 'Postcode or city'),
          h('div', { className: 'dealer__row' },
            h('input', { id: 'dealer-q', className: 'dealer__input', type: 'text', autoComplete: 'postal-code', placeholder: 'e.g. 3011 AB or Rotterdam' }),
            h(B.Button, { type: 'submit' }, 'Search')),
          h('p', { className: 'body dealer__pro', id: 'professionals' }, 'Own a shop? ', h('a', { href: '#professionals' }, 'BLITS for Professionals')))));
  }

  function Footer() {
    return h('footer', { className: 'site-footer', 'data-theme': 'dark' },
      h('div', { className: 'wrap' },
        h('div', { className: 'site-footer__top' },
          h('img', { src: B.assets.logos['liggend-white'], alt: 'BLITS' }),
          h('nav', { 'aria-label': 'Footer' }, NAV.map(function (n) { return h('a', { key: n[1], href: n[1] }, n[0]); }))),
        h(B.Divider, null),
        h('div', { className: 'site-footer__bottom' },
          h('p', { className: 'display-s' }, 'Outside Wins.'),
          h('p', { className: 'body' }, 'Contact ', h('span', { className: 'ph' }, '[CONTACT E-MAIL]')))));
  }

  function App() {
    return h(React.Fragment, null, h(Header), h('main', { id: 'top' }, h(Hero), h(Story), h(Range), h(Spotlight), h(Facts), h(Film), h(Dealer)), h(Footer));
  }

  ReactDOM.createRoot(document.getElementById('root')).render(h(App));
})();
