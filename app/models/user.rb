# == Schema Information
#
# Table name: users
#
#  id               :integer          not null, primary key
#  uid              :string(255)
#  oauth_token      :string(255)
#  oauth_expires_at :date
#  name             :string(255)
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  provider         :string(255)
#

class User < ActiveRecord::Base
  attr_accessible :name, :oauth_expires_at, :oauth_token, :uid
  has_many :scrapbooks
  has_many :events

  def self.from_omniauth(auth)
    where(auth.slice(:provider, :uid)).first_or_initialize.tap do |user|
      user.provider = auth.provider
      user.uid = auth.uid
      user.name ||= auth.info.name
      user.oauth_token = auth.credentials.token
      user.oauth_expires_at = Time.at(auth.credentials.expires_at)
      user.save!
    end
  end
end
