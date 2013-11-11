class ScrapbooksController < ApplicationController
  def show
    #raise
    @event = Scrapbook.event_id
    #binding.pry
  end


end
