import React, { Component } from 'react';
import TodoList from './TodoList/main';
import colleaguesj from './mock/colleagues';

document.title='Todo list';
const colleagues= colleaguesj;
const tasks = [];
let localPrjName = window.localStorage.getItem('team-todo_projectName');
let projectName = localPrjName ? localPrjName : 'default';

if(window.location.search){
  projectName = window.location.search.split('=')[1];
}

let jsonp = require('jsonp');

// jsonp('http://localhost:3001/users',{}, ( err, data) => {
//   console.log( err, data)
// });


class App extends Component {
  render() {
    //console.log(this.props)
    return (
      <TodoList projects={['default']} projectName={projectName} tasks={tasks} colleagues={colleagues} config={{
        showTaskConfig: true,
        showDoneTasks: true
      }}/>
    );
  }
}

export default App;
