class CardbackgroundController < ApplicationController
  def index
    @customers = Customer.where(:owner => 2).paginate(:page => params[:page],:per_page => 8).order('id DESC')
    @coupons = Coupon.where(:shopid => 2).paginate(:page => params[:page],:per_page => 8).order('id DESC')
    respond_to do |format|
      format.html # index.html.erb
      format.js
    end
    
  end
end