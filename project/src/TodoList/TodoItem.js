import React, { Component } from 'react';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.handle_onChange = this.handle_onChange.bind(this);
      }
      handle_onChange(event, taskid){
        const label = event.target.value;
        this.props.handleTaskUpdate(taskid, label)
      }
  render() {
    const tasks = this.props.tasks;
    const listItems = tasks.map((task) =>
      <li key={task.id}>
        <input value={task.title} onChange={(e) => this.handle_onChange(e, task.id)}/>
        <a href="javascript:void(0)" onClick={(e)=>this.props.deleteTask(e, task.id)} >del</a>
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
