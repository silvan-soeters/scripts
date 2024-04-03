document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.slider2_component');
  const slides = slider.querySelectorAll('.slider2_slide');
  const videos = slider.querySelectorAll('.parallax_video-element');
  const playButtons = slider.querySelectorAll('.parallax_video-play');
  const pauseButtons = slider.querySelectorAll('.parallax_video-pause');

  // Function to play the video in the current slide
  function playVideo(slide) {
    const video = slide.querySelector('.parallax_video-element');
    const playButton = slide.querySelector('.parallax_video-play');
    const pauseButton = slide.querySelector('.parallax_video-pause');

    video.play();
    playButton.style.display = 'none';
    pauseButton.style.display = 'block';
  }

  // Function to pause the video in the current slide
  function pauseVideo(slide) {
    const video = slide.querySelector('.parallax_video-element');
    const playButton = slide.querySelector('.parallax_video-play');
    const pauseButton = slide.querySelector('.parallax_video-pause');

    video.pause();
    playButton.style.display = 'block';
    pauseButton.style.display = 'none';
  }

  // Play the video in the first slide when the page loads
  playVideo(slides[0]);

  // Pause the video when hovering over the parallax component
  slides.forEach(function(slide) {
    const parallaxComponent = slide.querySelector('.parallax_component');
    const pauseButton = slide.querySelector('.parallax_video-pause');

    parallaxComponent.addEventListener('mouseenter', function() {
      if (!slide.classList.contains('w-slide')) {
        pauseButton.style.display = 'block';
      }
    });

    parallaxComponent.addEventListener('mouseleave', function() {
      if (!slide.classList.contains('w-slide')) {
        pauseButton.style.display = 'none';
      }
    });
  });

  // Play/pause the video when clicking the play/pause buttons
  playButtons.forEach(function(playButton) {
    playButton.addEventListener('click', function() {
      const slide = playButton.closest('.slider2_slide');
      playVideo(slide);
    });
  });

  pauseButtons.forEach(function(pauseButton) {
    pauseButton.addEventListener('click', function() {
      const slide = pauseButton.closest('.slider2_slide');
      pauseVideo(slide);
    });
  });

  // Pause the video and show the play button when switching slides
  slider.addEventListener('click', function(event) {
    if (event.target.classList.contains('w-slider-arrow-left') || event.target.classList.contains('w-slider-arrow-right')) {
      slides.forEach(function(slide) {
        pauseVideo(slide);
      });
    }
  });

  // Store the video timestamp when pausing or switching slides
  videos.forEach(function(video) {
    video.addEventListener('pause', function() {
      video.dataset.timestamp = video.currentTime;
    });
  });

  // Resume the video from the stored timestamp when playing
  videos.forEach(function(video) {
    video.addEventListener('play', function() {
      if (video.dataset.timestamp) {
        video.currentTime = video.dataset.timestamp;
      }
    });
  });
});
