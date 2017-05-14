Rails.application.routes.draw do
  resources :exercise_sets
  resources :exercises
  resources :workouts
  get '/workouts/user/:id' => 'workouts#userShow'
  get '/exercisesets/:id' => 'exercise_sets#showSets'
  mount_devise_token_auth_for 'User', at: 'auth'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
