// Helper function to lazy-load videos
const lazyLoadVideos = (videoElements) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const videoElement = entry.target;
        videoElement.src = videoElement.dataset.src;
        observer.unobserve(videoElement);
      }
    });
  }, { rootMargin: '200px' });

  videoElements.forEach((videoElement) => {
    observer.observe(videoElement);
  });
};

// Helper function to handle video playback based on visibility
const handleVideoVisibility = (videoElements, playButtons, pauseButtons, covers, loaders, loaderWrappers) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const videoElement = entry.target;
      const mockup = videoElement.closest('.parallax_ipad-mockup');
      const playButton = mockup.querySelector('.parallax_video-play');
      const pauseButton = mockup.querySelector('.parallax_video-pause');
      const cover = mockup.querySelector('.parallax_cover');
      const loader = mockup.querySelector('.loader');
      const loaderWrapper = mockup.querySelector('.loader_wrapper');

      if (entry.isIntersecting) {
        videoElement.play().catch((error) => {
          console.error('Error playing video:', error);
        });
        playButton.style.display = 'none';
        pauseButton.style.display = 'block';
        loader.style.display = 'flex';
        loaderWrapper.style.display = 'flex';
      } else {
        videoElement.pause();
        pauseButton.style.display = 'none';
        playButton.style.display = 'block';
        cover.style.opacity = 1;
        loader.style.display = 'none';
        loaderWrapper.style.display = 'none';
      }
    });
  }, { threshold: 0.5 });

  videoElements.forEach((videoElement) => {
    observer.observe(videoElement);
  });
};

// Event delegation for play/pause functionality
const handlePlayPauseClick = (event) => {
  const clickedElement = event.target;
  if (clickedElement.classList.contains('parallax_video-play') || clickedElement.classList.contains('parallax_video-pause')) {
    const mockup = clickedElement.closest('.parallax_ipad-mockup');
    const videoElement = mockup.querySelector('.parallax_video-element');
    const playButton = mockup.querySelector('.parallax_video-play');
    const pauseButton = mockup.querySelector('.parallax_video-pause');
    const cover = mockup.querySelector('.parallax_cover');
    const loader = mockup.querySelector('.loader');
    const loaderWrapper = mockup.querySelector('.loader_wrapper');

    if (videoElement.paused) {
      videoElement.play().catch((error) => {
        console.error('Error playing video:', error);
      });
      playButton.style.display = 'none';
      pauseButton.style.display = 'block';
      loader.style.display = 'flex';
      loaderWrapper.style.display = 'flex';
    } else {
      videoElement.pause();
      pauseButton.style.display = 'none';
      playButton.style.display = 'block';
      cover.style.opacity = 1;
      loader.style.display = 'none';
      loaderWrapper.style.display = 'none';
    }
  }
};

// Usage
const videoElements = document.querySelectorAll('.parallax_video-element');
const playButtons = document.querySelectorAll('.parallax_video-play');
const pauseButtons = document.querySelectorAll('.parallax_video-pause');
const covers = document.querySelectorAll('.parallax_cover');
const loaders = document.querySelectorAll('.loader');
const loaderWrappers = document.querySelectorAll('.loader_wrapper');

lazyLoadVideos(videoElements);
handleVideoVisibility(videoElements, playButtons, pauseButtons, covers, loaders, loaderWrappers);
document.addEventListener('click', handlePlayPauseClick);
