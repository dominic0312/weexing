class AddTypeToUser < ActiveRecord::Migration
  def self.up
    add_column :users, :usertype, :string, :default => 'agency'
  end

  def self.down
    remove_column :users, :usertype
  end
end
