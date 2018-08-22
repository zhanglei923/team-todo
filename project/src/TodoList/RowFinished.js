import React, { Component } from 'react';
import moment from 'moment'
import { Icon } from 'react-icons-kit'
import {lock} from 'react-icons-kit/icomoon/lock'
import {checkmark} from 'react-icons-kit/icomoon/checkmark'
import WeekDisplay from './sub/WeekDisplay'

class RowFinished extends Component {
    constructor(props) {
        super(props);
      }
      shouldComponentUpdate(nextProps, nextState){
        return false;
      }
  render() {
    const task = this.props.task;
    return (
        <tr key={task.id}  className={"invisibleDoneTasks"}>
          <td><input type="checkbox"/></td>
          <td/> 
          <td/>
          <td/>
          <td>
            <Icon size={14} icon={checkmark} className="icon_done"/>
            <span style={{fontSize:13,marginLeft:(task.isSubTaskOf?24:8)}}>{(task.isSubTaskOf?'-':'')+task.title}</span>
          </td>
          <td/>
          <td/>
          <td/>
          <td colSpan={100}>
            {task.planned_end_date?<WeekDisplay date={(task.planned_end_date)} is={'end'}/>:false}
            {task.planned_end_date?('['+moment(task.planned_end_date).format('MM-DD')+']'):false}
            <a href="javascript:void(0)" onClick={(e)=>this.props.handleTaskChange(task.id, 'status', 'open')}>RE-OPEN</a>

          </td>
        </tr>
    );
  }
}

export default RowFinished;
