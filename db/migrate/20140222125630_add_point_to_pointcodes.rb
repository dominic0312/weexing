class AddPointToPointcodes < ActiveRecord::Migration
   def self.up
    add_column :pointcodes, :point, :integer, :default => 1
  end
   
  def self.down
    remove_column :pointcodes, :point
  end
end
