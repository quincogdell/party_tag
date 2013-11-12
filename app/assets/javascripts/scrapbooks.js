// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/

$(document).ready(function() {
  Scrapbook.setEventListeners();
  Scrapbook.queryTwitter();
  Scrapbook.queryInstagram();
  Scrapbook.eventId = $('#javascript-info').data('eventid');
  Scrapbook.hashTags = $('#javascript-info').data('hash-tags');
});

var Scrapbook = {};
var instaData, $instagram, response;

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


Scrapbook.setEventListeners = function() {
  $instagram = $("#instagram-pictures");

};

Scrapbook.queryInstagram = function() {
  var testTag = "PartyTagWorkWeek";
  var clientID = "client_id=7201ce9799fa4f4b9d5b4ece1d9f8251";
  var url = "https://api.instagram.com/v1/";
  var queryItem = "/tags/" + testTag + "/media/recent?";
  var queryString = url + queryItem + clientID; //+ "&callback=testCallBack";

  $.ajax({
    type: 'get',
    url: queryString,
    dataType: "jsonp",

  }).done(function(response){
    //debugger
    var data = response.data;
    console.log(data);
    $.each(data, function(){

      var img_url = this.images.standard_resolution.url;

      console.log(img_url);
      // $("<img />").attr("src", img_url);
      $instagram.append($("<img/>").attr("src", img_url));
    });

    // Scrapbook.addInstaPics(data);
  });
};

// Scrapbook.testCallBack = function(data){
//   instaData = data;
//   console.log(instaData);
// };

// Scrapbook.addInstaPics(data){
//   console.log(data);
// };
