import React, { Component } from 'react';
import TodoItem from './TodoItem'

const tasks = [
    {
        id:1, 
        title:'aaa',
        status:'open',
        deleted: false,
        
    }
];

class TodoList extends Component {
  render() {
    return (
      <div className="App">
        <TodoItem tasks={tasks}/>
      </div>
    );
  }
}

export default TodoList;
