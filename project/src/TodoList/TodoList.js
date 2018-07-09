import React, { Component } from 'react';
import './TodoList.css';
import TodoItem from './TodoItem'


class TodoList extends Component {
  render() {
    return (
      <div className="App">
        <TodoItem tasks={this.props.tasks}/>
      </div>
    );
  }
}

export default TodoList;
