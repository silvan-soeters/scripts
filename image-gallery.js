document.addEventListener('DOMContentLoaded', () => {
    const createModal = () => {
        if (!document.getElementById('imageModal')) {
            const modalHTML = `
                <div id="imageModal" class="modal" style="display:none; position:fixed; z-index:1000; left:0; top:0; width:100%; height:100%; background-color: color-mix(in srgb, var(--base-color-neutral--white), transparent 33%); justify-content: center; align-items: center;" onclick="event.target.id === 'imageModal' && (document.getElementById('imageModal').style.display = 'none')">
                    <span id="closeModal" style="position:absolute; top:20px; right:35px; color:var(--base-color-neutral--white); font-size:28px; font-weight:bold; cursor:pointer;"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--tabler" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 9h4V5M3 3l6 6m-4 6h4v4m-6 2l6-6m10-6h-4V5m0 4l6-6m-2 12h-4v4m0-4l6 6"></path></svg></span>
                    <img id="modalImage" src="" style="max-width:80%; max-height:80%;" onclick="event.stopPropagation()">
                    <span id="prevImage" style="cursor:pointer; position:absolute; left:30px; color:var(--base-color-neutral--white); font-size:24px;"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--tabler" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 6l-6 6l6 6"></path></svg></span>
                    <span id="nextImage" style="cursor:pointer; position:absolute; right:30px; color:var(--base-color-neutral--white); font-size:24px;"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--tabler" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 6l6 6l-6 6"></path></svg></span>
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
