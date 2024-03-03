$("[data-btn='wrap']").each(function () {
  const clipEl = $(this).find("[data-btn='clip']").attr("aria-hidden", "true");
  const durationSetting = 0.6;
  const easeSetting = "power2.out";

  function getPercentTop(el, e) {
    let elTop = el.offset().top - $(window).scrollTop();
    let mouseTop = e.pageY - $(window).scrollTop() - elTop;
    return (mouseTop / el.innerHeight()) * 100;
  }
  function getPercentLeft(el, e) {
    let elLeft = el.offset().left;
    let mouseLeft = e.pageX - elLeft;
    return (mouseLeft / el.innerWidth()) * 100;
  }
  $(this).on("mouseenter", function (e) {
    let percentTop = getPercentTop($(this), e);
    let percentLeft = getPercentLeft($(this), e);
    gsap.set(clipEl, { display: "flex" });
    gsap.fromTo(clipEl, { clipPath: `circle(0% at ${percentLeft}% ${percentTop}%)` }, { clipPath: `circle(141.4% at ${percentLeft}% ${percentTop}%)`, duration: durationSetting, ease: easeSetting });
  });
  $(this).on("mouseleave", function (e) {
    let percentTop = getPercentTop($(this), e);
    let percentLeft = getPercentLeft($(this), e);
    gsap.to(clipEl, { clipPath: `circle(0% at ${percentLeft}% ${percentTop}%)`, overwrite: true, duration: durationSetting, ease: easeSetting });
  });
});
