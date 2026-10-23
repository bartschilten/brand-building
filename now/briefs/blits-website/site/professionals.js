/* BLITS for Professionals (variant B look): the dealer page. The origin story stays mild and only lives here (never on consumer pages).
   No invented figures: margin, delivery time, terms and contact are visible placeholders. The form validates in the browser but does not send yet. */
(function () {
  var B = window.Blits, VB = window.VB, h = React.createElement;
  var BEIGE = 'var(--beachball-volley-beige)';

  /* 001 · Hero: statement left, the product breaking out of a green block right, a campaign polaroid as proof of the brand world. */
  function Hero() {
    return h('section', { className: 'vb-section vb-hero vb-prohero', 'aria-labelledby': 'pro-h' },
      h(B.DotGrid, { className: 'vb-hero__dots', frame: true }),
      h('div', { className: 'wrap wrap--wide vb-hero__in' },
        h('div', { className: 'vb-hero__copy' },
          h(B.IndexLabel, { index: '001', label: 'BLITS for Professionals' }),
          h('h1', { id: 'pro-h', className: 'blits-heading display-xl vb-hero__title vb-pagehero__title' }, 'Stock a brand, not a ', h(B.Keyword, null, 'label.')),
          h('p', { className: 'body-l vb-hero__intro' }, 'BLITS is an outdoor toy brand with its own look, its own story and a full range of goals, basketball poles, trampolines and rebounders. For shops and webshops that want more than another private label.'),
          h('div', { className: 'vb-actions' },
            h(B.Button, { href: '#apply', variant: 'brand' }, 'Become a dealer'),
            h(B.Button, { href: 'assortment.html', variant: 'secondary' }, 'See the range'))),
        h('div', { className: 'vb-collage vb-collage--pro' },
          h('div', { className: 'vb-block vb-block--pro' }),
          h('div', { className: 'vb-prohero__product' },
            h('img', { src: 'assets/products/blits-arena-voetbaldoel-300x200-uitsnede.webp', alt: 'BLITS Arena aluminium football goal, 300 x 200 cm' }),
            h('span', { className: 'blits-temp' }, 'Temporary photo')),
          h(B.PolaroidFrame, { className: 'vb-collage__polaroid', rotate: -5, caption: '002 · Outside', src: 'assets/campaign/blits-campagne-straatvoetbal-modder-detail.jpg', alt: 'A boy sliding through a muddy puddle, laughing' }),
          h('div', { className: 'vb-stamp vb-prohero__stamp' }, h(B.ChalkText, { color: 'secondary', size: 30, rotate: 0 }, 'built to be used')))));
  }

  /* 002 · Why we started: told mildly, without naming other brands. */
  function Origin() {
    return h('section', { className: 'vb-section vb-origin', 'aria-labelledby': 'origin-h' },
      h('div', { className: 'wrap vb-origin__in' },
        h('div', null,
          h(B.IndexLabel, { index: '002', label: 'Why we started' }),
          h('h2', { id: 'origin-h', className: 'blits-heading display-l' }, 'Made by people who ', h(B.Keyword, null, 'sell'), ' outdoor toys.')),
        h('div', null,
          h('p', { className: 'body-l vb-lede vb-origin__lede' }, 'BLITS was started by retailers. We know what it is like when margins keep getting thinner, when boxes are a puzzle to store and ship, and when a brand stops listening to the people who sell it.'),
          h('p', { className: 'body vb-origin__text' }, 'So we built the brand we wanted to stock ourselves: outdoor toys with a real story, honest products with real specs, and terms that work for the shop as well as for the kid in the garden.'))));
  }

  var FIGURES = [
    { value: '[00]', unit: '%', label: 'Dealer margin' },
    { value: '45', label: 'Products in the range' },
    { value: '5', unit: 'yrs', label: 'Warranty on the Arena goal' },
    { value: '[00]', unit: 'days', label: 'Delivery time' }
  ];
  var BENEFITS = [
    { title: 'One clear range', text: 'Football goals, target walls, basketball poles, trampolines, rebounders and parts. Easy to explain, easy to show.' },
    { title: 'Campaign images to use', text: 'Photos and copy for your shop floor and your webshop.', ph: '[MARKETING KIT]' },
    { title: 'Found by shoppers', text: 'Your shop or webshop appears in the BLITS store finder, so people who find us find you.', ph: '[STORE FINDER]' },
    { title: 'People who listen', text: 'A direct contact who knows the products and picks up the phone.', ph: '[ACCOUNT CONTACT]' }
  ];

  /* 003 · What you get, on the dark field: figures as flip digits (placeholders until they are confirmed), then four benefits. */
  function Benefits() {
    return h('section', { className: 'vb-section vb-benefits', 'data-theme': 'dark', 'aria-labelledby': 'benefits-h' },
      h(B.TornEdge, { position: 'top', color: 'var(--night-pitch-green)', seed: 27 }),
      h('div', { className: 'wrap' },
        h(B.IndexLabel, { index: '003', label: 'What you get' }),
        h('h2', { id: 'benefits-h', className: 'blits-heading display-l vb-benefits__title' }, 'What’s in it for ', h(B.Keyword, null, 'you.')),
        h('ul', { className: 'vb-facts__list vb-benefits__figures' }, FIGURES.map(function (f) {
          return h('li', { key: f.label }, h(B.FlipDigits, { value: f.value, unit: f.unit, label: f.label, size: 'lg' }));
        })),
        h(B.Divider, null),
        h('ul', { className: 'vb-benefits__list' }, BENEFITS.map(function (b, i) {
          return h('li', { key: b.title, className: 'vb-benefit' },
            h(B.IndexLabel, { index: '0' + (i + 1) }),
            h('h3', { className: 'blits-heading display-s' }, b.title),
            h('p', { className: 'body' }, b.text, b.ph ? [' ', h('span', { key: 'ph', className: 'ph' }, b.ph)] : null));
        }))));
  }

  /* 004 · The range at a glance: one tile per product group, linked to the assortment. */
  function Range() {
    return h('section', { className: 'vb-section vb-glance', 'aria-labelledby': 'glance-h' },
      h(B.TornEdge, { position: 'top', color: BEIGE, seed: 41 }),
      h('div', { className: 'wrap' },
        h('div', { className: 'vb-head' },
          h('div', null, h(B.IndexLabel, { index: '004', label: 'The range' }), h('h2', { id: 'glance-h', className: 'blits-heading display-l' }, 'Six groups, one ', h(B.Keyword, null, 'brand.'))),
          h(B.Button, { href: 'assortment.html', variant: 'secondary' }, 'See the full range')),
        h('ul', { className: 'vb-glance__list' }, VB.FAMILIES.map(function (f, i) {
          var m = f.models[0];
          return h('li', { key: f.id, className: 'vb-card vb-glance__item' },
            h('div', { className: VB.cx('vb-card__media', m.tall && 'vb-card__media--tall') },
              h('div', { className: 'vb-block vb-block--card' }),
              h('img', { src: m.img, alt: '', loading: 'lazy' }),
              h('span', { className: 'blits-temp' }, 'Temporary photo')),
            h(B.IndexLabel, { index: 'No. 0' + (i + 1) }),
            h('h3', { className: 'blits-heading display-s vb-card__title' }, f.title),
            h('div', { className: 'vb-card__foot' },
              h('p', { className: 'eyebrow' }, f.count + ' products'),
              h(B.SquareArrowButton, { href: 'assortment.html#' + f.id, label: 'See all ' + f.title.toLowerCase() })));
        }))));
  }

  var STEPS = [
    { title: 'Apply', text: 'Tell us about your shop or webshop with the form below.' },
    { title: 'We get in touch', text: ['Within ', h('span', { key: 'ph', className: 'ph' }, '[X] working days'), ', with the dealer price list and our terms.'] },
    { title: 'Stock BLITS', text: 'Order, put it on the shelf or online, and appear in the store finder.' }
  ];
  function Steps() {
    return h('section', { className: 'vb-section vb-steps', 'aria-labelledby': 'steps-h' },
      h('div', { className: 'wrap' },
        h(B.IndexLabel, { index: '005', label: 'How it works' }),
        h('h2', { id: 'steps-h', className: 'blits-heading display-l vb-steps__title' }, 'Three steps to ', h(B.Keyword, null, 'stock.')),
        h('ol', { className: 'vb-steps__list' }, STEPS.map(function (s, i) {
          return h('li', { key: s.title, className: 'vb-step' },
            h('span', { className: 'vb-step__num', 'aria-hidden': 'true' }, '0' + (i + 1)),
            h('h3', { className: 'blits-heading display-s' }, s.title),
            h('p', { className: 'body' }, s.text));
        })),
        h(B.ChalkDivider, null)));
  }

  /* 006 · Dealer application. Flat field plates from the design system; select, choice chips and message use the same plate styling.
     Validation is lenient on purpose (long names, unusual e-mail addresses, any country). */
  var COUNTRIES = ['Netherlands', 'Belgium', 'Germany', 'Luxembourg', 'France', 'Other'];
  var TYPES = ['Shop', 'Webshop', 'Both'];
  function Plate(props) {
    return h('div', { className: VB.cx('blits-fieldplate vb-form__field', props.wide && 'vb-form__field--wide', props.error && 'is-error') },
      h('div', { className: 'blits-fieldplate__wrap' }, h('div', { className: 'blits-fieldplate__plate' },
        h('label', { className: 'eyebrow blits-fieldplate__label', htmlFor: props.id }, props.label, props.required ? null : h('span', { className: 'vb-form__opt' }, ' · optional')),
        props.children,
        h('span', { className: 'blits-fieldplate__line', 'aria-hidden': 'true' }))),
      props.error ? h('p', { className: 'vb-form__error', id: props.id + '-err' }, props.error) : null);
  }
  function Apply() {
    var init = { company: '', name: '', email: '', phone: '', country: '', type: '', website: '', message: '', consent: false };
    var st = React.useState(init), v = st[0], setV = st[1];
    var er = React.useState({}), errors = er[0], setErrors = er[1];
    var dn = React.useState(false), done = dn[0], setDone = dn[1];
    function set(k) { return function (e) { var val = e.target.type === 'checkbox' ? e.target.checked : e.target.value; setV(function (o) { var n = Object.assign({}, o); n[k] = val; return n; }); }; }
    function validate() {
      var e = {};
      if (!v.company.trim()) e.company = 'Add the name of your shop or company.';
      if (!v.name.trim()) e.name = 'Add your name.';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = 'Add an e-mail address we can reply to.';
      if (!v.country) e.country = 'Choose a country.';
      if (!v.type) e.type = 'Choose shop, webshop or both.';
      if (!v.consent) e.consent = 'We need your OK to contact you.';
      return e;
    }
    function submit(ev) {
      ev.preventDefault();
      var e = validate(); setErrors(e);
      var first = Object.keys(e)[0];
      if (first) { var el = document.getElementById('apply-' + first); if (el) el.focus(); return; }
      setDone(true);
    }
    function input(k, props) {
      return h('input', Object.assign({ id: 'apply-' + k, name: k, className: 'blits-fieldplate__input', value: v[k], onChange: set(k), 'aria-invalid': errors[k] ? 'true' : undefined, 'aria-describedby': errors[k] ? 'apply-' + k + '-err' : undefined }, props));
    }
    var body = done
      ? h('div', { className: 'vb-form__done', role: 'status' },
          h('h3', { className: 'blits-heading display-m' }, 'Thanks, ', h('span', { className: 'vb-form__done-name' }, v.name.trim().split(/\s+/)[0]), '.'),
          h('p', { className: 'body-l' }, 'We’ve got your application for ', h('b', null, v.company.trim()), '. We’ll be in touch at ', h('b', { className: 'vb-form__break' }, v.email.trim()), '.'),
          h('p', { className: 'body' }, 'Preview only: this form does not send yet ', h('span', { className: 'ph' }, '[FORM HANDLING]'), '.'),
          h(B.Button, { variant: 'secondary', onClick: function () { setV(init); setErrors({}); setDone(false); } }, 'Send another'))
      : h('form', { className: 'vb-form', noValidate: true, onSubmit: submit },
          h(Plate, { id: 'apply-company', label: 'Shop or company name', required: true, error: errors.company }, input('company', { autoComplete: 'organization' })),
          h(Plate, { id: 'apply-name', label: 'Your name', required: true, error: errors.name }, input('name', { autoComplete: 'name' })),
          h(Plate, { id: 'apply-email', label: 'E-mail', required: true, error: errors.email }, input('email', { type: 'email', autoComplete: 'email', inputMode: 'email', spellCheck: false })),
          h(Plate, { id: 'apply-phone', label: 'Phone', error: errors.phone }, input('phone', { type: 'tel', autoComplete: 'tel', inputMode: 'tel' })),
          h(Plate, { id: 'apply-country', label: 'Country', required: true, error: errors.country },
            h('select', { id: 'apply-country', name: 'country', className: 'blits-fieldplate__input vb-form__select', value: v.country, onChange: set('country'), 'aria-invalid': errors.country ? 'true' : undefined, 'aria-describedby': errors.country ? 'apply-country-err' : undefined },
              h('option', { value: '' }, 'Choose'), COUNTRIES.map(function (c) { return h('option', { key: c, value: c }, c); }))),
          h(Plate, { id: 'apply-website', label: 'Website', error: errors.website }, input('website', { type: 'url', autoComplete: 'url', inputMode: 'url', placeholder: 'www.', spellCheck: false })),
          h('fieldset', { className: VB.cx('vb-form__choice vb-form__field--wide', errors.type && 'is-error'), 'aria-describedby': errors.type ? 'apply-type-err' : undefined },
            h('legend', { className: 'eyebrow' }, 'You sell through'),
            h('div', { className: 'vb-chips' }, TYPES.map(function (t, i) {
              return h('label', { key: t, className: VB.cx('vb-chip', v.type === t && 'is-on') },
                h('input', { id: i === 0 ? 'apply-type' : undefined, type: 'radio', name: 'type', value: t, checked: v.type === t, onChange: set('type') }), t);
            })),
            errors.type ? h('p', { className: 'vb-form__error', id: 'apply-type-err' }, errors.type) : null),
          h(Plate, { id: 'apply-message', label: 'Anything we should know', wide: true },
            h('textarea', { id: 'apply-message', name: 'message', rows: 4, className: 'blits-fieldplate__input vb-form__textarea', value: v.message, onChange: set('message') })),
          h('div', { className: 'vb-form__field--wide' },
            h('label', { className: VB.cx('vb-form__consent', errors.consent && 'is-error') },
              h('input', { id: 'apply-consent', type: 'checkbox', checked: v.consent, onChange: set('consent'), 'aria-describedby': errors.consent ? 'apply-consent-err' : undefined }),
              h('span', { className: 'body' }, 'BLITS may contact me about becoming a dealer. ', h('span', { className: 'ph' }, '[PRIVACY STATEMENT]'))),
            errors.consent ? h('p', { className: 'vb-form__error', id: 'apply-consent-err' }, errors.consent) : null),
          h('div', { className: 'vb-form__submit vb-form__field--wide' }, h(B.Button, { type: 'submit', variant: 'brand' }, 'Send application')));
    return h('section', { className: 'vb-section vb-apply', id: 'apply', 'data-theme': 'dark', 'aria-labelledby': 'apply-h' },
      h(B.TornEdge, { position: 'top', color: 'var(--night-pitch-green)', seed: 3 }),
      h('div', { className: 'wrap vb-apply__in' },
        h('div', { className: 'vb-apply__intro' },
          h(B.IndexLabel, { index: '006', label: 'Dealer application' }),
          h('h2', { id: 'apply-h', className: 'blits-heading display-l' }, 'Become a ', h(B.Keyword, null, 'dealer.')),
          h('p', { className: 'body-l vb-lede' }, 'A few questions about your shop, so we can come back with the right information.'),
          h(B.ChalkText, { className: 'vb-apply__chalk', size: 36, rotate: -4 }, 'welcome to the team!')),
        h('div', { className: 'vb-apply__form' }, body)));
  }

  function App() {
    return h(React.Fragment, null, h(VB.Header, { page: 'professionals' }),
      h('main', { id: 'top' }, h(Hero), h(Origin), h(Benefits), h(Range), h(Steps), h(Apply)),
      h(VB.Footer));
  }
  VB.mount(App);
})();
