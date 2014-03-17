Weexing::Application.routes.draw do
 
 
  

  mount WeixinRailsMiddleware::Engine, at: WeixinRailsMiddleware.config.engine_path
  resources :news

  resources :pointcodes


  resources :coupons
  resources :customers


  resources :card_templates
  
  
  get 'usertemplates/display'
  get 'membercards/display'
  #post 'shops/updatelogo'
  match "/shops/uploadlogo/:id" => "shops#uploadlogo",via: [:get,:post],:as=>"uploadlogo"
  match '/shops/updatelogo/:id' => 'shops#updatelogo',via: [:get,:post], :as => "updatelogo"
  match "/shops/sysinfo/:id" => "shops#sysinfo",via: [:get,:post],:as=>"sysinfo"
  match '/shops/updatesysinfo/:id' => 'shops#updatesysinfo',via: [:get,:post], :as => "updatesysinfo"
  
  match "/shops/setupcard/:id" => "shops#setupcard",via: [:get,:post]
  
  
  get 'shops/display' 
  get "shops/createshop"
  post "shops/urlcheck"
  get  'weixin/:weixin_token', to: 'weixin#index'
  post 'weixin/:weixin_token', to: 'weixin#reply'
  resources :usertemplates
  resources :shops
  resources :membercards
  
  match "/cardguest/:id" => "cardguest#cardpage", via: [:get, :post]
  match "/shops/createshop/:id" => "shops#createshop",via: [:get  ]
  match "/shops/display/:id" => "shops#display",via: [:get, :post]

  match "/cardguest/get_customer_info/:id"=> "cardguest#get_customer_info", via: [:get, :post]
  match "/news/display/:id" => "news#display",via: [:get, :post]
  get 'card' => 'card#index'
  get 'cardguest' => 'cardguest#cardpage' 
  get 'homepage' => 'homepage#login'
  
  
  controller :homepage do
  end
  controller :sessions do
    get 'login' => :new
    post 'login' => :create
  end
  
  



  resources :users
  get "sessions/destroy"
  post "test/check"
  
  post "users/create"
  post "homepage/usercheck"
  post "coupons/send_coupon"
  get 'homepage/apps' 
  get "homepage/login"
 get "cardguest/cardpage"
 get "cardguest/actinfo"
 
 
  get "homepage/regist"
  post "pointcodes/add_pointcodes"
  post "usertemplates/install_template"
  post "homepage/validate_code"
  post "card/updateinfo"
  post "card/showinfo"
  post "card/showcardtemplate"
  post "card/updatecardtemplate"
  post "shops/updateusertemplate"
  post "shops/updatemembercard"
  post "shops/createshop"
  post "shops/onlineshop"
  get "shops/manageshop"
  post "shops/index"
  post "cardguest/get_customer_info"
  post "card/pages"
  get "homepage/signup_login_check"
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
# root :to => 'welcome#index'

# See how all your routes lay out with "rake routes"

# This is a legacy wild controller route that's not recommended for RESTful applications.
# Note: This route will make all actions in every controller accessible via GET requests.
# match ':controller(/:action(/:id))(.:format)'
end
