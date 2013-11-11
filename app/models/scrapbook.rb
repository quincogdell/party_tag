class Scrapbook < ActiveRecord::Base
  attr_accessible :name
  has_many :pages
  belongs_to :event
  belongs_to :user
end
