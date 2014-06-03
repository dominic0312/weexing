class HomepageController < ApplicationController
  def usercheck
    #logger.info(params[:username])
    #logger.info(params[:password])
    if user = User.authenticate(params[:username], params[:password])
      if user.activated == 0
        render  :js=> "setUserNotActive();" and return
      end
      session[:user_name] = user.email
      session[:credits] = user.credit
      session[:user_id] = user.id
      #render(:action=>regist)
      render  :js=> "setUserCheckPass();" and return
    else
      render  :js=> "setUserCheckFail();"
    end
  end
  
  def landing
    
  end
end