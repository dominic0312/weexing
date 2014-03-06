class CreateCouponCustomerTable < ActiveRecord::Migration
  def change
    create_table :customers_coupons do |t|
      t.belongs_to :customer
      t.belongs_to :coupon
    end
  end
end
