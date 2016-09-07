$(function() {
  $("#submit").on("click", function() {
    var value = $("#keyword").val();
    $("#result").text(value);
  });
});
