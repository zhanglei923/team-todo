import React, { Component } from 'react';
import { Icon } from 'react-icons-kit'
import {clock} from 'react-icons-kit/icomoon/clock'
import {bubble2} from 'react-icons-kit/icomoon/bubble2'
import {notification} from 'react-icons-kit/icomoon/notification'
import {warning} from 'react-icons-kit/icomoon/warning'
import {ic_warning} from 'react-icons-kit/md/ic_warning'
import {ic_error} from 'react-icons-kit/md/ic_error'
import {pause} from 'react-icons-kit/fa/pause'
import {play} from 'react-icons-kit/fa/play'
import taskUtil from '../utils/taskUtil'

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
        {task.isSubTaskOf ? <span className="subtask" >
                              -
                            </span> : false}
        {task.status==='ongoing'?<Icon size={12} icon={pause} className="icon_inprogress"/>:false}        
        {task.status==='open'?(<span>
                                {/* <Icon size={12} icon={play} className="icon_open" /> */}
                                </span>)
                        :false}    
        <span>
        <input id={`title-${task.id}`} className={"editing-title "+(task.title?'':'mandatory')} 
            placeholder="Title..." 
            value={task.title} 
            onChange={(e) => this.props.onChange(e.target.value)}             
            onKeyDown={this.onKeyDown}   
            onKeyUp={this.onKeyUp}          
            onFocus={ this.onFocus } 
        />
        </span>
        {task.status!=='done'?(<span>
                                {task.risk==='danger'?<Icon size={18} icon={ic_error} className="icon_danger" />:false}
                                {task.risk==='warn'?<Icon size={18} icon={ic_warning} className="icon_warn" />:false}
                                </span>)
                        :false}
      </React.Fragment> 
    );
  }
}

export default StatusSelector;