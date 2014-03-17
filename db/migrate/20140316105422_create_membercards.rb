class CreateMembercards < ActiveRecord::Migration
  def change
    create_table :membercards do |t|
      t.string :name

      t.timestamps
    end
  end
end
