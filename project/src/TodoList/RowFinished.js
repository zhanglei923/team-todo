import React, { Component } from 'react';
import { Icon } from 'react-icons-kit'
import {arrowUp} from 'react-icons-kit/icomoon/arrowUp'
import {arrowDown} from 'react-icons-kit/icomoon/arrowDown'
import {arrowRight} from 'react-icons-kit/icomoon/arrowRight'
import {arrowLeft} from 'react-icons-kit/icomoon/arrowLeft'
import {pencil} from 'react-icons-kit/icomoon/pencil'
import {close} from 'react-icons-kit/fa/close'

class RowFinished extends Component {
    constructor(props) {
        super(props);
      }
  render() {
    const task = this.props.task;
    return (
        <tr key={task.id}  className={"invisibleDoneTasks"}>
          <td colSpan={100} style={{position:'relative'}}>
            <span style={{marginLeft:(task.isSubTaskOf?17:0)}}>{(task.isSubTaskOf?'-':'')+task.title}</span>
            &emsp;<a href="javascript:void(0)" onClick={(e)=>this.handleTaskChange(task.id, 'status', 'open')}>reopen</a>
          </td>
        </tr>
    );
  }
}

export default RowFinished;
