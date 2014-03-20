class News < ActiveRecord::Base
  attr_accessible :content, :title,:doctype
  self.per_page = 18
end
