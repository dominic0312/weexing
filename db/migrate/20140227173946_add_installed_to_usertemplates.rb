class AddInstalledToUsertemplates < ActiveRecord::Migration
   def self.up
    add_column :usertemplates, :installed, :integer, :default => 0
  end

  def self.down
    remove_column :usertemplates, :installed
  end
end
