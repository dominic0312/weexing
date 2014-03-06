class AddCouponnumToCustomer < ActiveRecord::Migration
 def self.up
    add_column :customers, :coupon_num, :integer, :default => 0
  end

  def self.down
    remove_column :customers, :coupon_num
  end
end
