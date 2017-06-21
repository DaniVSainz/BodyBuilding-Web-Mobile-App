class AddReferencesToExerciseTemplates < ActiveRecord::Migration[5.0]
  def change
    add_reference :exercise_templates, :workout_templates, foreign_key: true
  end
end
