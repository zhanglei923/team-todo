import React, { Component } from 'react';

class TodoList extends Component {
  render() {
    const tasks = this.props.tasks;
    const listItems = tasks.map((task) =>
      <li key={task.id}>{task.title}</li>
    );
    return (
      <div className="todo_item">
        <ul>{listItems}</ul>
      </div>
    );
  }
}

export default TodoList;
