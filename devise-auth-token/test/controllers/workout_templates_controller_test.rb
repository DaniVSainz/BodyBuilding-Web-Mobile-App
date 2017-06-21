require 'test_helper'

class WorkoutTemplatesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @workout_template = workout_templates(:one)
  end

  test "should get index" do
    get workout_templates_url, as: :json
    assert_response :success
  end

  test "should create workout_template" do
    assert_difference('WorkoutTemplate.count') do
      post workout_templates_url, params: { workout_template: { boolean: @workout_template.boolean, exerciseCount: @workout_template.exerciseCount, isTemplate: @workout_template.isTemplate, title: @workout_template.title, user_id: @workout_template.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show workout_template" do
    get workout_template_url(@workout_template), as: :json
    assert_response :success
  end

  test "should update workout_template" do
    patch workout_template_url(@workout_template), params: { workout_template: { boolean: @workout_template.boolean, exerciseCount: @workout_template.exerciseCount, isTemplate: @workout_template.isTemplate, title: @workout_template.title, user_id: @workout_template.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy workout_template" do
    assert_difference('WorkoutTemplate.count', -1) do
      delete workout_template_url(@workout_template), as: :json
    end

    assert_response 204
  end
end
