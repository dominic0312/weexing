class MembercardsController < ApplicationController
  before_action :set_membercard, only: [:show, :edit, :update, :destroy]
  before_filter :authadmin, :only=>[:index,:show, :new, :edit, :update,:destroy]
  # GET /membercards
  # GET /membercards.json
  def index
    @membercards = Membercard.paginate(:page => params[:page],:per_page => 15).order('id DESC')
   
  end

  # GET /membercards/1
  # GET /membercards/1.json
  def show
  end

  # GET /membercards/new
  def new
    @membercard = Membercard.new
  end

  # GET /membercards/1/edit
  def edit
  end

  # POST /membercards
  # POST /membercards.json
  def create
    @membercard = Membercard.new(membercard_params)

    respond_to do |format|
      if @membercard.save
        format.html { redirect_to @membercard, notice: 'Membercard was successfully created.' }
        format.json { render action: 'show', status: :created, location: @membercard }
      else
        format.html { render action: 'new' }
        format.json { render json: @membercard.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /membercards/1
  # PATCH/PUT /membercards/1.json
  def update
    respond_to do |format|
      if @membercard.update(membercard_params)
        format.html { redirect_to @membercard, notice: 'Membercard was successfully updated.' }
        format.json { render action: 'show', status: :ok, location: @membercard }
      else
        format.html { render action: 'edit' }
        format.json { render json: @membercard.errors, status: :unprocessable_entity }
      end
    end
  end

  def display
    @membercards = Membercard.paginate(:page => params[:page])
    @shopid=params[:shopid]
    shop=Shop.find(params[:shopid]);
    @current_card=shop.membercard_id
    respond_to do |format|
      format.html # index.html.erb
      format.js
    end

  end
  
  
  


  # DELETE /membercards/1
  # DELETE /membercards/1.json
  def destroy
    @membercard.destroy
    respond_to do |format|
      format.html { redirect_to membercards_url }
      format.json { head :no_content }
    end
  end
  
  def authadmin
    admin=session[:usertype]
    if admin!='admin'
      render :file => "#{Rails.root}/public/404", :layout => false, :status => :not_found and return
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_membercard
    @membercard = Membercard.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def membercard_params
    params.require(:membercard).permit(:name,:pic)
  end
end
