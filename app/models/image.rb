# == Schema Information
#
# Table name: images
#
#  id         :integer          not null, primary key
#  url        :text
#  page_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Image < ActiveRecord::Base
  attr_accessible :url
  belongs_to :page
end
