class WorkoutsController < ApplicationController
  before_action :set_workout, only: [:show, :update, :destroy]

  # GET /workouts
  def index
    @workouts = Workout.all

    render json: @workouts
  end

  # GET /workouts/1
  def show
    @exercise = Exercise.where workout_id: @workout.id     
    user_data = [@workout , @exercise ]
    render json: user_data
  end

  # get /workouts/user/:id
  def userShow
    @workout = Workout.where user_id: workout_params['id']
    @workout = @workout.reverse
    render json: @workout
  end

  # POST /workouts
  def create
    @workout = Workout.new(workout_params)

    if @workout.save
      render json: @workout, status: :created, location: @workout
    else
      render json: @workout.errors, status: :unprocessable_entity
    end
  end

  def createFromTemplate
    @template = WorkoutTemplate.find_by id: workout_params['id']
    @workout = Workout.new 
    @workout.name = (@template.title)
    @workout.user_id = @template.user_id
    if @workout.save
      @template.exercise_templates.each do |exerciseTemplate| 
        @workout.exercises.create name: exerciseTemplate.title, rest: exerciseTemplate.restTime
      end 
    else
      render json: @workout.errors, status: :unprocessable_entity
    end
  end 

  # PATCH/PUT /workouts/1
  def update
    if @workout.update(workout_params)
      render json: @workout
    else
      render json: @workout.errors, status: :unprocessable_entity
    end
  end

  # DELETE /workouts/1
  def destroy
    if @workout.exercises.first != nil
      @workout.exercises.each do |exercise|
        if exercise.exercise_sets.first != nil 
          exercise.exercise_sets.each do |sets|
            sets.destroy
          end
          exercise.destroy
        else
          exercise.destroy
        end 
      end 
    end 
    @workout.destroy

  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_workout
      @workout = Workout.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def workout_params
      params.permit(:name,:user_id,:id,:template,)
    end
end
