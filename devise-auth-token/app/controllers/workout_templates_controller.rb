class WorkoutTemplatesController < ApplicationController
  before_action :set_workout_template, only: [:show, :update, :destroy]

  # GET /workout_templates
  def index
    @workout_templates = WorkoutTemplate.all

    render json: @workout_templates
  end

  # GET /workout_templates/1
  def show
    render json: @workout_template
  end

  # POST /workout_templates
  def create
    @workout_template = WorkoutTemplate.new(workout_template_params)

    if @workout_template.save
      render json: @workout_template, status: :created, location: @workout_template
    else
      render json: @workout_template.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /workout_templates/1
  def update
    if @workout_template.update(workout_template_params)
      render json: @workout_template
    else
      render json: @workout_template.errors, status: :unprocessable_entity
    end
  end

  # DELETE /workout_templates/1
  def destroy
    @workout_template.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_workout_template
      @workout_template = WorkoutTemplate.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def workout_template_params
      params.require(:workout_template).permit(:title, :isTemplate, :boolean, :exerciseCount, :user_id)
    end
end
