document.addEventListener('DOMContentLoaded', () => {
    // Previous setup code...

    const createModal = () => {
        // Modal creation code...

        // Close modal on outside click
        document.getElementById('imageModal').addEventListener('click', (event) => {
            if (event.target.id === 'imageModal') {
                document.getElementById('imageModal').style.display = 'none';
            }
        });

        // Accessibility improvements: Keyboard navigation
        document.addEventListener('keydown', (event) => {
            const modal = document.getElementById('imageModal');
            if (modal.style.display === 'flex') {
                if (event.key === 'Escape') {
                    modal.style.display = 'none';
                } else if (event.key === 'ArrowLeft') {
                    document.getElementById('prevImage').click();
                } else if (event.key === 'ArrowRight') {
                    document.getElementById('nextImage').click();
                }
            }
        });
    };

    const initializeImageModal = (galleryId) => {
        const gallery = document.getElementById(galleryId);
        const images = gallery.querySelectorAll('.gallery_frame-image');
        createModal();

        images.forEach((image, index) => {
            image.addEventListener('click', (event) => {
                event.stopPropagation(); // Prevent triggering modal close
                const modal = document.getElementById('imageModal');
                const modalImage = document.getElementById('modalImage');
                modalImage.src = image.src;
                modal.style.display = 'flex';

                // Update navigation functionality to correctly handle all images
                document.getElementById('prevImage').onclick = () => {
                    navigateThroughImages(images, index, -1);
                };
                document.getElementById('nextImage').onclick = () => {
                    navigateThroughImages(images, index, 1);
                };
            });
        });
    };

    // Function to navigate through images
    const navigateThroughImages = (images, currentIndex, direction) => {
        let newIndex = currentIndex + direction;
        if (newIndex < 0) {
            newIndex = images.length - 1; // Go to last image if at the beginning
        } else if (newIndex >= images.length) {
            newIndex = 0; // Go to first image if at the end
        }
        document.getElementById('modalImage').src = images[newIndex].src;
    };

    // Initialize the modal functionality for each gallery
    initializeImageModal('photography-gallery');
    initializeImageModal('illustration-gallery');
});
