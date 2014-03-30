class ChangeBalanceDefCoupon < ActiveRecord::Migration
  def up
    change_column :customers, :balance, :integer , :default=> 0
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
