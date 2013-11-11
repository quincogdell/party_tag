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

require 'spec_helper'

describe Page do
  pending "add some examples to (or delete) #{__FILE__}"
end
