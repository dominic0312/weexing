class CreateRequestcoupons < ActiveRecord::Migration
  def change
    create_table :requestcoupons do |t|
      t.integer :couponid

      t.timestamps
    end
  end
end
