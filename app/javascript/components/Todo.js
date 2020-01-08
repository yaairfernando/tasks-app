import React, { Component} from 'react';
import TodoListItem from './TodoListItem';
import PropTypes from 'prop-types';

const Todo = ({todos}) => {
  const tasks = todos.map((todoItem) => {
    return <TodoListItem key={todoItem.id} title={todoItem.title} description={todoItem.description} />
  })
  return(
    <div className="container px-4">
      <div className="mt-5">
        {tasks}
      </div>
    </div>
  )
};

Todo.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todo;