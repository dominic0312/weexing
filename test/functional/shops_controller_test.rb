require 'test_helper'

class ShopsControllerTest < ActionController::TestCase
  setup do
    @shop = shops(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:shops)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create shop" do
    assert_difference('Shop.count') do
      post :create, shop: { address: @shop.address, agency: @shop.agency, cardtemplate: @shop.cardtemplate, logo: @shop.logo, name: @shop.name, pagetemplate: @shop.pagetemplate, phone: @shop.phone }
    end

    assert_redirected_to shop_path(assigns(:shop))
  end

  test "should show shop" do
    get :show, id: @shop
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @shop
    assert_response :success
  end

  test "should update shop" do
    put :update, id: @shop, shop: { address: @shop.address, agency: @shop.agency, cardtemplate: @shop.cardtemplate, logo: @shop.logo, name: @shop.name, pagetemplate: @shop.pagetemplate, phone: @shop.phone }
    assert_redirected_to shop_path(assigns(:shop))
  end

  test "should destroy shop" do
    assert_difference('Shop.count', -1) do
      delete :destroy, id: @shop
    end

    assert_redirected_to shops_path
  end
end
