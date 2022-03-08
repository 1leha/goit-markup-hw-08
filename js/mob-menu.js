(() => {
  const mobMenuRefs = {
    mobBtn: document.querySelector('[mob-btn]'),
    mobMenu: document.querySelector('[mob-menu]'),
    scroll: document.querySelector('[deny-scroll]'),

  };

  mobMenuRefs.mobBtn.addEventListener('click', toggleButton);
  mobMenuRefs.mobMenu.addEventListener('click', toggleButton);

  function toggleButton() {
    const expanded = mobMenuRefs.mobMenu.getAttribute('aria-expanded') === 'true' || false;
    mobMenuRefs.mobBtn.classList.toggle('is-open');
    mobMenuRefs.mobBtn.setAttribute('aria-expanded', !expanded);

    mobMenuRefs.mobMenu.classList.toggle('is-open');
    mobMenuRefs.scroll.classList.toggle('scroll-hidden');

  }
})();
