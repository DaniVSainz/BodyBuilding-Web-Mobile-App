class RemoveWrongColumnsFromWorkoutTemplate < ActiveRecord::Migration[5.0]
  def change
    remove_column :workout_templates, :isTemplate, :string
    remove_column :workout_templates, :boolean, :string
    add_column :workout_templates, :isTemplate, :boolean
  end
end
