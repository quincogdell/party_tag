require 'open-uri'

class ImageController < ApplicationController
  def convert
    image_url = params[:image_url]
    image_file= open(image_url, "rb").read
    send_data image_file, :type => 'image/png', :disposition => 'inline'
  end
end
