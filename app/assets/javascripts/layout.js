$(document).ready(function() {
  setSize();
  $("#event_title").focus()
});

  $(window).resize(function() {setSize();});
  var setSize = function () {
    var clear = $("#nav").height();
    clear += 10;
    $("#nav-case").css("height", clear);
    clear -= 10;
    height = $(window).height() - clear;
    $("#tabs").css("height", height);
    var width = $("#container").width();
    width -= $("#canvas").width();
    width -= 12;
    $("#tabs-div").css("width", width);
    $("#buttons").css("width", width);
    $("#tabs").css("width", width);
    var size = $("#buttons ul li").width();
    if (size/7 < 26) {
      $("#buttons ul").css("font-size", size/7);
    };
    $("#tab-clear").css("height", $("#buttons").height() + 20);
  }
  var changeOver = function() {
    if ($("#container").hasClass("no-books")) {
      $(".no-books").removeClass("no-books");
      $("#canvas").empty();
      $("#button-div").removeClass("hidden");
      setSize();
    }
  }

