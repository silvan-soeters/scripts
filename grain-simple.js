// Define the options for the grained function
const options = {
  animate: true,
  patternWidth: 485,
  patternHeight: 485,
  grainOpacity: 0.05,
  grainDensity: 1,
  grainWidth: 1.1,
  grainHeight: 1.1
};

// Function to apply the grained effect to elements
const applyGrainedEffect = () => {
  const grainedElements = document.querySelectorAll('.grained');
  grainedElements.forEach(element => {
    grained(element, options);
  });
};

// Apply the grained effect to elements on page load
applyGrainedEffect();
