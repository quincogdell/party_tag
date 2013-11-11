class User < ActiveRecord::Base
  attr_accessible :name, :oauth_expires_at, :oauth_token, :uid
  has_many :scrapbooks
  has_many :events
end
