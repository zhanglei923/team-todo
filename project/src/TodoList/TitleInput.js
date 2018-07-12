import React, { Component } from 'react';
import taskUtil from './utils/taskUtil'

class StatusSelector extends Component {
    focusid=1
    constructor(props) {
        super(props);
        this.onFocus = this.onFocus.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
      }
      onFocus () {
        const task = this.props.task;
        this.focusid = task.id;
      }
      onKeyPress (e) {
        // "ArrowUp"
        // "ArrowDown"
        let key = e.key;
        let focusid = this.focusid
        if(!focusid) return;

        //console.log(key)
        
        if(key === "ArrowUp") this.props.onMoveUp(focusid)
        if(key === "ArrowDown")  this.props.onMoveDown(focusid)
        if(key === "Delete")  this.props.onDelete(focusid)
        
        
      }
  render() {
    const task = this.props.task;
    return (
        <input  className={"editing-title "+(task.title?'':'mandatory')} 
                placeholder="Enter task description here..." 
                value={task.title} 
                onChange={(e) => this.props.onChange(e.target.value)}             
                onKeyDown={this.onKeyPress}             
                onFocus={ this.onFocus } 
        />
    );
  }
}

export default StatusSelector;