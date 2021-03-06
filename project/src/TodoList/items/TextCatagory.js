import React, { Component } from 'react';
import taskUtil from '../utils/taskUtil'

class TextCatagory extends Component {
    focusid=1
    constructor(props) {
        super(props);
      }
  render() {
    const task = this.props.task;
    return (
        <input  className={"editing-catagory "} 
                placeholder="..." 
                value={task.textCatagory} 
                onChange={(e) => this.props.onChange(e.target.value)}            
                onKeyDown={(e)=>this.props.handleKeyDown(e, task.id)}  
                onFocus={ this.onFocus } 
        />
    );
  }
}

export default TextCatagory;