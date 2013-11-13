$(document).ready(function() {
  $(function() {
    $( "#tabs" ).tabs();
  });

  //instagram 
  $( "#tabs-1 div" ).draggable({
    cancel: "a.ui-icon",
    revert: "invalid",
    cursor: "move"
    helper: "clone",
    helper: function() {
      var helper = $(this).clone()
            .css({ "width":"250px", "height": "250px" });
      return helper;
    },
    appendTo: "#canvas",
  });

  //twitter 
  $( "#tabs-2 div").draggable({
    cancel: "a.ui-icon",
    revert: "invalid", 
    helper: "clone",
    helper: function() {
      var helper = $(this).clone(); 
      return helper;
    },
    appendTo: "#canvas",
    cursor: "move"
  });

  $( '#canvas' ).droppable({
    accept: "#tabs-1 .image-container, #tabs-2 .tweet-container",
    drop: function( event, ui ) {
      if (ui.draggable.hasClass('tweet-container')) {
        var $droppedElement = ui.helper.clone()
          .resizable();
      } else {
        var $droppedElement = ui.helper.clone()
          .resizable({ aspectRatio: true });
      }
      $droppedElement.draggable({
        start: function() {
          zIndex += 1;
          $(this).css({"z-index":zIndex});
        }
      });
      $(this).append($droppedElement);
    }
  });

})
var zIndex = 0;
