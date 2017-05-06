class AddNameToExercise < ActiveRecord::Migration[5.0]
  def change
    add_column :exercises, :name, :string
  end
end
