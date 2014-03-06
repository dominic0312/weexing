class CreateCustomers < ActiveRecord::Migration
  def change 
    create_table :customers do |t|
      t.string :owner
      t.string :cardid
      t.integer :balance
      t.integer :bonus
      t.string :realcardid
      t.string :level
      t.string :openid
      t.timestamps
    end
  end
end
