class User < ActiveRecord::Base


  devise :database_authenticatable, 
         :registerable,
         :recoverable, 
         :rememberable, 
         :trackable,  
         :validatable, 
         :omniauthable
  include DeviseTokenAuth::Concerns::User
end