document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.parallax_ipad-mockup').forEach(mockup => {
        const video = mockup.querySelector('.parallax_video-element');
        const playButton = mockup.querySelector('.parallax_video-play');
        const pauseButton = mockup.querySelector('.parallax_video-pause');
        const cover = mockup.querySelector('.parallax_cover');
        const loader = mockup.querySelector('.loader');
        const loaderWrapper = mockup.querySelector('.loader_wrapper');

        playButton.addEventListener('click', () => {
            video.play();
            playButton.style.display = 'none';
            pauseButton.style.display = 'block';
            loader.style.display = 'flex';
            loaderWrapper.style.display = 'flex';
        });

        pauseButton.addEventListener('click', () => {
            video.pause();
            pauseButton.style.display = 'none';
            playButton.style.display = 'block';
            cover.style.opacity = 0.88;
            loader.style.display = 'none';
            loaderWrapper.style.display = 'none';
        });

        video.addEventListener('ended', () => {
            pauseButton.style.display = 'none';
            playButton.style.display = 'block';
            cover.style.opacity = 0.88;
            loader.style.display = 'none';
            loaderWrapper.style.display = 'none';
        });

        video.addEventListener('playing', () => {
            cover.style.opacity = 0;
            loader.style.display = 'none';
            loaderWrapper.style.display = 'none';
        });
    });
});
