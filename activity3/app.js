$(document).ready(function () {
  //   console.log("Hello world.");

  var $h1 = $(
    "<h1 class='red'>Testing this to make sure the text is red.</h1>"
  );

  $h1.attr("class", "red");
  console.log($h1.attr("class"));

  var $p = $("<p>");
  $p.attr("class", "blue");
  console.log($p.attr("class"));

  var message = "Testing this to make sure the text is blue.";
  $p.text(message);

  $("body").prepend($p);
  $("body").prepend($h1);
});
