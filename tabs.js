// Tabs Functionality
const tabsLinks = document.querySelectorAll(".tab_tab-link");
const tabsPanes = document.querySelectorAll(".tab_tab-pane");

tabsLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    if (link.classList.contains("is-active")) return;

    const activeLink = document.querySelector(".tab_tab-link.is-active");
    const activePane = document.querySelector(".tab_tab-pane.is-active");

    activeLink.classList.remove("is-active");
    activePane.classList.remove("is-active");

    link.classList.add("is-active");

    setTimeout(() => {
      tabsPanes[index].classList.add("is-active");
    }, 500);
  });
});
