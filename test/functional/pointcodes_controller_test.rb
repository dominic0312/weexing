require 'test_helper'

class PointcodesControllerTest < ActionController::TestCase
  setup do
    @pointcode = pointcodes(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:pointcodes)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create pointcode" do
    assert_difference('Pointcode.count') do
      post :create, pointcode: { secretcode: @pointcode.secretcode, used: @pointcode.used, userby: @pointcode.userby }
    end

    assert_redirected_to pointcode_path(assigns(:pointcode))
  end

  test "should show pointcode" do
    get :show, id: @pointcode
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @pointcode
    assert_response :success
  end

  test "should update pointcode" do
    put :update, id: @pointcode, pointcode: { secretcode: @pointcode.secretcode, used: @pointcode.used, userby: @pointcode.userby }
    assert_redirected_to pointcode_path(assigns(:pointcode))
  end

  test "should destroy pointcode" do
    assert_difference('Pointcode.count', -1) do
      delete :destroy, id: @pointcode
    end

    assert_redirected_to pointcodes_path
  end
end
