class CreatePages < ActiveRecord::Migration
  def change
    create_table :pages do |t|
      t.text :page_text
      t.belongs_to :scrapbook

      t.timestamps
    end
  end
end
