// Write your Pizza Builder JavaScript in this file.
$(".sauce").removeClass("sauce-white");
$(".btn-sauce").click(function() {
  var sauces = $(".sauce section").addClass("sauce-white");

  $(".sauce-white").toggle();
});
$(".btn-green-peppers").click(function() {
  $(".green-pepper").toggle();
});
$(".btn-mushrooms").click(function() {
  $(".mushroom").toggle();
});
$(".btn-pepperonni").click(function() {
  $(".pep").toggle();
});
