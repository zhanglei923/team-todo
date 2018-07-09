import React, { Component } from 'react';
import TodoList from './TodoList/TodoList';

const tasks = [];

class App extends Component {
  render() {
    return (
      <TodoList tasks={tasks} />
    );
  }
}

export default App;
