/* @ds-bundle: {"format":4,"namespace":"Blits","components":[{"name":"Button"},{"name":"Heading"},{"name":"PlaqueCard"},{"name":"SpecPlate"},{"name":"Divider"},{"name":"Marker"}]} */
(function () {
  var h = React.createElement;
  function cx() { return Array.prototype.filter.call(arguments, Boolean).join(' '); }

  function Button(props) {
    var variant = props.variant || 'primary';
    var Tag = props.href ? 'a' : 'button';
    return h(Tag, {
      className: cx('blits-btn', 'blits-btn--' + variant, props.className),
      href: props.href,
      type: props.href ? undefined : (props.type || 'button'),
      disabled: props.disabled,
      onClick: props.onClick
    }, props.children);
  }

  function Heading(props) {
    var size = props.size || 'l';
    var Tag = 'h' + (props.level || 2);
    var kids = [props.children];
    if (props.accent) {
      kids.push(' ', h('span', { key: 'accent', className: cx('blits-accent', props.accentColor === 'green' && 'blits-accent--green') }, props.accent));
    }
    return h.apply(null, [Tag, { className: cx('blits-heading', 'display-' + size, props.className) }].concat(kids));
  }

  function PlaqueCard(props) {
    var tone = props.tone || 'warm';
    var size = props.size || 'md';
    return h('div', { className: cx('blits-plate', size !== 'md' && 'blits-plate--' + size, tone !== 'warm' && 'blits-plate--' + tone, props.className) },
      props.eyebrow ? h('p', { className: 'eyebrow', style: { margin: '0 0 8px' } }, props.eyebrow) : null,
      props.title ? h('h3', { className: 'blits-heading display-s blits-plate__title' }, props.title) : null,
      props.children
    );
  }

  function SpecPlate(props) {
    var rows = props.rows || [];
    var head = [];
    if (props.logo) head.push(h('img', { key: 'logo', className: 'blits-spec__logo', src: props.logo, alt: '' }));
    if (props.title) head.push(h('p', { key: 'title', className: 'display-s blits-spec__title' }, props.title));
    var list = rows.map(function (r, i) {
      return h('div', { key: 'row' + i, className: 'blits-spec__row' },
        h('dt', { className: 'eyebrow' }, r.label),
        h('dd', { className: 'spec-value' }, r.value));
    });
    return h('div', { className: cx('blits-spec', props.className) },
      head.length ? h('div', { className: 'blits-spec__head' }, head) : null,
      h('dl', { className: 'blits-spec__list' }, list));
  }

  function Divider(props) {
    return h('hr', { className: cx('blits-divider', props.className), 'aria-hidden': 'true' });
  }

  function Marker(props) {
    return h('span', { className: cx('blits-marker', props.className), 'aria-hidden': 'true' }, props.children);
  }

  window.Blits = { Button: Button, Heading: Heading, PlaqueCard: PlaqueCard, SpecPlate: SpecPlate, Divider: Divider, Marker: Marker };
})();
