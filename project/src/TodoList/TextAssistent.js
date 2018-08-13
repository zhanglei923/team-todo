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

      }
  render() {
    const task = this.props.task;
    return (
        <input id={`assistent-input${this.props.idx}`} className={"editing-textpeople "} 
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