class Document < ActiveRecord::Base
  attr_accessible :title, :desc, :url
end
