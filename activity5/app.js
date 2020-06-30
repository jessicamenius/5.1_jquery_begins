$(document).ready(function () {
  var textInput = "";
  var textArray = [];

  $("#btnSubmit").on("click", function (event) {
    event.preventDefault();
    textInput = $("#textInput").val();
    // console.log(textInput);

    textArray.push(textInput);
    console.log(textArray);

    renderTodos();
  });

  function renderTodos() {
    $("#textInput").val("");
    $("#textContainer").html("");
    for (var i = 0; i < textArray.length; i++) {
      $("#textContainer").prepend(`<h1 class = "btn">${textArray[i]}</h1>`);
    }
  }

  $(document).on("click", ".btn", function () {
    console.log("Hello world");
  });

  // $("#delete").html("<h1>This will replace previous text.</h1>");
});
