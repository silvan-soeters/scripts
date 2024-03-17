// Tabs Functionality
const tabsLinks = document.querySelectorAll(".tab_tab-link");
const tabsPanes = document.querySelectorAll(".tab_tab-pane");

// Add click event listener to each tab link
tabsLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    // Remove 'is-active' class from all links and panes
    tabsLinks.forEach((tabLink) => tabLink.classList.remove("is-active"));
    tabsPanes.forEach((tabPane) => tabPane.classList.remove("is-active"));

    // Add 'is-active' class to the clicked link
    link.classList.add("is-active");

    // Delay adding 'is-active' class to the related pane for animation
    setTimeout(() => {
      tabsPanes[index].classList.add("is-active");
    }, 50);
  });
});

// Initialize the first tab as active
tabsLinks[0].click();
