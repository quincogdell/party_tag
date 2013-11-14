# == Schema Information
#
# Table name: events
#
#  id         :integer          not null, primary key
#  title      :string(255)
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Event < ActiveRecord::Base
   attr_accessible :title, :user_id, :hash_tag, :location, :date
   belongs_to :user
   has_many :scrapbooks
end
