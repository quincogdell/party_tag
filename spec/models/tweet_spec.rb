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

require 'spec_helper'

describe Tweet do
  pending "add some examples to (or delete) #{__FILE__}"
end
