class ScrapbooksController < ApplicationController
  def show

    @scrapbook = Scrapbook.find(params[:id])
    @event = @scrapbook.event
    #binding.pry
  end


end
