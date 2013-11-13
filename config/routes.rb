SecondProject::Application.routes.draw do
  get "events/get_tweets"

  # The priority is based upon order of creation:
  # first created -> highest priority.
  root to: "users#show"
  get "/login" => "sessions#new"

  resources :users
  resources :events
  resources :scrapbooks do
    resources :pages
  end

  resources :images
  resources :tweets

  match 'events/:event_id/get_tweets', to: 'events#get_tweets'

  match 'auth/:provider/callback', to: 'sessions#create'
  match 'auth/failure', to: redirect('/')
  match 'signout', to: 'sessions#destroy', as: 'signout'

end
