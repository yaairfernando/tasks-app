import React, { Component} from 'react';
import TodoListItem from './TodoListItem';

class Todo extends Component {
  render() {
    const tasks = this.props.todos.map((todoItem) => {
      return <TodoListItem 
                deleteTask={this.props.deleteTask} 
                markComplete={this.props.markComplete} 
                key={todoItem.id} 
                todo={todoItem}/>
    })
    return(
      <div className="container px-4">
        <div className="mt-5">
          {tasks}
        </div>
      </div>
    )
  }
};

export default Todo;