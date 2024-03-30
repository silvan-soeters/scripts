const themeToggles = document.querySelectorAll('.toggle-checkbox');
const themeColorMeta = document.getElementById('theme-color-meta');

themeToggles.forEach(function(themeToggle) {
  const toggleButton = themeToggle.parentElement;
  const moonIcon = toggleButton.querySelector('#dark-mode-moon');
  const sunIcon = toggleButton.querySelector('#dark-mode-sun');

  toggleButton.addEventListener('click', function() {
    themeToggle.click();
    themeToggle.focus();
  });

  toggleButton.addEventListener('keydown', function(event) {
    if (event.code === 'Space' || event.code === 'Enter') {
      event.preventDefault(); // Prevent default behavior
      themeToggle.click();
      themeToggle.focus();
    }
  });

  themeToggle.addEventListener('change', function() {
    document.body.classList.toggle('theme-dark', this.checked);
    themeColorMeta.setAttribute('content', this.checked ? '#111111' : '#c9c9c9');

    if (this.checked) {
      moonIcon.style.opacity = 1;
      sunIcon.style.opacity = 0;
    } else {
      moonIcon.style.opacity = 0;
      sunIcon.style.opacity = 1;
    }
  });
});
