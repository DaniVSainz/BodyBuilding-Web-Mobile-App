require 'test_helper'

class SetsTemplatesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @sets_template = sets_templates(:one)
  end

  test "should get index" do
    get sets_templates_url, as: :json
    assert_response :success
  end

  test "should create sets_template" do
    assert_difference('SetsTemplate.count') do
      post sets_templates_url, params: { sets_template: { exercise_template_id: @sets_template.exercise_template_id, reps: @sets_template.reps, setNum: @sets_template.setNum, weight: @sets_template.weight } }, as: :json
    end

    assert_response 201
  end

  test "should show sets_template" do
    get sets_template_url(@sets_template), as: :json
    assert_response :success
  end

  test "should update sets_template" do
    patch sets_template_url(@sets_template), params: { sets_template: { exercise_template_id: @sets_template.exercise_template_id, reps: @sets_template.reps, setNum: @sets_template.setNum, weight: @sets_template.weight } }, as: :json
    assert_response 200
  end

  test "should destroy sets_template" do
    assert_difference('SetsTemplate.count', -1) do
      delete sets_template_url(@sets_template), as: :json
    end

    assert_response 204
  end
end
