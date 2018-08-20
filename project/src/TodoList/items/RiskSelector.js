import React, { Component } from 'react';
import {implementStatus, riskStatus} from '../../mock/status';

class RiskSelector extends Component {
    constructor(props) {
        super(props);
      }
  render() {
    const task = this.props.task;
    return (
    <React.Fragment>
        {(task.isSubTaskOf&&task.risk!=='normal') ? <span>-</span> : false}
        <select className={"riskSel "+(task.risk==='normal'?'dark':'')} value={task.risk} onChange={(e)=>this.props.onChange(e.target.value)}>
            {riskStatus.map((item, i) => {
                return <option key={i} value={item.value}>{item.text}</option>
            })}
        </select>
    </React.Fragment>
    );
  }
}

export default RiskSelector;
