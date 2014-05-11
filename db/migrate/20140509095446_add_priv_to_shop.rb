class AddPrivToShop < ActiveRecord::Migration
  def change
    add_column :shops, :priv, :string
  end
end
