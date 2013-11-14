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
  $("tabs").css("margin-top", clear);
  height = $(window).height() - clear;
  $("#tabs").css("height", height);
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
  if ($("#container").hasClass("no-books")) {
    $(".no-books").removeClass("no-books");
    $("#canvas").empty();
    setSize();
  }
}

