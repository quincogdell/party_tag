class CreateTweets < ActiveRecord::Migration
  def change
    create_table :tweets do |t|
      t.string :url
      t.string :text
      t.belongs_to :page

      t.timestamps
    end
  end
end
