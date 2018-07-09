import React, { Component } from 'react';
import TodoItem from './TodoItem'

const numbers = [
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
        <TodoItem numbers={numbers}/>
      </div>
    );
  }
}

export default TodoList;
