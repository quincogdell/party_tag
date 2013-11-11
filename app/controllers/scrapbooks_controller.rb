class ScrapbooksController < ApplicationController
  def show

    @scrapbook = Scrapbook.find(params[:id])
    @event = Event.find(@scrapbook.event_id)
    #binding.pry
  end


end
