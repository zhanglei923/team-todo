import React, { Component } from 'react';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.handle_onChange = this.handle_onChange.bind(this);
      }
      handle_onChange(){
          
      }
  render() {
    const tasks = this.props.tasks;
    const listItems = tasks.map((task) =>
      <li key={task.id}>
        <input value={task.title} onChange={this.handle_onChange}/>
        <a href="javascript:void(0)" onClick={this.props.deleteTask} >del</a>
      </li>
    );
    return (
      <div className="todo_item">
        <ul>{listItems}</ul>
      </div>
    );
  }
}

export default TodoList;
