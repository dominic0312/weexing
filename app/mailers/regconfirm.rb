#coding: utf-8
class Regconfirm < ActionMailer::Base
  default from: "regist@weexing.com"

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.regconfirm.regist_confirm.subject
  #
  def regist_confirm(user)
    @userid=user.id
    @userhash=user.hashed_password
    @username = user.name
    mail :to=>user.email,:subject=>"微行微系统注册确认"
  end
  
    def reset_password(user)
    @userid=user.id
    @userhash=user.hashed_password
    @username = user.name
    mail :to=>user.email,:subject=>"微行微系统密码重设"
  end
end
