class Customer < ActiveRecord::Base
  attr_accessible :owner, :cardid, :balance, :bonus, :realcardid, :level, :openid
  has_and_belongs_to_many :coupons
 
  
end
