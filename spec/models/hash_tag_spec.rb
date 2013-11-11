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

require 'spec_helper'

describe HashTag do
  pending "add some examples to (or delete) #{__FILE__}"
end
