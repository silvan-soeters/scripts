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
  const grain1 = document.querySelector('#grain1');
  const grain2 = document.querySelector('#grain2');
  const grain3 = document.querySelector('#grain3');
  const grain4 = document.querySelector('#grain4');
  const grain5 = document.querySelector('#grain5');
  
  if (grain1) {
    grained('#grain1', options);
  }
  if (grain2) {
    grained('#grain2', options);
  }
  if (grain3) {
    grained('#grain3', options);
  }
  if (grain4) {
    grained('#grain4', options);
  }
  if (grain5) {
    grained('#grain5', options);
  }
};

// Apply the grained effect to elements on page load
applyGrainedEffect();
