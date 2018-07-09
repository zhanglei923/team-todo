import React, { Component } from 'react';
import TodoList from './TodoList/TodoList';

document.title='Todo list'
const tasks = [];

let jsonp = require('jsonp');

jsonp('http://localhost:3001/users',{}, ( err, data) => {
  console.log( err, data)
});


class App extends Component {
  render() {
    return (
      <TodoList tasks={tasks} />
    );
  }
}

export default App;
