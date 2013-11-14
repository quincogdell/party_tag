class EventsController < ApplicationController
  Twitter.configure do |config|
    config.consumer_key = "Zop7bMbc1k8sbNQiXK1uYA"
    config.consumer_secret = "DbZRp7pBMggmrOFmQOJBcW2xUqlqaJfq0t81QOwt3o"
    config.oauth_token = "613963917-lPfoNtgLDKarrNnr8tVXteroJ5w2EgzzwLmEyMW0"
    config.oauth_token_secret = "NgEZCQXvBKptn8ZiDLuL4KvP7wCJQkgzgjCYv222P1gUR"
  end

  def get_tweets
    #spit back tweets that match given event (in json)
    event = Event.find(params[:event_id])
    search_hash_tag = "#" + event.hash_tag + " -rt"

    results = Twitter.search(search_hash_tag, :count => 20).results
    res_array = []

    results.each do |result|
      res_hash = {}
      res_hash[:text] = result.text
      res_hash[:author] = result.from_user
      res_array << res_hash
    end
    render :json => JSON.generate(res_array)
  end
  def index
    redirect_to "/"
  end
  def new
    @event = Event.new
  end
  def create
    event = Event.new(params[:event])
    event.user_id = session[:user_id]
    event.save
    redirect_to "/"
  end
  def show
    @event = Event.find(params[:id])
    # @date = Date.strptime(
    #   @event.date,
    #   "%Y-%m-%d %H:%M:%S %Z"
    #   ).strftime("%m/%d/%Y")
  end
  def edit
    @event = Event.find(params[:id])
  end
  def update
    @event = Event.find(params[:id])
    @event.update_attributes(params[:event])
    @event.save
    redirect_to "/events/#{@event.id}"
  end
  def destroy
    @event = Event.find(params[:id])
    @event.delete
    redirect_to "/"
  end
end
