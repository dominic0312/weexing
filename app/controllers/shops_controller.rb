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
    userid=session[:user_id]
    @shops = Shop.where(:user_id=>userid).paginate(:page => params[:page]).order('id DESC')
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
        format.html { redirect_to uploadlogo_shop_path(@shop), notice: 'Shop was successfully updated.' }
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

  def updatemembercard
    shop=Shop.find(params[:shop_id])
    shop.membercard_id=params[:card_id]
    shop.save
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  def createshop
    userid=session[:user_id]
    if params[:createtype]

      payment =params[:payment].to_i
      uid=params[:userid].to_i
      datenow = DateTime.current
      shop=Shop.new

      if params[:createtype] == "create"
        user=User.find(uid)
        if user.credit < payment
          render :js=> "alert('failedofnomoney');" and return
        end
        expriedate=datenow.advance(:years => 1)
      user.credit=user.credit-payment
      user.save
      elsif params[:createtype] == "trail"
        shop.istrial = 1
        expriedate=datenow.advance(:days => 4)
      end

      shop.name=params[:shopname]
      shop.user_id=userid

      shop.exprieddate=expriedate
      shop.save
      @shops = Shop.where(:user_id=>userid).paginate(:page => params[:page]).order('id DESC')

    else
      @shops = Shop.where(:user_id=>userid).paginate(:page => params[:page]).order('id DESC')
      @user_name=session[:user_name]
      @user_id=session[:user_id]
      @credits=session[:credits]
    end

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
    user.save

    logger.info("user credit is:"+user.credit.to_s)
    shop=Shop.new
    shop.name=params[:shopname]
    shop.save
    @shops = Shop.paginate(:page => params[:page]).order('id DESC')

    respond_to do |format|
      format.js
    end

  end

  def onlineshop
    uid=params[:userid].to_i
    shopid=params[:shopid].to_i
    operation=params[:operation]
    if uid!=session[:user_id]
      logger.info("illegal user")
      render :js=>"onlinefault()" and return
    end

    shop=Shop.find(shopid)

    if operation == "online"
      if shop.expried == 1
        render :js=>"onlinefail()" and return
      end
      shop.online=1
      shop.save
      render :js=>"onlinesuccess("+params[:shopid]+")" and return
    elsif operation == "offline"
      shop.online=0
      shop.save
      render :js=>"offlinesuccess("+params[:shopid]+")" and return
    end

  end

  def manageshop
    @shops = Shop.paginate(:page => params[:page])
    respond_to do |format|
      format.html # index.html.erb
      format.json
    end
  end

  def uploadlogo
    sid=params[:id]
    if sid
      @shop=Shop.find(sid)
    end

    respond_to do |format|
      format.html # index.html.erb
      format.json
    end

  end

  def setupcard
    sid=params[:id]
    if sid
      @shop=Shop.find(sid)
    end

    respond_to do |format|
      format.html # index.html.erb
      format.json
    end

  end

  def updatelogo
    @shop = Shop.find(params[:id])

    respond_to do |format|
      if @shop.update_attributes(params[:shop])
        format.html { redirect_to uploadlogo_url(@shop), notice: 'Shop was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @shop.errors, status: :unprocessable_entity }
      end
    end

  end

  def sysinfo
    sid=params[:id]
    if sid
      shop=Shop.find(sid)
      @shopurl=shop.shopurl
      @token=shop.weixin_token
      @shopid=sid
    end

    respond_to do |format|
      format.html {}# index.html.erb
      format.json
    end
  end

  def urlcheck
    url=params[:url_name]
    token=params[:token_name]
    sid=params[:shop_id]
    shop=Shop.where(:shopurl=>url).first
    
    if shop
      render  :js=> "urlexist()" and return
    else
      shop2=Shop.where(:weixin_token=>token).first
      if shop2
      render  :js=> "tokenexist();" and return
      end
    end
    
    shop =Shop.find(sid);
    shop.shopurl=url
    shop.weixin_token=token
    shop.save
    render :js=>"urlsuccess();"
    
    
  end

end
