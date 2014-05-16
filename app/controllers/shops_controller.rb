#coding: utf-8
#require "rshandler/globalcode"
class ShopsController < ApplicationController
  require "rest-client"
  require "result-hand"
  # GET /shops
  # GET /shops.json
  before_filter :authadmin, :only=>[:index,:show, :edit, :update,:destroy]
  before_filter :authagency, :only=>[:removeshop]

  def index
    @shops = Shop.paginate(:page => params[:page],:per_page => 15).order('id DESC')
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

  # GET /shops/1/edit
  def edit
    @shop = Shop.find(params[:id])
  end

  # POST /shops
  # POST /shops.json

  # PUT /shops/1
  # PUT /shops/1.json
  def update
    @shop = Shop.find(params[:id])

    respond_to do |format|
      if @shop.update_attributes(params[:shop])
        format.html { redirect_to(shops_url, :notice=> 'Shop was successfully updated.') }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @shop.errors, status: :unprocessable_entity }
      end
    end
  end

  def removeshop
    @shop=Shop.find(params[:shopid]) rescue nil
    if @shop
      @shop.destroy
      render :js=>"removesucc('#{@shop.name}','#{@shop.id}')" and return
    else
      render :js=>"" and return
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
    shop=Shop.find(params[:shopid])
    shop.usertemplate_id=params[:templateid]
    shop.save
    render :js=>"updatetempsuccess('#{shop.id}','#{shop.name}','#{params[:templateid]}')" and return
  end

  def updatemembercard
    shop=Shop.find(params[:shopid])
    shop.membercard_id=params[:card_id]
    shop.save
    render :js=>"updatecardsuccess('#{shop.id}','#{shop.name}','#{params[:card_id]}')" and return
  end

  def chargeshop
    sid=params[:shopid]
    point=params[:point].to_i
    shop=Shop.find(sid)
    user=User.find(shop.user_id)
    if user
      if user.credit<point
        render :js=>"showmsg('余额不足','账户余额不足#{point}点，请充值')" and return
      else
      user.credit-=point;
        expdate=shop.exprieddate.advance(:months => point)
        shop.exprieddate=expdate;
        user.save
        shop.save
        render :js=>"chargesucc('#{shop.id}','#{shop.name}','#{expdate.to_s[0,10]}')" and return
      end

    else
      render :js=>"" and return
    end

  end

  def createshop
    uid=session[:user_id].to_i
    url=params[:shopurl]
    shop=Shop.where(:shopurl=>url).first

    if shop
      render :js=> "urlexist('#{url}')" and return
    end

    datenow = DateTime.current
    shop=Shop.new
    if params[:createtype] == "普通用户"
    expriedate=datenow
    shop.expried == 1
    elsif params[:createtype] == "试用用户"
      shop.istrial = 1
      expriedate=datenow.advance(:days => 4)
    end

    shop.name=params[:shopname]
    shop.shopurl=url
    shop.user_id=uid

    shop.exprieddate=expriedate
    shop.save
    startdate=shop.created_at.to_s[0,10]
    expdate=expriedate.to_s[0,10]
    @shop=shop
    render :js=>"addtotable(#{shop.id},'#{shop.name}','#{shop.shopurl}','#{startdate}','#{expdate}','#{shop.usertemplate_id}','#{shop.membercard_id}')" and return
  end

  def onlineshop
    shopid=params[:shopid].to_i
    operation=params[:operation]

    shop=Shop.find(shopid)

    if operation == "online"
      if shop.expried == 1
        render :js=>"onlinefail('#{shop.name}')" and return
      end
      shop.online=1
      shop.status="运行中"
      shop.save
      render :js=>"onlinesuccess('#{shop.name}','#{shop.id}')" and return
    elsif operation == "offline"
      shop.online=0
      shop.status="停止中"
      shop.save
      render :js=>"offlinesuccess('#{shop.name}','#{shop.id}')" and return
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

  def shopaccount
    sid=params[:shopid]
    if sid
      @shop=Shop.find(sid)
    expdate=@shop.exprieddate.to_s[0,10]
    end
    render :js=>"shopaccount('#{@shop.id}','#{expdate}','#{@shop.logopic.url(:thumb)}','#{@shop.phone}','#{@shop.oemname}','#{@shop.oemurl}');"
  end

  def shopconnect
    sid=params[:shopid]
    if sid
      @shop=Shop.find(sid)
    end
    render :js=>"shopconnect('#{@shop.weixin_secret_key}','#{@shop.weixin_token}');"
  end

  def updatelogo
    @shop = Shop.find(params[:id])
    @shop.logopic=params[:pic]
    @shop.save
    @logourl=@shop.logopic.url(:thumb)
    @res='hello'
    #logger.info(params)
    respond_to do |format|
    # if @shop.update_attributes(params[:shop])
    #format.html { redirect_to uploadlogo_url(@shop), notice: 'Shop was successfully updated.' }
    #format.json
    #else
    # format.html { render action: "edit" }
      format.json { render :json=> {:url=>@logourl}}
    #render  json:@shop and return
    end
  end

  def updateoem
    reqtype=params[:pk]
    shopid=params[:id]
    shop=Shop.find(shopid)
    if reqtype == 'oemname'
      shop.oemname =params[:value]
    end

    if reqtype == "oemurl"
      shop.oemurl=params[:value]
    end
    shop.save
    render :js=>"" and return
  end

  def sysinfo
    sid=params[:id]
    if sid
      shop=Shop.find(sid)
      @shopurl=shop.shopurl
      @token=shop.weixin_token
      @shopid=sid
      @secret=shop.weixin_secret_key
    end

    respond_to do |format|
      format.html {}# index.html.erb
      format.json
    end
  end

  def urlcheck
    url=params[:url_name]
    sid=params[:shop_id]
    shop=Shop.where(:shopurl=>url).first

    if shop
      render  :js=> "urlexist()" and return
    end

    shop =Shop.find(sid);
    shop.shopurl=url
    shop.password=url
    shop.save
    render :js=>"urlsuccess();"

  end

  def authadmin
    admin=session[:usertype]
    if admin!='admin'
      render :file => "#{Rails.root}/public/404", :layout => false, :status => :not_found and return
    end
  end

  def authagency
    agency=session[:user_id]
    if agency

      else
      render :file => "#{Rails.root}/public/404", :layout => false, :status => :not_found and return
    end
  end

  #def connectwx
  # $client ||= WeixinAuthorize::Client.new(params[:appid], params[:secid])
  #lst=$client.get_access_token
  #render :js=>"alert('#{lst}');"
  #end

  def connectwx
    $weixin_client = WeixinAuthorize::Client.new(params[:appid], params[:secid])

    oap='https://open.weixin.qq.com/connect/oauth2/authorize?appid='
    redirecturi='&redirect_uri='+Rack::Utils.escape("http://363b554.ngrok.com/cardoath/112")
    resptype="&response_type=code&scope=snsapi_base"
    state="&state=card#wechat_redirect"
    url=oap+params[:appid]+redirecturi+resptype+state

    @currentmenu=Diymenu.find(1)
    @currentmenu.url=url
    #@currentmenu.save
    @current_public_account= Publicaccount.find(1)
    menu   = @current_public_account.build_menu
    result = $weixin_client.create_menu(menu)

    #set_error_message(result["errmsg"]) if result["errcode"] != 0
    if result.ok?
      render :js=>"alert('everything well');" and return
    else
      render :js=>"alert(#{result.full_message})" and return
    end
  #redirect_to public_account_diymenus_path(@current_public_account)
  end



  def updateinfo
    reqtype=params[:pk]
    shopid=session[:shopid]
    if reqtype == 'password'
      currpass =params[:currpass]
      shop=Shop.find(shopid)
      if currpass!=shop.password
        render :js=>"changepassfail()" and return
      else
        shop.password=params[:newpass]
        shop.save
        render :js=>"changepasssucc()" and return
      end
    else
      shop=Shop.find(shopid)
      
      case reqtype
      when 'address'
        shop.address=params[:value]
      when 'phone'
        shop.phone=params[:value]
      when 'mobile'
        shop.mobile=params[:value]
      when 'priv1'
        shop.priv1=params[:value]
      when 'priv2'
        shop.priv2=params[:value]
      when 'priv3'
        shop.priv3=params[:value]
      else
      end

      shop.save
      render :js=>"" and return
    end
  end
end
