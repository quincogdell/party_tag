Scrapbook.queryTwitter = function() {

  $.ajax({
    url: "/events/" + Scrapbook.eventId + "/get_tweets",
    type: "GET",
    dataType: "json"
  }).done(function() {
    debugger;
  });

};
