import React, { Component } from 'react';

class GroupTitle extends Component {
    constructor(props) {
        super(props);
      }
  render() {
    const task = this.props.task;
    return (
        <tr key={"group"+i} className={"groupName"}>
          <td colSpan={100}>
            <div style={{float:'left'}}>
              {task.groupName}
            </div>
            <div style={{marginRight: '30px', float:'left'}}>
              <a href="javascript:void(0)" onClick={(e)=>this.props.handleMoveUp(task.id)} ><Icon size={9} icon={arrowUp} /></a>
              <a href="javascript:void(0)" onClick={(e)=>this.props.handleMoveDown(task.id)} ><Icon size={9} icon={arrowDown} /></a>
              &nbsp;
              <a href="javascript:void(0)" onClick={(e)=>this.props.handleGroupRename(task.id)} ><Icon size={12} icon={pencil} /></a>  
              <a href="javascript:void(0)" onClick={(e)=>this.props.handleGroupRemove(task.id)} ><Icon size={12} icon={close} /></a>    
            </div>      
          </td>
        </tr>
    );
  }
}

export default GroupTitle;
