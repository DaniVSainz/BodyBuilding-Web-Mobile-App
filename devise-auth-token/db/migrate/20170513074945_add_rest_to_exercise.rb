class AddRestToExercise < ActiveRecord::Migration[5.0]
  def change
    add_column :exercises, :rest, :integer
  end
end
