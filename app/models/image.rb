class Image < ActiveRecord::Base
  attr_accessible :url
  belongs_to :page
end
