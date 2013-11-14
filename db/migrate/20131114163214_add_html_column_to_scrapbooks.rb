class AddHtmlColumnToScrapbooks < ActiveRecord::Migration
  def change
    add_column :scrapbooks, :html, :text
  end
end
