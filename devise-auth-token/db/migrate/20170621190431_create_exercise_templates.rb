class CreateExerciseTemplates < ActiveRecord::Migration[5.0]
  def change
    create_table :exercise_templates do |t|
      t.string :title
      t.boolean :isTemplate
      t.integer :setCount
      t.integer :restTime
      t.integer :avgWeight
      t.integer :setCount

      t.timestamps
    end
  end
end
