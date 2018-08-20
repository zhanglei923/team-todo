import React, { Component } from 'react';
import { Icon } from 'react-icons-kit'
import {arrowUp} from 'react-icons-kit/icomoon/arrowUp'
import {arrowDown} from 'react-icons-kit/icomoon/arrowDown'
import {arrowRight} from 'react-icons-kit/icomoon/arrowRight'
import {arrowLeft} from 'react-icons-kit/icomoon/arrowLeft'
import {pencil} from 'react-icons-kit/icomoon/pencil'
import {close} from 'react-icons-kit/fa/close'

class RowMilestone extends Component {
    constructor(props) {
        super(props);
      }
  render() {
    const task = this.props.task;
    return (
        <tr className={"mileStone " + (task.milestoneStatus?task.milestoneStatus:'open')}>
          <td colSpan={100} style={{position:'relative'}}>
            <div className="milestone-tip">
                <div>
                    <input className={'millestonename'} 
                            id={`title-${task.id}`}
                            value={task.milestoneName}
                            onChange={(e) => this.props.onMilestongNameChange(e.target.value)}            
                            onKeyDown={(e) => this.props.handleKeyDown(e, task.id)}  
                            placeholder="Milestone"                            
                        />
                    {/* <a href="javascript:void(0)" style={{marginLeft:'5px'}} onClick={(e)=>this.props.handleMoveUp(task.id)} ><Icon size={9} icon={arrowUp} /></a>
                    <a href="javascript:void(0)" style={{marginLeft:'5px'}} onClick={(e)=>this.props.handleMoveDown(task.id)} ><Icon size={9} icon={arrowDown} /></a>
                    <a href="javascript:void(0)" style={{marginLeft:'5px'}} onClick={(e)=>this.props.handleGroupRename(task.id)} ><Icon size={12} icon={pencil} /></a>   */}
                    <a href="javascript:void(0)" style={{marginLeft:'5px'}} onClick={(e)=>this.props.handleGroupRemove(task.id)} ><Icon size={12} icon={close} /></a>   
                </div> 
            </div>   
            <div className="milestone-toolbar">
                  <select defaultValue="" value={task.milestoneStatus} onChange={(e)=>this.props.onMilestongStatusChange(e.target.value)}>
                    <option value="open">OPEN</option>
                    <option value="focus">TARGET</option>
                    <option value="done">DONE</option>
                  </select>
            </div>   
          </td>
        </tr>
    );
  }
}

export default RowMilestone;
