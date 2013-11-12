// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/

var Scrapbook = {};



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
  var clientID = "client_id=7201ce9799fa4f4b9d5b4ece1d9f8251";
  var url = "https://api.instagram.com/v1/";
  var queryItem = "/tags/" + testTag + "/media/recent?";
  var queryString = url + queryItem + clientID; //"&callback=testCallBack";

  $.ajax({
    type: 'get',
    url: queryString,
    dataType: "json"
  }).done(function(data){
    Scrapbook.testCallBack(data);
  });
};

Scrapbook.testCallBack = function(data){
  console.log(data);
};
