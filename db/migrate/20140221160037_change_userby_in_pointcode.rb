class ChangeUserbyInPointcode < ActiveRecord::Migration
  def up
    change_column :pointcodes, :userby, :string, :default=>'empty'
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
