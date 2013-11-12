// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/

var Scrapbook = {};


Scrapbook.queryTwitter = function() {
  $.ajax({
    url: "/events/" + Scrapbook.eventId + "/get_tweets",
    type: "GET",
    dataType: "json"
  }).done(function(tweets_array) {
    $.each(tweets_array, function(index, tweet) {
      var tweetEl = $('<div></div>').addClass('tweet-container')

      var tweetText = $('<span></span>').addClass('tweet-text')
      tweetText[0].textContent = tweet.text

      var tweetAuthor = $('<span></span>').addClass('tweet-author')
      tweetAuthor[0].textContent = tweet.author
      tweetEl.append(tweetText)
      tweetEl.append(tweetAuthor)
      $('#tweets').append(tweetEl)
    })
  });
};

$(document).ready(function() {
  Scrapbook.setEventListeners();
  Scrapbook.queryInstagram();
  Scrapbook.queryTwitter();
  Scrapbook.eventId = $('#javascript-info').data('eventid')
  Scrapbook.hashTags = $('#javascript-info').data('hash-tags')
});


Scrapbook.setEventListeners = function() {

};

Scrapbook.queryInstagram = function() {
  var testTag = "PartyTagWorkWeek";
  var clientID = "?client_id=7201ce9799fa4f4b9d5b4ece1d9f8251";
  var url = "https://api.instagram.com/v1/";
  var queryItem = "/tags/" + testTag + "media";

  var queryString = url + queryItem + testTag + clientID;




};
