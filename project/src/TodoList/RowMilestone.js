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
        <tr className={"mileStone"}>
          <td colSpan={100} style={{position:'relative'}}>
            <div style={{float:'left',padding:'2px 0 0 2px'}}>
              
            </div>
            <div className="milestone-tip" style={{marginLeft: '22px', float:'left',padding:'2px 0 0 2px'}}>
                <div>
                    <input className={'millestonename'} value={task.milestoneName?task.milestoneName:'Milestone'}/>
                </div> 
                <div>
                    <a href="javascript:void(0)" style={{marginLeft:'5px'}} onClick={(e)=>this.props.handleMoveUp(task.id)} ><Icon size={9} icon={arrowUp} /></a>
                    <a href="javascript:void(0)" style={{marginLeft:'5px'}} onClick={(e)=>this.props.handleMoveDown(task.id)} ><Icon size={9} icon={arrowDown} /></a>
                    <a href="javascript:void(0)" style={{marginLeft:'5px'}} onClick={(e)=>this.props.handleGroupRename(task.id)} ><Icon size={12} icon={pencil} /></a>  
                    <a href="javascript:void(0)" style={{marginLeft:'5px'}} onClick={(e)=>this.props.handleGroupRemove(task.id)} ><Icon size={12} icon={close} /></a>   
                </div> 
            </div>      
          </td>
        </tr>
    );
  }
}

export default RowMilestone;
