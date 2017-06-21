class ExerciseTemplate < ApplicationRecord
	belongs_to :workout_template
	has_one :sets_template
end
