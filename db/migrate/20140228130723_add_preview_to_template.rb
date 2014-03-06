class AddPreviewToTemplate < ActiveRecord::Migration
  def self.up
    add_attachment :usertemplates, :preview
  end

  def self.down
    remove_attachment :usertemplates, :preview
  end
end
