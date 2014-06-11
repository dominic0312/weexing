#coding: utf-8
class PaymentController < ApplicationController
  def pay
    @partner_id = '2088411160772939'   # 支付宝合作者身份 ID，以 2088 开头
    @key = 'ynf3mquuv3ejvlthj0jov3x3ltvji9rr' # 安全校验码
    @point=params[:point]
    @merchant = ChinaPay::Alipay::Merchant.new(@partner_id, @key)
    t=Time.now.to_i.to_s
    r=rand(9).to_s
    @order_id = 'WX'+t+r # 商家内部唯一订单编号
    
    payrecord=Payrecord.new
    payrecord.order_id=@order_id
    
    if session[:user_email]
    payrecord.user_email=session[:user_email]
    payrecord.points=@point
    payrecord.save
    #logger.info(@order_id)
    @subject = '微行微系统点数'+@point+'点' # 订单标题
    @description = '感谢您充值微行微系统' # 订单内容

    @order = @merchant.create_order(@order_id, @subject, @description)

    @seller_email = 'dominic@weexing.com' # 卖家支付宝帐号
    #@total_fee = @point # 订单总额
    @total_fee = 0.1 # 订单总额

    @direct_pay = @order.seller_email(@seller_email).total_fee(@total_fee).direct_pay

    # 交易成功同步返回地址
    @return_url = 'http://www.weexing.com/payment/paysuccess?orderid='+@order_id
    @direct_pay.after_payment_redirect_url(@return_url)

    # 交易状态变更异步通知地址
    @notify_url = 'http://www.weexing.com/payment/paysuccess?orderid='+@order_id
    @direct_pay.notification_callback_url(@notify_url)

    redirect_to @direct_pay.gateway_api_url
    else
      render action: "paymentfailed" and return 
    end
    
  end
  
  def charge
      order=Payrecord.where(:order_id=>params[:orderid]).first
       if order && order.processed==0
          user=User.where(:email=>order.user_email).first
          if user
             user.credit+=order.points
             user.save
             order.processed=1
             #order.save
           else
             render action: "paymentfailed" and return 
          end
       else
         render action: "paymentfailed" and return 
       end
        @username=user.name
        @useremail=user.email
        @point=order.points
        render action: "paymentsuccess"
  end
  
  def paymentfailed
    
  end
  
  def paymentsuccess
    
  end
  
end
