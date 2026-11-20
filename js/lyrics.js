(() => {
  const lyrics = document.querySelectorAll('.work-lyrics');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  lyrics.forEach((detail) => {
    const summary = detail.querySelector(':scope > summary');
    const body = detail.querySelector(':scope > .work-lyrics-body');

    if (!summary || !body) {
      return;
    }

    let animation;

    summary.addEventListener('click', (event) => {
      event.preventDefault();

      if (detail.open) {
        if (reducedMotion.matches) {
          detail.open = false;
          return;
        }

        if (animation) {
          animation.cancel();
        }

        detail.classList.remove('is-opening', 'is-closing');
        body.style.height = 'auto';
        const startHeight = body.scrollHeight;
        body.style.height = `${startHeight}px`;
        detail.classList.add('is-closing');

        animation = body.animate(
          [
            { height: `${startHeight}px`, opacity: 1, transform: 'translateY(0)' },
            { height: '0px', opacity: 0, transform: 'translateY(-0.8rem)' },
          ],
          {
            duration: 300,
            easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
          }
        );

        animation.addEventListener('finish', () => {
          detail.open = false;
          detail.classList.remove('is-closing');
          body.style.height = '';
        }, { once: true });
      } else {
        if (reducedMotion.matches) {
          detail.open = true;
          return;
        }

        if (animation) {
          animation.cancel();
        }

        detail.classList.remove('is-opening', 'is-closing');
        detail.open = true;
        body.style.height = 'auto';
        const endHeight = body.scrollHeight;
        body.style.height = '0px';
        detail.classList.add('is-opening');

        animation = body.animate(
          [
            { height: '0px', opacity: 0, transform: 'translateY(-0.8rem)' },
            { height: `${endHeight}px`, opacity: 1, transform: 'translateY(0)' },
          ],
          {
            duration: 360,
            easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
          }
        );

        animation.addEventListener('finish', () => {
          detail.classList.remove('is-opening');
          body.style.height = '';
        }, { once: true });
      }
    });
  });
})();
