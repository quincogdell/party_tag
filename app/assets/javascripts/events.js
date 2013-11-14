$(document).ready(function() {

  Event.setEventListeners();
  Event.queryInstagram();
  Event.queryTwitter();

});

var Event = {};
var $instagram, $tag, response;

Event.queryTwitter = function() {
  $.ajax({
    url: "/events/" + Event.eventId + "/get_tweets",
    type: "GET",
    dataType: "json"
  }).done(function(tweets_array) {
    $.each(tweets_array, function(index, tweet) {
      var tweetEl = $('<div></div>').addClass('tweet-container');

      var tweetText = $('<span></span>').addClass('tweet-text');
      tweetText[0].textContent = tweet.text;

      var tweetAuthor = $('<span></span>').addClass('tweet-author');
      tweetAuthor[0].textContent = tweet.author;
      tweetEl.append(tweetText);
      tweetEl.append(tweetAuthor);
      $('#tabs-2').append(tweetEl);
    });
  });
};

Event.setEventListeners = function() {
  $instagram = $("#tabs-1");
  // $tag = $("#data-hash-tags").text().trim();
  Event.eventId = $('#javascript-info').data('eventid');
  Event.hashTags = $('#javascript-info').data('hash-tags');

};

Event.queryInstagram = function() {
  var clientID = "client_id=7201ce9799fa4f4b9d5b4ece1d9f8251";
  var url = "https://api.instagram.com/v1/";
  var queryItem = "/tags/" + Event.hashTags + "/media/recent?";
  var queryString = url + queryItem + clientID;

  $.ajax({
    type: 'get',
    url: queryString,
    dataType: "jsonp",
  }).done(function(response){
    Event.addInstagramPics(response);
    Canvas.dragableInstagram();
    Canvas.dragableTweets();
  });
};

Event.addInstagramPics = function(response){
  var data = response.data;

  $.each(data, function(){
      var $instagramElement = $("<div />").addClass("instagram");
      var $instagramImage = $("<div />").addClass("insta-image");
      var $instagramExtras = $("<div />").addClass("insta-extras");
      var commentsCount = this.comments.count;


      var img_url = this.images.standard_resolution.url;
      $instagramImage.append($("<img/>").attr("src", img_url));

      $instagramElement.append($instagramImage);

      if (commentsCount !== 0) {
        debugger
        var commentsText = this.comments.data[0].text;
        var $commentsBody = $("<p />").text(commentsText);

        $instagramExtras.append($commentsBody);

        $instagramElement.append($instagramExtras);

      }
      $instagram.append($instagramElement);
    });
};



