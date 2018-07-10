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
      handle_onColleagueChange(event, taskid){

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
        <select defaultValue='' value={task.owner} onChange={this.handle_onColleagueChange}>
                    {colleaguesList.map((item, i) => {
                        return <option idx={i} taskid={task.id} value={item.email}>{item.name}</option>
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
