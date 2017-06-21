class AddHowManySetsToSetsTemplate < ActiveRecord::Migration[5.0]
  def change
    add_column :sets_templates, :setsCount, :integer
  end
end
