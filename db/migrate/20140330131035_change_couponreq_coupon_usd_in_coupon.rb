class ChangeCouponreqCouponUsdInCoupon < ActiveRecord::Migration
  def up
    change_column :coupons, :discount, :integer , :default=> 0
    change_column :coupons, :present_value, :integer , :default=> 0
    rename_column :coupons, :discount, :coupon_req
    rename_column :coupons, :present_value, :coupon_usd

  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
