class AddBooleanToWorkouts < ActiveRecord::Migration[5.0]
  def change
    add_column :workouts, :template, :boolean
  end
end
