require 'digest/sha1'

class User < ActiveRecord::Base
  attr_accessible :credit,:email,:company,:phone,:id,:hashed_password,:usertype,:activated,:salt
  validates_presence_of :email
  validates_uniqueness_of :email
  attr_accessor :password_confirmation
  self.per_page =  20
  #validates_presence_of :password
  def after_destory
    if User.count.zero?
      raise "cannt' delete last user"
    end
  end

  def self.authenticate(name, password)
    user = self.where(:name=> name).first
    if user
      expected_password = encrypted_password(password, user.salt)
      if user.hashed_password != expected_password
        user = nil
      end
    end
    user
  end
  
  def self.authenticatebyid(id, password)
    user = self.find(id)
    if user
      expected_password = encrypted_password(password, user.salt)
      if user.hashed_password != expected_password
        user = nil
      end
    end
    user
  end

  def password
    @password
  end

  def password=(pwd)
    @password = pwd
    return if pwd.blank?
    create_new_salt
    self.hashed_password = User.encrypted_password(self.password, self.salt)
  end

  private

  def self.encrypted_password(password, salt)
    string_to_hash = password + "wibble" + salt # 'bibble' makes it harder to guess
    Digest::SHA1.hexdigest(string_to_hash)
  end

  def create_new_salt
    self.salt = self.object_id.to_s + rand.to_s
  end

end
