import React, { Component } from 'react';

import StatusSelector from './StatusSelector';
import ColleagueSelector from './ColleagueSelector'
import RiskSelector from './RiskSelector'
import TitleInput from './TitleInput'
import {implementStatus, riskStatus} from '../../mock/status';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.handleTaskChange = this.handleTaskChange.bind(this);
      }
      handleTaskChange(event, taskid, keyName){
        let keyValue = event.target.value;
        this.props.handleTaskUpdate(taskid, {[keyName]: keyValue});
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
        <TitleInput task={task} onChange={(e)=>this.handleTaskChange(e, task.id, 'title')}/>
        <ColleagueSelector task={task} colleagues={colleagues} onChange={(e)=>this.handleTaskChange(e, task.id, 'email')}/>
        <StatusSelector task={task} onChange={(e)=>this.handleTaskChange(e, task.id, 'status')}/>
        <RiskSelector task={task} onChange={(e)=>this.handleTaskChange(e, task.id, 'risk')}/>
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
