var Canvas = {};

Canvas.zIndex = 0;

Canvas.draggableInstagrams = function() {
  $( "#tabs-1 .instagram" ).draggable({
    cancel: "a.ui-icon",
    revert: "invalid",
    helper: "clone",
    helper: function() {
      var helper = $(this).clone()
    .css({ "width":"250px"});
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
      var helper = $(this).clone()
    .css({ "width":"200px", "height": "150px" });
      return helper;
    },
    appendTo: "#canvas",
    cursor: "move"
  });
};

(function($) {
  $.fn.textfill = function(options) {
    var fontSize = options.maxFontPixels;
    var ourText = $(this).find('span').first();
    var nextText = $(this).find('span').last();
    var maxHeight = $(this).height();
    var maxWidth = $(this).width();
    var textHeight;
    var textWidth;
    do {
      ourText.css('font-size', fontSize);
      nextText.css('font-size', fontSize*2/3);
      textHeight = ourText.height();
      textWidth = ourText.width();
      fontSize = fontSize - 1;
    } while ((textHeight > (maxHeight - nextText) || textWidth > maxWidth) && fontSize > 3);
return this;
  }
})(jQuery);

Canvas.draggableBg = function() {};

Canvas.droppableCanvas = function() {
  $( '#canvas' ).droppable({
    accept: "#tabs-1 .instagram, #tabs-2 .tweet-container",
    drop: function( event, ui ) {
      if (ui.draggable.hasClass('tweet-container')) {
        var $droppedElement = ui.helper.clone()
          .resizable({
            resize: function() {
              $($droppedElement).textfill({ maxFontPixels: 50 });
            }
          });
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
      $droppedElement.on('dblclick', function() {
        this.remove()
      })

      $(this).append($droppedElement);
      if ($droppedElement.hasClass('tweet-container')){
        $($droppedElement).textfill({ maxFontPixels: 36 });
      }
    }
  });
};

Canvas.saveToDatabase = function () {
  html2canvas(document.getElementById('canvas'), {
    logging: true,
    onrendered: function(canvas) {
      var img = canvas.toDataURL("image/png");
      $.ajax({
        url: "/scrapbooks",
        type: "POST",
        data: {
          name: name,
          user_id: Event.userId,
          event_id: Event.eventId,
          canvas: img
          },
          dataType: "json"
      })
    }
  });
}

Canvas.downloadCanvas = function () {
  html2canvas(document.getElementById('canvas'), {
    logging: true,
    onrendered: function(canvas) {
      var img = canvas.toDataURL("image/png");
      img = img.replace("image/png","xx/xx");
      Canvas.downloadURL(img);
    }
  });
}

Canvas.downloadURL= function(url) {
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

Canvas.save = function(name) {
  var canvasHtml = $('#canvas-container').html();
  $.ajax({
    url: "/scrapbooks",
    type: "POST",
    data: {
      name: name,
      user_id: Event.userId,
      event_id: Event.eventId,
      html : canvasHtml
    },
    dataType: "json"
  });
};

$(document).ready(function() {
  Canvas.draggableInstagrams();
  Canvas.draggableTweets();
  Canvas.droppableCanvas();

  $(function() {
    $( "#tabs" ).tabs();
  });
})
