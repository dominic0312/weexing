module ApplicationHelper
    def display_notice_and_alert
     msg = ''
     msg << (content_tag :div, notice, :class => "notice") if notice
     msg << (content_tag :div, alert, :class => "alert") if alert
     sanitize msg
    end
    
    
   def hidden_div_if(condition, attributes = {}, &block)
     if condition
      attributes["class"] = "login-err-panel"
      else 
      attributes["class"] = "login-err-panel dn"
     end
     content_tag("div", attributes, &block)
   end
end
