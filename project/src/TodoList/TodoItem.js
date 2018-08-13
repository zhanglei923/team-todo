import React, { Component } from 'react';

import StatusSelector from './StatusSelector';
import TextCatagory from './TextCatagory'
import AssistentSelector from './AssistentSelector'
import RiskSelector from './RiskSelector'
import TitleInput from './TitleInput'
import TextOwner from './TextOwner'
import TextAssistent from './TextAssistent'
import WeekDisplay from './sub/WeekDisplay'

import moment from 'moment'
import DatePicker from 'react-datepicker';
import * as NumericInput from "react-numeric-input";

import { Icon } from 'react-icons-kit'
import {arrowUp} from 'react-icons-kit/icomoon/arrowUp'
import {arrowDown} from 'react-icons-kit/icomoon/arrowDown'
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
  render() {
    const tasks = this.props.tasks;
    const colleagues = this.props.colleagues;
    const listItems = tasks.map((task, i) =>
    <React.Fragment key={i}>
      {(task.isGroup)?
        <tr key={"group"+i} className={"groupName"}>
          <td colSpan={100}>
            <div style={{float:'left'}}>
              {task.groupName}
            </div>
            <div style={{marginRight: '30px', float:'left'}}>
              <a href="javascript:void(0)" onClick={(e)=>this.props.handleMoveUp(task.id)} ><Icon size={9} icon={arrowUp} /></a>
              <a href="javascript:void(0)" onClick={(e)=>this.props.handleMoveDown(task.id)} ><Icon size={9} icon={arrowDown} /></a>
              &nbsp;
              <a href="javascript:void(0)" onClick={(e)=>this.props.handleGroupRename(task.id)} ><Icon size={12} icon={pencil} /></a>  
              <a href="javascript:void(0)" onClick={(e)=>this.props.handleGroupRemove(task.id)} ><Icon size={12} icon={close} /></a>    
            </div>      
          </td>
        </tr>
      :
      <tr key={task.id} className={"task "+task.risk+' '+task.status}>
          <td>
              <span>[{i}]</span>
          </td>
          <td>
              <a href="javascript:void(0)" onClick={(e)=>this.props.handleMoveUp(task.id)} ><Icon size={9} icon={arrowUp} /></a>&nbsp;
              <a href="javascript:void(0)" onClick={(e)=>this.props.handleMoveDown(task.id)} ><Icon size={9} icon={arrowDown} /></a>&nbsp;

              <a href="javascript:void(0)" onClick={(e)=>this.props.handleAddBefore(task.id)} >+Bf</a>&nbsp;
              <a href="javascript:void(0)" onClick={(e)=>this.props.handleAddAfter(task.id)} >+Af</a>&nbsp;

              <a href="javascript:void(0)" onClick={(e)=>this.props.handleGroupAdd(task.id)} >+G</a>
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
          <td>
              <TitleInput task={task} 
                          idx={i}
                          onChange={(value)=>this.handleTaskChange(task.id, 'title', value)} 
                          onMoveUp={this.props.handleMoveUp}
                          onMoveDown={this.props.handleMoveDown}
                          onDelete={this.props.handleDelete}
                          onCreate={this.props.handleCreate}
                          onTitleKeyUp={this.props.handleTitleKeyUp}
              />
          </td>
          <td>
            <TextOwner task={task}                       
                       idx={i}
                       colleagues={colleagues} 
                       onChange={(value)=>this.handleTaskChange(task.id, 'textOwner', value)}
                        onMoveUp={this.props.handleMoveUp}
                        onMoveDown={this.props.handleMoveDown}
                        onDelete={this.props.handleDelete}
                        onCreate={this.props.handleCreate}
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
                          onCreate={this.props.handleCreate}
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
              <WeekDisplay date={(task.planned_begin_date)} />
              <div style={{float:'left', display:'inline'}}>
                <DatePicker
                       idx={i}
                  className={"planned_end_date"}
                  dateFormat="MM-DD"
                  selected={task.planned_begin_date?moment(task.planned_begin_date):null}
                  onChange={(mom)=>this.handleTaskChange(task.id, 'planned_begin_date', !mom?'':mom.format('MM-DD'))}
                  //onChange={this.handleChange}
                  isClearable={true}
                  placeholderText="Begin"
                />
              </div>
          </td>
          <td>
              <WeekDisplay date={(task.planned_end_date)} />
              <div style={{float:'left', display:'inline'}}>
                <DatePicker
                       idx={i}
                  className={"planned_end_date"}
                  dateFormat="MM-DD"
                  selected={task.planned_end_date?moment(task.planned_end_date):null}
                  onChange={(mom)=>this.handleTaskChange(task.id, 'planned_end_date', !mom?'':mom.format('MM-DD'))}
                  //onChange={this.handleChange}
                  isClearable={true}
                  placeholderText="End"
                />
              </div>
          </td>
          <td>
              <a href="javascript:void(0)" onClick={(e)=>this.props.handleDeleteTask(task.id)} >
                <Icon size={14} icon={close} />
              </a>
          </td>
          <td style={{display: this.state.config.showTaskConfig ? '' : 'none' }}>
              <StatusSelector task={task} onChange={(value)=>this.handleTaskChange(task.id, 'status', value)}/>
          </td>
          <td style={{display: this.state.config.showTaskConfig ? '' : 'none' }}>
              <RiskSelector task={task} onChange={(value)=>this.handleTaskChange(task.id, 'risk', value)}/>
          </td>
      </tr>
      }
      </React.Fragment>
    );
    return (
      <div className="todo_item">
        <table border="1">
          <thead>
            <tr className={`thead`}>
              <th align={`left`}></th>
              <th align={`left`}></th>
              <th align={`left`}></th>
              <th align={`left`}>Catagory</th>
              <th align={`left`}>Title</th>
              <th align={`left`}>Owner</th>
              <th align={`left`} style={{display:'none'}}>Assistant</th>
              <th align={`left`}>Cost</th>
              <th align={`left`}>Begin</th>
              <th align={`left`}>End</th>
              <th align={`left`}></th>
              <th align={`left`} style={{display: this.state.config.showTaskConfig ? '' : 'none' }}>Agile</th>
              <th align={`left`} style={{display: this.state.config.showTaskConfig ? '' : 'none' }}>Risk</th>
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
