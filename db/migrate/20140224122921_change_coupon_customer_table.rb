class ChangeCouponCustomerTable < ActiveRecord::Migration
  def self.up
    rename_table :customers_coupons, :coupons_customers
  end

  def self.down
    rename_table :coupons_customers, :customers_coupons
  end
end
