import React, { Component } from 'react';
import TodoList from './TodoList/main';
import colleaguesj from './mock/colleagues';

document.title='Todo list';
const colleagues= colleaguesj;
const tasks = [];

let jsonp = require('jsonp');

jsonp('http://localhost:3001/users',{}, ( err, data) => {
  console.log( err, data)
});


class App extends Component {
  render() {
    console.log(this.props)
    return (
      <TodoList tasks={tasks} colleagues={colleagues} config={{showTaskConfig:true}}/>
    );
  }
}

export default App;
