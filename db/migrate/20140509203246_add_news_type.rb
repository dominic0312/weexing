class AddNewsType < ActiveRecord::Migration
  def change
    add_column :news, :newstype, :string,:default=> 'default'
  end
end

