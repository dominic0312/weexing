class WxinterfaceController < ApplicationController
  def menuset
      menulen=params[:menus].length-1
      #public_account=session[:shopid]
      m=params[:menus]
      parent=0
      current=m["0"][:sid].to_i
      Diymenu.where(:public_account_id=>current).destroy_all
      #logger.info(current)
      m.each do |menu|
        #logger.info(menu);
        obj=menu[1]
        temp=Diymenu.new
        temp.name=obj[:title]
        temp.url=obj[:url]
        temp.key=obj[:key]
        temp.public_account_id=obj[:sid]
        temp.is_show=1
        #logger.info(obj[:id])
        if (obj[:id].to_i)%6==0
           temp.save
           parent=temp.id
          #logger.info("parent,id is:"+parent.to_s)
        else
          temp.parent_id=parent
          #logger.info("child,parent is:"+parent.to_s)
          temp.save
        end
        #temp.type=obj[:type]
        #temp.id=obj[:id]
       
        #temp.save
      end
  
      respond_to do |format|
       format.json { head :ok }
      end
  end
  
    def loadmenu
        pam=params[:shopid]
        @menus=Diymenu.where(:public_account_id=>pam)
        #logger.info(@menus.length)
    end
    
     def pubmenu
       $weixin_client = WeixinAuthorize::Client.new(params[:appid], params[:appsec])
       #token=$weixin_client.get_access_token
       if $weixin_client.is_valid?
         build_result = $weixin_client.create_menu(Diymenu.build_menu(params[:shopid]))
         #Diymenu.build_menu(params[:shopid])
        
        render :js=>"alert('ok')" and return if build_result.ok?
       else
         render :js=>"alert('bad')" and return
         # msg = "invalid appid or appsecret."
       end
       
       
      

    #oap='https://open.weixin.qq.com/connect/oauth2/authorize?appid='
    #redirecturi='&redirect_uri='+Rack::Utils.escape("http://5cd0a095.ngrok.com/cardoath/121")
   # resptype="&response_type=code&scope=snsapi_base"
    #state="&state=card#wechat_redirect"
    #url=oap+params[:appid]+redirecturi+resptype+state

   # @currentmenu=Diymenu.find(1)
   # @currentmenu.url=url
    #@currentmenu.save
   # @current_public_account= Publicaccount.find(1)
   # menu   = @current_public_account.build_menu
   # result = $weixin_client.create_menu(menu)

    #set_error_message(result["errmsg"]) if result["errcode"] != 0
   # if result.ok?
    #  render :js=>"alert('everything well');" and return
    #else
    #  render :js=>"alert(#{result.full_message})" and return
    #end
       
       
       
       
     end
   
end