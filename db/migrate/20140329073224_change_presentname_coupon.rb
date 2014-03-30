class ChangePresentnameCoupon < ActiveRecord::Migration
  def up
    rename_column :coupons, :present_name, :title
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
