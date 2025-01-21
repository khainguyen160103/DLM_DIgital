$(".jarallax").jarallax({
  speed: 0.2,
});
console.log($(".scroll_text"));
const elNav = $(".scroll_text");
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 400) {
    $("nav").addClass("nav_fixed");
    elNav.removeClass("text-white");
    console.log(check);
  } else {
    $("nav").removeClass("nav_fixed");
    elNav.addClass("text-white");
  }
});
