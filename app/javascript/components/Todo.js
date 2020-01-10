import React, { Component} from 'react';
import TodoListItem from './TodoListItem';
import propTypes from 'prop-types';

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

Todo.propTypes = {
  todos: propTypes.array.isRequired,
  markComplete: propTypes.func.isRequired,
  deleteTask: propTypes.func.isRequired,
}

export default Todo;