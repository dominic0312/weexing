class AddUniqueIndexTopointcodes < ActiveRecord::Migration
  def self.up
    add_index :pointcodes, :secretcode, :uinque=>true
  end

  def self.down
    remove_index :pointcodes, :secretcode
  end
end
