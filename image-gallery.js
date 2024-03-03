document.addEventListener('DOMContentLoaded', () => {
    const createModal = () => {
        if (!document.getElementById('imageModal')) {
            const modalHTML = `
                <div id="imageModal" class="modal" style="display:none; position:fixed; z-index:1000; left:0; top:0; width:100%; height:100%; background-color: rgba(0,0,0,0.5); justify-content: center; align-items: center;" onclick="event.target.id === 'imageModal' && (document.getElementById('imageModal').style.display = 'none')">
                    <span id="closeModal" style="position:absolute; top:20px; right:35px; color:#fff; font-size:28px; font-weight:bold; cursor:pointer;">&times;</span>
                    <img id="modalImage" src="" style="max-width:80%; max-height:80%;" onclick="event.stopPropagation()">
                    <span id="prevImage" style="cursor:pointer; position:absolute; left:30px; color:#fff; font-size:24px;">&#10094;</span>
                    <span id="nextImage" style="cursor:pointer; position:absolute; right:30px; color:#fff; font-size:24px;">&#10095;</span>
                </div>
            `;
            document.body.insertAdjacentHTML('beforeend', modalHTML);

            document.getElementById('closeModal').addEventListener('click', () => {
                document.getElementById('imageModal').style.display = 'none';
            });

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
        }
    };

    const navigateThroughImages = (images, currentIndex, direction) => {
        let newIndex = currentIndex + direction;
        if (newIndex < 0) {
            newIndex = images.length - 1;
        } else if (newIndex >= images.length) {
            newIndex = 0;
        }
        document.getElementById('modalImage').src = images[newIndex].src;
        // Update the current index for correct navigation
        currentImageIndex = newIndex;
    };

    let currentImageIndex = 0; // Track the current image index for navigation

    const initializeImageModal = (galleryId) => {
        const gallery = document.getElementById(galleryId);
        const images = gallery.querySelectorAll('.gallery_frame-image');
        createModal();

        images.forEach((image, index) => {
            image.addEventListener('click', () => {
                const modal = document.getElementById('imageModal');
                const modalImage = document.getElementById('modalImage');
                modalImage.src = image.src;
                modal.style.display = 'flex';
                currentImageIndex = index; // Set the current image index

                document.getElementById('prevImage').onclick = () => navigateThroughImages(images, currentImageIndex, -1);
                document.getElementById('nextImage').onclick = () => navigateThroughImages(images, currentImageIndex, 1);
            });
        });
    };

    // Initialize the modal functionality for each gallery
    initializeImageModal('photography-gallery');
    initializeImageModal('illustration-gallery');
});
