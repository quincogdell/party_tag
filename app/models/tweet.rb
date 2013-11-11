class Tweet < ActiveRecord::Base
  attr_accessible :text, :url
  belongs_to :page
end
