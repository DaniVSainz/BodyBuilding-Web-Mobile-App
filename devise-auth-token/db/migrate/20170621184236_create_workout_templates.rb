class CreateWorkoutTemplates < ActiveRecord::Migration[5.0]
  def change
    create_table :workout_templates do |t|
      t.string :title
      t.string :isTemplate
      t.string :boolean
      t.integer :exerciseCount
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
