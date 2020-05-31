import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from "./components/layout/Header";

class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: false,
      },
      {
        id: 2,
        title: "Dinner with Girlfriend",
        completed: false,
      },
      {
        id: 3,
        title: "Meeting with boss",
        completed: false,
      }
    ]
  }

  markComplete = (id) =>{
    this.setState({todos: this.state.todos.map(todo => {

      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo

    }) })
  }

  delTodo = (id) =>{
    this.setState({todos: this.state.todos.filter(todo => todo.id !== id) 
    })
  }

  addTodo = (title) => {

    //to generatee random id  use uuid
    //install uuid by npm install uuid
    //import uuid from 'uuid';
    //use uuid.v4() to generate random Id
    const len = this.state.todos.length
    const newTodo = {
      id: len + 1,
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
    

    //state is a special variable we can only change by setState re reflect immidiately
    // const len = this.state.todos.length
    // this.state.todos.push(

    //   {
    //     id: len + 1,
    //     title: title,
    //     completed: false
    //   }

    // )
     console.log(this.state.todos)
  
  }

  render(){
    return(
      <div className="App">
        <div className="container">
        <Header />
        <AddTodo addTodo = {this.addTodo}/>
        <Todos todos = {this.state.todos} markComplete = { this.markComplete } delTodo = {this.delTodo}/>
        </div>
      </div>
    );
  }

}

export default App;
