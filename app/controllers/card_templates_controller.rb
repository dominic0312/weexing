class CardTemplatesController < ApplicationController
  # GET /card_templates
  # GET /card_templates.json
  def index
    @card_templates = CardTemplate.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @card_templates }
    end
  end

  # GET /card_templates/1
  # GET /card_templates/1.json
  def show
    @card_template = CardTemplate.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @card_template }
    end
  end

  # GET /card_templates/new
  # GET /card_templates/new.json
  def new
    @card_template = CardTemplate.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @card_template }
    end
  end

  # GET /card_templates/1/edit
  def edit
    @card_template = CardTemplate.find(params[:id])
  end

  # POST /card_templates
  # POST /card_templates.json
  def create
    @card_template = CardTemplate.new(params[:card_template])

    respond_to do |format|
      if @card_template.save
        format.html { redirect_to @card_template, notice: 'Card template was successfully created.' }
        format.json { render json: @card_template, status: :created, location: @card_template }
      else
        format.html { render action: "new" }
        format.json { render json: @card_template.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /card_templates/1
  # PUT /card_templates/1.json
  def update
    @card_template = CardTemplate.find(params[:id])

    respond_to do |format|
      if @card_template.update_attributes(params[:card_template])
        format.html { redirect_to @card_template, notice: 'Card template was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @card_template.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /card_templates/1
  # DELETE /card_templates/1.json
  def destroy
    @card_template = CardTemplate.find(params[:id])
    @card_template.destroy

    respond_to do |format|
      format.html { redirect_to card_templates_url }
      format.json { head :no_content }
    end
  end
end
