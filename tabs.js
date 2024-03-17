// Tabs Functionality
const tabsLinks = document.querySelectorAll(".tab_tab-link");
const tabsPanes = document.querySelectorAll(".tab_tab-pane");

// Add click event listener to each tab link
tabsLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    // Remove 'active' class from all links and panes
    tabsLinks.forEach((tabLink) => tabLink.classList.remove("is-active"));
    tabsPanes.forEach((tabPane) => tabPane.classList.remove("is-active"));

    // Add 'active' class to the clicked link and its related pane
    link.classList.add("is-active");
    tabsPanes[index].classList.add("is-active");
  });
});

// Initialize the first tab as active
tabsLinks[0].click();
