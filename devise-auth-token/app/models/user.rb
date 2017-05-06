class User < ActiveRecord::Base
  has_many :workouts
  has_many :exercises, through: :workouts
  
  devise :database_authenticatable, 
         :registerable,
         :recoverable, 
         :rememberable, 
         :trackable,  
         :validatable, 
         :omniauthable
  include DeviseTokenAuth::Concerns::User
end