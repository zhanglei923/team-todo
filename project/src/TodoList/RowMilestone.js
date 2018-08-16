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
      onKeyDown (e, taskid) {
        // "ArrowUp"
        // "ArrowDown"
        let key = e.key;

        //console.log(key, e, e.ctrlKey)

        if(e.ctrlKey){
          if(key === "ArrowUp") this.props.handleMoveUp(taskid)
          if(key === "ArrowDown")  this.props.handleMoveDown(taskid)
          let target = e.currentTarget
        }
      }
  render() {
    const task = this.props.task;
    return (
        <tr className={"mileStone"}>
          <td colSpan={100} style={{position:'relative'}}>
            <div className="milestone-tip" style={{marginLeft: '0', float:'left',padding:'2px 0 0 2px'}}>
                <div>
                    <input className={'millestonename'} 
                            id={`title-${task.id}`}
                            value={task.milestoneName}
                            onChange={(e) => this.props.onChange(e.target.value)}             
                            onKeyDown={(e)=>this.onKeyDown.bind(this)(e, task.id)}  
                            placeholder="Milestone"                            
                        />
                    {/* <a href="javascript:void(0)" style={{marginLeft:'5px'}} onClick={(e)=>this.props.handleMoveUp(task.id)} ><Icon size={9} icon={arrowUp} /></a>
                    <a href="javascript:void(0)" style={{marginLeft:'5px'}} onClick={(e)=>this.props.handleMoveDown(task.id)} ><Icon size={9} icon={arrowDown} /></a>
                    <a href="javascript:void(0)" style={{marginLeft:'5px'}} onClick={(e)=>this.props.handleGroupRename(task.id)} ><Icon size={12} icon={pencil} /></a>   */}
                    <a href="javascript:void(0)" style={{marginLeft:'5px'}} onClick={(e)=>this.props.handleGroupRemove(task.id)} ><Icon size={12} icon={close} /></a>   
                </div> 
            </div>      
          </td>
        </tr>
    );
  }
}

export default RowMilestone;
