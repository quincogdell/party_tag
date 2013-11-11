class CreateScrapbooks < ActiveRecord::Migration
  def change
    create_table :scrapbooks do |t|
      t.string :name
      t.belongs_to :user

      t.timestamps
    end
  end
end
