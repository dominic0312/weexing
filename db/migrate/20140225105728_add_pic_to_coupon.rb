class AddPicToCoupon < ActiveRecord::Migration
  def self.up
    add_column :coupons, :pic, :string
  end

  def self.down
    remove_column :coupons, :pic
  end
end
