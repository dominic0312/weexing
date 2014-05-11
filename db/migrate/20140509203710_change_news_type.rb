class ChangeNewsType < ActiveRecord::Migration
  def change
     change_column :news, :newstype, :string,:default=> 'default'
  end
end
