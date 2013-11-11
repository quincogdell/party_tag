class Page < ActiveRecord::Base
  attr_accessible :page_text
  belongs_to :scrapbook
  has_many :pictures
  has_many :tweets
end
