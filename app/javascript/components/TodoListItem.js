import React, { Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Card = styled.div`
  background: #fff;
  width: 50%;
  margin: 0 auto;
  box-shadow: 0 0 7px rgba(0,0,0,0.25);
  @media (max-width: 768px) {
    width: 100%;
  }
`

export class TodoListItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }
  
  render() {
    const { id, title, description} = this.props.todo;
    return(
      <Card className="card mb-3">
        <div className="card-body d-flex justify-content-between align-items-center" style={this.getStyle()}>
          <input type="checkbox" className="ml-2 mr-5" onChange={this.props.markComplete.bind(this, id)} />
          <div className="w-100 d-flex justify-content-between align-items-center">
            <div>
              <h5 className="card-title mb-0">{title}</h5>
              <p className="card-text">{description}</p>
            </div>
            <button className="btn btn-danger" onClick={this.props.deleteTask.bind(this, id)}>X</button>
          </div>
        </div>
      </Card>
    )
  }
};

TodoListItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoListItem;