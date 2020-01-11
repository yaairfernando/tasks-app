import React, { Component} from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const Card = styled.div`
  background: #fff;
  width: 75%;
  margin: 0 auto;
  box-shadow: 0 0 7px rgba(0,0,0,0.25);
  @media (max-width: 768px) {
    width: 100%;
  }
`

const Div = styled.div`
  transition: all 0.2s ease-out
  &:hover {
    transform: scale(1.05) !important;
    border-radius: 4px !important;
    box-shadow: 1px 1px 6px #fff, -1px -1px 6px #e4e4e4 !important;
    background: #4a47a3 !important;
    color: #fff !important;
    &.btn {
      color: red !important;
      background: red !important;
    }

  }
`

const Delete = styled.button`
  border: 2px solid #916dd5;
  color: 916dd5;
  &:hover {
    color: #fff;
    border: 2px solid #fff;
    background: #916dd5;
  }
`

export class TodoListItem extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }


  
  render() {
    const { id, title, description, completed, created_at, updated_at} = this.props.todo;
    return(
      <Card className="card mb-3">
        <Div className="card-body d-flex justify-content-between align-items-center">
          <input type="checkbox" checked={completed} className="ml-2 mr-5" onChange={this.props.markComplete.bind(this, id)} />
          <div className="w-100 d-flex justify-content-between align-items-center">
            <div style={this.getStyle()}>
              <h5 className="card-title mb-0">{title}</h5>
              <p className="card-text">{description}</p>
              {completed}
              
              <small>Create at: {created_at}</small>
              <small>Complete at: {updated_at}</small>
            </div>
            {completed ? <Delete className="btn" onClick={this.props.deleteTask.bind(this, id)}>X</Delete> : <div></div>  }
          </div>
        </Div>
      </Card>
    )
  }
};

TodoListItem.propTypes = {
  deleteTask: propTypes.func.isRequired,
  markComplete: propTypes.func.isRequired,
  todo: propTypes.object.isRequired,
}

export default TodoListItem;