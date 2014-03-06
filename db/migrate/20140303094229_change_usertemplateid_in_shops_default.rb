class ChangeUsertemplateidInShopsDefault < ActiveRecord::Migration
   def up
    change_column :shops, :usertemplate_id, :integer , :default=> 1
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
