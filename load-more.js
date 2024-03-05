document.addEventListener("DOMContentLoaded", () => {
  // Function to hide gallery items beyond the fourth for each gallery
  const setupGalleries = () => {
    document.querySelectorAll('.gallery_component').forEach(gallery => {
      const items = Array.from(gallery.children);
      // Ensure only the first four items are visible
      items.forEach((item, index) => {
        if (index >= 4) item.classList.add('hide');
      });
    });
  };

  // Function to handle the "load more" functionality
  const setupLoadMoreButtons = () => {
    document.querySelectorAll('.gallery_load-more').forEach(button => {
      button.addEventListener('click', function() {
        const galleryId = this.getAttribute('data-target');
        const gallery = document.getElementById(galleryId);
        const hiddenItems = gallery.querySelectorAll('.hide');

        // Show the next set of hidden items (up to four)
        Array.from(hiddenItems).slice(0, 4).forEach(item => item.classList.remove('hide'));

        // Hide the "load more" button if there are no more hidden items
        if (gallery.querySelectorAll('.hide').length === 0) {
          this.style.display = 'none';
        }
      });
    });
  };

  // Initial setup
  setupGalleries();
  setupLoadMoreButtons();
});
