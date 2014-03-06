class CreateShops < ActiveRecord::Migration
  def change
    create_table :shops do |t|
      t.string :name
      t.text :address
      t.string :phone
      t.integer :agency
      t.string :cardtemplate
      t.string :pagetemplate
      t.string :logo

      t.timestamps
    end
  end
end
