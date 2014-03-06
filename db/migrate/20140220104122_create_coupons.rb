class CreateCoupons < ActiveRecord::Migration
  def change
    create_table :coupons do |t|
      t.integer :shopid
      t.string :usertype
      t.text :content
      t.date :startdate
      t.date :enddate
      t.string :type
      t.string :present_name
      t.integer :discount
      t.integer :present_value
      t.string :branch

      t.timestamps
    end
  end
end
