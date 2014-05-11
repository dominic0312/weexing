class ChangePrivShop < ActiveRecord::Migration
  def change
      rename_column :shops, :priv, :priv1
      add_column :shops, :priv2, :string
      add_column :shops, :priv3, :string
  end
end
