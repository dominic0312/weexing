class News < ActiveRecord::Base
  attr_accessible :content, :title,:doctype,:newstype
  self.per_page = 18
end
