require 'test_helper'

class TestControllerTest < ActionController::TestCase
  test "should get reg" do
    get :reg
    assert_response :success
  end

end
