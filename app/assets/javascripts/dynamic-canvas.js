$(document).ready(function() {
  $(function() {
    $( "#tabs" ).tabs();
  });

  $( "#tabs-1 img" ).draggable({
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

  $( '#canvas' ).droppable({
    accept: "#tabs-1 img, #tabs-2 .tweet-container",
    drop: function( event, ui ) {
      if (ui.draggable.hasClass('tweet-container')) {
        var $droppedElement = ui.draggable.clone()
          .css({"width":"250px"})
          .resizable()
          .draggable();
      } else {
        var $droppedElement = $( "<img></img>" )
            .attr('src',ui.helper.attr('src'))
            .css({"width":"200px", "height":"200px"})
            .resizable({ aspectRatio: true })
            .parent().draggable({
              start: function() {
                zIndex += 1;
                $(this).css({"z-index":zIndex});
              }
            });
      }
      $(this).append($droppedElement);
    }
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
    cursor: "move"
  });
})

var zIndex = 0;
