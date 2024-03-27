document.addEventListener('DOMContentLoaded', () => {
    const createModal = () => {
        if (!document.getElementById('galleryModal')) {
            const modalHTML = `
                <div id="galleryModal" fs-scrolldisable-element="when-visible" class="gallery_modal" onclick="event.target.id === 'galleryModal' && (document.getElementById('galleryModal').style.display = 'none')">
                    <button class="gallery_modal-close icon-embed-xsmall" id="galleryCloseModal"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--tabler" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6L6 18M6 6l12 12"></path></svg></button>
                    <div class="gallery_modal-image-container">
                        <img id="galleryModalImage" class="gallery_modal-image" src="" onclick="event.stopPropagation()">
                    </div>
                    <button class="gallery_modal-previous icon-embed-xsmall" id="galleryPrevImage"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--tabler" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4 4m-4-4l4-4"></path></svg></button>
                    <button class="gallery_modal-next icon-embed-xsmall" id="galleryNextImage"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--tabler" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-4 4l4-4m-4-4l4 4"></path></svg></button>
                </div>
            `;
            document.body.insertAdjacentHTML('beforeend', modalHTML);
            document.getElementById('galleryCloseModal').addEventListener('click', () => {
                document.getElementById('galleryModal').style.display = 'none';
            });
            document.addEventListener('keydown', (event) => {
                const modal = document.getElementById('galleryModal');
                if (modal.style.display === 'flex') {
                    event.preventDefault();
                    event.stopPropagation();
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
        const modalImage = document.getElementById('galleryModalImage');
        modalImage.src = images[newIndex].src;
        if (document.body.classList.contains('theme-dark') && currentGallery.closest('.art_gallery-wrapper').hasAttribute('data-dark-mode-invert')) {
            modalImage.classList.add('inverted');
        } else {
            modalImage.classList.remove('inverted');
        }
        currentImageIndex = newIndex;
    };

    let currentImageIndex = 0;
    let currentGallery = null;

    const initializeImageModal = () => {
        createModal();
        const galleryWrappers = document.querySelectorAll('.art_gallery-wrapper');
        galleryWrappers.forEach(galleryWrapper => {
            galleryWrapper.addEventListener('click', (event) => {
                if (event.target.classList.contains('gallery_frame-image')) {
                    const clickedImage = event.target;
                    const artGallery = clickedImage.closest('.art_gallery');
                    const images = artGallery.querySelectorAll('.gallery_frame-image');
                    const imageIndex = Array.from(images).indexOf(clickedImage);
                    const modal = document.getElementById('galleryModal');
                    const modalImage = document.getElementById('galleryModalImage');
                    modalImage.src = clickedImage.src;
                    if (document.body.classList.contains('theme-dark') && galleryWrapper.hasAttribute('data-dark-mode-invert')) {
                        modalImage.classList.add('inverted');
                    } else {
                        modalImage.classList.remove('inverted');
                    }
                    modal.style.display = 'flex';
                    currentImageIndex = imageIndex;
                    currentGallery = artGallery;
                    document.getElementById('galleryPrevImage').onclick = () => navigateThroughImages(images, currentImageIndex, -1);
                    document.getElementById('galleryNextImage').onclick = () => navigateThroughImages(images, currentImageIndex, 1);
                }
            });
        });
    };

    initializeImageModal();
});
