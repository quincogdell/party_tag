class ScrapbooksController < ApplicationController
  respond_to :json, :html

  def show
    @scrapbook = Scrapbook.find(params[:id])
    @canvas_html = @scrapbook.html
    @canvas_el = @scrapbook.canvas
    @event = @scrapbook.event
    respond_with @scrapbook
  end
  def create
    @scrapbook = Scrapbook.new
    @scrapbook.user = User.find(params[:user_id])
    @scrapbook.event = Event.find(params[:event_id])
    @scrapbook.html = params[:html]
    @scrapbook.canvas = params[:canvas]

    respond_to do |format|
      if @scrapbook.save
        msg = { :status => "ok", :message => "Success", :html => "<b>...</b>" }
        format.json  { render :json => msg } # don't do msg.to_json
      else
        msg = { :status => "boo", :message => "Failure", :html => "<b>...</b>" }
        format.json  { render :json => msg } # don't do msg.to_json
      end
    end
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
