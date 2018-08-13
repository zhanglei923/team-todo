import React, { Component } from 'react';
import taskUtil from './utils/taskUtil'

class StatusSelector extends Component {
    focusid=1
    constructor(props) {
        super(props);
        this.onFocus = this.onFocus.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
      }
      onFocus () {
        const task = this.props.task;
        this.focusid = task.id;
      }
      onKeyUp(e){
        this.props.onTitleKeyUp();
      }
      onKeyDown (e) {
        // "ArrowUp"
        // "ArrowDown"
        let key = e.key;
        let focusid = this.focusid
        if(!focusid) return;

        //console.log(key, e, e.ctrlKey)

        if(e.ctrlKey){
          if(key === "ArrowUp") this.props.onMoveUp(focusid)
          if(key === "ArrowDown")  this.props.onMoveDown(focusid)
          if(key === "Delete")  this.props.onDelete(focusid)
          if(key === "Enter")  this.props.onCreate()
        }
      }
  render() {
    const task = this.props.task;
    return (
        <input  id={`title-input${this.props.idx}`} className={"editing-title "+(task.title?'':'mandatory')} 
                placeholder="..." 
                value={task.title} 
                onChange={(e) => this.props.onChange(e.target.value)}             
                onKeyDown={this.onKeyDown}   
                onKeyUp={this.onKeyUp}          
                onFocus={ this.onFocus } 
        />
    );
  }
}

export default StatusSelector;