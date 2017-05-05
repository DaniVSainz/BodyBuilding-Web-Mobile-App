Rails.application.routes.draw do
  resources :workouts
  get '/workouts/user/:id' => 'workouts#userShow'
  mount_devise_token_auth_for 'User', at: 'auth'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
