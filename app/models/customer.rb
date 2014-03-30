class Customer < ActiveRecord::Base
  attr_accessible :shop_id, :cardid, :balance, :bonus, :realcardid, :level, :openid
  has_and_belongs_to_many :coupons
  belongs_to :shop
  self.per_page = 10

  def self.ismemberexist(openid)
    customer = self.where(:openid=>openid).first
    if customer
    return true
    else
    return false
    end
  end

end

