class AddEventidToScrapbooks < ActiveRecord::Migration
  def change
    add_column :scrapbooks, :event_id, :integer
  end
end
