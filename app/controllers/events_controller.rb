class EventsController < ApplicationController
  Twitter.configure do |config|
    config.consumer_key = "Zop7bMbc1k8sbNQiXK1uYA"
    config.consumer_secret = "DbZRp7pBMggmrOFmQOJBcW2xUqlqaJfq0t81QOwt3o"
    config.oauth_token = "613963917-lPfoNtgLDKarrNnr8tVXteroJ5w2EgzzwLmEyMW0"
    config.oauth_token_secret = "NgEZCQXvBKptn8ZiDLuL4KvP7wCJQkgzgjCYv222P1gUR"
  end

  def get_tweets
    #spit back tweets that match given event (in json)
    
    #event = Event.find(params[:event_id])
    #serach_hash_tag = event.hash_tags.first.tag_name

    serach_hash_tag = "#partytagworkweek"

    results = Twitter.search("#partytagworkweek -rt", :count => 20).results
    res_array = [] 

    results.each do |result|
      res_hash = {}
      res_hash[:text] = result.text
      res_hash[:author] = result.from_user
      res_array << res_hash
    end

    render :json => JSON.generate(res_array)
  end
end
