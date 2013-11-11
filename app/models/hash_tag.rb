class HashTag < ActiveRecord::Base
  attr_accessible :tag_name
  belongs_to :event
end
