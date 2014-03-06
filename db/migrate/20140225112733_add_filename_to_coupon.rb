class AddFilenameToCoupon < ActiveRecord::Migration
 def change
    add_column :coupons, :photo_file_name,    :string
  end
end
