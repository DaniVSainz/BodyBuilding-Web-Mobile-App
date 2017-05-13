class RemoveSetsFromExercise < ActiveRecord::Migration[5.0]
  def change
    remove_column :exercises, :set4, :integer
    remove_column :exercises, :weight4, :integer
    remove_column :exercises, :set5, :integer
    remove_column :exercises, :weight5, :integer
    remove_column :exercises, :set6, :integer
    remove_column :exercises, :weight6, :integer
    remove_column :exercises, :set7, :integer
    remove_column :exercises, :weight7, :integer
  end
end
