import React, { Component } from 'react';

import StatusSelector from './items/StatusSelector';
import TextCatagory from './items/TextCatagory'
import AssistentSelector from './items/AssistentSelector'
import RiskSelector from './items/RiskSelector'
import TitleInput from './items/TitleInput'
import TextOwner from './items/TextOwner'
import TextAssistent from './items/TextAssistent'
import WeekDisplay from './sub/WeekDisplay'
import StartEndRange from './sub/StartEndRange'

import RowGroup from './RowGroup'
import RowMilestone from './RowMilestone'
import RowFinished from './RowFinished'

import moment from 'moment'
import DatePicker from 'react-datepicker';
import * as NumericInput from "react-numeric-input";

import { Icon } from 'react-icons-kit'
import {arrowUp} from 'react-icons-kit/icomoon/arrowUp'
import {arrowDown} from 'react-icons-kit/icomoon/arrowDown'
import {arrowRight} from 'react-icons-kit/icomoon/arrowRight'
import {arrowLeft} from 'react-icons-kit/icomoon/arrowLeft'
import {pencil} from 'react-icons-kit/icomoon/pencil'
import {close} from 'react-icons-kit/fa/close'


import 'react-datepicker/dist/react-datepicker.css';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = this.props;
        this.handleTaskChange = this.handleTaskChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }
      handleTaskChange(taskid, keyName, value){
        //console.log(taskid, keyName, value)
        this.props.handleTaskUpdate(taskid, {[keyName]: value});
      }
      handleChange(key, value) {
        let state = this.state;
        state = Object.assign(state, {[key]: value})
        this.setState(state);
      }
      handleKeyDown (e, taskid) {
        // "ArrowUp"
        // "ArrowDown"
        let key = e.key;

        //console.log(key, e, e.ctrlKey)

        if(e.ctrlKey){
          if(key === "ArrowUp") this.props.handleMoveUp(taskid)
          if(key === "ArrowDown")  this.props.handleMoveDown(taskid)
          if(key === "ArrowLeft") this.props.handleBeSubtask(taskid)
          if(key === "ArrowRight")  this.props.handleUnSubtask(taskid)
          if(key === "Delete")  this.props.handleDelete(taskid)
          if(key === "s")  {
            window.saveTasks(false)
            e.preventDefault()
          }
        }
      }
      onMouseOver(tr, taskid){
        if(!/hovering/.test(tr.className))
        tr.className = tr.className+' hovering';

        document.getElementById('title-'+taskid).select()
      }
      onMouseOut(tr){
        tr.className = tr.className.replace(/hovering/ig,'')
      }
  render() {
    const props = this.props;
    const tasks = this.props.tasks;
    const colleagues = this.props.colleagues;
    tasks.map((task, i) =>{
       if(!task.groupName) task.groupName = '';
       if(!task.description) task.description = '';
       if(!task.isSubTaskOf) task.isSubTaskOf = '';
    });
    const listItems = tasks.map((task, i) =>
    <React.Fragment key={i}>
      {(task.isGroup || task.isMilestong)?(
        (task.isGroup)?
          <RowGroup key={"group"+i}
                      task={task}
                      onNameChange={(value)=>this.handleTaskChange(task.id, 'groupName', value)} 
                      handleGroupRemove={this.props.handleGroupRemove.bind(this)}
                      handleKeyDown={this.handleKeyDown.bind(this)}
        />:(
          task.isMilestong?
          <RowMilestone key={"group"+i}
                      task={task}
                      onMilestongNameChange={(value)=>this.handleTaskChange(task.id, 'milestoneName', value)} 
                      onMilestongStatusChange={(value)=>this.handleTaskChange(task.id, 'milestoneStatus', value)} 
                      handleMoveUp={this.props.handleMoveUp.bind(this)}
                      handleMoveDown={this.props.handleMoveDown.bind(this)}
                      handleGroupRemove={this.props.handleGroupRemove.bind(this)}
                      handleKeyDown={this.handleKeyDown.bind(this)}

          />:false
        )
      )
      :
      ((props.config.hideDoneTasks && task.status==='done')?
        <RowFinished i={i} task={task} handleTaskChange={this.handleTaskChange.bind(this)}/>
        : 
        <tr key={task.id} 
          className={"task risk_"+task.risk+' status_'+task.status+' '+(task.isSubTaskOf?'subtask':'')}
          onMouseMove={(e)=>this.onMouseOver.bind(this)(e.currentTarget, task.id)}
          onMouseOut={(e)=>this.onMouseOut.bind(this)(e.currentTarget, task.id)}
      >
          <td>
            <input type="checkbox" />
          </td>
          <td>
              <span>[{i}]</span>
          </td>
          <td className="row_toolbar">
              {/* <a href="javascript:void(0)" onClick={(e)=>this.props.handleMoveUp(task.id)} ><Icon style={{color:'#ccc'}} size={9} icon={arrowUp} /></a>
              <a href="javascript:void(0)" onClick={(e)=>this.props.handleMoveDown(task.id)} ><Icon style={{color:'#ccc'}} size={9} icon={arrowDown} /></a>&nbsp; */}
              {/* {task.isSubTaskOf ? 
                  <a href="javascript:void(0)" onClick={(e)=>this.props.handleBeSubTask(task.id, false)} ><Icon style={{color:'#ccc'}} size={9} icon={arrowLeft} /></a>
                  : 
                  <a href="javascript:void(0)" onClick={(e)=>this.props.handleBeSubTask(task.id, true)} ><Icon style={{color:'#ccc'}} size={9} icon={arrowRight} /></a>
              }
              &nbsp; */}
              <a style={{marginLeft:1}} href="javascript:void(0)" onClick={(e)=>this.props.handleAddBefore(task.id)} title="Add a new Task before this one.">Bf</a>
              <a style={{marginLeft:1}} href="javascript:void(0)" onClick={(e)=>this.props.handleAddAfter(task.id)} title="Add a new Task after this one.">Af</a>
              <a style={{marginLeft:1}} href="javascript:void(0)" onClick={(e)=>this.props.handleGroupAdd(task.id)} title="Add a Group-Title above.">Gr</a>
              <a style={{marginLeft:1}} href="javascript:void(0)" onClick={(e)=>this.props.handleMilestoneAdd(task.id)} title="Append a Milestone-Tip below.">Ms</a>
          </td>
          <td>
              <TextCatagory task={task} 
                          onChange={(value)=>this.handleTaskChange(task.id, 'textCatagory', value)}
                          handleKeyDown={this.handleKeyDown.bind(this)}
                          /> 
          </td>
          <td className={'task_title '+(task.isSubTaskOf?"subtasktd ":" ")+(task.status==='ongoing'?"ongoing ":" ")}>
              {(task.status === 'xxxxxx'?<span>{task.title}</span>:<TitleInput 
                          task={task} 
                          idx={i}
                          onChange={(value)=>this.handleTaskChange(task.id, 'title', value)} 
                          onMoveUp={this.props.handleMoveUp}
                          onMoveDown={this.props.handleMoveDown}
                          onBeSubtask={this.props.handleBeSubtask}
                          onUnSubtask={this.props.handleUnSubtask}
                          onFocusNeighbor={this.props.handleFocusNeighbor}
                          onDelete={this.props.handleDelete}
                          onEnterDown={this.props.handleEnterDown}
                          onTitleKeyUp={this.props.handleTitleKeyUp}
                          handleKeyDown={this.handleKeyDown.bind(this)}
              />)}
          </td>
          <td className={task.isSubTaskOf?"subtasktd":""}>
            <TextOwner task={task}                       
                       idx={i}
                       colleagues={colleagues} 
                       onChange={(value)=>this.handleTaskChange(task.id, 'textOwner', value)}
                        onMoveUp={this.props.handleMoveUp}
                        onMoveDown={this.props.handleMoveDown}
                        onDelete={this.props.handleDelete}
                        onEnterDown={this.props.handleEnterDown}
                        onTitleKeyUp={this.props.handleTitleKeyUp}
            />
              {/* <OwnerSelector task={task} colleagues={colleagues} onChange={(value)=>this.handleTaskChange(task.id, 'owner', value)}/> */}
          </td>
          <td style={{display:'none'}}>
            <TextAssistent task={task} 
                          idx={i}
                          colleagues={colleagues} 
                          onChange={(value)=>this.handleTaskChange(task.id, 'textAssistent', value)}
                          onMoveUp={this.props.handleMoveUp}
                          onMoveDown={this.props.handleMoveDown}
                          onDelete={this.props.handleDelete}
                          onEnterDown={this.props.handleEnterDown}
                          onTitleKeyUp={this.props.handleTitleKeyUp}
            />
              {/* <input className={`assistant`} value={task.assistant} placeholder={"Assistant(s)"} onChange={(e)=>this.handleTaskChange(task.id, 'assistant', e.target.value)}/>
                 */}
                {/* <AssistentSelector  className={`assistant-select`} 
                                    value={task.assistant} 
                                    placeholder={"Assistant(s)"} 
                                    onChange={(value)=>this.handleTaskChange(task.id, 'assistant', value)}
                                    colleagues={colleagues}
                            /> */}
          </td>
          <td>
              <div className={"cost-cell"}>
                <NumericInput 
                       idx={i}
                    className="form-control"
                    min={0.5} max={100} value={task.cost}
                    step={0.5}
                    snap
                    onChange={(val)=>this.handleTaskChange(task.id, 'cost', val)}             
                />
              </div>
          </td>
          <td>
              <WeekDisplay date={(task.planned_begin_date)} is={'begin'}/>
              <div style={{float:'left', display:'inline'}}>
                <DatePicker
                       idx={i}
                  className={"planned_end_date"}
                  dateFormat="MM-DD"
                  selected={task.planned_begin_date?moment(task.planned_begin_date):null}
                  onChange={(mom)=>this.handleTaskChange(task.id, 'planned_begin_date', !mom?'':mom.format('YYYY-MM-DD'))}
                  //onChange={this.handleChange}
                  isClearable={true}
                  placeholderText="st"
                />
              </div>
          </td>
          <td>
              <WeekDisplay date={(task.planned_end_date)} is={'end'}/>
              <div style={{float:'left', display:'inline'}}>
                <DatePicker
                       idx={i}
                  className={"planned_end_date"}
                  dateFormat="MM-DD"
                  selected={task.planned_end_date?moment(task.planned_end_date):null}
                  onChange={(mom)=>this.handleTaskChange(task.id, 'planned_end_date', !mom?'':mom.format('YYYY-MM-DD'))}
                  //onChange={this.handleChange}
                  isClearable={true}
                  placeholderText="ed"
                />
              </div>
          </td>
          <td>
              <StartEndRange task={task}/>
          </td>
          <td className={task.isSubTaskOf?"subtasktd":""} style={{display: this.state.config.showTaskConfig ? '' : 'none' }}>
              <StatusSelector task={task} onChange={(value)=>this.handleTaskChange(task.id, 'status', value)}/>
          </td>
          <td className={task.isSubTaskOf?"subtasktd":""} style={{display: this.state.config.showTaskConfig ? '' : 'none' }}>
              <RiskSelector task={task} onChange={(value)=>this.handleTaskChange(task.id, 'risk', value)}/>
          </td>
          <td>
              <input className={'description'} task={task} value={task.description} onChange={(e)=>this.handleTaskChange(task.id, 'description', e.target.value)}/>
          </td>
          <td>
              <a href="javascript:void(0)" onClick={(e)=>this.props.handleDeleteTask(task.id)} >
                <Icon size={14} icon={close} style={{color:'#ccc'}}/>
              </a>
          </td>
      </tr>)
      }
      </React.Fragment>
    );
    return (
      <div className="todo_item">
        <table id="todo_item_table" className="todo_item_table" border="0">
          <thead>
            <tr className={`thead`}>
              <th align={`left`}><input type="checkbox" /></th>
              <th align={`left`}></th>
              <th align={`left`}></th>
              <th align={`left`}>Tip</th>
              <th align={`left`}>Subject</th>
              <th align={`left`}>Owner</th>
              <th align={`left`} style={{display:'none'}}>Assistant</th>
              <th align={`left`}>Cost</th>
              <th align={`left`}>Start</th>
              <th align={`left`}>End</th>
              <th align={`left`}>Day(s)</th>
              <th align={`left`} style={{display: this.state.config.showTaskConfig ? '' : 'none' }}>Status</th>
              <th align={`left`} style={{display: this.state.config.showTaskConfig ? '' : 'none' }}>Risk</th>
              <th align={`left`}>Desc</th>
              <th align={`left`}></th>
            </tr>
          </thead>
          <tbody>
            {listItems}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TodoList;
