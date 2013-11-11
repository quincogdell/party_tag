class Event < ActiveRecord::Base
   attr_accessible :title 
   belongs_to :user
   has_many :hash_tags
   has_many :scrapbooks
end
