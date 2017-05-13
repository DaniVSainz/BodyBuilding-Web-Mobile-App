class Exercise < ApplicationRecord
  belongs_to :workout
  has_one :user,through: :workout
  has_many :exercise_sets
end
