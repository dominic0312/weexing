class AddAttachmentLogopicToShops < ActiveRecord::Migration
  def self.up
    change_table :shops do |t|
      t.attachment :logopic
    end
  end

  def self.down
    drop_attached_file :shops, :logopic
  end
end
