import React, { Component } from 'react';

class StatusSelector extends Component {
    constructor(props) {
        super(props);
      }
  render() {
    const task = this.props.task;
    return (
        <input placeholder="Enter task description here..." value={task.title} onChange={(e) => this.props.onChange(e, task.id)}/>
    );
  }
}

export default StatusSelector;
