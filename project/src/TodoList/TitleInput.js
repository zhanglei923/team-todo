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
          this.props.handleKeyDown(e, focusid)
        }else{
          if(key === "Enter")  this.props.onEnterDown(focusid)
          if(key === "ArrowUp") this.props.onFocusNeighbor(focusid, 0)
          if(key === "ArrowDown")  this.props.onFocusNeighbor(focusid, 1)
        }
      }

  render() {
    const task = this.props.task;
    return (
      <React.Fragment>
        {task.isSubTaskOf ? <span className="subtask" >-</span> : false}
        <input  id={`title-${task.id}`} className={"editing-title "+(task.title?'':'mandatory')} 
                placeholder="Title..." 
                value={task.title} 
                onChange={(e) => this.props.onChange(e.target.value)}             
                onKeyDown={this.onKeyDown}   
                onKeyUp={this.onKeyUp}          
                onFocus={ this.onFocus } 
        />
      </React.Fragment> 
    );
  }
}

export default StatusSelector;