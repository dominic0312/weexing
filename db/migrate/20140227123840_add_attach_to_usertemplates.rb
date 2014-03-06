class AddAttachToUsertemplates < ActiveRecord::Migration
  def self.up
    add_attachment :usertemplates, :attachfile
  end

  def self.down
    remove_attachment :usertemplates, :attachfile
  end
end
