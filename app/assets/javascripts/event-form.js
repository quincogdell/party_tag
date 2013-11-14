var EventForm = {};

$(document).ready(function() {
  EventForm.setEventListeners();
});

EventForm.setEventListeners = function() {
  $("form").on("submit", EventForm.validate);
};

EventForm.validate = function(e) {
  var inputHashTag = $("#event_hash_tag").val();
  // debugger
  if (inputHashTag.indexOf("#") !== -1) {
    $("#notice").text("Please enter the Event HashTag without a #");
    e.preventDefault();
  } else if (inputHashTag.indexOf(" ") !== -1){
    $("#notice").text("Please enter the Event HashTag without spaces");
    e.preventDefault();
  } else {
    e.submit();
  }

};


