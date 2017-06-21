class WorkoutTemplate < ApplicationRecord
  belongs_to :user
  has_many :exercise_templates
end
