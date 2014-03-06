class ChangeUsedInPointcode < ActiveRecord::Migration
  def up
    change_column :pointcodes, :used, :integer, :default=>0
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
