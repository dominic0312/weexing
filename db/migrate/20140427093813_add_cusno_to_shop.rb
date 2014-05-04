class AddCusnoToShop < ActiveRecord::Migration
  def change
    add_column :shops, :customerno, :integer, :default => 0
  end
end
