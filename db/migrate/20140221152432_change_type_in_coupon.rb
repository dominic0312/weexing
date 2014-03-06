class ChangeTypeInCoupon < ActiveRecord::Migration
  def up
    rename_column :coupons, :type, :coupon_type
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
