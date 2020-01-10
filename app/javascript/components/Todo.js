import React, { Component} from 'react';
import TodoListItem from './TodoListItem';
import TodoCreate from './TodoCreate';
import PropTypes from 'prop-types';

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
        <TodoCreate />
        <div className="mt-5">
          {tasks}
        </div>
      </div>
    )
  }
};

Todo.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todo;