/* BLITS Brand page (variant B look): why BLITS exists, the three pillars at full length, and how the range grows with a kid.
   Shared header, footer and closing band come from vb-site.js; layout in variant-b.css plus vb-pages.css. */
(function () {
  var B = window.Blits, VB = window.VB, h = React.createElement;
  var BEIGE = 'var(--beachball-volley-beige)';

  /* 001 · Hero: statement left, collage right (friends at the fence, a polaroid of the street at dusk). */
  function Hero() {
    return h('section', { className: 'vb-section vb-hero vb-pagehero', 'aria-labelledby': 'brand-h' },
      h(B.DotGrid, { className: 'vb-hero__dots', frame: true }),
      h('div', { className: 'wrap wrap--wide vb-hero__in' },
        h('div', { className: 'vb-hero__copy' },
          h(B.IndexLabel, { index: '001', label: 'The brand' }),
          h('h1', { id: 'brand-h', className: 'blits-heading display-xl vb-hero__title vb-pagehero__title' }, 'On the side of ', h(B.Keyword, null, 'outside.')),
          h('p', { className: 'body-l vb-hero__intro' }, 'BLITS makes outdoor toys for kids who would rather be out there. Goals, basketball poles, trampolines and rebounders, built for mud, rain and every afternoon until dinner.'),
          h('div', { className: 'vb-actions' },
            h(B.Button, { href: VB.STORE, variant: 'brand' }, 'Find a store'),
            h(B.Button, { href: 'assortment.html', variant: 'secondary' }, 'Explore the range'))),
        h('div', { className: 'vb-collage vb-collage--hero' },
          h('div', { className: 'vb-block vb-block--hero' }),
          h(B.Photo, { className: 'vb-collage__main vb-hero__photo', cut: true, ratio: '4 / 5', eager: true, src: 'assets/campaign/blits-campagne-vrienden-bij-het-hek-v2.jpg', alt: 'Two boys with an arm around each other at a fence, kids playing street football behind them at sunset', position: '34% 50%' },
            h(B.ChalkText, { className: 'vb-hero__chalk', size: 44, rotate: -5 }, 'See you', h('br'), 'outside!')),
          h(B.PolaroidFrame, { className: 'vb-collage__polaroid', rotate: 5, caption: '002 · Street', src: 'assets/campaign/blits-campagne-straat-schemer.jpg', alt: 'Kids chasing a ball on a street court at dusk, the streetlights just on' }))));
  }

  var BELIEFS = [
    ['01', 'Friends you haven’t met yet.'],
    ['02', 'Knees you’ll scrape.'],
    ['03', 'A world only you can find.']
  ];

  /* 002 · Manifesto on asphalt: what BLITS believes, in three short lines. */
  function Manifesto() {
    return h(B.Texture, { as: 'section', material: 'asphalt', shade: 0.6, className: 'vb-section vb-manifesto', style: { '--accent-fill': 'transparent' } },
      h(B.TornEdge, { className: 'vb-torn-in', position: 'top', color: BEIGE, seed: 9 }),
      h('div', { 'data-theme': 'dark', className: 'vb-manifesto__theme' },
        h('div', { className: 'vb-manifesto__doodle', 'aria-hidden': 'true' }, h(B.ChalkDoodle, { name: 'arrows', opacity: 0.5 })),
        h('div', { className: 'wrap vb-manifesto__in' },
          h('div', null,
            h(B.IndexLabel, { index: '002', label: 'What we believe' }),
            h('h2', { className: 'blits-heading display-l' }, 'Kids don’t grow up on a screen. They grow up ', h(B.Keyword, null, 'outside.')),
            h('p', { className: 'body-l vb-lede' }, 'With friends they haven’t met yet, knees they’ll scrape, and a world only they can find on their own. We build outdoor toys that are honest about that: built to be used hard, not admired from a distance. From a first bounce to the last game before the streetlights come on, outside wins.')),
          h('ol', { className: 'vb-beliefs' }, BELIEFS.map(function (b) {
            return h('li', { key: b[0] }, h('span', { className: 'vb-beliefs__num' }, b[0]), h('span', { className: 'blits-heading display-m vb-beliefs__line' }, b[1]));
          })),
          h('p', { className: 'vb-manifesto__chalk' }, h(B.ChalkText, { color: 'secondary', size: 40, rotate: -4 }, 'one more game!')))),
      h(B.TornEdge, { className: 'vb-torn-in', position: 'bottom', color: BEIGE, seed: 17 }));
  }

  /* 003 · The three pillars, one row each, alternating sides. */
  function PillarMedia(props) {
    var p = props.pillar;
    if (p.product) {
      return h('div', { className: 'vb-pillarrow__media vb-pillarrow__media--product' },
        h('div', { className: 'vb-block vb-block--pillar' }),
        h('img', { src: p.product, alt: p.alt, loading: 'lazy' }),
        h('span', { className: 'blits-temp' }, 'Temporary photo'),
        h(B.ChassisPlate, { className: 'vb-pillarrow__plate', title: 'BLITS Arena', rows: [{ label: 'Frame', value: 'Aluminium' }, { label: 'Warranty', value: '5 years' }, { label: 'Sizes', value: '3' }] }));
    }
    return h('div', { className: 'vb-pillarrow__media' },
      h('div', { className: 'vb-strip vb-strip--pillar' }),
      h(B.PolaroidFrame, { rotate: p.rotate, caption: p.caption, src: p.src, alt: p.alt }));
  }

  var PILLARS = [
    { num: '01', title: 'Real time, not screen time', caption: '01 · Home', rotate: -3, src: 'assets/campaign/blits-campagne-thuis-na-het-spelen.jpg', alt: 'A muddy boy in the hallway gives two thumbs up, his foot on a muddy ball, while a dad dries off his little brother',
      text: ['Mud, rain, wind, and a ball that keeps rolling into next door’s garden. The good stuff happens out there.', 'Then you come home with grass on your socks and a story nobody else has. That is the time we build for.'] },
    { num: '02', title: 'Built to be used, not admired', product: 'assets/products/blits-arena-voetbaldoel-300x200-uitsnede.webp', alt: 'BLITS Arena aluminium football goal, 300 x 200 cm',
      text: ['Honest materials and real specs on every product. Made to be used hard, not to look good in a box.', 'We would rather show you the frame than a slogan. If it is on the plate, it is true.'] },
    { num: '03', title: 'Every kid finds their own place', caption: '03 · Last light', rotate: 3, src: 'assets/campaign/blits-campagne-basketbal-van-boven.jpg', alt: 'Seen from above through the hoop: four kids on a street court at dusk, one holding the ball',
      text: ['The kid who practises alone till dinner. The one who brings the whole street. Outside has room for both.', 'A goal in the garden, a hoop on the drive, a trampoline behind the shed: their place, found on their own.'] }
  ];
  function Pillars() {
    return h('section', { className: 'vb-section vb-pillarrows', 'aria-labelledby': 'pillars-h' },
      h('div', { className: 'wrap' },
        h('div', { className: 'vb-head' },
          h('div', null, h(B.IndexLabel, { index: '003', label: 'Three things we stand for' }), h('h2', { id: 'pillars-h', className: 'blits-heading display-l' }, 'What ', h(B.Keyword, null, 'BLITS'), ' stands for'))),
        PILLARS.map(function (p, i) {
          return h('article', { key: p.num, className: VB.cx('vb-pillarrow', i % 2 && 'vb-pillarrow--flip') },
            h(PillarMedia, { pillar: p }),
            h('div', { className: 'vb-pillarrow__text' },
              h('span', { className: 'vb-pillar__num' }, p.num),
              h('h3', { className: 'blits-heading display-m' }, p.title),
              p.text.map(function (t, j) { return h('p', { key: j, className: j ? 'body' : 'body-l' }, t); })));
        })));
  }

  /* 004 · Through every age: three moments, each linked to the part of the range that fits it. Only facts from the range. */
  var STAGES = [
    { num: '01', title: 'First bounce', lines: 'trampoline', text: 'A trampoline in the garden and a first goal of 90 × 60 cm. Small legs, big jumps.', link: 'group.html#trampolines', linkLabel: 'Trampolines' },
    { num: '02', title: 'Every afternoon', lines: 'football', text: 'Street goals from 180 × 120 cm and a rebounder that always sends the ball back.', link: 'group.html#football-goals', linkLabel: 'Football goals' },
    { num: '03', title: 'Last light', lines: 'basketball', text: 'A basketball pole up to 305 cm and an Arena goal of 500 × 200 cm. Room to keep growing.', link: 'group.html#basketball-poles', linkLabel: 'Basketball poles' }
  ];
  function Ages() {
    return h('section', { className: 'vb-section vb-ages', 'aria-labelledby': 'ages-h' },
      h('div', { className: 'wrap' },
        h('div', { className: 'vb-head' },
          h('div', null, h(B.IndexLabel, { index: '004', label: 'Through every age' }), h('h2', { id: 'ages-h', className: 'blits-heading display-l' }, 'From first bounce to ', h(B.Keyword, null, 'last light.'))),
          h(B.Button, { href: 'assortment.html', variant: 'secondary' }, 'See the full range')),
        h('ol', { className: 'vb-ages__list' }, STAGES.map(function (s) {
          return h('li', { key: s.num, className: 'vb-age' },
            h('div', { className: 'vb-age__field', 'aria-hidden': 'true' }, h(B.FieldLines, { type: s.lines, opacity: 0.35 })),
            h(B.IndexLabel, { index: 'No. ' + s.num }),
            h('h3', { className: 'blits-heading display-s' }, s.title),
            h('p', { className: 'body' }, s.text),
            h('div', { className: 'vb-card__foot' },
              h('p', { className: 'eyebrow' }, s.linkLabel),
              h(B.SquareArrowButton, { href: s.link, label: 'See ' + s.linkLabel.toLowerCase() })));
        }))));
  }

  function App() {
    return h(React.Fragment, null, h(VB.Header, { page: 'brand' }),
      h('main', { id: 'top' }, h(Hero), h(Manifesto), h(Pillars), h(Ages),
        h(VB.NextStep, { index: '005', label: 'See it for real', title: 'Go on, get', keyword: 'outside.' },
          h(B.Button, { href: VB.STORE, variant: 'brand' }, 'Find a store'),
          h(B.Button, { href: 'professionals.html', variant: 'secondary' }, 'For retailers'))),
      h(VB.Footer));
  }
  VB.mount(App);
})();
