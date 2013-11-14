class GetRidOfHastagModel < ActiveRecord::Migration
  def up
    add_column :events, :hash_tag, :string
    drop_table :hash_tags
  end

  def down
    remove_column :events, :hash_tag
  end
end
