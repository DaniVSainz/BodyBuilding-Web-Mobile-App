require 'test_helper'

class ExerciseSetsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @exercise_set = exercise_sets(:one)
  end

  test "should get index" do
    get exercise_sets_url, as: :json
    assert_response :success
  end

  test "should create exercise_set" do
    assert_difference('ExerciseSet.count') do
      post exercise_sets_url, params: { exercise_set: { reps: @exercise_set.reps, weight: @exercise_set.weight } }, as: :json
    end

    assert_response 201
  end

  test "should show exercise_set" do
    get exercise_set_url(@exercise_set), as: :json
    assert_response :success
  end

  test "should update exercise_set" do
    patch exercise_set_url(@exercise_set), params: { exercise_set: { reps: @exercise_set.reps, weight: @exercise_set.weight } }, as: :json
    assert_response 200
  end

  test "should destroy exercise_set" do
    assert_difference('ExerciseSet.count', -1) do
      delete exercise_set_url(@exercise_set), as: :json
    end

    assert_response 204
  end
end
