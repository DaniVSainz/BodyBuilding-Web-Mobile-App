require 'test_helper'

class ExerciseTemplatesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @exercise_template = exercise_templates(:one)
  end

  test "should get index" do
    get exercise_templates_url, as: :json
    assert_response :success
  end

  test "should create exercise_template" do
    assert_difference('ExerciseTemplate.count') do
      post exercise_templates_url, params: { exercise_template: { avgWeight: @exercise_template.avgWeight, isTemplate: @exercise_template.isTemplate, restTime: @exercise_template.restTime, setCount: @exercise_template.setCount, setCount: @exercise_template.setCount, title: @exercise_template.title } }, as: :json
    end

    assert_response 201
  end

  test "should show exercise_template" do
    get exercise_template_url(@exercise_template), as: :json
    assert_response :success
  end

  test "should update exercise_template" do
    patch exercise_template_url(@exercise_template), params: { exercise_template: { avgWeight: @exercise_template.avgWeight, isTemplate: @exercise_template.isTemplate, restTime: @exercise_template.restTime, setCount: @exercise_template.setCount, setCount: @exercise_template.setCount, title: @exercise_template.title } }, as: :json
    assert_response 200
  end

  test "should destroy exercise_template" do
    assert_difference('ExerciseTemplate.count', -1) do
      delete exercise_template_url(@exercise_template), as: :json
    end

    assert_response 204
  end
end
