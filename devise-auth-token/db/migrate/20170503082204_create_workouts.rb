class CreateWorkouts < ActiveRecord::Migration[5.0]
  def change
    create_table :workouts do |t|

      t.timestamps
      t.references :user, foreign_key: true
      t.string :name
    end
  end
end
