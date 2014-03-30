class AddRequestsAttributes < ActiveRecord::Migration
  def change
    add_column :requestcoupons, :title, :string
    add_column :requestcoupons, :content, :string
    add_column :requestcoupons, :cardno, :string
  end
end
