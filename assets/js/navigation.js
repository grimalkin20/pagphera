(() => {
  const header = document.querySelector('[data-site-header]');
  const toggle = header?.querySelector('.menu-toggle');
  const navigation = header?.querySelector('.site-navigation');
  const dropdowns = header?.querySelectorAll('.nav-dropdown') || [];

  if (!header || !toggle || !navigation) {
    return;
  }

  const setMenuState = (isOpen) => {
    header.dataset.menuOpen = String(isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    const label = toggle.querySelector('.menu-toggle__label');
    if (label) {
      label.textContent = isOpen ? 'Close' : 'Menu';
    }
    if (!isOpen) {
      closeAllDropdowns();
    }
  };

  const closeAllDropdowns = () => {
    dropdowns.forEach((dd) => {
      dd.dataset.open = 'false';
      const btn = dd.querySelector('.nav-dropdown__toggle');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    });
  };

  setMenuState(false);

  toggle.addEventListener('click', () => {
    setMenuState(toggle.getAttribute('aria-expanded') !== 'true');
  });

  dropdowns.forEach((dd) => {
    const btn = dd.querySelector('.nav-dropdown__toggle');
    if (!btn) return;

    btn.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      const isOpen = dd.dataset.open === 'true';
      closeAllDropdowns();
      if (!isOpen) {
        dd.dataset.open = 'true';
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      setMenuState(false);
      closeAllDropdowns();
    }
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.nav-dropdown')) {
      closeAllDropdowns();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      if (toggle.getAttribute('aria-expanded') === 'true') {
        setMenuState(false);
        toggle.focus();
      } else {
        closeAllDropdowns();
      }
    }
  });
})();
