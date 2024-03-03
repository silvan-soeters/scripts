document.addEventListener('DOMContentLoaded', () => {
    const createModal = () => {
        if (!document.getElementById('imageModal')) {
            const modalHTML = `
                <div id="galleryModal" class="gallery_modal" onclick="event.target.id === 'galleryModal' && (document.getElementById('galleryModal').style.display = 'none')">
                    <button class="gallery_modal-close icon-embed-xsmall" id="galleryCloseModal"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--tabler" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6L6 18M6 6l12 12"></path></svg></button>
                    <img id="galleryModalImage" class="gallery_modal-image" src="" onclick="event.stopPropagation()">
                    <button class="gallery_modal-previous icon-embed-xsmall" id="prevImage"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--tabler" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m12 8l-4 4l4 4m4-4H8"></path><path d="M20 6.667v10.666A2.667 2.667 0 0 1 17.333 20H6.667A2.667 2.667 0 0 1 4 17.333V6.667A2.667 2.667 0 0 1 6.667 4h10.666A2.667 2.667 0 0 1 20 6.667z"></path></g></svg></button>
                    <button class="gallery_modal-next icon-embed-xsmall" id="nextImage"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--tabler" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m12 16l4-4l-4-4m-4 4h8"></path><path d="M4 17.333V6.667A2.667 2.667 0 0 1 6.667 4h10.666A2.667 2.667 0 0 1 20 6.667v10.666A2.667 2.667 0 0 1 17.333 20H6.667A2.667 2.667 0 0 1 4 17.333z"></path></g></svg></button>
                </div>
            `;
            document.body.insertAdjacentHTML('beforeend', modalHTML);

            document.getElementById('galleryCloseModal').addEventListener('click', () => {
                document.getElementById('galleryModal').style.display = 'none';
            });

            document.addEventListener('keydown', (event) => {
                const modal = document.getElementById('galleryModalImage');
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
        document.getElementById('galleryModalImage').src = images[newIndex].src;
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
                const modal = document.getElementById('galleryModal');
                const modalImage = document.getElementById('galleryModalImage');
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
