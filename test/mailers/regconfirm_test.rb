require 'test_helper'

class RegconfirmTest < ActionMailer::TestCase
  test "regist_confirm" do
    mail = Regconfirm.regist_confirm
    assert_equal "Regist confirm", mail.subject
    assert_equal ["to@example.org"], mail.to
    assert_equal ["from@example.com"], mail.from
    assert_match "Hi", mail.body.encoded
  end

end
