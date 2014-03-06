class TestController < ApplicationController
  def reg
  end
  
  def check
    @user = User.new
    respond_to do |wants|
      wants.html do
        
      end
      wants.js 
      wants.xml {  }
    end
  end
end


