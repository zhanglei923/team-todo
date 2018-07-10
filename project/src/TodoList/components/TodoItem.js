import React, { Component } from 'react';

import StatusSelector from './StatusSelector';
import ColleagueSelector from './ColleagueSelector'
import TitleInput from './TitleInput'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleColleagueChange = this.handleColleagueChange.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
      }
      handleTitleChange(event, taskid){
        const title = event.target.value;
        this.props.handleTaskUpdate(taskid, {title});
      }
      handleColleagueChange(event, taskid){
        const email = event.target.value;
        this.props.handleTaskUpdate(taskid, {email});
      }
      handleStatusChange(event, taskid, status){

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
        <TitleInput task={task} onChange={this.handleTitleChange}/>
        <ColleagueSelector task={task} colleagues={colleagues} onChange={this.handleColleagueChange}/>
        <StatusSelector task={task} onChange={this.handleStatusChange}/>
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
