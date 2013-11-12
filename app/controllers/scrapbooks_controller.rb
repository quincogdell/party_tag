class ScrapbooksController < ApplicationController
  respond_to :json, :html
  def show
    @scrapbook = Scrapbook.find(params[:id])
    @event = @scrapbook.event
    respond_with @scrapbook
  end
  def create
    @scrapbook = Scrapbook.create(params[:scrapbook])
    respond_with @scrapbook
    redirect_to "/scrapbooks/@scrapbook.id"
  end
  def update
    @scrapbook = Scrapbook.find(params[:id])
    @scrapbook.update(params[:scrapbook])
    respond_with @scrapbook
    redirect_to "/scrapbooks/@scrapbook.id"
  end
  def destroy
    @scrapbook = Scrapbook.find(params[:id])
    @scrapbook.delete
    redirect_to "/scrapbooks"
  end
end
