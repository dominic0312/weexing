class SessionsController < ApplicationController
  def new
  end

  def create
    if user = User.authenticate(params[:name], params[:password])
      session[:user_id] = user.id
      redirect_to admin_url
    else
      redirect_to admin_url, :alert => "Invalid user/password combination"
    end
  end

  def destroy
    session[:user_name] = nil
    session[:user_id] = nil
    session[:usertype] = nil
    redirect_to homepage_url
  end

  def destroy_shop
    session[:shopid] = nil
    session[:shop_login]= 'empty'
    render :js=>"redirect_login()" and return
  end

end
