class ChangeTitleTypeCoupon < ActiveRecord::Migration
  def up
    change_column :coupons, :title, :string 
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
