class CreateUsertemplates < ActiveRecord::Migration
  def change
    create_table :usertemplates do |t|
      t.string :name
      t.string :pic
      t.text :description

      t.timestamps
    end
  end
end
