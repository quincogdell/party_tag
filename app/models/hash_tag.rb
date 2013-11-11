# == Schema Information
#
# Table name: hash_tags
#
#  id         :integer          not null, primary key
#  tag_name   :string(255)
#  event_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class HashTag < ActiveRecord::Base
  attr_accessible :tag_name
  belongs_to :event
end
