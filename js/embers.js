(() => {
  const layer = document.querySelector('.embers');
  if (!layer || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  const randomBetween = (min, max) => min + Math.random() * (max - min);
  const particleCount = window.matchMedia('(max-width: 640px)').matches ? 8 : 14;
  const colors = ['#ffdca0', '#ffad62', '#ff7647'];
  const easings = [
    'cubic-bezier(0.35, 0, 0.65, 1)',
    'cubic-bezier(0.45, 0.05, 0.25, 1)',
    'cubic-bezier(0.25, 0.1, 0.55, 0.9)',
  ];

  for (let i = 0; i < particleCount; i += 1) {
    const ember = document.createElement('span');
    const direction = Math.random() < 0.5 ? -1 : 1;
    const duration = randomBetween(9, 18);

    ember.className = 'ember';
    ember.style.setProperty('--ember-x', `${randomBetween(4, 96)}%`);
    ember.style.setProperty('--ember-size', `${randomBetween(1.2, 2.8)}px`);
    ember.style.setProperty('--ember-color', colors[Math.floor(Math.random() * colors.length)]);
    ember.style.setProperty('--ember-duration', `${duration.toFixed(2)}s`);
    ember.style.setProperty('--ember-delay', `${randomBetween(-duration, 0).toFixed(2)}s`);
    ember.style.setProperty('--ember-easing', easings[Math.floor(Math.random() * easings.length)]);
    ember.style.setProperty('--ember-opacity', randomBetween(0.35, 0.68).toFixed(2));
    ember.style.setProperty('--ember-sway', `${(direction * randomBetween(8, 36)).toFixed(1)}px`);
    ember.style.setProperty('--ember-counter-sway', `${(-direction * randomBetween(4, 24)).toFixed(1)}px`);
    ember.style.setProperty('--ember-drift', `${(direction * randomBetween(18, 68)).toFixed(1)}px`);
    ember.style.setProperty('--ember-flicker-duration', `${randomBetween(0.45, 1.15).toFixed(2)}s`);
    ember.style.setProperty('--ember-flicker-delay', `${randomBetween(-1.15, 0).toFixed(2)}s`);
    layer.append(ember);
  }
})();
