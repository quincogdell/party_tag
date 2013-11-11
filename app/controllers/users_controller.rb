class UsersController < ApplicationController
  def show
    @user = User.find(session[:user_id])
    @events = @user.events
    @books = @user.scrapbooks
  end
end
