require 'test_helper'

class CouponsControllerTest < ActionController::TestCase
  setup do
    @coupon = coupons(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:coupons)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create coupon" do
    assert_difference('Coupon.count') do
      post :create, coupon: { branch: @coupon.branch, content: @coupon.content, discount: @coupon.discount, enddate: @coupon.enddate, present_name: @coupon.present_name, present_value: @coupon.present_value, shopid: @coupon.shopid, startdate: @coupon.startdate, type: @coupon.type, usertype: @coupon.usertype }
    end

    assert_redirected_to coupon_path(assigns(:coupon))
  end

  test "should show coupon" do
    get :show, id: @coupon
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @coupon
    assert_response :success
  end

  test "should update coupon" do
    put :update, id: @coupon, coupon: { branch: @coupon.branch, content: @coupon.content, discount: @coupon.discount, enddate: @coupon.enddate, present_name: @coupon.present_name, present_value: @coupon.present_value, shopid: @coupon.shopid, startdate: @coupon.startdate, type: @coupon.type, usertype: @coupon.usertype }
    assert_redirected_to coupon_path(assigns(:coupon))
  end

  test "should destroy coupon" do
    assert_difference('Coupon.count', -1) do
      delete :destroy, id: @coupon
    end

    assert_redirected_to coupons_path
  end
end
