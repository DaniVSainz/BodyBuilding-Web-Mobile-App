class RemoveWorkoutTFromExerciseTemplates < ActiveRecord::Migration[5.0]
  def change
    remove_column :exercise_templates, :workout_templates_id
  end
end
