class CreatePublicaccounts < ActiveRecord::Migration
  def change
    create_table :publicaccounts do |t|

      t.timestamps
    end
  end
end
