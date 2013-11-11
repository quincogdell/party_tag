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
#

require 'spec_helper'

describe User do
  pending "add some examples to (or delete) #{__FILE__}"
end
