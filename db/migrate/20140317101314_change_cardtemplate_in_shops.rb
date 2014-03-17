class ChangeCardtemplateInShops < ActiveRecord::Migration
 def up
    change_column :shops, :cardtemplate, :integer , :default=> 1
    rename_column :shops, :cardtemplate, :membercard_id
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
