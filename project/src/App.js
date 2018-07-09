import React, { Component } from 'react';
import TodoList from './TodoList/TodoList';

const tasks = [
  {
      id:1, 
      title:'aaa',
      status:'open',
      deleted: false,
      
  }
];

class App extends Component {
  render() {
    return (
      <TodoList tasks={tasks} />
    );
  }
}

export default App;
