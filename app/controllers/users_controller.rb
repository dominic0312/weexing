class UsersController < ApplicationController
  # GET /users
  # GET /users.json

  before_filter :authadmin, :only=>[:index,:show, :new, :edit,:update,:destroy]
  before_filter :authagency,:set_cache_buster, :only=>[:changepass]
  before_filter :set_cache_buster, :only=>[:resetpasspage]
  def index
    @users = User.paginate(:page => params[:page]).order('id DESC')
    respond_to do |format|
      format.html # index.html.erb
      format.xml { render :xml => @users }
    end
  end

  # GET /users/1
  # GET /users/1.json
  def show
    @user = User.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @user }
    end
  end

  # GET /users/new
  # GET /users/new.json
  def new
    @user = User.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @user }
    end
  end

  # GET /users/1/edit
  def edit
    @user = User.find(params[:id])
  end

  # POST /users
  # POST /users.json
  def create
    @user = User.new
    @user.email=params[:name]
    @user.password=params[:password]

    respond_to do |format|
      if @user.save
        Regconfirm.delay.regist_confirm(@user)
        format.js { render  :js=> "regsuccess('"+@user.email+"');"}
      else
        format.js { render  :js=> "regfail();"}
      end
    end
  end

  def activate
    id=params[:userid]
    token=params[:token]
    user=User.find(id) rescue nil
    respond_to do |format|
      if user && (user.activated == 0)
        if user.hashed_password == token
          user.activated =1
          user.save
          @email=user.email
          @uname=user.name
          format.html{render :action=>"activatesuccess"}
        else
          format.html{render :action=>"activatefail"}
        end
      else

        format.html{render :action=>"activatefail"}
      end
    end
  end

  def activatesuccess

  end

  def activatefail

  end

  # PUT /users/1
  # PUT /users/1.json
  def update
    @user = User.find(params[:id])

    respond_to do |format|
      if @user.update_attributes(params[:user])
        format.html { redirect_to(users_url,:notice => "User #{@user.name} was successfully updated.") }
        format.xml { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml { render :xml => @user.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /users/1
  # DELETE /users/1.json
  def destroy
    @user = User.find(params[:id])
    @user.destroy

    respond_to do |format|
      format.html { redirect_to users_url }
      format.json { head :no_content }
    end
  end

  def resetpassword
    @user = User.where(:email=>params[:emailreset]).first
    respond_to do |format|

      Regconfirm.delay.reset_password(@user)
      format.js { render  :js=> "mailsent();"}

    end

  end

  def resetpasspage
    userid=params[:userid]
    token=params[:token]
    respond_to do |format|
      if userid && token
        @user = User.find(userid)
        if @user && @user.hashed_password == token
          session[:passreset]='true'
          format.html{}
        else
          format.html{render :action=>"resetfail"}
        end
      else
        render :file => "#{Rails.root}/public/404", :layout => false, :status => :not_found and return
      end
    end
  end

  def resetfail

  end

  def resetsuccess

  end

  def changepass
    @user=User.find(params[:userid])
    @user.password=params[:regpassword]
    @user.save
    render :js=>"changesuccess()" and return

  end

  def authadmin
    admin=session[:usertype]
    if admin!='admin'
      render :file => "#{Rails.root}/public/404", :layout => false, :status => :not_found and return
    end
  end

  def authagency
    agency=session[:passreset]
    if agency

      else
      render :file => "#{Rails.root}/public/404", :layout => false, :status => :not_found and return
    end
  end

  def set_cache_buster
    response.headers["Cache-Control"] = "no-cache, no-store, max-age=0, must-revalidate"
    response.headers["Pragma"] = "no-cache"
    response.headers["Expires"] = "Fri, 01 Jan 1990 00:00:00 GMT"
  end
end
