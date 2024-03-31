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
const handleVideoVisibility = (videoElement, playButton, pauseButton, cover, loader, loaderWrapper) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !videoElement.dataset.manuallyPaused) {
        videoElement.play().catch((error) => {
          console.error('Error playing video:', error);
          // Handle playback error, e.g., show an error message or fallback
        });
        playButton.style.display = 'none';
        pauseButton.style.display = 'block';
        loader.style.display = 'flex';
        loaderWrapper.style.display = 'flex';
      } else if (!entry.isIntersecting) {
        videoElement.pause();
        if (!videoElement.dataset.manuallyPaused) {
          pauseButton.style.display = 'none';
          playButton.style.display = 'block';
        }
        cover.style.opacity = 1;
        loader.style.display = 'none';
        loaderWrapper.style.display = 'none';
      }
    });
  }, { threshold: 0.5 }); // Adjust the threshold as needed
  observer.observe(videoElement);
};

document.querySelectorAll('.parallax_video-element').forEach((videoElement) => {
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
  handleVideoVisibility(videoElement, playButton, pauseButton, cover, loader, loaderWrapper);

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
      delete videoElement.dataset.manuallyPaused;
    } else {
      videoElement.pause();
      pauseButton.style.display = 'block';
      playButton.style.display = 'none';
      cover.style.opacity = 1;
      loader.style.display = 'none';
      loaderWrapper.style.display = 'none';
      videoElement.dataset.manuallyPaused = 'true';
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
    delete videoElement.dataset.manuallyPaused;
  });

  videoElement.addEventListener('playing', () => {
    cover.style.opacity = 0;
    loader.style.display = 'none';
    loaderWrapper.style.display = 'none';
  });

  // Handle play/pause button visibility on desktop
  const handleButtonVisibilityDesktop = () => {
    if (!videoElement.paused) {
      playButton.style.opacity = 0;
      pauseButton.style.opacity = 1;
    } else {
      playButton.style.opacity = 1;
      pauseButton.style.opacity = 1;
    }
  };

  if (window.innerWidth >= 768) {
    mockup.addEventListener('mouseenter', () => {
      playButton.style.transition = 'opacity 200ms ease-out';
      pauseButton.style.transition = 'opacity 200ms ease-out';
      handleButtonVisibilityDesktop();
    });

    mockup.addEventListener('mouseleave', () => {
      playButton.style.opacity = 0;
      if (!videoElement.paused) {
        pauseButton.style.opacity = 0;
      }
    });
  }

  // Handle play/pause button visibility on tablet and below
  let buttonVisible = false;

  const handleButtonVisibilityMobile = () => {
    if (buttonVisible) {
      playButton.style.opacity = 0;
      if (!videoElement.paused) {
        pauseButton.style.opacity = 0;
      }
    } else {
      if (!videoElement.paused) {
        playButton.style.opacity = 0;
        pauseButton.style.opacity = 1;
      } else {
        playButton.style.opacity = 1;
        pauseButton.style.opacity = 1;
      }
    }
    buttonVisible = !buttonVisible;
  };

  if (window.innerWidth < 768) {
    videoElement.addEventListener('click', handleButtonVisibilityMobile);
  }
});
