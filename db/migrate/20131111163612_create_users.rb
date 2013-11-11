class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :uid
      t.string :oauth_token
      t.date :oauth_expires_at
      t.string :name

      t.timestamps
    end
  end
end
