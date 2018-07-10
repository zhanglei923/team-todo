import React, { Component } from 'react';
import TodoList from './TodoList/TodoList';

document.title='Todo list';
const colleagues={
  'zhang3@company.com':{
    name:'ZHANGSAN'
  },
  'li4@company.com':{
    name:'LISI'
  },
  'wang5@company.com':{
    name:'WANGWU'
  }
}
const tasks = [];

let jsonp = require('jsonp');

jsonp('http://localhost:3001/users',{}, ( err, data) => {
  console.log( err, data)
});


class App extends Component {
  render() {
    return (
      <TodoList tasks={tasks} colleagues={colleagues}/>
    );
  }
}

export default App;
