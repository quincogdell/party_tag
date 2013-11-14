class AddImageToScrapbookTable < ActiveRecord::Migration
  def change
    add_column :scrapbooks, :canvas, :text
  end
end
