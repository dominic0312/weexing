class ChangShopDefaults < ActiveRecord::Migration
  def up
    change_column :shops, :online, :integer , :default=> 0
    change_column :shops, :expried, :integer , :default=> 0
    change_column :shops, :istrial, :integer , :default=> 0
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
