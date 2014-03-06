class CreatePointcodes < ActiveRecord::Migration
  def change
    create_table :pointcodes do |t|
      t.string :secretcode
      t.string :userby
      t.integer :used

      t.timestamps
    end
  end
end
