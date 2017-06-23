class AddWorkoutRefToExerciseTemplate < ActiveRecord::Migration[5.0]
  def change
    add_reference :exercise_templates, :workout_template, foreign_key: true
  end
end
