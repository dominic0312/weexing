class AddUnreadToCustomer < ActiveRecord::Migration
  def self.up
    add_column :customers, :unread, :integer
  end
  
  def self.down
    remove_column :customers, :unread
  end
end
