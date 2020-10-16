import React from 'react';
import Todos from './components/Todos'
import './App.css';

class App extends React.Component {
  state = {
    todos:[
      {id:1,title:"Take out the trash",completed:false},
      {id:2,title:"Dinner with wife",completed:false},
      {id:3,title:"Meeting with my boss",completed:false},

    ]
  }
  render(){
    console.log(this.state.todos)
    return (
      <div className="App">
        <h2>HI From Aghiad</h2>
        <Todos />
      </div>
    );
  }
}

export default App;
