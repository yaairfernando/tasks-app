import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import uuid from 'uuid';
import axios from 'axios';

import Todo from './Todo';
import Header from './Layout/Header';
import TodoCreate from './TodoCreate';
import About from './pages/About';



const Body = styled.div`
  background: #916dd5;
`
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tasks: [
        // {id: uuid.v4(), title: "This is a tak", description: "Go to the library", completed: false },
        // {id: uuid.v4(), title: "I have to do this now", description: "Go to the gym", completed: false },
        // {id: uuid.v4(), title: "I am in a hurry", description: "Cook some food", completed: false }
      ]
    }
  }

  componentDidMount() {
    axios.get('http://jsonplaceholder.typicode.com/todos?_limit=25')
      .then((data) => {
        this.setState({
          tasks: data.data
        })
      })
      .catch((data) =>{
        console.log(data);
      })
  }

  markComplete = (id) => {
    this.setState({
      tasks: this.state.tasks.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
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
      <Router>
        <Body>
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <TodoCreate addTodo={this.addTodo} />
              <Todo 
                todos={this.state.tasks} 
                markComplete={this.markComplete} 
                deleteTask={this.deleteTask}
              />
            </React.Fragment>
          )} />
          <Route path="/about" component={About} />
        </Body>
      </Router>
    )
  };
};

export default App;