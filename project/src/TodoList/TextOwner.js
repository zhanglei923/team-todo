import React, { Component } from 'react';
import taskUtil from './utils/taskUtil'

class TextOwner extends Component {
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
        

      }
  render() {
    const task = this.props.task;
    return (
        <input  id={`owner-input${this.props.idx}`} className={"editing-textpeople "+(task.title?'':'mandatory')} 
                placeholder="..." 
                value={task.textOwner} 
                onChange={(e) => this.props.onChange(e.target.value)}             
                onKeyDown={this.onKeyDown}   
                onKeyUp={this.onKeyUp}          
                onFocus={ this.onFocus } 
        />
    );
  }
}

export default TextOwner;