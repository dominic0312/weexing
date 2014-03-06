class AddSentToCoupons < ActiveRecord::Migration
  def self.up
    add_column :coupons, :sent, :integer, :default => 0
  end

  def self.down
    remove_column :coupons, :sent
  end
end
