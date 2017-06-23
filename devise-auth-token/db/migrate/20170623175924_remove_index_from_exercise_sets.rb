class RemoveIndexFromExerciseSets < ActiveRecord::Migration[5.0]
  def change
    remove_index :exercise_templates, :workout_templates_id
  end
end
