class AddDateLocationToEvents < ActiveRecord::Migration
  def change
    add_column :events, :location, :string
    add_column :events, :date, :date
  end
end
