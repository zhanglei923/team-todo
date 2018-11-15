import React, { Component } from 'react';
import moment from 'moment'
import { Icon } from 'react-icons-kit'
import {lock} from 'react-icons-kit/icomoon/lock'
import {checkmark} from 'react-icons-kit/icomoon/checkmark'
import {stop} from 'react-icons-kit/fa/stop'
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
        <tr key={task.id}  
          className={"finished_task"}
          onMouseOver={(e)=>e.currentTarget.className = e.currentTarget.className+' hovering'}
          onMouseOut={(e)=>e.currentTarget.className = e.currentTarget.className.replace(/hovering/ig,'')}
          >
            <td><input type="checkbox"/></td>
            <td><span>[{this.props.i}]</span></td>
            <td><Icon size={10} icon={lock} style={{color:'#ddd'}}/></td>
            <td>
              <span style={{float:'right'}}>{task.textCatagory}</span>
            </td>
            <td className={'task_title'}>
                <span style={{marginLeft:(task.isSubTaskOf ? 29 : 2)}}>
                  {(task.isSubTaskOf?'-':'')}
                    {/* <Icon size={12} icon={stop} className="icon_done"/> */}
                  {task.title}
                </span>
            </td>
            <td><Icon size={10} icon={lock} style={{color:'#ddd'}}/>{task.textOwner?task.textOwner:''}</td>
            <td><Icon size={10} icon={lock} style={{color:'#ddd'}}/></td>
            <td><Icon size={10} icon={lock} style={{color:'#ddd'}}/></td>
            <td>
              {task.planned_end_date?<WeekDisplay date={(task.planned_end_date)} is={'end'}/>:false}
              {task.planned_end_date?(''+moment(task.planned_end_date).format('MM-DD')+''):false}
              {!task.planned_end_date?'-':false}
            </td>
            <td style={{display:'none'}}><Icon size={10} icon={lock} style={{color:'#ddd'}}/></td>
            <td>
              <a href="javascript:void(0)" onClick={(e)=>this.props.handleTaskChange(task.id, 'status', 'open')}>RE-OPEN</a>
            </td>
            <td><Icon size={10} icon={lock} style={{color:'#ddd'}}/></td>
            <td><Icon size={10} icon={lock} style={{color:'#ddd'}}/></td>
            <td colSpan={100}></td>
        </tr>
    );
  }
}

export default RowFinished;
