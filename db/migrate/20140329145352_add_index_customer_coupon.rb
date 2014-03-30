class AddIndexCustomerCoupon < ActiveRecord::Migration
    def self.up
    add_index :coupons_customers, :customer_id
      add_index :coupons_customers, :coupon_id
  end

  def self.down
    # By default, we don't want to make any assumption about how to roll back a migration when your
    # model already existed. Please edit below which fields you would like to remove in this migration.
    raise ActiveRecord::IrreversibleMigration
  end
end
