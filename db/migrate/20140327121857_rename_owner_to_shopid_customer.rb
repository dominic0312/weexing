class RenameOwnerToShopidCustomer < ActiveRecord::Migration
  def up
    rename_column :customers, :owner, :shop_id
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
