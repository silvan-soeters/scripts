tabsLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    if (link.classList.contains("is-active")) return;

    const activePane = document.querySelector(".tab_tab-pane.is-active");
    activePane.classList.remove("is-active");

    setTimeout(() => {
      tabsLinks.forEach((tabLink) => tabLink.classList.remove("is-active"));
      tabsPanes.forEach((tabPane) => tabPane.classList.remove("is-active"));

      link.classList.add("is-active");
      tabsPanes[index].classList.add("is-active");
    }, 500);
  });
});
