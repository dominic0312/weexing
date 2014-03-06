class Pointcode < ActiveRecord::Base
  attr_accessible :secretcode,:point, :used, :userby
  validates_uniqueness_of :secretcode
  self.per_page = 20
end