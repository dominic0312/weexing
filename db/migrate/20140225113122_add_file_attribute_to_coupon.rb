class AddFileAttributeToCoupon < ActiveRecord::Migration
  def change
    add_column :coupons, :pic_content_type, :string
    add_column :coupons, :pic_file_size,    :integer
    add_column :coupons, :pic_updated_at,   :datetime
  end
end
