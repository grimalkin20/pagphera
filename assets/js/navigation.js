(() => {
  const header = document.querySelector('[data-site-header]');
  const toggle = header?.querySelector('.menu-toggle');
  const navigation = header?.querySelector('.site-navigation');

  if (!header || !toggle || !navigation) {
    return;
  }

  const setMenuState = (isOpen) => {
    header.dataset.menuOpen = String(isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.querySelector('.menu-toggle__label').textContent = isOpen ? 'Close' : 'Menu';
  };

  setMenuState(false);

  toggle.addEventListener('click', () => {
    setMenuState(toggle.getAttribute('aria-expanded') !== 'true');
  });

  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      setMenuState(false);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setMenuState(false);
      toggle.focus();
    }
  });
})();
