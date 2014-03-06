class AddTypeToNews < ActiveRecord::Migration
  def self.up
    add_column :news, :doctype, :string, :default => 'news'
  end

  def self.down
    remove_column :news, :doctype
  end
end
