class TasksController < ApplicationController
  def index
    
  end

  def fetch_tasks
    @tasks = Task.all
    render json: { tasks: @tasks }
  end

  def about

  end
end
