$(document).ready(function() {
  setSize();
  $("#canvas").on("mouseup", changeOver);
});
$(window).resize(function() {setSize();});
var setSize = function () {
  var clear = $("#nav").height();
  $("#second").css("margin-top", clear);
  clear += $("#second").height();
  clear += 20;
  $("#nav-case").css("height", clear);
  height = $(window).height() - clear;
  // if (height > $("#container").css("min-height")) {
    $("#container").css("height", height);
  // };
  var width = $("#container").width();
  width -= $("#canvas").width();
  width -= 6;
  $("#tabs").css("width", width);
  $("#tabs-1").width;
  var size = $("#tabs ul li").width()
  if (size/7 < 26) {
    $("#tabs ul li").css("font-size", size/7);
  };
}
var changeOver = function() {
  $(".no-books").removeClass("no-books");
  setSize();
}

