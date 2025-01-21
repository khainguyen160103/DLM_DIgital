$(".jarallax").jarallax({
  speed: 0.2,
});
const elNav = $(".scroll_text");
const menuButton = $(".menu-button");

$(window).on("scroll", function () {
  if ($(window).scrollTop() > 400) {
    $("nav").addClass("nav_fixed");
    elNav.removeClass("text-white");
    $(".bar1").css("background-color", "black");
    $(".bar2").css("background-color", "black");
    $(".bar3").css("background-color", "black");
  } else {
    $("nav").removeClass("nav_fixed");
    elNav.addClass("text-white");
    $(".bar1").css("background-color", "white");
    $(".bar2").css("background-color", "white");
    $(".bar3").css("background-color", "white");
  }
});

menuButton.on("click", function () {
  menuButton.toggleClass("change");
  $("nav ul").toggleClass("show-menu");
  $(".bar1").toggleClass("bg-black");
  $(".bar2").toggleClass("bg-black");
  $(".bar3").toggleClass("bg-black");
});

elNav.parent().on("click", function () {
  $("nav ul").toggleClass("show-menu");
  menuButton.toggleClass("change");
});
