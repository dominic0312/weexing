#coding: utf-8
class AgencyController < ApplicationController

  before_filter :authagency, :set_cache_buster, :only=>[:index,:mcard, :credit]
  def index
    @news=News.all
    @user=User.find(session[:user_id])
    @documents=Document.all
    respond_to do |format|
      format.html
    end
  end

  def login

  end

  def usercheck
    if user = User.authenticate(params[:username], params[:password])
      if user.activated == 0
        render  :js=> "setUserNotActive();" and return
      end
      session[:user_name] = user.name
      session[:user_email] = user.email
      session[:credits] = user.credit
      session[:user_id] = user.id
      render  :js=> "loginsucc()" and return
    else
      render  :js=> "userpasswrong()"
    end
  end

  def logout
    session[:user_name] = nil
    session[:user_email] = nil 
    session[:credits] = nil
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
        Regconfirm.regist_confirm(@user)
        format.js { render  :js=> "regsuccess()"}
      else
        format.js { render  :js=> "regfail()"}
      end
    end

  end

  def validate_code
    pointcode = Pointcode.find_by_secretcode(params[:code])
    if pointcode
      if pointcode.used == 1
        @error='该充值卡号已经被使用'
        render :json => { :error => @error} and return
      end
      user= User.find(session[:user_id])
      if user
        credit_p=user.credit
        credit_p = credit_p + pointcode.point
        user.update_attributes(:credit=>credit_p)
        pointcode.userby=user.email
        pointcode.used=1
        pointcode.save

        @point=pointcode.point
        @credit=user.credit
        session[:credits]=user.credit
        render :json => {:point => @point,:card_credit=>@credit} and return
      else
      end
    else
      render :json => {:error=>"充值卡序列号无效,请联系微行解决"} and return
    end
  end

  def credit
    @user=User.find(session[:user_id])
    @shopnum=Shop.where(:user_id=>session[:user_id]).length
  end

  def authagency
    agency=session[:user_id]
    if agency

      else
      render :file => "#{Rails.root}/public/404", :layout => false, :status => :not_found and return
    end
  end

  def changepass
    if user=User.authenticatebyid(session[:user_id],params[:oldpass])
      user.password=params[:password]
      user.save
      render :js=>"changepasssucc()"
    else
      render :js=>"changepasswrong()"
    end
  end

  def mcard
    @shops=Shop.where(:user_id=>session[:user_id]).order('id DESC')
    @templates=Usertemplate.all
    @membercards=Membercard.all
  end

  def set_cache_buster
    response.headers["Cache-Control"] = "no-cache, no-store, max-age=0, must-revalidate"
    response.headers["Pragma"] = "no-cache"
    response.headers["Expires"] = "Fri, 01 Jan 1990 00:00:00 GMT"
  end

end
