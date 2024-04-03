// Helper function to lazy-load videos
const lazyLoadVideo = (videoElement) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.src = entry.target.dataset.src;
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '200px' });
  observer.observe(videoElement);
};

// Helper function to handle video playback based on visibility
const handleVideoVisibility = (videoElement, playButton, pauseButton, cover, loader, loaderWrapper, isFirstSlide, isInitial) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (videoElement.paused && isFirstSlide && isInitial) {
          videoElement.play().catch((error) => {
            console.error('Error playing video:', error);
            // Handle playback error, e.g., show an error message or fallback
          });
          playButton.style.display = 'none';
          pauseButton.style.display = 'block';
          loader.style.display = 'flex';
          loaderWrapper.style.display = 'flex';
        }
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
  observer.observe(videoElement);
};

let isInitial = true;

document.querySelectorAll('.parallax_video-element').forEach((videoElement, index) => {
  // Lazy-load the video when it's in view
  lazyLoadVideo(videoElement);

  // Handle video playback and UI
  const mockup = videoElement.closest('.parallax_ipad-mockup');
  const playButton = mockup.querySelector('.parallax_video-play');
  const pauseButton = mockup.querySelector('.parallax_video-pause');
  const cover = mockup.querySelector('.parallax_cover');
  const loader = mockup.querySelector('.loader');
  const loaderWrapper = mockup.querySelector('.loader_wrapper');

  // Handle video playback based on visibility
  const isFirstSlide = index === 0;
  handleVideoVisibility(videoElement, playButton, pauseButton, cover, loader, loaderWrapper, isFirstSlide, isInitial);

  // Handle manual play/pause functionality
  const handlePlayPause = () => {
    if (videoElement.paused) {
      videoElement.play().catch((error) => {
        console.error('Error playing video:', error);
        // Handle playback error, e.g., show an error message or fallback
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
  };

  playButton.addEventListener('click', handlePlayPause);
  pauseButton.addEventListener('click', handlePlayPause);

  videoElement.addEventListener('ended', () => {
    pauseButton.style.display = 'none';
    playButton.style.display = 'block';
    cover.style.opacity = 1;
    loader.style.display = 'none';
    loaderWrapper.style.display = 'none';
  });

  videoElement.addEventListener('playing', () => {
    cover.style.opacity = 0;
    loader.style.display = 'none';
    loaderWrapper.style.display = 'none';
  });
});

// Add event listener to detect slide changes
const slider = document.querySelector('.slider2_component');
slider.addEventListener('slidechange', () => {
  const activeSlide = slider.querySelector('.w-active');
  const videoElement = activeSlide.querySelector('.parallax_video-element');
  const controlsElement = activeSlide.querySelector('.parallax_controls');

  if (videoElement) {
    // Show the controls and display the play button
    controlsElement.style.opacity = '100';
    const playButton = activeSlide.querySelector('.parallax_video-play');
    const pauseButton = activeSlide.querySelector('.parallax_video-pause');
    playButton.style.display = 'block';
    pauseButton.style.display = 'none';
  }

  isInitial = false;
});
