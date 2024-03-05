// Gallery Load More functionality
document.addEventListener("DOMContentLoaded", () => {
  const initialHide = (gallerySelector) => {
    const galleries = document.querySelectorAll(gallerySelector);
    galleries.forEach(gallery => {
      const items = Array.from(gallery.children);
      items.forEach((item, index) => {
        if (index >= 4) {
          item.classList.add("hide");
        }
      });
    });
  };

  // Call the function for your galleries
  initialHide(".gallery_component");

  const loadMoreButtons = document.querySelectorAll(".gallery_load-more");
  loadMoreButtons.forEach(button => {
    button.addEventListener("click", () => {
      const galleryId = button.getAttribute("data-target");
      const gallery = document.getElementById(galleryId);
      const hiddenItems = gallery.querySelectorAll(".hide");
      const visibleItems = Array.from(hiddenItems).slice(0, 4);
      const remainingHiddenItems = Array.from(hiddenItems).slice(4);

      visibleItems.forEach(item => {
        item.classList.remove("hide");
      });

      // Hide the load more button if there are no more hidden items
      if (remainingHiddenItems.length === 0) {
        button.style.display = "none";
      }
    });
  });
});
