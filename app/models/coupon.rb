class Coupon < ActiveRecord::Base
  attr_accessible :branch, :content, :discount, :enddate, :present_name, :present_value, :shopid, :startdate, :coupon_type, :usertype, :sent, :pic, :pic_file_name,:pic_content_type,:pic_file_size,:pic_updated_at
  has_and_belongs_to_many :customers
  has_attached_file :pic, :styles => { :medium => "300x300>", :thumb => "100x100>" }, :default_url => "/images/:style/missing.png"
  validates_attachment :pic, :presence => true,
  :content_type => { :content_type => "image/jpeg" },
  :size => { :in => 0..100.kilobytes }

#validates_attachment_content_type :pic, :content_type => ['image/jpg', 'image/jpeg', 'image/pjpeg', 'image/gif', 'image/png', 'image/x-png']
# validates_attachment :pic, :presence => true,
#:content_type => { :content_type => "*.jpg" },
#:size => { :in => 0..100.kilobytes }
end
