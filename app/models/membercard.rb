class Membercard < ActiveRecord::Base
  attr_accessible :name, :pic, :picback
  has_attached_file :pic, :styles => { :medium => "276x174>"}
  has_attached_file :picback, :styles => { :medium => "276x174>"}
    validates_attachment_content_type :pic,  :content_type =>  ['image/jpeg', 'image/png']  
    validates_attachment_content_type :picback , :content_type =>  ['image/jpeg', 'image/png']  
  self.per_page = 4
end
