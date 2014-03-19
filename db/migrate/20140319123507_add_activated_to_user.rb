class AddActivatedToUser < ActiveRecord::Migration
  def self.up
    add_column :users, :activated, :integer, :default => 0
  end

  def self.down
    remove_column :users, :activated
  end
end
