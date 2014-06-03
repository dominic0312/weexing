class ChangeDefShopPass < ActiveRecord::Migration
  def change
    change_column :shops, :password, :string , :default=> '88888888'
  end
end
