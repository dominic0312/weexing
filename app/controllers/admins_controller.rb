class AdminsController < ApplicationController
   before_filter :authadmin, :except=>[:login,:adminlogin]
  
  def index
    @account=session[:user_name]

  end

  def login

  end
  
  def adminlogin
    
    #logger.info(params[:username])
    #logger.info(params[:password])
    if user = User.authenticate(params[:username], params[:password])
      if user.usertype != 'admin'
        render  :js=> "setUserNotAdmin();" and return
      end
      session[:user_name] = user.email
      session[:user_id] = user.id
      session[:usertype] = 'admin'
      #render(:action=>regist)
      render  :js=> "setUserCheckPass();" and return
    #render  :js=> "window.location = '/admin';"
    #redirect_to admin_url,:notice =>  params[:username]
    else
      render  :js=> "setUserCheckFail();" and return
    #redirect_to homepage_login_url,:notice => 'user_not_exist'
    end
  #[params[:username],params[:password]]
  # redirect_to :action => "login",:notice => 'Invalid cart'
  #,:notice => [params[:username],params[:password]]
    
    
  end
  
  def authadmin
      admin=session[:usertype]
      if admin!='admin'
        render :file => "#{Rails.root}/public/404", :layout => false, :status => :not_found and return
      end
    
  end
  
  
end