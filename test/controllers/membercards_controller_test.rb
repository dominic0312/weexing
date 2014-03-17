require 'test_helper'

class MembercardsControllerTest < ActionController::TestCase
  setup do
    @membercard = membercards(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:membercards)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create membercard" do
    assert_difference('Membercard.count') do
      post :create, membercard: { name: @membercard.name }
    end

    assert_redirected_to membercard_path(assigns(:membercard))
  end

  test "should show membercard" do
    get :show, id: @membercard
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @membercard
    assert_response :success
  end

  test "should update membercard" do
    patch :update, id: @membercard, membercard: { name: @membercard.name }
    assert_redirected_to membercard_path(assigns(:membercard))
  end

  test "should destroy membercard" do
    assert_difference('Membercard.count', -1) do
      delete :destroy, id: @membercard
    end

    assert_redirected_to membercards_path
  end
end
