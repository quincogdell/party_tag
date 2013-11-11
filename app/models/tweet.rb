# == Schema Information
#
# Table name: tweets
#
#  id         :integer          not null, primary key
#  url        :string(255)
#  text       :string(255)
#  page_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tweet < ActiveRecord::Base
  attr_accessible :text, :url
  belongs_to :page
end
