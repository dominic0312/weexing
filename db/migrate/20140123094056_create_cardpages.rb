class CreateCardpages < ActiveRecord::Migration
  def self.up
    create_table :cardpages do |t|
      t.string :account
      t.string :brand
      t.string :logo
      t.string :cardtemplate
      t.timestamps
    end
  end
  
  def self.down
    drop_table :cardpages
  end
  
end
