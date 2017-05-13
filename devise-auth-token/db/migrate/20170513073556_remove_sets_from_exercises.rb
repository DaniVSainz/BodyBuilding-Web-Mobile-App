class RemoveSetsFromExercises < ActiveRecord::Migration[5.0]
  def change
    remove_column :exercises, :set1, :integer
    remove_column :exercises, :weight1, :integer
    remove_column :exercises, :set2, :integer
    remove_column :exercises, :weight2, :integer
    remove_column :exercises, :set3, :integer
    remove_column :exercises, :weight3, :integer
  end
end
