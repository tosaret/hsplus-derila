$(document).ready(function () {
  // PAYMENT FORM SUBMISSION
  $("#paymentForm").on("submit", function (event) {
    event.preventDefault();

    var size1 = $("#size1").is(":checked");
    var size2 = $("#size2").is(":checked");
    var qty1 = $("#qty1").is(":checked");
    var qty2 = $("#qty2").is(":checked");
    var qty3 = $("#qty3").is(":checked");
    var qty4 = $("#qty4").is(":checked");

    // STANDART SIZE
    if (size1 === true) {
      // QUANTITY = 1
      if (qty1 === true) {
        window.location.href = "/?size=standart&qty=1";
      }
      // QUANTITY = 2
      if (qty2 === true) {
        window.location.href = "/?size=standart&qty=2";
      }
      // QUANTITY = 3
      if (qty3 === true) {
        window.location.href = "/?size=standart&qty=3";
      }
      // QUANTITY = 4
      if (qty4 === true) {
        window.location.href = "/?size=standart&qty=4";
      }
    }

    // PLUS SIZE
    if (size2 === true) {
      // QUANTITY = 1
      if (qty1 === true) {
        window.location.href = "/?size=plus&qty=1";
      }
      // QUANTITY = 2
      if (qty2 === true) {
        window.location.href = "/?size=plus&qty=2";
      }
      // QUANTITY = 3
      if (qty3 === true) {
        window.location.href = "/?size=plus&qty=3";
      }
      // QUANTITY = 4
      if (qty4 === true) {
        window.location.href = "/?size=plus&qty=4";
      }
    }
  });
});
