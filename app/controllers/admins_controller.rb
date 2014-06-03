class AdminsController < ApplicationController
   before_filter :authadmin, :except=>[:login,:adminlogin]
  
  def index
    @account=session[:user_name]
  end

  def login

  end
  
  def adminlogin
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
    end
    
  end
  
  def authadmin
      admin=session[:usertype]
      if admin!='admin'
        render :file => "#{Rails.root}/public/404", :layout => false, :status => :not_found and return
      end
    
  end
  
  
end