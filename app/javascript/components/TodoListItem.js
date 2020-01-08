import React, { Component} from 'react';
import PropTypes from 'prop-types';

const TodoListItem = (props) => {
    return(
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    )
};

TodoListItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default TodoListItem;