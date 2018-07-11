import React, { Component } from 'react';

class StatusSelector extends Component {
    constructor(props) {
        super(props);
      }
  render() {
    const task = this.props.task;
    return (
        <select value={task.status} onChange={(e)=>this.props.onChange(e, task.id)}>
            {['open', 'ongoing', 'done', 'delay'].map((item, i) => {
                return <option key={i} value={item}>{item}</option>
            })}
        </select>
    );
  }
}

export default StatusSelector;
