# == Schema Information
#
# Table name: scrapbooks
#
#  id         :integer          not null, primary key
#  name       :string(255)
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  event_id   :integer
#

class Scrapbook < ActiveRecord::Base
  attr_accessible :name
  attr_accessible :canvas
  attr_accessible :html
  belongs_to :event
  belongs_to :user
end
