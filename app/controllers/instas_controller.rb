class InstasController < ApplicationController

  def index

    render :text => params["hub.challenge"]
  end

  def create
    binding.pry
  end

  def new
  end

  def show
    binding.pry
  end

  def update
  end

  def destroy
  end


end


# https://api.instagram.com/v1/subscriptions?client_secret=87c9bd9600a14c80bfa6cd873815313c&client_id=7201ce9799fa4f4b9d5b4ece1d9f8251
# http://rubydoc.info/github/Instagram/instagram-ruby-gem/Instagram/Client/Subscriptions
