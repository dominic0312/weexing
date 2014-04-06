class AddMobileToShop < ActiveRecord::Migration
  def change
    add_column :shops, :mobile, :string
  end
end
