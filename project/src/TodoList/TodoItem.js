import React, { Component } from 'react';

class TodoList extends Component {
  render() {
    const numbers = this.props.numbers;
    const listItems = numbers.map((number) =>
      <li key={number.id}>{number.title}</li>
    );
    return (
      <div className="todo_item">
        <ul>{listItems}</ul>
      </div>
    );
  }
}

export default TodoList;
