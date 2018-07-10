import React, { Component } from 'react';

class StatusSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        }
      }
  render() {
    const task = this.props.task;
    return (
        this.state.isEditing ?
        <input className={"editing-title"} placeholder="Enter task description here..." value={task.title} onChange={(e) => this.props.onChange(e, task.id)}/>
        :
        <span className={"readonly-title"}>{task.title?task.title:"Blank Title..."}</span>
    );
  }
}

export default StatusSelector;
