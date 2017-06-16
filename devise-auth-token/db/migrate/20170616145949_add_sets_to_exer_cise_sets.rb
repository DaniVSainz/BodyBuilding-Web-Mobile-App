class AddSetsToExerCiseSets < ActiveRecord::Migration[5.0]
  def change
    add_column :exercise_sets, :set, :integer
  end
end
