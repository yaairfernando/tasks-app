import React, { Component } from 'react';
import Todo from './Todo';
import styled from 'styled-components';

const Body = styled.div`
  background: #F5F5F5;
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
  render() {
    return (
      <Body>
        <Todo todos={this.state.tasks} />
      </Body>
    )
  };
};

export default App;