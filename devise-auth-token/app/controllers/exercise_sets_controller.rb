class ExerciseSetsController < ApplicationController
  before_action :set_exercise_set, only: [:show, :update, :destroy]

  # GET /exercise_sets
  def index
    @exercise_sets = ExerciseSet.all

    render json: @exercise_sets
  end

  # GET /exercise_sets/1
  def show
    render json: @exercise_set
  end


  def showSets
    @exercise_set = ExerciseSet.where exercise_id: params[:id]
    render json: @exercise_set
  end

  # POST /exercise_sets
  def create
    @exercise_set = ExerciseSet.new(exercise_set_params)
    
    if @exercise_set.save
      puts "Hello"
       @exercise = Exercise.find_by id: @exercise_set.exercise_id
       if @exercise.sets == nil 
          @exercise.sets = 1 
        else 
          @exercise.sets += 1 
       end 
      @exercise.save
      @exercise_set.set = @exercise.sets
      @exercise_set.save
      render json: @exercise_set, status: :created, location: @exercise_set
    else
      render json: @exercise_set.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /exercise_sets/1
  def update
    if @exercise_set.update(exercise_set_params)
      render json: @exercise_set
    else
      render json: @exercise_set.errors, status: :unprocessable_entity
    end
  end

  # DELETE /exercise_sets/1
  def destroy
    @exercise_set.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_exercise_set
      @exercise_set = ExerciseSet.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def exercise_set_params
      params.require(:exercise_set).permit(:reps, :weight, :exercise_id)
    end
end
