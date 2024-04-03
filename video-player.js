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
      if (entry.isIntersecting) {
        if (!videoElement.hasAttribute('data-played')) {
          videoElement.play().catch((error) => {
            console.error('Error playing video:', error);
            // Handle playback error, e.g., show an error message or fallback
          });
          videoElement.setAttribute('data-played', 'true');
        }
      } else {
        videoElement.pause();
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
    } else {
      videoElement.pause();
    }
  };

  playButton.addEventListener('click', handlePlayPause);
  pauseButton.addEventListener('click', handlePlayPause);

  videoElement.addEventListener('play', () => {
    playButton.style.display = 'none';
    pauseButton.style.display = 'none';
    cover.style.opacity = 0;
    loader.style.display = 'none';
    loaderWrapper.style.display = 'none';
  });

  videoElement.addEventListener('pause', () => {
    playButton.style.display = 'block';
    pauseButton.style.display = 'none';
    cover.style.opacity = 1;
    loader.style.display = 'none';
    loaderWrapper.style.display = 'none';
  });

  mockup.addEventListener('mouseenter', () => {
    if (!videoElement.paused) {
      pauseButton.style.display = 'block';
    }
  });

  mockup.addEventListener('mouseleave', () => {
    pauseButton.style.display = 'none';
  });

  // Pause video when switching to a different slide
  const slider = mockup.closest('.parallax_component');
  slider.addEventListener('slide-change', () => {
    videoElement.pause();
  });
});
