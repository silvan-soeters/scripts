document.addEventListener('DOMContentLoaded', () => {
    const initializeLayoutToggle = (galleryId) => {
        const galleryWrapper = document.querySelector(`#${galleryId}`).closest('.gallery_wrapper');
        const oneColumnButton = galleryWrapper.querySelector('.gallery_one-col-button');
        const twoColumnButton = galleryWrapper.querySelector('.gallery_two-col-button');

        const toggleLayout = (event) => {
            let target = event.target;
            // Ensure we target the button if an SVG or its child is clicked
            if (target.tagName === 'svg' || target.closest('svg')) {
                target = target.closest('button');
            }
            const isOneColumn = target.classList.contains('gallery_one-col-button');
            const gridContainer = document.getElementById(galleryId);
            gridContainer.className = isOneColumn ? 'gallery_component gallery_component-1col' : 'gallery_component gallery_component-2col';
            oneColumnButton.classList.toggle('is-secondary', !isOneColumn);
            twoColumnButton.classList.toggle('is-secondary', isOneColumn);
        };

        oneColumnButton.addEventListener('click', toggleLayout);
        twoColumnButton.addEventListener('click', toggleLayout);
    };

    initializeLayoutToggle('photography-gallery');
    initializeLayoutToggle('illustration-gallery');
});
