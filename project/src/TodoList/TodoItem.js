import React, { Component } from 'react';

import StatusSelector from './StatusSelector';
import OwnerSelector from './OwnerSelector'
import RiskSelector from './RiskSelector'
import TitleInput from './TitleInput'
import moment from 'moment'
import DatePicker from 'react-datepicker';
import * as NumericInput from "react-numeric-input";

import 'react-datepicker/dist/react-datepicker.css';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.handleTaskChange = this.handleTaskChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }
      handleTaskChange(taskid, keyName, value){
        //console.log(taskid, keyName, value)
        this.props.handleTaskUpdate(taskid, {[keyName]: value});
      }
      handleChange(date) {
        console.log(date, moment(date).format('YYYY-MM-DD'))
        this.setState({
          startDate: date
        });
      }
  render() {
    const tasks = this.props.tasks;
    const colleagues = this.props.colleagues;
    const listItems = tasks.map((task, i) =>
      <li key={task.id} className={"task "+task.risk+' '+task.status}>
        <span>{i}</span>
        <input
            type="checkbox" />
        <TitleInput task={task} 
                    onChange={(value)=>this.handleTaskChange(task.id, 'title', value)} 
                    onMoveUp={this.props.handleMoveUp}
                    onMoveDown={this.props.handleMoveDown}
        />
        <OwnerSelector task={task} colleagues={colleagues} onChange={(value)=>this.handleTaskChange(task.id, 'owner', value)}/>
        <input className={`assistant`} value={task.assistant} placeholder={"Assistant(s)"} onChange={(e)=>this.handleTaskChange(task.id, 'assistant', e.target.value)}/>
        <StatusSelector task={task} onChange={(value)=>this.handleTaskChange(task.id, 'status', value)}/>
        <RiskSelector task={task} onChange={(value)=>this.handleTaskChange(task.id, 'risk', value)}/>
        <div className={"cost-cell"}>
          <NumericInput 
              className="form-control"
              min={0.5} max={100} value={task.cost}
              step={0.5}
              snap
              onChange={(val)=>this.handleTaskChange(task.id, 'cost', val)}             
          />
         </div>
        <div className={"planned_end_date-cell"}>
          <DatePicker
            className={"planned_end_date"}
            dateFormat="YYYY-MM-DD"
            selected={moment(task.planned_end_date)}
            onChange={(mom)=>this.handleTaskChange(task.id, 'planned_end_date', mom.format('YYYY-MM-DD'))}
            //onChange={this.handleChange}
            isClearable={false}
            placeholderText="Planned End Date"
          />
        </div>
        <span>{task.planned_end_date}</span>
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
