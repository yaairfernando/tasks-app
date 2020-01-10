import React, { Component} from 'react';
import TodoListItem from './TodoListItem';
import PropTypes from 'prop-types';

class Todo extends Component {
  render() {
    const tasks = this.props.todos.map((todoItem) => {
      return <TodoListItem markComplete={this.props.markComplete} key={todoItem.id} todo={todoItem}/>
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
  todos: PropTypes.array.isRequired
}

export default Todo;