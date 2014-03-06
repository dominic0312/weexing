class CreateCardTemplates < ActiveRecord::Migration
  def change
    create_table :card_templates do |t|
      t.string :card_name
      t.string :card_image_url

      t.timestamps
    end
  end
end
