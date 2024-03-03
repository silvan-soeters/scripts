document.addEventListener('DOMContentLoaded', () => {
    // Previous code for initializeLayoutToggle...

    // Function to create modal if it doesn't exist
    const createModal = () => {
        if (!document.getElementById('imageModal')) {
            const modalHTML = `
                <div id="imageModal" class="modal" style="display:none; position:fixed; z-index:1000; left:0; top:0; width:100%; height:100%; background-color: rgba(0,0,0,0.5); justify-content: center; align-items: center;">
                    <span id="closeModal" style="position:absolute; top:20px; right:35px; color:#fff; font-size:28px; font-weight:bold; cursor:pointer;">&times;</span>
                    <img id="modalImage" src="" style="max-width:80%; max-height:80%;">
                    <span id="prevImage" style="cursor:pointer; position:absolute; left:30px; color:#fff; font-size:24px;">&#10094;</span>
                    <span id="nextImage" style="cursor:pointer; position:absolute; right:30px; color:#fff; font-size:24px;">&#10095;</span>
                </div>
            `;
            document.body.insertAdjacentHTML('beforeend', modalHTML);

            // Close modal functionality
            document.getElementById('closeModal').addEventListener('click', () => {
                document.getElementById('imageModal').style.display = 'none';
            });
        }
    };

    // Function to initialize image click event to open modal
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

                // Navigation functionality
                document.getElementById('prevImage').onclick = () => {
                    const prevIndex = index - 1 < 0 ? images.length - 1 : index - 1;
                    modalImage.src = images[prevIndex].src;
                };
                document.getElementById('nextImage').onclick = () => {
                    const nextIndex = index + 1 >= images.length ? 0 : index + 1;
                    modalImage.src = images[nextIndex].src;
                };
            });
        });
    };

    // Initialize the modal functionality for each gallery
    initializeImageModal('photography-gallery');
    initializeImageModal('illustration-gallery');
});
