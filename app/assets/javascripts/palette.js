var palette = {
  label: null
};

var changePalette = function(label) {
  $("." + palette.label).removeClass(palette.label)
  $(".image-container").addClass(label);
  $(".tweet-container").addClass(label);
  $("#canvas").addClass(label);
  palette.label = label;
}
