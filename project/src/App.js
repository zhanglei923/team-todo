import React, { Component } from 'react';
import TodoList from './TodoList/TodoList';

document.title='Todo list'
const tasks = [];

class App extends Component {
  render() {
    return (
      <TodoList tasks={tasks} />
    );
  }
}

export default App;
