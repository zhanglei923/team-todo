import React, { Component } from 'react';
import { Icon } from 'react-icons-kit'
import {arrowUp} from 'react-icons-kit/icomoon/arrowUp'
import {arrowDown} from 'react-icons-kit/icomoon/arrowDown'
import {arrowRight} from 'react-icons-kit/icomoon/arrowRight'
import {arrowLeft} from 'react-icons-kit/icomoon/arrowLeft'
import {pencil} from 'react-icons-kit/icomoon/pencil'
import {close} from 'react-icons-kit/fa/close'
import {folderOpen} from 'react-icons-kit/icomoon/folderOpen'

class RowGroup extends Component {
    constructor(props) {
        super(props);
      }
  render() {
    const task = this.props.task;
    return (
        <tr className={"task_group"}>
          <td colSpan={3}>
              <input type="checkbox"  style={{float:'left'}} />*
          </td>
          <td colSpan={2} className="task_group_title">
            <span>
              <Icon style={{color:'#ddd',float:'left',marginLeft:3}} size={13} icon={folderOpen} />
              <input id={`group-${task.id}`} style={{float:'left',padding:'2px 0 0 2px'}}
                    value={task.groupName}
                    onChange={(e) => this.props.onNameChange(e.target.value)}            
                    onKeyDown={(e) => this.props.handleKeyDown(e, task.id)}  
              />
            </span>
            <div style={{marginLeft: '2px', float:'right',padding:'2px 0 0 2px'}}>
              {/* <a href="javascript:void(0)" style={{marginLeft:'5px'}} onClick={(e)=>this.props.handleMoveUp(task.id)} ><Icon style={{color:'#ddd'}} size={9} icon={arrowUp} /></a>
              <a href="javascript:void(0)" style={{marginLeft:'5px'}} onClick={(e)=>this.props.handleMoveDown(task.id)} ><Icon style={{color:'#ddd'}} size={9} icon={arrowDown} /></a>
              <a href="javascript:void(0)" style={{marginLeft:'5px'}} onClick={(e)=>this.props.handleGroupRename(task.id)} ><Icon style={{color:'#ddd'}} size={12} icon={pencil} /></a>   */}
              <a href="javascript:void(0)" onClick={(e)=>this.props.handleGroupRemove(task.id)} ><Icon style={{color:'#ddd'}} size={9} icon={close} /></a>    
            </div>      
          </td>
          <td colSpan={100}></td>
        </tr>
    );
  }
}

export default RowGroup;
