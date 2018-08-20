import React, { Component } from 'react';
import {implementStatus, riskStatus} from '../mock/status';

class StatusSelector extends Component {
    constructor(props) {
        super(props);
      }
  render() {
    const task = this.props.task;
    return (
        <React.Fragment>
        {(task.isSubTaskOf&&task.status!=='open') ? <span>-</span> : false}
            <select value={task.status} onChange={(e)=>this.props.onChange(e.target.value)}>
                {implementStatus.map((item, i) => {
                    return <option key={i} value={item.value}>{item.text}</option>
                })}
            </select>
        </React.Fragment>
    );
  }
}

export default StatusSelector;
