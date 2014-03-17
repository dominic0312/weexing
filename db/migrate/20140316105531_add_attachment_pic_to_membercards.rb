class AddAttachmentPicToMembercards < ActiveRecord::Migration
  def self.up
    change_table :membercards do |t|
      t.attachment :pic
    end
  end

  def self.down
    drop_attached_file :membercards, :pic
  end
end
