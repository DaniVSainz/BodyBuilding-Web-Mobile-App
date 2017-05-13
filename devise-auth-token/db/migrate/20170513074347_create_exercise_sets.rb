class CreateExerciseSets < ActiveRecord::Migration[5.0]
  def change
    create_table :exercise_sets do |t|
      t.integer :reps
      t.integer :weight
      t.timestamps
    end
    add_reference :exercise_sets, :exercise, foreign_key: true
  end
end
