#coding: utf-8
class DispatcherController < ApplicationController
  require "rest-client"
  require "result-hand"

  def dispatch
    url="https://api.weixin.qq.com/sns/oauth2/access_token?appid=#{params[:appid]}&secret=#{params[:secid]}&code=#{params[:code]}&grant_type=authorization_code"
    load_json(RestClient.post(url,{}))
  end

  def load_json(string)
    result_hash = JSON.parse(string)
    code   = result_hash.delete("errcode")
    en_msg = result_hash.delete("errmsg")
    logger.info("info is:"+en_msg)
    OathHandler.new(code, en_msg, result_hash)
  end

end