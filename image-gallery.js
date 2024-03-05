document.addEventListener('DOMContentLoaded', () => {
    const createModal = (galleryId) => {
        if (!document.getElementById('galleryModal')) {
            const modalHTML = `
                <div id="galleryModal" class="gallery_modal ${galleryId}" onclick="event.target.id === 'galleryModal' && (document.getElementById('galleryModal').style.display = 'none')">
                    <button class="gallery_modal-close icon-embed-xsmall" id="galleryCloseModal">...</button>
                    <div class="gallery_modal-image-container">
                        <img id="galleryModalImage" class="gallery_modal-image" src="" onclick="event.stopPropagation()">
                    </div>
                    <button class="gallery_modal-previous icon-embed-xsmall" id="galleryPrevImage">...</button>
                    <button class="gallery_modal-next icon-embed-xsmall" id="galleryNextImage">...</button>
                </div>
            `;
            document.body.insertAdjacentHTML('beforeend', modalHTML);

            document.getElementById('galleryCloseModal').addEventListener('click', () => {
                document.getElementById('galleryModal').style.display = 'none';
            });

            document.addEventListener('keydown', (event) => {
                const modal = document.getElementById('galleryModal');
                if (modal.style.display === 'flex') {
                    if (event.key === 'Escape') {
                        modal.style.display = 'none';
                    } else if (event.key === 'ArrowLeft') {
                        document.getElementById('galleryPrevImage').click();
                    } else if (event.key === 'ArrowRight') {
                        document.getElementById('galleryNextImage').click();
                    }
                }
            });
        }
    };

    const navigateThroughImages = (images, currentIndex, direction) => {
        let newIndex = currentIndex + direction;
        newIndex = newIndex < 0 ? images.length - 1 : newIndex >= images.length ? 0 : newIndex;
        document.getElementById('galleryModalImage').src = images[newIndex].src;
        currentImageIndex = newIndex;
    };

    let currentImageIndex = 0;

    const initializeImageModal = (galleryId) => {
        const gallery = document.getElementById(galleryId);
        const images = gallery.querySelectorAll('.gallery_frame-image');
        createModal(galleryId);

        images.forEach((image, index) => {
            image.addEventListener('click', () => {
                const modal = document.getElementById('galleryModal');
                const modalImage = document.getElementById('galleryModalImage');
                modalImage.src = image.src;
                modal.style.display = 'flex';
                modal.className = `gallery_modal ${galleryId}`;
                currentImageIndex = index;

                document.getElementById('galleryPrevImage').onclick = () => navigateThroughImages(images, currentImageIndex, -1);
                document.getElementById('galleryNextImage').onclick = () => navigateThroughImages(images, currentImageIndex, 1);
            });
        });
    };

    initializeImageModal('photography-gallery');
    initializeImageModal('illustration-gallery');
});
