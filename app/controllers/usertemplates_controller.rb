class UsertemplatesController < ApplicationController
  # GET /usertemplates
  # GET /usertemplates.json
  before_filter :authadmin, :only=>[:index,:show, :new, :edit, :update,:destroy]
  def index
    @usertemplates = Usertemplate.paginate(:page => params[:page],:per_page => 15).order('id DESC')
    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @usertemplates }
    end
  end

  def display
    @usertemplates = Usertemplate.where(:installed => 1).paginate(:page => params[:page])
    @shopid=params[:shopid]
    shop=Shop.find(params[:shopid]);
    @current_template=shop.usertemplate_id
    respond_to do |format|
      format.html # index.html.erb
      format.js
    end

  end

  # GET /usertemplates/1
  # GET /usertemplates/1.json
  def show
    @usertemplate = Usertemplate.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @usertemplate }
    end
  end

  # GET /usertemplates/new
  # GET /usertemplates/new.json
  def new
    @usertemplate = Usertemplate.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @usertemplate }
    end
  end

  # GET /usertemplates/1/edit
  def edit
    @usertemplate = Usertemplate.find(params[:id])
  end

  # POST /usertemplates
  # POST /usertemplates.json
  def create
    @usertemplate = Usertemplate.new(params[:usertemplate])

    respond_to do |format|
      if @usertemplate.save
        format.html { redirect_to @usertemplate, notice: 'Usertemplate was successfully created.' }
        format.json { render json: @usertemplate, status: :created, location: @usertemplate }
      else
        format.html { render action: "new" }
        format.json { render json: @usertemplate.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /usertemplates/1
  # PUT /usertemplates/1.json
  def update
    @usertemplate = Usertemplate.find(params[:id])

    respond_to do |format|
      if @usertemplate.update_attributes(params[:usertemplate])
        format.html { redirect_to @usertemplate, notice: 'Usertemplate was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @usertemplate.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /usertemplates/1
  # DELETE /usertemplates/1.json
  def destroy
    @usertemplate = Usertemplate.find(params[:id])
    @usertemplate.destroy

    respond_to do |format|
      format.html { redirect_to usertemplates_url }
      format.json { head :no_content }
    end
  end

  def install_template
    @template= Usertemplate.find(params[:ids])
    respond_to do |format|
      if @template.installed == 1
        format.js {  render  :js=> "install_fail();"}
      else
        @template.installed = 1
        begin
          @template.unzip_file
        rescue
          format.js {  render  :js=> "install_fail();"}
        return
        end
        @template.save
        format.js {  render  :js=> "install_success();"}
      end
    end
  end
  
  def authadmin
    admin=session[:usertype]
    if admin!='admin'
      render :file => "#{Rails.root}/public/404", :layout => false, :status => :not_found and return
    end
  end

end
