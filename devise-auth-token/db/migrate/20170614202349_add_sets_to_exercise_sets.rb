class AddSetsToExerciseSets < ActiveRecord::Migration[5.0]
  def change
        add_column :exercises, :sets, :integer
  end
end
