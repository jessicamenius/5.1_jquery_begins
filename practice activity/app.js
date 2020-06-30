$(document).ready(function () {
  var counter = 0;
  var $h3 = $("<h3> Counter goes up with each click</h3>");
  var $p = $("<p>");
  $("body").prepend($p);
  $p.text(counter);
  $("body").prepend($h3);

  $(btnSubmit).on("click", function () {
    counter++;
  });

  $(btnSubmit).on("click", function () {
    counter = 0;
  });
});

// $(document).ready(function () {
//     var counter = 0;
//     var $h1 = $("<h1>");
//     $("body").prepend($h1);
//     $h1.text(counter);
//   ​
//     $("#btnSubmit").on("click", function () {
//       counter++;
//       $h1.text(counter);
//     });
//     $("#btnReset").on("click", function () {
//       counter = 0;
//       $h1.text(counter);
//     });
//   });
