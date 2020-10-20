import React from 'react';
import Todos from './components/Todos'
import './App.css';
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'

class App extends React.Component {
  state = {
    todos:[
      {id:1,title:"Take out the trash",completed:false},
      {id:2,title:"Dinner with wife",completed:false},
      {id:3,title:"Meeting with my boss",completed:false},
    ]
  }
  markComplete=(id)=>{
    this.setState({
      todos:this.state.todos.map(todo=>{
        if(todo.id===id){
          todo.completed=!todo.completed
        }
        return todo
      })
    })
  }

  delTodo = (id)=>{
    let todosCopy=this.state.todos
    todosCopy=todosCopy.filter(todo=>{
      return todo.id!==id
    })
    this.setState({
      todos:todosCopy
    })
  }
 
  render(){
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo />
          <Todos 
            todos={this.state.todos} 
            markComplete={this.markComplete} 
            delTodo={this.delTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
