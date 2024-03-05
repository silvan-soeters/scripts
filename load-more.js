document.addEventListener("DOMContentLoaded", () => {
  const hideExtraItems = (gallerySelector) => {
    const galleries = document.querySelectorAll(gallerySelector);
    galleries.forEach(gallery => {
      const items = Array.from(gallery.children);
      items.forEach((item, index) => {
        if (index > 3) { // Hide items beyond the fourth
          item.classList.add('hide');
        }
      });
    });
  };

  // Initially hide extra items in all galleries
  hideExtraItems('.gallery_component');

  // Setup load more functionality
  document.querySelectorAll('.gallery_load-more').forEach(button => {
    button.addEventListener('click', () => {
      const galleryId = button.getAttribute('data-target');
      const gallery = document.getElementById(galleryId);
      const hiddenItems = gallery.querySelectorAll('.hide');

      Array.from(hiddenItems).slice(0, 4).forEach(item => item.classList.remove('hide'));

      // Check if there are no more hidden items and hide the button if true
      if (gallery.querySelectorAll('.hide').length === 0) {
        button.style.display = 'none';
      }
    });
  });
});
