class CreateSetsTemplates < ActiveRecord::Migration[5.0]
  def change
    create_table :sets_templates do |t|
      t.integer :setNum
      t.integer :weight
      t.integer :reps
      t.references :exercise_template, foreign_key: true

      t.timestamps
    end
  end
end
