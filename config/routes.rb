Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  #get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  get "/users", to: "users#index"
  #get "/gyms", to: "gyms#index"
  #get "/reviews", to: "reviews#index"

  resources :gyms, only: [:index] do
    resources :reviews, only: [:index]
  end

  resources :reviews, only: [:index]

end
