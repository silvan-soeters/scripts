const themeToggle = document.querySelector('.toggle-checkbox');
const moonIcon = document.querySelector('#dark-mode-moon');
const sunIcon = document.querySelector('#dark-mode-sun');
const themeColorMeta = document.getElementById('theme-color-meta');

function updateTheme(isDarkMode) {
  document.body.classList.toggle('theme-dark', isDarkMode);
  themeColorMeta.setAttribute('content', isDarkMode ? '#111111' : '#c9c9c9');
  moonIcon.style.opacity = isDarkMode ? 1 : 0;
  sunIcon.style.opacity = isDarkMode ? 0 : 1;
}

function toggleTheme() {
  themeToggle.checked = !themeToggle.checked;
  updateTheme(themeToggle.checked);
}

document.querySelector('.topbar_dark-mode-toggle').addEventListener('click', toggleTheme);
document.querySelector('.topbar_dark-mode-toggle').addEventListener('keydown', function(event) {
  if (event.code === 'Space' || event.code === 'Enter') {
    event.preventDefault();
    toggleTheme();
  }
});
