class AddIndxToExercises < ActiveRecord::Migration[5.0]
  def change
    add_reference :exercises, :user, foreign_key: true
  end
end
