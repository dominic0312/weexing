class ShopsController < ApplicationController
  # GET /shops
  # GET /shops.json
  def index
    @shops = Shop.paginate(:page => params[:page])
    respond_to do |format|
      format.html # index.html.erb
      format.json
    end
  end

  def display
    @shops = Shop.paginate(:page => params[:page])
    respond_to do |format|
      format.html # index.html.erb
      format.js
    end

  end

  # GET /shops/1
  # GET /shops/1.json
  def show
    @shop = Shop.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @shop }
    end
  end

  # GET /shops/new
  # GET /shops/new.json
  def new
    @shop = Shop.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @shop }
    end
  end

  # GET /shops/1/edit
  def edit
    @shop = Shop.find(params[:id])
  end

  # POST /shops
  # POST /shops.json
  def create
    @shop = Shop.new(params[:shop])

    respond_to do |format|
      if @shop.save
        format.html { redirect_to @shop, notice: 'Shop was successfully created.' }
        format.json { render json: @shop, status: :created, location: @shop }
      else
        format.html { render action: "new" }
        format.json { render json: @shop.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /shops/1
  # PUT /shops/1.json
  def update
    @shop = Shop.find(params[:id])

    respond_to do |format|
      if @shop.update_attributes(params[:shop])
        format.html { redirect_to @shop, notice: 'Shop was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @shop.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /shops/1
  # DELETE /shops/1.json
  def destroy
    @shop = Shop.find(params[:id])
    @shop.destroy

    respond_to do |format|
      format.html { redirect_to shops_url }
      format.json { head :no_content }
    end
  end

  def updateusertemplate
    shop=Shop.find(params[:shop_id])
    shop.usertemplate_id=params[:template_id]
    shop.save
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  def createshop

    @shops = Shop.paginate(:page => params[:page]).order('id DESC')
    @user_name=session[:user_name]
    @user_id=session[:user_id]
    @credits=session[:credits]
    logger.info("we are in else section")
    respond_to do |format|
      format.html # index.html.erb
      format.js
    end
  end

  def paycreateshop
    payment =params[:payment].to_i
    uid=params[:userid].to_i
    user=User.find(uid)
    if user.credit < payment
      render :js=> "alert('failedofnomoney');" and return
    end

    user.credit=user.credit-payment
    #user.save

    logger.info("user credit is:"+user.credit.to_s)
    shop=Shop.new
    shop.name=params[:shopname]
    shop.save
    @shops = Shop.paginate(:page => params[:page]).order('id DESC')

    respond_to do |format|
      format.js
    end

  end

end
