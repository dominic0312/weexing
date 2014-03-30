class CardguestController < ApplicationController
  def cardpage
    shopid=params[:id]
    shoppage=Shop.find(shopid)

    respond_to do |format|
      if shoppage
        @brandname=shoppage.name
        @logopic=shoppage.logopic.url
        @card=shoppage.membercard
        if @card
          @cardpic=@card.pic
        else @cardpic=""
        end
        @page=shoppage.usertemplate.pic
      format.html
      else
        format.html { render :file => "#{Rails.root}/public/404", :layout => false, :status => :not_found }
      end

    end
  end

  def get_customer_info
    #customer_name=params[:customer_name]
    customer_name='dominic'
    @customer=Customer.find_by_openid(customer_name)
    @coupons=@customer.coupons
    @customer.coupon_num=@coupons.size
    @customer
  end

  def actinfo

  end
end