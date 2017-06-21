class SetsTemplatesController < ApplicationController
  before_action :set_sets_template, only: [:show, :update, :destroy]

  # GET /sets_templates
  def index
    @sets_templates = SetsTemplate.all

    render json: @sets_templates
  end

  # GET /sets_templates/1
  def show
    render json: @sets_template
  end

  # POST /sets_templates
  def create
    @sets_template = SetsTemplate.new(sets_template_params)

    if @sets_template.save
      render json: @sets_template, status: :created, location: @sets_template
    else
      render json: @sets_template.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /sets_templates/1
  def update
    if @sets_template.update(sets_template_params)
      render json: @sets_template
    else
      render json: @sets_template.errors, status: :unprocessable_entity
    end
  end

  # DELETE /sets_templates/1
  def destroy
    @sets_template.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_sets_template
      @sets_template = SetsTemplate.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def sets_template_params
      params.require(:sets_template).permit(:setNum, :weight, :reps, :exercise_template_id)
    end
end
