require 'test_helper'

class UsertemplatesControllerTest < ActionController::TestCase
  setup do
    @usertemplate = usertemplates(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:usertemplates)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create usertemplate" do
    assert_difference('Usertemplate.count') do
      post :create, usertemplate: { description: @usertemplate.description, name: @usertemplate.name, pic: @usertemplate.pic }
    end

    assert_redirected_to usertemplate_path(assigns(:usertemplate))
  end

  test "should show usertemplate" do
    get :show, id: @usertemplate
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @usertemplate
    assert_response :success
  end

  test "should update usertemplate" do
    put :update, id: @usertemplate, usertemplate: { description: @usertemplate.description, name: @usertemplate.name, pic: @usertemplate.pic }
    assert_redirected_to usertemplate_path(assigns(:usertemplate))
  end

  test "should destroy usertemplate" do
    assert_difference('Usertemplate.count', -1) do
      delete :destroy, id: @usertemplate
    end

    assert_redirected_to usertemplates_path
  end
end
