class CustomersController < ApplicationController

  before_filter :authadmin
 
  def addcustomer
    customer=Customer.new
    customer.realcardid=params[:cardid]
    customer.phone=params[:phone]
    customer.balance=params[:balance]
    customer.level=params[:vusertype]
    shopid=session[:shopid]
    customer.shop_id = shopid
    customer.save

    @customers= Customer.where(:shop_id=>shopid).paginate(:page => params[:page],:per_page => 8).order('id DESC')
    render :js=>"addcustomer('#{customer.id}','#{customer.realcardid}','#{customer.phone}','#{customer.balance}','#{customer.level}');" and return
  end

  def delcustomer
    @customer = Customer.find(params[:recid])
    @customer.destroy
    shopid=session[:shopid]
    render :js=>"removecustomer('#{params[:recid]}')" and return

  end

  def updatecustomer
    @customer = Customer.find(params[:recid])
    @customer.realcardid = params[:realcard]
    @customer.bonus = params[:bonus]
    @customer.balance=params[:balance]
    @customer.phone = params[:phone]
    @customer.level = params[:level]
    @customer.save
    render :js=>"success(#{params[:recid]})" and return
  end

  def authadmin
    sid=session[:shopid]
    if !sid
      render :file => "#{Rails.root}/public/404", :layout => false, :status => :not_found and return
    end
  end

end
