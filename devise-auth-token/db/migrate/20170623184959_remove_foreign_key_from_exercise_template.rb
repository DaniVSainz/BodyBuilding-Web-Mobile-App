class RemoveForeignKeyFromExerciseTemplate < ActiveRecord::Migration[5.0]
  def change
    remove_foreign_key :exercise_templates, column: :workout_templates_id
  end
end
