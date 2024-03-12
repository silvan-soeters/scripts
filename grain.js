let activateGrainOnLoad = false; // Set to true or false based on your preference

// Get the icon element
const toggleIcon = document.querySelector('.sidebar_menu-grain-toggle');

// Initialize a boolean variable to keep track of the state
let isGrainedVisible = false;

// Define the options for the grained function
const options = {
  animate: true,
  patternWidth: 313,
  patternHeight: 313,
  grainOpacity: 0.05,
  grainDensity: 4.37,
  grainWidth: 2.98,
  grainHeight: 2.98
};

// Function to apply the grained effect to elements
const applyGrainedEffect = () => {
  const grainBody = document.querySelector('#grain-body');
  const grainSidebar = document.querySelector('#grain-sidebar');
  const grainProfile = document.querySelector('#grain-profile');

  if (grainBody) {
    grained('#grain-body', options);
    grainBody.style.position = 'fixed';
    grainBody.style.display = 'none'; // Hide the grained body initially
  }
  if (grainSidebar) {
    grained('#grain-sidebar', options);
  }
  if (grainProfile) {
    grained('#grain-profile', options);
  }
  if (activateGrainOnLoad) {
    // Show the grained body element if activateGrainOnLoad is true
    grainBody.style.display = 'block';
  }
};

// Function to show/hide the grained body element
const toggleGrainedVisibility = () => {
  const grainBody = document.querySelector('#grain-body');

  isGrainedVisible = !isGrainedVisible; // Toggle the state

  // Show/hide the grained body element based on the state
  grainBody.style.display = isGrainedVisible ? 'block' : 'none';

  // Update the toggle button opacity
  toggleIcon.style.opacity = isGrainedVisible ? 1 : 0.5;
  
  // Toggle the active/inactive class on the button
  toggleIcon.classList.toggle('active', isGrainedVisible);
  toggleIcon.classList.toggle('inactive', !isGrainedVisible);
};

// Apply the grained effect to elements on page load
applyGrainedEffect();

// Add an event listener to the icon element
toggleIcon.addEventListener('click', toggleGrainedVisibility);
