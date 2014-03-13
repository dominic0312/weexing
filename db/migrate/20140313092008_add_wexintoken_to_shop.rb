class AddWexintokenToShop < ActiveRecord::Migration
  def change
     add_column :shops, :weixin_token, :string
  end
end
