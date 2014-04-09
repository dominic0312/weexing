class AgencyController < ApplicationController

  before_filter :authagency, :set_cache_buster, :only=>[:index]
  def index

  end

  def login

  end

  def usercheck
    #logger.info(params[:username])
    #logger.info(params[:password])
    if user = User.authenticate(params[:username], params[:password])
      if user.activated == 0
        render  :js=> "setUserNotActive();" and return
      end
      session[:user_name] = user.name
      session[:credits] = user.credit
      session[:user_id] = user.id
      #render(:action=>regist)
      render  :js=> "loginsucc()" and return
    #render  :js=> "window.location = '/admin';"
    #redirect_to admin_url,:notice =>  params[:username]
    else
      render  :js=> "userpasswrong()"

    #redirect_to homepage_login_url,:notice => 'user_not_exist'
    end
  #[params[:username],params[:password]]
  # redirect_to :action => "login",:notice => 'Invalid cart'
  #,:notice => [params[:username],params[:password]]
  end

  def logout
    session[:user_name] = nil
    session[:user_id] = nil
    session[:usertype] = nil
    redirect_to agencylogin_url
  end

  def reg_check
    user=User.where(:name=>params[:regusername]).first
    @res='false'
    if user
      render  json: @res and return
    else
      @res='true'
      render  json:@res and return
    end

  end

  def email_check
    email=params[:email]
    if email
      user=User.where(:email=>params[:email]).first
      @res='false'
      if user
        render  json: @res and return
      else
        @res='true'
        render  json:@res and return
      end
    else
      user=User.where(:email=>params[:emailreset]).first
      @res='false'
      if user
        @res='true'
        render  json: @res and return
      else
        render  json:@res and return
      end
    end

  end

  def register
    @user = User.new
    @user.name=params[:regusername]
    @user.email=params[:email]
    @user.password=params[:regpassword]

    respond_to do |format|
      if @user.save
        Regconfirm.delay.regist_confirm(@user)
        format.js { render  :js=> "regsuccess()"}
      else
        format.js { render  :js=> "alert('fail');"}
      end
    end

  end

  def authagency
    agency=session[:user_id]
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