Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  #get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  get "/users", to: "users#index"
  post "/gyms", to: "gyms#create"
  get "/gyms/sort", to: "gyms#sort"

  resources :reviews

  resources :gyms, only: [:index, :show] do
    resources :reviews, only: [:index]
  end

end
