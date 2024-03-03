// Accordion Settings
const accSettings = {
  speed: 300,
  oneOpen: true,
  offsetAnchor: true,
  offsetFromTop: 180,
  scrollTopDelay: 400,
  classes: {
    accordion: "accordion_list",
    header: "accordion_header",
    item: "js-accordion-item",
    body: "js-accordion-body",
    icon: "accordion_icon",
    active: "active",
  },
};
const prefix = accSettings.classes;
const accordion = (function () {
  const accordionElem = $(`.${prefix.accordion}`);
  const accordionHeader = accordionElem.find(`.${prefix.header}`);
  const accordionItem = $(`.${prefix.item}`);
  const accordionBody = $(`.${prefix.body}`);
  const accordionIcon = $(`.${prefix.icon}`);
  const activeClass = prefix.active;
  return {
    // pass configurable object literal
    init: function (settings) {
      accordionHeader.on("click", function () {
        accordion.toggle($(this));
        if (accSettings.offsetAnchor) {
          setTimeout(() => {
            $("html").animate(
              { scrollTop: $(this).offset().top - accSettings.offsetFromTop },
              accSettings.speed,
            );
          }, accSettings.scrollTopDelay);
        }
      });
      $.extend(accSettings, settings);
      // ensure only one accordion is active if oneOpen is true
      if (settings.oneOpen && $(`.${prefix.item}.${activeClass}`).length > 1) {
        $(`.${prefix.item}.${activeClass}:not(:first)`)
          .removeClass(activeClass)
          .find(`.${prefix.header} > .${prefix.icon}`)
          .removeClass(activeClass);
      }
      // reveal the active accordion bodies
      $(`.${prefix.item}.${activeClass}`).find(`> .${prefix.body}`).show();
    },
    toggle: function ($this) {
      if (accSettings.oneOpen) {
        const $accordionList = $this.closest(accordionElem);
        $(`.${prefix.item}`)
          .not($this.closest(`.${prefix.item}`))
          .removeClass(activeClass)
          .find(accordionBody)
          .slideUp(accSettings.speed);
        $(`.${prefix.item}`)
          .not($this.closest(`.${prefix.item}`))
          .find(`> .${prefix.header} > .${prefix.icon}`)
          .removeClass(activeClass);
      }
      $this
        .closest(accordionItem)
        .toggleClass(`${activeClass}`)
        .find(`> .${prefix.header} > .${prefix.icon}`)
        .toggleClass(activeClass);
      $this.next().stop().slideToggle(accSettings.speed);
    },
  };
})();
$(document).ready(function () {
  accordion.init(accSettings);
});
