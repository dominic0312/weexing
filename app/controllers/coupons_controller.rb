class CouponsController < ApplicationController
  # GET /coupons
  # GET /coupons.json
  def index
    @coupons = Coupon.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @coupons }
    end
  end

  # GET /coupons/1
  # GET /coupons/1.json
  def show
    @coupon = Coupon.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @coupon }
    end
  end

  # GET /coupons/new
  # GET /coupons/new.json
  def new
    @coupon = Coupon.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @coupon }
    end
  end

  # GET /coupons/1/edit
  def edit
    @coupon = Coupon.find(params[:id])
  end

  # POST /coupons
  # POST /coupons.json
  def create
    @coupon = Coupon.new(params[:coupon])

    respond_to do |format|
      if @coupon.save
        format.html { redirect_to @coupon, notice: 'Coupon was successfully created.' }
        format.json { render json: @coupon, status: :created, location: @coupon }
      else
        format.html { render action: "new" }
        format.json { render json: @coupon.errors, status: :unprocessable_entity }
      end
    end
  end

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

  def newcoupon
    @coupon = Coupon.new

  end

  # PUT /coupons/1
  # PUT /coupons/1.json
  def update
    @coupon = Coupon.find(params[:id])

    respond_to do |format|
      if @coupon.update_attributes(params[:coupon])
        format.html { redirect_to @coupon, notice: 'Coupon was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @coupon.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /coupons/1
  # DELETE /coupons/1.json
  def destroy
    @coupon = Coupon.find(params[:id])
    @coupon.pic = nil
    @coupon.save
    @coupon.destroy

    respond_to do |format|
      format.html { redirect_to coupons_url }
      format.json { head :no_content }
    end
  end

  def display
    @shopid=session[:shopid]
    @coupons = Coupon.where(:shopid => @shopid).paginate(:page => params[:page],:per_page => 4).order('id DESC')

    respond_to do |format|
      format.html # index.html.erb
      format.js
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
    #@coupon.destroy
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
    render :js=>""
  end
end
