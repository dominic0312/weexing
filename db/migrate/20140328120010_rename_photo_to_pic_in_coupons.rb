class RenamePhotoToPicInCoupons < ActiveRecord::Migration
  def up
    rename_column :coupons, :photo_file_name, :pic_file_name
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
