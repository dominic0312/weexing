class ChangeCardidInShops < ActiveRecord::Migration
  def up
    change_column :shops, :cardtemplate, :integer , :default=> 1
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
