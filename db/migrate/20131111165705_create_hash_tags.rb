class CreateHashTags < ActiveRecord::Migration
  def change
    create_table :hash_tags do |t|
      t.string :tag_name
      t.belongs_to :event

      t.timestamps
    end
  end
end
