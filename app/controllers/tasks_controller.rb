class TasksController < ApplicationController
  def index
    
  end

  def fetch_tasks
    @tasks = Task.all.order('created_at DESC')
    render json: { tasks: @tasks }
  end

  def mark_completed
    @task = Task.find(params[:id])
    @task.completed = !@task.completed
    if @task.update(task_params)
      render json: { ok: "UPDATE", task: @task}
    else
      render json: { error: "There was an error"}
    end
  end 

  def about

  end

  private

  def task_params
    params.require(:task).permit(:completed, :id)
  end
end
