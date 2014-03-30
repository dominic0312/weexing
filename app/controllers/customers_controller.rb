class CustomersController < ApplicationController
  # GET /customers
  # GET /customers.json

  before_filter :authadmin
  def index
    @customers = Customer.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @customers }
    end
  end

  # GET /customers/1
  # GET /customers/1.json
  def show
    @customer = Customer.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @customer }
    end
  end

  # GET /customers/new
  # GET /customers/new.json
  def new
    @customer = Customer.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @customer }
    end
  end

  # GET /customers/1/edit
  def edit
    @customer = Customer.find(params[:id])
  end

  # POST /customers
  # POST /customers.json
  def create
    @customer = Customer.new(params[:customer])

    respond_to do |format|
      if @customer.save
        format.html { redirect_to @customer, notice: 'Customer was successfully created.' }
        format.json { render json: @customer, status: :created, location: @customer }
      else
        format.html { render action: "new" }
        format.json { render json: @customer.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /customers/1
  # PUT /customers/1.json
  def update
    @customer = Customer.find(params[:id])

    respond_to do |format|
      if @customer.update_attributes(params[:customer])
        format.html { redirect_to @customer, notice: 'Customer was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @customer.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /customers/1
  # DELETE /customers/1.json
  def destroy
    @customer = Customer.find(params[:id])
    @customer.destroy

    respond_to do |format|
      format.html { redirect_to customers_url }
      format.json { head :no_content }
    end
  end

  def search
    searchtp=params[:searchtp]
    searchval=params[:searchvalue]
    shopid=session[:shopid]
    if searchtp && searchval
      @customers= Customer.where("#{searchtp}='#{searchval}' and shop_id='#{shopid}'").paginate(:page => params[:page],:per_page => 8).order('id DESC')
    else
      render  :js=> "searchfail();" and return
    end
    respond_to do |format|
      format.html
      format.js
    end
  end

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
    respond_to do |format|
      format.html # index.html.erb
      format.js
    end
  end

  def delcustomer
    @customer = Customer.find(params[:recid])
    @customer.destroy
    shopid=session[:shopid]
    @customers= Customer.where(:shop_id=>shopid).paginate(:page => params[:page],:per_page => 8).order('id DESC')
    respond_to do |format|
      format.js
    end

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
