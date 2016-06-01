$(document).ready(function() {
  $("#blanks").submit(function(event) {
    var blanks = $("input#sentence").val();
    var uppercase = blanks.toUpperCase();
    alert(uppercase);
    event.preventDefault();



  });
});
