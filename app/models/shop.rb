class Shop < ActiveRecord::Base
  attr_accessible :address, :agency, :cardtemplate, :logo, :name, :usertemplate_id, :phone, :exprieddate, :weixin_token,:shopurl,:logopic,:online,:expried,:istrial
  belongs_to :usertemplate
  belongs_to :membercard
  belongs_to :user
  has_attached_file :logopic, :styles => { :medium => "300x300>", :thumb => "100x100>" }
  validates_attachment :logopic, content_type: { content_type: ["image/jpg", "image/jpeg", "image/png"] }
  self.per_page = 5
end
