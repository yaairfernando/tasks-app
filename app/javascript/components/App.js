import React, { Component } from 'react';
import Todo from './Todo';
import Header from './Layout/Header';
import styled from 'styled-components';

const Body = styled.div`
  background: #916dd5;
`
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tasks: [
        {id: 1, title: "This is a tak", description: "Go to the library", completed: false },
        {id: 2, title: "I have to do this now", description: "Go to the gym", completed: false },
        {id: 3, title: "I am in a hurry", description: "Cook some food", completed: false }
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

  render() {
    return (
      <Body>
        <Header />
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