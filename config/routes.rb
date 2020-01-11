Rails.application.routes.draw do
  root "tasks#index"
  get "about", to: "tasks#about"
  get "fetch_tasks", to: "tasks#fetch_tasks"
  post "mark_completed", to: "tasks#mark_completed"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
