import React, { Component } from 'react';
import Todo from './Todo';

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
      <div>
        <Todo todos={this.state.tasks} />
      </div>
    )
  };
};

export default App;