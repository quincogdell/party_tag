$(document).ready(function() {
  $(function() {
    $( "#tabs" ).tabs();
  });

  //instagram 
  $( "#tabs-1 div" ).draggable({
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

function saveCanvas () {
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
