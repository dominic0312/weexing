# encoding: utf-8
class AddDefaultsToCustomer < ActiveRecord::Migration
  def up
    change_column :customers, :balance, :integer , :default=> 0
    change_column :customers, :bonus, :integer , :default=> 0
    change_column :customers, :level, :string , :default=> '普通会员'
    change_column :customers, :unread, :integer , :default=> 0
    change_column :customers, :coupon_num, :integer , :default=> 0

  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
