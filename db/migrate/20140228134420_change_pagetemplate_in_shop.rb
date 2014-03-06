class ChangePagetemplateInShop < ActiveRecord::Migration
  def up
    change_column :shops, :pagetemplate, :integer , :default=> 0
    rename_column :shops, :pagetemplate, :usertemplate_id
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end

end
