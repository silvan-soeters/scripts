const themeToggle = document.getElementById('theme-toggle');
const themeColorMeta = document.getElementById('theme-color-meta');
const moonIcon = document.getElementById('dark-mode-moon');
const sunIcon = document.getElementById('dark-mode-sun');

if (themeToggle) {
  themeToggle.addEventListener('change', function() {
    document.body.classList.toggle('theme-dark', this.checked);
    themeColorMeta.setAttribute('content', this.checked ? '#181818' : '#f5f5f5');
    
    if (this.checked) {
      moonIcon.style.opacity = 1;
      sunIcon.style.opacity = 0;
    } else {
      moonIcon.style.opacity = 0;
      sunIcon.style.opacity = 1;
    }
  });
}

const toggleButton = themeToggle ? themeToggle.parentElement : null;

if (toggleButton) {
  toggleButton.addEventListener('keydown', (event) => {
    if (event.code === 'Space' || event.code === 'Enter') {
      themeToggle.click(); 
      themeToggle.focus();
    }  
  });

  toggleButton.addEventListener('click', function() {
    console.log("Toggle button clicked");
    themeToggle.click(); 
    themeToggle.focus();
  });
}
