$(document).ready(function() {

  Event.setEventListeners();
  //Event.queryTwitter();
  //Event.queryInstagram();
  Event.eventId = $('#javascript-info').data('eventid');
  Event.hashTags = $('#javascript-info').data('hash-tags');
});

var Event = {};
var instaData, $instagram, response;

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

};

Event.queryInstagram = function() {
  var testTag = "PartyTagWorkWeek";
  var clientID = "client_id=7201ce9799fa4f4b9d5b4ece1d9f8251";
  var url = "https://api.instagram.com/v1/";
  var queryItem = "/tags/" + testTag + "/media/recent?";
  var queryString = url + queryItem + clientID; //+ "&callback=testCallBack";

  $.ajax({
    type: 'get',
    url: queryString,
    dataType: "jsonp",

  }).done(Event.addInstaPics(response));
  // function(response){
  //   var data = response.data;
  //   console.log(data);
  //   $.each(data, function(){

  //     var img_url = this.images.standard_resolution.url;

  //     console.log(img_url);
  //     // $("<img />").attr("src", img_url);
  //     $instagram.append($("<img/>").attr("src", img_url));
  //   });

  // });
};

Event.hitInstagram = function(response){
  var data = response.data;
  console.log(data);

  $.each(data, function(){

      var img_url = this.images.standard_resolution.url;

      console.log(img_url);
      $instagram.append($("<img/>").attr("src", img_url));
    });
};

  Event.addInstaPics(data){
  console.log(data);
};


