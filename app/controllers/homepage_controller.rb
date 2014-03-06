class HomepageController < ApplicationController
  def usercheck
    #logger.info(params[:username])
    #logger.info(params[:password])
    if user = User.authenticate(params[:username], params[:password])
      session[:user_name] = user.email
      session[:credits] = user.credit
      #render(:action=>regist)
      render  :js=> "setUserCheckPass();"
    #render  :js=> "window.location = '/admin';"
    #redirect_to admin_url,:notice =>  params[:username]
    else
      render  :js=> "setUserCheckFail();"
    #redirect_to homepage_login_url,:notice => 'user_not_exist'
    end
  #[params[:username],params[:password]]
  # redirect_to :action => "login",:notice => 'Invalid cart'
  #,:notice => [params[:username],params[:password]]
  end

  def login
    top1 = News.find_by_doctype("top1")
    if top1
      @top1_title=top1.title
    else
      @top1_title="."
    end

    top2= News.find_by_doctype("top2")
    if top2
      @top2_title=top2.title
    else
      @top2_title="."
    end
  end

  def apps

  end

  def regist

  end

  def validate_code
    pointcode = Pointcode.find_by_secretcode(params[:code])
    if pointcode
      if pointcode.used == 1
        @error='code_used'
        render :json => { :errors => @error}, :status => 422 and return
      end
      user= User.find_by_email(session[:user_name])
      if user
        credit_p=user.credit
        credit_p = credit_p + pointcode.point
        user.update_attributes(:credit=>credit_p)
        logger.info(user.errors.messages)
        pointcode.userby=user.email
        pointcode.used=1
        pointcode.save

        @point=pointcode.point
        @credit=user.credit
        render :json => {:point => @point,:card_credit=>@credit}
      else
      end
    else
    end
  end

  def signup_login_check
    user=User.find_by_email(params[:user_login])
    if user
      render  :js=> "setEmailExistFail();valid.email=1;"
    else
      render  :js=> "setEmailExistSuc();"
    end
  end

end