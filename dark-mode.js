const themeToggle = document.getElementById('theme-toggle');
const themeColorMeta = document.getElementById('theme-color-meta');

if (themeToggle) {
  themeToggle.addEventListener('change', function() {
    document.body.classList.toggle('theme-dark', this.checked);
    themeColorMeta.setAttribute('content', this.checked ? '#181818' : '#f5f5f5');
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
