class Shop < ActiveRecord::Base
  attr_accessible :address, :agency, :cardtemplate, :logo, :name, :usertemplate_id, :phone, :exprieddate, :weixin_token
  belongs_to :usertemplate
  belongs_to :user
  self.per_page = 5
end
