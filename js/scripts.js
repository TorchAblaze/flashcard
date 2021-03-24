$(document).ready(function () {
  $(".js").click(function () {
    $(".js-term-showing").slideToggle();
    $(".js-term-hidden").slideToggle();
  });
  $(".op").click(function () {
    $(".op-term-showing").slideToggle();
    $(".op-term-hidden").slideToggle();
  });
});
