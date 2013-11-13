$(document).ready(function() {

  Event.setEventListeners();
  Event.queryInstagram();
  // Event.queryTwitter();
  Event.eventId = $('#javascript-info').data('eventid');
  Event.hashTags = $('#javascript-info').data('hash-tags');
});

var Event = {};
var $instagram, $tag, response;

// Event.queryTwitter = function() {
//   $.ajax({
//     url: "/events/" + Event.eventId + "/get_tweets",
//     type: "GET",
//     dataType: "json"
//   }).done(function(tweets_array) {
//     $.each(tweets_array, function(index, tweet) {
//       var tweetEl = $('<div></div>').addClass('tweet-container')

//       var tweetText = $('<span></span>').addClass('tweet-text')
//       tweetText[0].textContent = tweet.text

//       var tweetAuthor = $('<span></span>').addClass('tweet-author')
//       tweetAuthor[0].textContent = tweet.author
//       tweetEl.append(tweetText)
//       tweetEl.append(tweetAuthor)
//       $('#tabs-2').append(tweetEl)
//     })
//   });
// };


Event.setEventListeners = function() {
  $instagram = $("#tabs-1");
  $tag = $("#tags").text().trim();

};

Event.queryInstagram = function() {

  // var tag = $tag;
  var clientID = "client_id=7201ce9799fa4f4b9d5b4ece1d9f8251";
  var url = "https://api.instagram.com/v1/";
  var queryItem = "/tags/" + $tag + "/media/recent?";
  var queryString = url + queryItem + clientID;

  $.ajax({
    type: 'get',
    url: queryString,
    dataType: "jsonp",

  }).done(Event.addInstagramPics);

};

Event.addInstagramPics = function(response){
  var data = response.data;
  console.log(data);
  $.each(data, function(){
      var img_url = this.images.standard_resolution.url;
      console.log(img_url);
      $instagram.append($("<img/>").attr("src", img_url));
    });
};



