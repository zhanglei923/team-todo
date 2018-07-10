import React, { Component } from 'react';

class StatusSelector extends Component {
    constructor(props) {
        super(props);
      }
  render() {
    const task = this.props.task;
    return (
        <select value={"normal"} onChange={(e)=>this.props.handle_onStatusChange(e, task.id)}>
            {['notstart', 'ongoing', 'done', 'delay'].map((item, i) => {
                return <option key={i} value={item}>{item}</option>
            })}
        </select>
    );
  }
}

export default StatusSelector;
