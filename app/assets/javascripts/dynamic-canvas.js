$(document).ready(function() {
  $(function() {
    $( "#tabs" ).tabs();
  });

  $( "#tabs-1 div" ).draggable({
    cancel: "a.ui-icon",
    revert: "invalid",
    helper: "clone",
    helper: function() {
      var helper = $(this).clone().addClass('default-size');
      return helper;
    },
    appendTo: "#canvas",
    opacity: .8,
    cursor: "move"
  });

  $( "#tabs-2 div").draggable({
    cancel: "a.ui-icon",
    revert: "invalid", 
    helper: "clone",
    helper: function() {
      var helper = $(this).clone(); 
      return helper;
    },
    appendTo: "#canvas",
    opacity: .8,
    cursor: "move"
  });

  $( '#canvas' ).droppable({
    accept: "#tabs-1 .image-container, #tabs-2 .tweet-container",
    drop: function( event, ui ) {
      if (ui.draggable.hasClass('tweet-container')) {
        var $droppedElement = ui.draggable.clone()
          .css({"width":"250px"})
          .resizable()
          .draggable({
            start: function() {
              zIndex += 1;
              $(this).css({"z-index":zIndex});
            }
          });
      } else {
        var $droppedElement = ui.draggable.clone()
          .css({"width":"200px", "height":"200px"})
          .resizable({ aspectRatio: true })
          .draggable({
            start: function() {
              zIndex += 1;
              $(this).css({"z-index":zIndex});
            }
          });
      }
      $(this).append($droppedElement);
    }
  });

})
var zIndex = 0;
