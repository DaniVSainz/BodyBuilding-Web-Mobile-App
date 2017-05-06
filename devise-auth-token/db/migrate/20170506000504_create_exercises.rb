class CreateExercises < ActiveRecord::Migration[5.0]
  def change
    create_table :exercises do |t|
      t.references :workout, foreign_key: true
      t.integer :set1
      t.integer :weight1
       t.integer :set2
      t.integer :weight2
       t.integer :set3
      t.integer :weight3
       t.integer :set4
      t.integer :weight4
       t.integer :set5
      t.integer :weight5
       t.integer :set6
      t.integer :weight6
       t.integer :set7
      t.integer :weight7
      
      t.timestamps
    end
  end
end
