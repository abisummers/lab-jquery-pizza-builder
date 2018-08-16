// Write your Pizza Builder JavaScript in this file.

//selector is the query that will give us the DOM element with the price eg(".price b")
function getPrice(selector) {
  return +$(selector)[0].innerText.match(/[0-9]+/)[0];
}

var price = getPrice(".price b");
console.log(price);

$(".btn-pepperonni").click(function() {
  $(this).toggleClass("active");
  $(".pep").toggle();
  $(".price li:contains('pepperonni')").toggle();
});

$(".btn-green-peppers").click(function() {
  $(this).toggleClass("active");
  $(".green-pepper").toggle();
  $(".price li:contains('green peppers')").toggle();
});

$(".btn-mushrooms").click(function() {
  $(this).toggleClass("active");
  $(".mushroom").toggle();
  $(".price li:contains('mushroom')").toggle();
});

$(".sauce").removeClass("sauce-white");
$(".btn-sauce").removeClass("active");
$(".price li:contains('white sauce')").hide();

$(".btn-sauce").click(function() {
  $(this).toggleClass("active");
  $(".sauce").toggleClass("sauce-white");
  $(".price li:contains('white sauce')").toggle();
});

$(".crust").removeClass("crust-gluten-free");
$(".btn-crust").removeClass("active");
$(".price li:contains('gluten-free crust')").hide();

$(".btn-crust").click(function() {
  $(this).toggleClass("active");
  $(".crust").toggleClass("crust-gluten-free");
  $(".price li:contains('gluten-free crust')").toggle();
});
