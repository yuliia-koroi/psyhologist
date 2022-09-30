$(document).ready(function () {
  $(".hamburger").on("click", function () {
    $(".hamburger").toggleClass("is-active");
		$(".nav-mobile").toggleClass("is-active");
  });

  $(".nav-mobile-link").on("click", function () {
		$(".hamburger").removeClass("is-active");
    $(".nav-mobile").removeClass("is-active");
  });
});
