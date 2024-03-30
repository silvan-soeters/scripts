const themeToggles = document.querySelectorAll('.topbar\_dark-mode-toggle');
const themeColorMeta = document.getElementById('theme-color-meta');

themeToggles.forEach(function(toggleButton) {
  const themeToggle = toggleButton.querySelector('.toggle-checkbox');
  const moonIcon = toggleButton.querySelector('#dark-mode-moon');
  const sunIcon = toggleButton.querySelector('#dark-mode-sun');

  toggleButton.addEventListener('click', function() {
    themeToggle.checked = !themeToggle.checked;
    updateTheme(themeToggle.checked);
  });

  toggleButton.addEventListener('keydown', function(event) {
    if (event.code === 'Space' || event.code === 'Enter') {
      event.preventDefault();
      themeToggle.checked = !themeToggle.checked;
      updateTheme(themeToggle.checked);
    }
  });

  const updateTheme = function(isDarkMode) {
    document.body.classList.toggle('theme-dark', isDarkMode);
    themeColorMeta.setAttribute('content', isDarkMode ? '#111111' : '#c9c9c9');

    if (isDarkMode) {
      moonIcon.style.opacity = 1;
      sunIcon.style.opacity = 0;
    } else {
      moonIcon.style.opacity = 0;
      sunIcon.style.opacity = 1;
    }
  };
});
