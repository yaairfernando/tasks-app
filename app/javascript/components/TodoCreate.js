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

const Submit = styled.input`
  flex: 1;
  color: #fff;
  font-size: 18px;
  background: ${props => props.valid ? '#4a47a3' : '#916DD5'}
  transition: all 0.3s ease-in-out;
  cursor: ${props => props.valid ? 'pointer' : 'not-allowed !important'};
  
  &:hover {
    color: ${props => props.valid ? '#4a47a3' : '#fff'}
    background: ${props => props.valid ? '#fff' : '#916DD5'};
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
    description: '',
    validForm: false
  }
  onSubmit = (e) => {
    e.preventDefault()
    this.props.addTodo(this.state.title, this.state.description);
    this.setState({ title: '', description: '' })
  }

  onChange = (e) => {
    this.setState({ [e.target.name] : e.target.value })
    const { title, description } = this.state;
    if (title.length > 5 && title.length < 40 && description.length > 10 && description.length < 100) {
      this.setState({ validForm: true })
    } else {
      this.setState({ validForm: false })
    }
  }

  render() {
    const { title, description, validForm } = this.state;
    return(
      <div className="mt-5">
        <Form className="d-flex justify-content-center flex-column" onSubmit={this.onSubmit}>
          <Label>Title</Label>
          <Input type="text" name="title" value={title} onChange={(e) => this.onChange(e)} placeholder="Add todo...." />
          <Label>Description</Label>
          <Input type="text" name="description" value={description} onChange={(e) => this.onChange(e)} placeholder="Description" />
          <Submit type="submit" value="New Task" className="btn pb-2 pt-2 mt-3" valid={validForm} />
        </Form>
      </div>
    )
  };
};

TodoCreate.propTypes = {
  addTodo : propTypes.func.isRequired,
}

export default TodoCreate;