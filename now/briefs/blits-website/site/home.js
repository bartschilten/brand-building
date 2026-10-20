/* BLITS Home (proef). Built only from window.Blits components plus layout in home.css. */
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
        h(B.Button, { href: '#professionals' }, 'Become a dealer'),
        h('details', { className: 'site-menu' }, h('summary', null, 'Menu'), h('nav', { 'aria-label': 'Main' }, links.concat(h('a', { key: 'dealer', href: '#professionals' }, 'Become a dealer'))))));
  }

  function Hero() {
    return h(B.LanternHero, {
      label: 'Outside Wins.',
      eyebrow: 'Outdoor toys, built to be used',
      title: ['Outside', h('br', { key: 'br' }), h('span', { key: 'a', className: 'blits-accent blits-accent--green' }, 'wins.')],
      intro: 'Goals, basketball poles, trampolines and rebounders for kids who grow up outside. Built to be used hard, not admired from a distance.'
    },
      h(B.Button, { href: '#professionals' }, 'Become a dealer'),
      h(B.Button, { href: '#assortment', variant: 'secondary' }, 'See the range'));
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
          h(B.Texture, { material: 'asphalt', className: 'story__panel', shade: 0.35 },
            h('p', { className: 'eyebrow' }, 'Chalk on the street'),
            h(B.ChalkDoodle, { name: 'hopscotch' }),
            h('p', { className: 'display-s', style: { margin: 0, color: 'var(--concrete-grey)' } }, 'Dirty knees are medals.')))));
  }

  var FAMILIES = [
    { title: 'Football goals', count: '13 models', field: 'football', icon: 'goal', img: 'assets/products/blits-voetbaldoel-street-300x200.jpg', alt: 'BLITS Street football goal, 300 x 200 cm', text: 'From 90 x 60 cm to a full 500 x 200 cm, in steel or aluminium.' },
    { title: 'Basketball poles', count: '3 models', field: 'basketball', icon: 'hoop', img: 'assets/products/blits-basketbalpaal-210-260.png', alt: 'BLITS basketball pole, adjustable 210 to 260 cm', text: 'Height-adjustable poles that grow with the player, from 135 to 305 cm.' },
    { title: 'Trampolines', count: '10 models', field: 'trampoline', icon: 'trampoline', img: 'assets/products/blits-trampoline-inground-305.jpg', alt: 'BLITS Urban Sports inground trampoline', text: 'Urban and inground, round and rectangular, up to Ø 427 cm.' },
    { title: 'Rebounders', count: '3 models', field: 'goal', icon: 'rebounder', img: 'assets/products/blits-rebounder-100x100.jpg', alt: 'BLITS adjustable rebounder, 100 x 100 cm', text: 'Adjustable rebounders from 100 to 164 cm. The ball always comes back.' }
  ];

  function Range() {
    return h('section', { className: 'section section--warm', id: 'assortment', 'aria-labelledby': 'range-h' },
      h('div', { className: 'wrap' },
        h('div', { className: 'section-head' },
          h('div', null, h('p', { className: 'eyebrow eyebrow-row' }, 'Assortment'), h(B.Heading, { id: 'range-h', size: 'l', accent: 'range' }, 'The')),
          h('p', { className: 'body' }, '45 products today, in six families. These four carry the brand.')),
        h('div', { className: 'range' }, FAMILIES.map(function (f) {
          return h(B.PlaqueCard, {
            key: f.title, href: '#assortment', tone: 'grey', piping: 'underline', land: true, title: f.title,
            media: [h('div', { key: 'f', className: 'field-well' }, h(B.FieldLines, { type: f.field, opacity: 0.55 })), h('img', { key: 'i', src: f.img, alt: f.alt, loading: 'lazy' })]
          },
            h('p', { className: 'body' }, f.text),
            h('div', { className: 'range__meta' }, h('p', { className: 'eyebrow' }, f.count), h(B.Icon, { name: f.icon, size: 36 })));
        })),
        h('div', { className: 'range__more' }, h(B.Button, { href: '#assortment', variant: 'secondary' }, 'See the full range'))));
  }

  var FACTS = [
    { value: '45', label: 'Products in the range' },
    { value: '6', label: 'Product families' },
    { value: '500×200', unit: 'cm', label: 'Largest goal' },
    { value: 'Ø427', unit: 'cm', label: 'Largest trampoline' }
  ];

  function Facts() {
    return h('section', { className: 'section', 'data-theme': 'dark', 'aria-labelledby': 'facts-h' },
      h('div', { className: 'wrap' },
        h('div', { className: 'facts-head' },
          h(B.StampedShield, { size: 96 }),
          h('div', null, h('p', { className: 'eyebrow eyebrow-row' }, 'On the plate'), h(B.Heading, { id: 'facts-h', size: 'l', accent: 'facts', accentColor: 'green' }, 'Real'))),
        h('ul', { className: 'facts' }, FACTS.map(function (f) { return h('li', { key: f.label }, h(B.FlipDigits, f)); })),
        h('p', { className: 'facts-note' }, 'Numbers from the current BLITS range. Still to be confirmed: warranty ', h('span', { className: 'ph' }, '[WARRANTY]'), ' and safety norm ', h('span', { className: 'ph' }, '[NORM]'), '.')));
  }

  function Film() {
    return h('section', { className: 'section', 'aria-labelledby': 'film-h' },
      h('div', { className: 'wrap' },
        h('div', { className: 'film-head' }, h('p', { className: 'eyebrow eyebrow-row' }, 'Until the streetlights come on'), h(B.Heading, { id: 'film-h', size: 'l', accent: 'outside' }, 'Out there,')),
        h(B.FilmStrip, {
          frames: [{ label: 'Street' }, { label: 'Puddle' }, { label: 'Last light' }],
          caption: 'Campaign photography follows. These frames are placeholders.'
        })));
  }

  function Professionals() {
    return h('section', { className: 'section section--green', id: 'professionals', 'aria-labelledby': 'pro-h' },
      h('div', { className: 'wrap pro' },
        h('div', null,
          h('p', { className: 'eyebrow eyebrow-row' }, 'For dealers'),
          h(B.Heading, { id: 'pro-h', size: 'l', accent: 'professionals' }, 'BLITS for'),
          h('p', { className: 'body-l', style: { margin: '24px 0 0', maxWidth: '52ch' } }, 'A brand with its own story for your shop floor and your webshop. Strong design, honest products, prices your customers can reach.'),
          h('div', { className: 'pro__actions' },
            h(B.Button, { href: '#professionals' }, 'Apply as a dealer'),
            h(B.Button, { href: '#professionals', variant: 'secondary' }, 'Why BLITS'))),
        h(B.ChassisPlate, {
          title: 'BLITS · dealer plate',
          rows: [
            { label: 'Dealer margin', value: '[MARGIN %]' },
            { label: 'Dealer price', value: '[DEALER PRICE]' },
            { label: 'Range', value: '45 products' },
            { label: 'Minimum order', value: '[MOQ]' }
          ]
        })));
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
    return h(React.Fragment, null, h(Header), h('main', { id: 'top' }, h(Hero), h(Story), h(Range), h(Facts), h(Film), h(Professionals)), h(Footer));
  }

  ReactDOM.createRoot(document.getElementById('root')).render(h(App));
})();
