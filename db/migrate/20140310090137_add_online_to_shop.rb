class AddOnlineToShop < ActiveRecord::Migration
  def change
    add_column :shops, :online, :integer
    add_column :shops, :exprieddate,    :datetime
    add_column :shops, :expried,   :integer
    add_column :shops, :istrial,   :integer
  end

end
