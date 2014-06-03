#coding: utf-8
class CardbackgroundController < ApplicationController
  before_filter :authshop,:set_cache_buster, :only=>[:index]
  def index
    url=params[:shopurl]
    @shop=Shop.find(session[:shopid])
    respond_to do |format|
      if @shop
        @customers = @shop.customers.order('id DESC')
        @coupons = Coupon.where(:shopid => @shop.id).order('id DESC')
        @shopid=@shop.id
        @coupon = Coupon.new
      format.html # index.html.erb
      format.js
      else
        format.html { render :file => "#{Rails.root}/public/404", :layout => false, :status => :not_found }
      end
    end

  end

  def login
    url=params[:shopurl]
    @shop=Shop.where(:shopurl=>url).first
    respond_to do |format|
      if @shop
        if @shop.online==0
           format.html { render :file => "#{Rails.root}/public/closed", :layout => false, :status => :not_found }
        end
      format.html # login.html.erb
      format.js
      else
        format.html { render :file => "#{Rails.root}/public/404", :layout => false, :status => :not_found }
      end
    end

  end

  def passcheck
    sid=params[:shopid].to_i
    password=params[:password]
    shop=Shop.find(sid) rescue nil
    if shop
      if shop.password == password
        session[:shopid] = shop.id
        session[:shop_login] = 'login'
        render  :js=> "checksuccess();" and return
      else
        render  :js=> "checkfail();" and return
      end
    else
      render  :js=> "checkfail();" and return
    end

  end

  def authshop
    sid=session[:shopid]
    slogin=session[:shop_login]
    if sid =="" || slogin =="empty"
      logger.info("emptycustomer")
      render :file => "#{Rails.root}/public/404", :layout => false, :status => :not_found and return
    end
  end

  before_filter :set_cache_buster

  def set_cache_buster
    response.headers["Cache-Control"] = "no-cache, no-store, max-age=0, must-revalidate"
    response.headers["Pragma"] = "no-cache"
    response.headers["Expires"] = "Fri, 01 Jan 1990 00:00:00 GMT"
  end

end