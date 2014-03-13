class AddUrlToShop < ActiveRecord::Migration
  def change
     add_column :shops, :shopurl, :string
  end
end
