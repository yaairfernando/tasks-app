module TasksHelper

  def formatDate tasks
    t = []
    tasks.collect do |y|
      obj = {
        id: y.id,
        title: y.title,
        description: y.description,
        created_at: y.created_at.strftime('%B %d %Y'),
        updated_at: y.updated_at.strftime('%B %d %Y'),
        completed: y.completed,
      }
      t << obj
    end
    t
  end
end
