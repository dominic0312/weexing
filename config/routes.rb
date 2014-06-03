Weexing::Application.routes.draw do
  resources :documents
  mount WeixinRailsMiddleware::Engine, at: "/"
  #mount WeixinRailsMiddleware::Engine, at: WeixinRailsMiddleware.config.engine_path
  resources :news
  resources :pointcodes
  post "pointcodes/add_pointcodes"
  #resources :customers
  resources :card_templates

  post 'agency/changepass'
  get 'agency/cardguide'
  get 'agency/wxshow'
  get 'agency/wxshowguide'
  get 'agency/wxschool'
  get 'agency/wxshop'
  get 'agency/wxshopguide'
  get 'agency/voa'
  get 'agency/voaguide'
  get 'agency/credit'
  post 'agency/usercheck'
  post 'agency/register'
  post 'agency/reg_check'
  post 'agency/email_check'
  get "agency/login", :as => "agencylogin"
  get "agency/index"
  get "agency/mcard"
  get "agency/logout"
  post "agency/validate_code"
  match "/agency" => "agency#login",via: [:get]

  #post 'cardbackground/index'

  get 'users/activatesuccess'
  get 'users/activatefail'
  post 'users/changepass'
  post 'users/resetpassword'
  match "/resetpasswd" => "users#resetpasspage",via: [:get]

  post 'wxinterface/menuset'
  post 'wxinterface/loadmenu'
  post 'wxinterface/pubmenu'

  post 'comments/addcomment'

  get 'cardbackground/index'
  get 'sp/:shopurl', to: 'cardbackground#index'
  get 'cardbackground/login'
  #post 'shops/updatelogo'

  post 'coupons/addrequest'
  match '/coupons/createcoupon/:shopid' => 'coupons#createcoupon',via: [:get,:post], :as=>"createcoupon"
  post "coupons/delcoupon"
  post "coupons/delrequest"
  post "coupons/refreshrequest"
  match "coupons/requestcoupon/:coupid" => "coupons#requestcoupon", via: [:get]
  post "coupons/sendcoupon"
  
  match "/shops/updatelogo/:id" => "shops#updatelogo",via: [:get,:post],:as=>"uploadlogo"
  match "/shops/updateoem/:id" =>'shops#updateoem', via: [:post]
  match "/shops/updateappinfo/:id" =>'shops#updateappinfo', via: [:post]
  post "shops/shopaccount"
  post "shops/shopconnect"
  resources :shops
  post "shops/urlcheck"
  post "shops/connectwx"
  post "shops/chargeshop"
  post "shops/updateusertemplate"
  post "shops/updatemembercard"
  post "shops/createshop"
  post "shops/onlineshop"
  post "shops/updateinfo"
  post "shops/index"
  post "shops/removeshop"

  post "cardbackground/passcheck"
  get 'ca/:shopurl', to: 'cardbackground#login'

  post "customers/addcustomer"
  post "customers/updatecustomer"
  post "customers/delcustomer"

  get  'wx/:weixin_token', to: 'weixin#index'
  post 'wx/:weixin_token', to: 'weixin#reply'

  get  'dispatcher/dispatch'

  resources :usertemplates
  post "usertemplates/install_template"

  resources :membercards
  resources :comments

  match "/cardoath/:id" => "cardguest#cardoath", via: [:get, :post]
  post "cardguest/getcustomerinfo"
  match "/cardguest/:id" => "cardguest#cardpage", via: [:get, :post]
  match "/cardguest/get_customer_info/:id"=> "cardguest#get_customer_info", via: [:get, :post]
  get "cardguest/cardpage"
  post "cardguest/get_customer_info"
  get "cardguest/actinfo"
  #get 'cardguest' => 'cardguest#cardpage'

  match "/useractivate" => "users#activate",via: [:get]
  resources :users
  post "users/create"

  get "sessions/destroy"
  post "sessions/destroy_shop"

  match "/admin" => "admins#login",via: [:get]
  get "admins/index"
  post "admins/adminlogin"

  get 'homepage' => 'homepage#landing'
  root :to => 'homepage#landing'
end
# The priority is based upon order of creation:
# first created -> highest priority.

# Sample of regular route:
#   match 'products/:id' => 'catalog#view'
# Keep in mind you can assign values other than :controller and :action

# Sample of named route:
#   match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
# This route can be invoked with purchase_url(:id => product.id)

# Sample resource route (maps HTTP verbs to controller actions automatically):
#   resources :products

# Sample resource route with options:
#   resources :products do
#     member do
#       get 'short'
#       post 'toggle'
#     end
#
#     collection do
#       get 'sold'
#     end
#   end

# Sample resource route with sub-resources:
#   resources :products do
#     resources :comments, :sales
#     resource :seller
#   end

# Sample resource route with more complex sub-resources
#   resources :products do
#     resources :comments
#     resources :sales do
#       get 'recent', :on => :collection
#     end
#   end

# Sample resource route within a namespace:
#   namespace :admin do
#     # Directs /admin/products/* to Admin::ProductsController
#     # (app/controllers/admin/products_controller.rb)
#     resources :products
#   end

# You can have the root of your site routed with "root"
# just remember to delete public/index.html.

# See how all your routes lay out with "rake routes"

# This is a legacy wild controller route that's not recommended for RESTful applications.
# Note: This route will make all actions in every controller accessible via GET requests.
# match ':controller(/:action(/:id))(.:format)'

