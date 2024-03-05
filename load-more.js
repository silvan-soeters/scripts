document.addEventListener("DOMContentLoaded", () => {
  const initialHide = (gallerySelector) => {
    const galleries = document.querySelectorAll(gallerySelector);
    galleries.forEach(gallery => {
      const items = Array.from(gallery.children);
      items.forEach((item, index) => {
        if (index >= 4) {
          item.classList.add('hide');
        }
      });
    });
  };

  initialHide('.gallery_component');

  document.querySelectorAll('.gallery_load-more').forEach(button => {
    button.addEventListener('click', () => {
      const galleryId = button.getAttribute('data-target');
      const gallery = document.getElementById(galleryId);
      const hiddenItems = Array.from(gallery.querySelectorAll('.hide'));

      hiddenItems.slice(0, 4).forEach(item => item.classList.remove('hide'));

      // Check again for any remaining hidden items after the current operation
      const remainingHiddenItems = gallery.querySelectorAll('.hide').length;
      if (remainingHiddenItems === 0) {
        button.style.display = 'none';
      }
    });
  });
});
