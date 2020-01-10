import React, { Component } from 'react';
import Todo from './Todo';
import Header from './Layout/Header';
import styled from 'styled-components';
import TodoCreate from './TodoCreate';
import uuid from 'uuid';

const Body = styled.div`
  background: #916dd5;
`
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tasks: [
        {id: uuid.v4(), title: "This is a tak", description: "Go to the library", completed: false },
        {id: uuid.v4(), title: "I have to do this now", description: "Go to the gym", completed: false },
        {id: uuid.v4(), title: "I am in a hurry", description: "Cook some food", completed: false }
      ]
    }
  }
  markComplete = (id) => {
    console.log(id)
    this.setState({
      tasks: this.state.tasks.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
    console.log(this.state.tasks.filter(f => f.id === id))
  }

  deleteTask = (id) => {
    let newState = this.state.tasks.filter(f => f.id != id)
    this.setState({ tasks: newState });
  }

  addTodo = (title, description) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      description,
      completed: false
    }
    this.setState({ tasks: [...this.state.tasks, newTodo]})
  }


  render() {
    return (
      <Body>
        <Header />
        <TodoCreate addTodo={this.addTodo} />
        <Todo 
          todos={this.state.tasks} 
          markComplete={this.markComplete} 
          deleteTask={this.deleteTask}
        />
      </Body>
    )
  };
};

export default App;