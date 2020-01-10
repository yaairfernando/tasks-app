import React, { Component} from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const Input = styled.input`
  flex: 3;
  border: none;
  border-radius: 4px;
  padding: 8px 10px;
  box-shadow: 1px 2px 3px #e4e4e4;
  height: 20px;
  margin-bottom: 10px;
`

const Label = styled.label`
  color: #fff;
  font-size: 14px;
  margin-bottom: 0px;
  margin-top: 10px;
`

const Submit = styled(
  styled.input({
    flex: "1",
    color: "#fff",
    fontSize: "18px",
    background: "#4a47a3",
    transition: "all 0.3s ease-in-out"
  })
)`
  &:hover {
    color: #4a47a3;
    background: #fff;
    transform: scale(1.02);
    box-shadow: 1px 3px 4px #4a47a3; 
  }
`

const Form = styled.form`
  width: 50%;
  margin: 0 auto;
  padding: 30px;
  @media (max-width: 768px) {
    width: 100%;
  }
`

class TodoCreate extends Component {
  state = {
    title: '',
    description: ''
  }
  onSubmit = (e) => {
    e.preventDefault()
    this.props.addTodo(this.state.title, this.state.description);
    this.setState({ title: '', description: '' })
  }
  render() {
    return(
      <div className="mt-5">
        <Form className="d-flex justify-content-center flex-column" onSubmit={this.onSubmit}>
          <Label>Title</Label>
          <Input type="text" name="title" value={this.state.title} onChange={(e) => {this.setState({ [e.target.name]: e.target.value }) }} placeholder="Add todo...." />
          <Label>Description</Label>
          <Input type="text" name="description" value={this.state.description} onChange={(e) => {this.setState({ [e.target.name]: e.target.value}) }} placeholder="Description" />
          <Submit type="submit" value="New Task" className="btn pb-2 pt-2 mt-3" />
        </Form>
      </div>
    )
  };
};

TodoCreate.propTypes = {
  addTodo : propTypes.func.isRequired,
}

export default TodoCreate;