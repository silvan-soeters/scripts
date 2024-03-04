// Gallery Load More functionality
document.addEventListener("DOMContentLoaded", function() {
  // Function to initially hide gallery items beyond the first six
  function initialHide(gallerySelector) {
    const galleries = document.querySelectorAll(gallerySelector);
    galleries.forEach(gallery => {
      const items = Array.from(gallery.children);
      items.forEach((item, index) => {
        if (index >= 8) { // Adjust this number to change the initial number of items shown
          item.classList.add('hide');
        }
      });
    });
  }

  // Call the function for your galleries
  initialHide('.gallery_component');

  // Load more functionality
  document.querySelectorAll('.gallery_load-more').forEach(button => {
    button.addEventListener('click', function() {
      const galleryId = this.getAttribute('data-target');
      const gallery = document.getElementById(galleryId);
      const hiddenItems = gallery.querySelectorAll('.hide');
      
      for (let i = 0; i < 8 && i < hiddenItems.length; i++) { // Show X more items
        hiddenItems[i].classList.remove('hide');
      }
      
      // Optionally, hide the load more button if there are no more hidden items
      if (hiddenItems.length <= 8) {
        this.style.display = 'none';
      }
    });
  });
});
