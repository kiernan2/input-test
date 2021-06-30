$(document).ready(function(event) {
  let name;
  $("form#input").submit(function(event) {
    event.preventDefault();
    name = $("#name").val();
    $("#output").text(name);
  });
});