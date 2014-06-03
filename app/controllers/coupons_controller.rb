class CouponsController < ApplicationController

  def createcoupon
    @coupon = Coupon.new(params[:coupon])
    @shopid=params[:shopid]
    @title=params[:coupon][:title]
    @len=@title.split(//u).length
    if @len>10
      render :js=>"coupontitlefail()" and return
    end
    if @coupon.save
      render :js=>"addcoupon('#{@coupon.id}','#{@coupon.pic.url(:thumb)}','#{@coupon.title}','#{@coupon.content}','#{@coupon.usertype}','#{@coupon.startdate}','#{@coupon.enddate}')" and return
    else
      render :js=>"savecouponfail();" and return
    end

  end

  def sendcoupon
    @id=params[:recid]
    @coupon= Coupon.find(@id)

    if @coupon.sent == 1
      render  :js=> "coupon_sendfail(#{@id});" and return
    else
      @coupon.sent = 1
      if @coupon.save
        @customers= Customer.where(:shop_id=>@coupon.shopid);
        @customers.each do |customer|
          customer.coupons << @coupon
        end
        render  :js=>"coupon_sendsucc(#{@id});" and return
      end
    end
  end

  def delcoupon
    @coupon = Coupon.find(params[:recid])
    @coupon.destroy
    shopid=session[:shopid]
    render :js=>"removecoupon(#{params[:recid]})" and return
  end

  def requestcoupon
    @requests= Requestcoupon.where(:couponid=>params[:coupid])
  end

  def delrequest
    @requestid=params[:questid]
    @coupid=params[:couponid]
    req=Requestcoupon.find(@requestid)
    req.destroy
    coupon=Coupon.find(@coupid)
    coupon.coupon_req-=1
    coupon.coupon_usd+=1
    coupon.save
    render :js=>"recyclesucc(#{@requestid});"

  end

  def refreshrequest
    @coupon=Coupon.find(params[:couponid])

    render :js=>"questrefresh(#{@coupon.id},#{@coupon.coupon_req},#{@coupon.coupon_usd});"
  end

  def addrequest
    couponid=params[:couponid]
    customerid=params[:cusid]
    @coupon=Coupon.find(couponid)
    @coupon.coupon_req+=1

    @customer = Customer.find(customerid)
    @requestcoupon=Requestcoupon.new
    @requestcoupon.couponid=couponid
    @requestcoupon.cardno=@customer.cardid
    @requestcoupon.title=@coupon.title
    @requestcoupon.content=@coupon.content
    @requestcoupon.save
    @coupon.save
    @coupon.customers.delete(@customer)
    render :js=>"addcouponsucc(#{@coupon.id})"
  end
end
