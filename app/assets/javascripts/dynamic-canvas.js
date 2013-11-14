var Canvas = {};

Canvas.zIndex = 0;

Canvas.draggableInstagrams = function() {
  $( "#tabs-1 .instagram" ).draggable({
    cancel: "a.ui-icon",
    revert: "invalid",
    helper: "clone",
    helper: function() {
      var helper = $(this).clone()
    .css({ "width":"250px", "height": "250px" });
  return helper;
    },
    appendTo: "#canvas",
    cursor: "move"
  });
};

Canvas.draggableTweets = function() {
  $( "#tabs-2 .tweet-container").draggable({
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
};

Canvas.droppableCanvas = function() {
  $( '#canvas' ).droppable({
    accept: "#tabs-1 .instagram, #tabs-2 .tweet-container",
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
          Canvas.zIndex += 1;
          $(this).css({"z-index":Canvas.zIndex});
        }
      });
      $(this).append($droppedElement);
    }
  });
};


Canvas.saveCanvas = function () {
  html2canvas(document.getElementById('canvas'), {
    logging: true,
    onrendered: function(canvas) {
      var img = canvas.toDataURL("image/png");
      img = img.replace("image/png","xx/xx");
      downloadURL(img);
    }
  });
}

function downloadURL(url) {
  var hiddenIFrameID = 'hiddenDownloader',
      iframe = document.getElementById(hiddenIFrameID);
  if (iframe === null) {
    iframe = document.createElement('iframe');
    iframe.id = hiddenIFrameID;
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
  }
  iframe.src = url;
};

$(document).ready(function() {
  Canvas.draggableInstagrams();
  Canvas.draggableTweets();
  Canvas.droppableCanvas();

  $(function() {
    $( "#tabs" ).tabs();
  });

})
