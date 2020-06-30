$(document).ready(function () {
  // console.log("jquery is hooked up properly");

  //   var $h1 = document.createElement("h1");
  var $h1 = $("<h1>");

  //   $h1.textContent = "hello world";
  $h1.text("hello world");

  // $(body).append($h1);

  $("#todoContainer").append($h1);

  var $h3 = $("<h3>");
  $h3.text("example text here");

  $("#todoContainer").append($h3);

  $("body").append($h3);

  var theThings = $("h3");

  theThings.attr("class", "blue");
});
