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
    Canvas.draggableTweets();
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
    Canvas.draggableInstagrams();

  });
};

Event.addInstagramPics = function(response){
  var data = response.data;

  $.each(data, function(){

      //create the new base elements for the instagram
      var $instagramElement = $("<div />").addClass("instagram").attr('id', instaId);
      var $instagramImage = $("<div />").addClass("insta-image");
      var $instagramExtras = $("<div />").addClass("insta-extras");

      // other meta data from the instagram json
      var numComments = this.comments.count;
      var instaId = this.id;
      var img_url = this.images.standard_resolution.url;

      // add image and append to instagramElement
      $instagramImage.append($("<img/>").attr("src", img_url));
      $instagramElement.append($instagramImage);

      // re-create the caption
      var $imageOwner = $("<span />").addClass("instaUser");
      $imageOwner.append("@" + this.user.username + " ");
      var $instaCaption = $("<p />").addClass("instaCaption");
      var $caption = $("<span />").addClass("instaText");
      $caption.append(this.caption.text);

      // append the content to the caption
      // and the caption to the Extras
      $instaCaption.append($imageOwner);
      $instaCaption.append($caption);
      $instagramExtras.append($instaCaption);

      // extras are all comments other than the caption
      var $extraContent = $("<p />");

      if (numComments !== 0) {

        var commentsData = this.comments.data;
        $.each(commentsData, function() {
          var $comment = $("<p />");
          var $commentOwner = $('<span />').addClass("instaUser");
          $commentOwner.append("@" + this.from.username + " ");
          var $commentText = $("<span />").addClass("instaText");
          $commentText.append(this.text);
          $comment.append($commentOwner);
          $comment.append($commentText);
          $extraContent.append($comment);
        });
      }

      // $extraContent.append($comments);



      $instagramExtras.append($extraContent);
      $instagramElement.append($instagramExtras);
      $instagram.append($instagramElement);
    });
};



