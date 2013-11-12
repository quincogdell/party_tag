class UsersController < ApplicationController
  def show
    if session[:user_id]
      @user = User.find(session[:user_id])
      @events = @user.events
      @books = @user.scrapbooks
    else
      redirect_to "/login"
    end
  end
end
