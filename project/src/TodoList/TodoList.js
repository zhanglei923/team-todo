import React, { Component } from 'react';

import StatusSelector from './StatusSelector';
import TextCatagory from './TextCatagory'
import AssistentSelector from './AssistentSelector'
import RiskSelector from './RiskSelector'
import TitleInput from './TitleInput'
import TextOwner from './TextOwner'
import TextAssistent from './TextAssistent'
import WeekDisplay from './sub/WeekDisplay'
import StartEndRange from './sub/StartEndRange'

import RowGroup from './RowGroup'
import RowMilestone from './RowMilestone'

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
      onMouseOver(tr){
        if(!/hovering/.test(tr.className))
        tr.className = tr.className+' hovering';
      }
      onMouseOut(tr){
        tr.className = tr.className.replace(/hovering/ig,'')
      }
  render() {
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
                      handleMoveUp={this.props.handleMoveUp.bind(this)}
                      handleMoveDown={this.props.handleMoveDown.bind(this)}
                      handleGroupRename={this.props.handleGroupRename.bind(this)}
                      handleGroupRemove={this.props.handleGroupRemove.bind(this)}
        />:(
          task.isMilestong?
          <RowMilestone key={"group"+i}
                      task={task}
                      onChange={(value)=>this.handleTaskChange(task.id, 'milestoneName', value)} 
                      handleMoveUp={this.props.handleMoveUp.bind(this)}
                      handleMoveDown={this.props.handleMoveDown.bind(this)}
                      handleGroupRename={this.props.handleGroupRename.bind(this)}
                      handleGroupRemove={this.props.handleGroupRemove.bind(this)}

          />:false
        )
      )
      :
      <tr key={task.id} 
          className={"task risk_"+task.risk+' status_'+task.status+' '+(task.isSubTaskOf?'subtask':'')}
          onMouseOver={(e)=>this.onMouseOver.bind(this)(e.currentTarget)}
          onMouseOut={(e)=>this.onMouseOut.bind(this)(e.currentTarget)}
      >
          <td>
              <span>[{i}]</span>
          </td>
          <td>
              <a href="javascript:void(0)" onClick={(e)=>this.props.handleMoveUp(task.id)} ><Icon size={9} icon={arrowUp} /></a>
              <a href="javascript:void(0)" onClick={(e)=>this.props.handleMoveDown(task.id)} ><Icon size={9} icon={arrowDown} /></a>&nbsp;
              {task.isSubTaskOf ? 
                  <a href="javascript:void(0)" onClick={(e)=>this.props.handleBeSubTask(task.id, false)} ><Icon size={9} icon={arrowLeft} /></a>
                  : 
                  <a href="javascript:void(0)" onClick={(e)=>this.props.handleBeSubTask(task.id, true)} ><Icon size={9} icon={arrowRight} /></a>
              }
              &nbsp;
              <a href="javascript:void(0)" onClick={(e)=>this.props.handleAddBefore(task.id)} >+Bf</a>,
              <a href="javascript:void(0)" onClick={(e)=>this.props.handleAddAfter(task.id)} >Af</a>,
              <a href="javascript:void(0)" onClick={(e)=>this.props.handleGroupAdd(task.id)} >Gr</a>,
              <a href="javascript:void(0)" onClick={(e)=>this.props.handleMilestoneAdd(task.id)} >Ms</a>
          </td>
          <td>
              <input
                  type="checkbox" />
              </td>
          <td>
              <TextCatagory task={task} 
                          onChange={(value)=>this.handleTaskChange(task.id, 'textCatagory', value)}
                          /> 
          </td>
          <td className={task.isSubTaskOf?"subtasktd":""}>
              <TitleInput 
                          task={task} 
                          idx={i}
                          onChange={(value)=>this.handleTaskChange(task.id, 'title', value)} 
                          onMoveUp={this.props.handleMoveUp}
                          onMoveDown={this.props.handleMoveDown}
                          onDelete={this.props.handleDelete}
                          onEnterDown={this.props.handleEnterDown}
                          onTitleKeyUp={this.props.handleTitleKeyUp}
              />
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
                  placeholderText="s"
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
                  placeholderText="e"
                />
              </div>
          </td>
          <td>
              <StartEndRange task={task}/>
          </td>
          <td>
              <a href="javascript:void(0)" onClick={(e)=>this.props.handleDeleteTask(task.id)} >
                <Icon size={14} icon={close} />
              </a>
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
      </tr>
      }
      </React.Fragment>
    );
    return (
      <div className="todo_item">
        <table id="todo_item_table" class="todo_item_table" border="0">
          <thead>
            <tr className={`thead`}>
              <th align={`left`}></th>
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
              <th align={`left`}></th>
              <th align={`left`} style={{display: this.state.config.showTaskConfig ? '' : 'none' }}>Agile</th>
              <th align={`left`} style={{display: this.state.config.showTaskConfig ? '' : 'none' }}>Risk</th>
              <th align={`left`}>Desc</th>
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
