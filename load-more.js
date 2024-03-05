document.addEventListener("DOMContentLoaded", () => {
  // Function to initially hide gallery items beyond the first six
  const initialHide = (gallerySelector) => {
    const galleries = document.querySelectorAll(gallerySelector);
    galleries.forEach(gallery => {
      const items = Array.from(gallery.children);
      items.forEach((item, index) => {
        if (index >= 4) { // Adjust this number to change the initial number of items shown
          item.classList.add('hide');
        }
      });
    });
  };

  // Call the function for your galleries
  initialHide('.gallery_component');

  // Load more functionality
  document.querySelectorAll('.gallery_load-more').forEach(button => {
    button.addEventListener('click', () => {
      const galleryId = button.getAttribute('data-target');
      const gallery = document.getElementById(galleryId);
      const hiddenItems = Array.from(gallery.querySelectorAll('.hide'));
      
      hiddenItems.slice(0, 4).forEach(item => item.classList.remove('hide'));
      
      // Hide the load more button if there are no more hidden items after showing more
      button.style.display = hiddenItems.length <= 4 ? 'none' : '';
    });
  });
});
