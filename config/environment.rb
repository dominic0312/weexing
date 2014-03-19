# Load the rails application
require File.expand_path('../application', __FILE__)

# Initialize the rails application
Weexing::Application.configure do
  config.action_mailer.delivery_method = :smtp
  config.action_mailer.smtp_settings = {
    :address => "smtp.exmail.qq.com",
    :port => 25,
    :domain => "exmail.qq.com",
    :authentication => "login",
    :user_name => "dominic@weexing.com",
    :password => "wqxyy1985",
    :enable_starttls_auto => true
  }
  config.action_mailer.perform_deliveries = true
  config.action_mailer.raise_delivery_errors = true
end
Weexing::Application.initialize!
