class EventsController < ApplicationController
  #Twitter.configure do |config|
    #config.consumer_key = "Zop7bMbc1k8sbNQiXK1uYA"
    #config.consumer_secret = "DbZRp7pBMggmrOFmQOJBcW2xUqlqaJfq0t81QOwt3o"
    #config.oauth_token = "613963917-lPfoNtgLDKarrNnr8tVXteroJ5w2EgzzwLmEyMW0"
    #config.oauth_token_secret = "NgEZCQXvBKptn8ZiDLuL4KvP7wCJQkgzgjCYv222P1gUR"
  #end

  def get_tweets
    #spit back tweets that match given event (in json)
    binding.pry
  end
  def new
    @event = Event.new
  end
  def create
    event = Event.new(params[:event])
    event.save
    tags = params[:tags].split(", ")
    tags.each do |tag|
      HashTag.create({tag_name: tag, event_id: event.id})
    end
  end
end
