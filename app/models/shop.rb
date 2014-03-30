class Shop < ActiveRecord::Base
  # It will auto generate weixin token and secret
  include WeixinRailsMiddleware::AutoGenerateWeixinTokenSecretKey
  attr_accessible :address, :agency, :cardtemplate, :logo, :name, :usertemplate_id, :phone, :exprieddate, :weixin_token,:shopurl,:logopic,:online,:expried,:istrial
  belongs_to :usertemplate
  belongs_to :membercard
  belongs_to :user
  has_many :customers
  has_attached_file :logopic, :styles => { :medium => "300x300>", :thumb => "100x100>" },:default_url => "/images/:style/missing.jpg"
  validates_attachment :logopic, content_type: { content_type: ["image/jpg", "image/jpeg", "image/png"] }
  self.per_page = 5
end
