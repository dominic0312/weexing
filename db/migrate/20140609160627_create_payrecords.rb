class CreatePayrecords < ActiveRecord::Migration
  def change
    create_table :payrecords do |t|
      t.string :user_email
      t.string :order_id
      t.integer :points

      t.timestamps
    end
  end
end
