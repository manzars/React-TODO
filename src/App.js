import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from "./components/layout/Header";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import About from './components/pages/About';
// import axios from 'axios';

class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: "Dinner with Girlfriend",
        complete: false
      },
      {
        id: 2,
        title: "Learn Something Extra",
        complete: false
      },
      {
        id: 3,
        title: "Watch Youtube vs Tiktok",
        complete: false
      }
   ]
  }

  // function to call api
  // componentDidMount() {

  //   axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then((res) =>{
  //      return this.setState({todos: res.data})
  //   })

  // }

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

    //method without adding api
    const len = this.state.todos.length
    const newTodo = {
      id: len + 1,
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })

    // axios.post("https://jsonplaceholder.typicode.com/todos", {
    //   title: title,
    //   completed: false
    // }).then(res =>  console.log(res.data))
    // .catch(
    //   error => console.log(error.message)
    // )
    

    //state is a special variable we can only change by setState re reflect immidiately
    // const len = this.state.todos.length
    // this.state.todos.push(

    //   {
    //     id: len + 1,
    //     title: title,
    //     completed: false
    //   }

    // )
    // console.log(this.state.todos)
  
  }

  render(){
    return(
      <Router>
        <div className="App">
          <div className="container">
          <Header />
          <Route exact path="/" render={(props) => (
            <React.Fragment>
              <AddTodo addTodo = {this.addTodo}/>
              <Todos todos = {this.state.todos} markComplete = { this.markComplete } delTodo = {this.delTodo}/>
            </React.Fragment>
          )} />
          <Route path = "/about" render={(props) =>{
            return(
              <React.Fragment>
                <About />
              </React.Fragment>
            )
          }} />
          </div>
        </div>
      </Router>
    );
  }

}
//another method to route single component
// <Route path = "/" conponent = {About} />

export default App;
