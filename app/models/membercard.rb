class Membercard < ActiveRecord::Base
  attr_accessible :name, :pic
  has_attached_file :pic, :styles => { :medium => "300x300>", :thumb => "100x100>" }
  validates_attachment :pic, content_type: { content_type: ["image/jpg", "image/jpeg", "image/png"] }
  self.per_page = 4
end
