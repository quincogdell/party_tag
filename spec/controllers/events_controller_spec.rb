require 'spec_helper'

describe EventsController do

  describe "GET 'get_tweets'" do
    it "returns http success" do
      get 'get_tweets'
      response.should be_success
    end
  end

end
