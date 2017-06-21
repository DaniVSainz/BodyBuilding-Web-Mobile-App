class ExerciseTemplatesController < ApplicationController
  before_action :set_exercise_template, only: [:show, :update, :destroy]

  # GET /exercise_templates
  def index
    @exercise_templates = ExerciseTemplate.all

    render json: @exercise_templates
  end

  # GET /exercise_templates/1
  def show
    render json: @exercise_template
  end

  # POST /exercise_templates
  def create
    @exercise_template = ExerciseTemplate.new(exercise_template_params)

    if @exercise_template.save
      render json: @exercise_template, status: :created, location: @exercise_template
    else
      render json: @exercise_template.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /exercise_templates/1
  def update
    if @exercise_template.update(exercise_template_params)
      render json: @exercise_template
    else
      render json: @exercise_template.errors, status: :unprocessable_entity
    end
  end

  # DELETE /exercise_templates/1
  def destroy
    @exercise_template.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_exercise_template
      @exercise_template = ExerciseTemplate.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def exercise_template_params
      params.require(:exercise_template).permit(:title, :isTemplate, :setCount, :restTime, :avgWeight, :setCount)
    end
end
