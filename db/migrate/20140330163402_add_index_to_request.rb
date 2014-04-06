class AddIndexToRequest < ActiveRecord::Migration
  def change
    add_index :requestcoupons, :couponid
  end
end
