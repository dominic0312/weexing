class CardController < ApplicationController
  def index
    @counter=session[:user_name]
    @credit= session[:credits]
  end

  def pages
    @pageid = params[:page_id]
    respond_to do |format|
      format.html{}
      format.js { render :layout => false }
    end

  end

  def updateinfo
    page2=Cardpage.find_by_account(params[:user_name])
    page2.brand=params[:brand]
    logger.error "Attempt to access invalid cart #{params[:brand]}"
    page2.logo="coco.png"
    page2.save
  end

  def newinfo
    page=Cardpage.find_by_account(params[:user_name])
    @brand=page.brand
  end

  def showinfo
    page=Cardpage.find_by_account(params[:user_name])
    @brand=page.brand   
    @template=page.cardtemplate
    respond_to do |format|
      format.html{}
      format.json { render :json => {:brand => @brand,:template=>@template} }
    end
  end

  def showcardtemplate
    cards=CardTemplate.all();
    respond_to do |format|
      format.html{}
      format.json { render :json => {:card => cards}  }
    end

  end
  
  def updatecardtemplate
    page=Cardpage.find_by_account(params[:user_name])
    page.cardtemplate = params[:cardtemplate] 
    respond_to do |format|
      format.html{}
      format.json { render :json => {:cardtemplate => params[:cardtemplate]}  }
    end
    page.save
  end

end
