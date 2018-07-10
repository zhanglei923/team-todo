import React, { Component } from 'react';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.handle_onChange = this.handle_onChange.bind(this);
        this.handle_onColleagueChange = this.handle_onColleagueChange.bind(this);
      }
      handle_onChange(event, taskid){
        const title = event.target.value;
        this.props.handleTaskUpdate(taskid, {title});
      }
      handle_onColleagueChange(event, taskid){
        const email = event.target.value;
        console.log(email)
        this.props.handleTaskUpdate(taskid, {email});
      }
  render() {
    const tasks = this.props.tasks;
    const colleagues = this.props.colleagues;
    const colleaguesList = [];
    for(let c in colleagues){
      colleaguesList.push({...colleagues[c], email: c});
    }
    const listItems = tasks.map((task) =>
      <li key={task.id}>
        <input value={task.title} onChange={(e) => this.handle_onChange(e, task.id)}/>
        <select defaultValue='' value={task.email} onChange={(e)=>this.handle_onColleagueChange(e, task.id, task.email)}>
                    {colleaguesList.map((item, i) => {
                        return <option key={i} taskid={task.id} value={item.email}>{item.name}</option>
                    })}
                </select>
        <a href="javascript:void(0)" onClick={(e)=>this.props.handleMoveUp(task.id)} >Up</a>,
        <a href="javascript:void(0)" onClick={(e)=>this.props.handleMoveDown(task.id)} >Down</a>,
        <a href="javascript:void(0)" onClick={(e)=>this.props.handleDeleteTask(task.id)} >del</a>
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
