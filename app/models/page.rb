# == Schema Information
#
# Table name: pages
#
#  id           :integer          not null, primary key
#  page_text    :text
#  scrapbook_id :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Page < ActiveRecord::Base
  attr_accessible :page_text
  belongs_to :scrapbook
  has_many :pictures
  has_many :tweets
end
