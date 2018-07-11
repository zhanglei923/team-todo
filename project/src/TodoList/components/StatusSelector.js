import React, { Component } from 'react';
import {implementStatus, riskStatus} from '../../mock/status';

class StatusSelector extends Component {
    constructor(props) {
        super(props);
      }
  render() {
    const task = this.props.task;
    return (
        <select value={task.status} onChange={(e)=>this.props.onChange(e.target.value)}>
            {implementStatus.map((item, i) => {
                return <option key={i} value={item.value}>{item.text}</option>
            })}
        </select>
    );
  }
}

export default StatusSelector;
