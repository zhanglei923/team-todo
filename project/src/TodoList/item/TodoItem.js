import React, { Component } from 'react';

import StatusSelector from './StatusSelector';
import ColleagueSelector from './ColleagueSelector'
import TitleInput from './TitleInput'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.handle_onTitleChange = this.handle_onTitleChange.bind(this);
        this.handle_onColleagueChange = this.handle_onColleagueChange.bind(this);
        this.handle_onStatusChange = this.handle_onStatusChange.bind(this);
      }
      handle_onTitleChange(event, taskid){
        const title = event.target.value;
        this.props.handleTaskUpdate(taskid, {title});
      }
      handle_onColleagueChange(event, taskid){
        const email = event.target.value;
        this.props.handleTaskUpdate(taskid, {email});
      }
      handle_onStatusChange(event, taskid, status){

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
        <TitleInput task={task} onChange={this.handle_onTitleChange}/>
        <ColleagueSelector task={task} colleagues={colleagues} onChange={this.handle_onColleagueChange}/>
        <StatusSelector task={task} onChange={this.handle_onStatusChange}/>
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
