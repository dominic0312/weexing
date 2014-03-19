class PointcodesController < ApplicationController
  # GET /pointcodes
  # GET /pointcodes.json
  def index
    #@pointcodes = Pointcode.all
    
    @pointcodes = Pointcode.paginate(:page => params[:page])
    

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @pointcodes }
    end
  end

  # GET /pointcodes/1
  # GET /pointcodes/1.json
  def show
    @pointcode = Pointcode.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @pointcode }
    end
  end

  # GET /pointcodes/new
  # GET /pointcodes/new.json
  def new
    @pointcode = Pointcode.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @pointcode }
    end
  end

  # GET /pointcodes/1/edit
  def edit
    @pointcode = Pointcode.find(params[:id])
  end

  # POST /pointcodes
  # POST /pointcodes.json
  def create
    @pointcode = Pointcode.new(params[:pointcode])

    respond_to do |format|
      if @pointcode.save
        format.html { redirect_to pointcodes_url }
        format.json { render json: @pointcode, status: :created, location: @pointcode }
      else
        format.html { render action: "new" }
        format.json { render json: @pointcode.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /pointcodes/1
  # PUT /pointcodes/1.json
  def update
    @pointcode = Pointcode.find(params[:id])

    respond_to do |format|
      if @pointcode.update_attributes(params[:pointcode])
        format.html { redirect_to @pointcode, notice: 'Pointcode was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @pointcode.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /pointcodes/1
  # DELETE /pointcodes/1.json
  def destroy
    @pointcode = Pointcode.find(params[:id])
    @pointcode.destroy

    respond_to do |format|
      format.html { redirect_to pointcodes_url }
      format.json { head :no_content }
    end
  end

  def add_pointcodes
    card_num= Integer(params[:card_quantity])
    point_num= Integer(params[:point_quantity])
    respond_to do |format|
      if card_num && point_num && card_num > 100
        format.js {  render  :js=> ""}
      end
      1.upto(card_num){@pointcode= Pointcode.new
        sect=make_random_string(16)
        @pointcode.secretcode=sect
        @pointcode.point=point_num
        @pointcode.save}
      format.js {  render  :js=> "refresh()"}
    end

  end

  def make_random_string(len)
    chars = ("a".."z").to_a + ("A".."Z").to_a + ("0".."9").to_a
    random_string = ""
    1.upto(len) { |i| random_string << chars[rand(chars.size-1)] }
    return random_string
  end

end
