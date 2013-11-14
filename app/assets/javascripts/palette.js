$(document).ready(function() {
  $(".palette").on("click", changePalette);
  $("#save-button").on("click", saveButton);
  var palette = {
    label: null
  };
});


var changePalette = function(e) {
  var label = $(this).attr("id")
  $("." + palette.label).not($(".palette")).removeClass(palette.label)
  $(".image-container").addClass(label);
  $(".tweet-container").addClass(label);
  $("#canvas").addClass(label);
  var color = $("#canvas").css("background-color");
  $("#container").css("background-color", color);
  palette.label = label;
}

var saveButton = function(e) {
  e.preventDefault();
  var name = ("#scrap-name").val();
  Canvas.save(name);
  $("#saved").fadeIn(fast);
  $("#saved").fadeOut(slow);
}
