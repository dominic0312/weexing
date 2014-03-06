class Shop < ActiveRecord::Base
  attr_accessible :address, :agency, :cardtemplate, :logo, :name, :usertemplate_id, :phone
  belongs_to :usertemplate
  self.per_page = 4
end
