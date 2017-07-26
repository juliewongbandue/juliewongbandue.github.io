Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "welcome#index"

  get "/signup", to: "users#new", as: :signup
  get "/login", to: "sessions#new", as: :login
  post "/login", to: "sessions#create", as: :user_loggedin
  delete "/logout", to: "sessions#destroy", as: :logout

  resources :users, only: [:create, :show]
  # FOR THE JOBS
  get "/users/:id/favejobs/search", to: "favejobs#search"
  post "/users/:id/favejobs/search", to: "favejobs#query", as: :jobs
  get "/users/:id/favejobs/new", to: "favejobs#new", as: :new_job
  post "/users/:id", to: "favejobs#create"
  delete "/users/:id/:job_id", to: "favejobs#destroy", as: :delete_job

  resources :to_dos, only: [:destroy, :update]
  #FOR THE TO-DOS
  get "/users/:id/to_dos/:id/edit", to: "to_dos#edit", as: :edit_task
  patch "/users/:id/to_dos/:id/edit", to: "to_dos#update", as: :update_task
  get "/users/:id/to_dos", to: "to_dos#index", as: :task
  post "/users/:id/to_dos", to: "to_dos#create"
  delete "/users/:id/to_dos/:task_id", to: "to_dos#destroy", as: :delete_task

end
