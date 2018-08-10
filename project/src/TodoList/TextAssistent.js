import React, { Component } from 'react';
import taskUtil from './utils/taskUtil'

class TextAssistent extends Component {
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
        // if(!focusid) return;

        // console.log(key, e)
        
        if(key === "ArrowUp") this.props.onMoveUp(focusid)
        if(key === "ArrowDown")  this.props.onMoveDown(focusid)
        if(key === "Delete")  this.props.onDelete(focusid)
        if(key === "Enter")  this.props.onCreate()
        
      }
  render() {
    const task = this.props.task;
    return (
        <input  className={"editing-textassistent "+(task.title?'':'mandatory')} 
                placeholder="..." 
                value={task.textAssistent} 
                onChange={(e) => this.props.onChange(e.target.value)}             
                onKeyDown={this.onKeyDown}   
                onKeyUp={this.onKeyUp}          
                onFocus={ this.onFocus } 
        />
    );
  }
}

export default TextAssistent;