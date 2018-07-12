import React, { Component } from 'react';

class StatusSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
      }
  render() {
    const task = this.props.task;
    return (
        <input className={"editing-title "+(task.title?'':'mandatory')} placeholder="Enter task description here..." value={task.title} onChange={(e) => this.props.onChange(e.target.value)}/>
    );
  }
}

export default StatusSelector;
