import React, { Component } from 'react';import { Icon } from 'react-icons-kit'
import {clock} from 'react-icons-kit/icomoon/clock'
import {bubble2} from 'react-icons-kit/icomoon/bubble2'
import {notification} from 'react-icons-kit/icomoon/notification'
import {warning} from 'react-icons-kit/icomoon/warning'
import {ic_warning} from 'react-icons-kit/md/ic_warning'
import {ic_error} from 'react-icons-kit/md/ic_error'
import {pause} from 'react-icons-kit/fa/pause'
import {play} from 'react-icons-kit/fa/play'
import taskUtil from '../utils/taskUtil'

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
        if(e.ctrlKey){
          if(key === "s")  {
            window.saveTasks(false)
            e.preventDefault()
          }
        }

      }
  render() {
    const task = this.props.task;
    return (
      <React.Fragment>
      {task.isSubTaskOf ? <span>-</span> : false}
      {task.status==='ongoing'?
                        false
                        // <Icon size={12} icon={pause} className="icon_inprogress"/>
                        :false
                        // <Icon size={14} icon={play} className="icon_open"/>
                        }
        <input  id={`owner-input${this.props.idx}`} className={"editing-textpeople "+(task.title?'':'mandatory')} 
                placeholder="..." 
                value={task.textOwner} 
                onChange={(e) => this.props.onChange(e.target.value)}             
                onKeyDown={this.onKeyDown}   
                onKeyUp={this.onKeyUp}          
                onFocus={ this.onFocus } 
        />
        </React.Fragment>
    );
  }
}

export default TextOwner;