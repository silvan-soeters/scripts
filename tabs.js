// Tabs Functionality
const tabsLinks = document.querySelectorAll(".tab_tab-link");
const tabsPanes = document.querySelectorAll(".tab_tab-pane");

tabsLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    if (link.classList.contains("is-active")) return;

    const activeLink = document.querySelector(".tab_tab-link.is-active");
    const activePane = document.querySelector(".tab_tab-pane.is-active");
    const newPane = tabsPanes[index];

    activeLink.classList.remove("is-active");
    link.classList.add("is-active");

    activePane.animate(
      [
        { opacity: 1, transform: 'translateX(0)' },
        { opacity: 0, transform: 'translateX(-100%)' }
      ],
      {
        duration: 500,
        easing: "ease-in-out",
        fill: "forwards"
      }
    ).onfinish = () => {
      activePane.classList.remove("is-active");
      newPane.classList.add("is-active");
      newPane.animate(
        [
          { opacity: 0, transform: 'translateX(100%)' },
          { opacity: 1, transform: 'translateX(0)' }
        ],
        {
          duration: 500,
          easing: "ease-in-out",
          fill: "forwards"
        }
      );
    };
  });
});
