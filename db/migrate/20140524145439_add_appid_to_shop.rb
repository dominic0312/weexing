class AddAppidToShop < ActiveRecord::Migration
  def change
    add_column :shops, :appid, :string
    add_column :shops, :appsec, :string
  end
end
