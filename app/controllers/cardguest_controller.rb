class CardguestController < ApplicationController
  require "rest-client"
  require "result-hand"

  def cardpage
    shopid=params[:id]
    @shoppage=Shop.find(shopid)

    respond_to do |format|
      if @shoppage
        if @shoppage.online==0
           format.html { render :file => "#{Rails.root}/public/closed", :layout => false, :status => :not_found }
        end
        @brandname=@shoppage.name
        @logopic=@shoppage.logopic.url(:thumb)
        @card=@shoppage.membercard
        if @card
          @cardpic=@card.pic.url(:medium)
          @cardpicback=@card.picback.url(:medium)
        else
          @cardpic=""
          @cardpicback=""
        end
        @page=@shoppage.usertemplate.pic
      format.html
      else
        format.html { render :file => "#{Rails.root}/public/404", :layout => false, :status => :not_found }
      end

    end
  end

  def cardoath
    shop=Shop.find(params[:id])
    url="https://api.weixin.qq.com/sns/oauth2/access_token?appid=wxf2fae02e8ee92f67&secret=769c913b919b850e94f90d6ddf8c2273&code=#{params[:code]}&grant_type=authorization_code"
    openid=load_json(RestClient.post(url,{}))
    customer=Customer.where(:openid=>openid).first

    respond_to do |format|
      if shop
        @brandname=shop.name
        @logopic=shop.logopic.url
        @card=shop.membercard
        if @card
          @cardpic=@card.pic
        else @cardpic=""
        end
        @page=shop.usertemplate.pic
        @cid=customer.id
      format.html
      else
        format.html { render :file => "#{Rails.root}/public/404", :layout => false, :status => :not_found }
      end

    end

  end

  def load_json(string)
    result_hash = JSON.parse(string)
    code   = result_hash.delete("errcode")
    en_msg = result_hash.delete("errmsg")
    if en_msg
      logger.info("info is:"+en_msg)
    end
    #res=OathHandler.new(code, en_msg, result_hash).keys
    result_hash['openid']
  end

  def get_customer_info
    cid=params[:customerid]
    #logger.info("customer id is:"+cid)
    #customer_name='dominic'
    @customer=Customer.find(cid)
    @coupons=@customer.coupons
    @customer.coupon_num=@coupons.size
    @customer
  end

  def actinfo

  end

  def getcustomerinfo
    cid=params[:cusid]
    customer=Customer.find(cid)
    render :js =>"updateinfo('#{customer.balance}','#{customer.bonus}','#{customer.level}')"
  end

end