import React, { Component } from 'react';
import {implementStatus, riskStatus} from '../../mock/status';

class RiskSelector extends Component {
    constructor(props) {
        super(props);
      }
  render() {
    const task = this.props.task;
    return (
        <select value={task.risk} onChange={(e)=>this.props.onChange(e.target.value)}>
            {riskStatus.map((item, i) => {
                return <option key={i} value={item.value}>{item.text}</option>
            })}
        </select>
    );
  }
}

export default RiskSelector;
