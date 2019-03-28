import React, { Component } from 'react';
import moment from 'moment'
import axios from 'axios2'
import TodoList from './TodoList'
import taskUtil from './utils/taskUtil'
import ProjectList from './sub/ProjectList'

import 'reset-css';
import './css/TodoList.css';
import { isMoment } from 'moment';

let needConfirmSave = true;
window.saveTasks = (needConfirm)=>{
    if(typeof needConfirm ==='undefined') needConfirm = true;
    needConfirmSave = needConfirm;
    var btn = document.getElementById('saveBtn')
    btn.click()
}

//
class TeamTodo extends Component {
    constructor(props) {
        super(props);
        this.deleteTask = this.deleteTask.bind(this);
        this.createTask = this.createTask.bind(this);
        this.loadTask = this.loadTask.bind(this);
        this.loadServerTask = this.loadServerTask.bind(this);
        this.showStatusConfigBar = this.showStatusConfigBar.bind(this);
        
        this.handleTaskUpdate = this.handleTaskUpdate.bind(this);
        this.moveTaskUp = this.moveTaskUp.bind(this);
        this.moveTaskDown = this.moveTaskDown.bind(this);
        this.handleTitleKeyUp = this.handleTitleKeyUp.bind(this);        

        this.state = Object.assign({}, this.props);
        this.state.finishedCount = 0;
        console.log('init.state', this.state)
      }
      componentDidMount() {
        //this.loadServerTask()
        this.createTask()
        setTimeout(()=>{
            document.getElementById('btn-load').click()
        }, 10)
      }
      doSetState(state, cb){
        let tasks = state.tasks;
        state.finishedCount = taskUtil.getAllFinishedTasks(tasks).length;
        this.setState(state, cb);
      }
      handleBeSubTask(id, bool){   
        this.state = taskUtil.beSubTask(this.state, id, bool);
        this.doSetState(this.state); 
      }
      moveTaskDown(id){        
        this.state = taskUtil.moveDown(this.state, [id]);
        this.doSetState(this.state, ()=>{
            let ipt = document.getElementById(`title-${id}`);
            if(!ipt) ipt = document.getElementById(`group-${id}`);
            if(!ipt) ipt = document.getElementById(`milestone-${id}`);
            if(ipt)ipt.focus();
        }); 
      }
      moveTaskUp(id){
        //console.log('this.state', this.state)
        this.state = taskUtil.moveUp(this.state, [id]);
        this.doSetState(this.state, ()=>{
            let ipt = document.getElementById(`title-${id}`);
            if(!ipt) ipt = document.getElementById(`group-${id}`);
            if(!ipt) ipt = document.getElementById(`milestone-${id}`);
            if(ipt)ipt.focus();
        }); 
      }
      handleBeSubtask(id){
        this.handleBeSubTask(id, false)
      }
      handleUnSubtask(id){
        this.handleBeSubTask(id, true)        
      }
      handleEnterDown(id){
          this.handleAddAfter(id)
      }
      handleFocusNeighbor(id, dir){
          taskUtil.focusNeighbor(this.state, id, dir)
      }
      loadTask(){
          taskUtil.loadTestTasks().then((testdata)=>{
                this.doSetState({
                    tasks: testdata
                }, ()=>{
                    taskUtil._cache(this.state)
                })
          })
      }
      loadServerTask(){
          //if(!window.confirm(`Load tasks of "${this.state.projectName}"`)) return;
          let me = this;
        let tasks = taskUtil.getAllTasks()
        axios.get('/action/todos', {params: {
                reponsitoryName:'team-todo-data',
                projectName: this.state.projectName
            }})
            .then(function (response) {
                //console.log(response)
                if(!response.data.items && typeof response.data.shift==='undefined')response.data.items=[];//old data, if not an array
                let todos = response.data.items ? response.data.items : response.data;
                //console.log(todos)
                if(todos.length === 0){
                    todos = [taskUtil.createBlank()]
                }
                // for(var i=0;i<300;i++){
                //     var blank = taskUtil.createBlank()
                //     blank.title='asdfasdfasdfasd'
                //     todos.push(blank)
                // }
                me.doSetState({
                    tasks: todos
                }, ()=>{
                    taskUtil._cache(me.state)
                })
            })
            .catch(function (error) {
                console.log(error);
            });
        }
      saveServerTask(){
          let tasks = taskUtil.getAllTasks()
          let projectName = this.state.projectName
          if(needConfirmSave && !window.confirm('Save?')) return;
          taskUtil.saveToServer(projectName, tasks);
      }
      showDoneTasks(){
        this.state.config.showDoneTasks = !this.state.config.showDoneTasks;
        this.doSetState(this.state);
      }
      createProject(){
        let projectName = prompt('New Project Name?');
        if(!projectName){
            alert('Name Can Not Be Null.')
            return;
        }
        let me = this;
        axios.post('/action/create/project', {
                            reponsitoryName:'team-todo-data',
                            projectName,
                        })
          .then(function (response) {
            me.handleProjectNameChange(projectName)
            alert(response.data)
          })
          .catch(function (error) {
            console.log(error);
          });
      }
      handleProjectNameChange(value){
        this.state.projectName = value;
        this.doSetState(this.state, ()=>{
            document.getElementById('btn-load').click()
        })
      }
    deleteTask(id, needConfirm){
        this.state = taskUtil.deleteTask(this.state, id, needConfirm);
        this.doSetState(this.state)
    }
    createTask(){
        this.state = taskUtil.addTask(this.state);
        this.doSetState(this.state)
    }
    showStatusConfigBar(){
        let state = this.state;
        state.config.showTaskConfig= !state.config.showTaskConfig;
        this.doSetState(state)
    }
    handleTaskUpdate(id, newtask){
        this.state = taskUtil.updateTask(this.state, id, newtask)
        this.doSetState(this.state)
    }
    handleTitleKeyUp(){
        let tasks = taskUtil.getAllTasks();
        if(tasks.length <= 0) return;
        let lastOne = tasks[tasks.length-1];
        //console.log('handleTitleKeyUp', lastOne.title)
        if(lastOne.title){
            this.state = taskUtil.addTask(this.state)
            this.doSetState(this.state)
        }else{
            //-----------
        }
    }
    handleAddBefore(id){
        this.state = taskUtil.addTask(this.state, 'before', id);
        this.doSetState(this.state, ()=>{
            let ipt = document.getElementById(`title-${id}`);
            if(ipt)ipt.focus();
        });
    }
    handleAddAfter(id){
        let task = taskUtil.getTask(this.state.tasks, id)
        this.state = taskUtil.addTask(this.state, 'after', id, null, {
            isSubTaskOf: task.isSubTaskOf
        });
        let me = this;
        this.doSetState(this.state, ()=>{
            let state = me.state;
            let nexttask = taskUtil.getNextTask(state, id)
            let ipt = document.getElementById(`title-${nexttask.id}`);
            if(ipt)ipt.focus();
        });
    }
    handleGroupAdd(id){
        let groupName = window.prompt('Task Title Pls?')
        if(!groupName){
            alert('Can not be null');
            return;
        }
        this.state = taskUtil.addTask(this.state, 'before', id, {
            "id": ('G'+Math.random()).replace(/\./ig, ''),
            "isGroup": true,
            groupName
        });
        this.doSetState(this.state);
    }
    handleMilestoneAdd(id){
        let name = window.prompt('Milestone Name Pls?')
        if(!name){
            alert('Can not be null');
            return;
        }
        this.state = taskUtil.addTask(this.state, 'after', id, {
            "id": ('G'+Math.random()).replace(/\./ig, ''),
            "isMilestong": true,
            "milestoneName": name,
            "milestoneStatus": '',
            name
        });
        this.doSetState(this.state);
    }
    handleGroupRemove(id){
        let task = taskUtil.getTask(this.state.tasks, id);
        if(window.confirm(`Sure to remove "${task.groupName}"?`)){
            this.deleteTask(id, false)
        }
    }
    handleGroupRename(id){
        let task = taskUtil.getTask(this.state.tasks, id);
        let newName = window.prompt(`Change title "${task.groupName}" to:`);
        if(!newName){
            alert('Can not be null');
            return;
        }
        this.state = taskUtil.updateTask(this.state, id, {groupName: newName})
        this.doSetState(this.state);
    }
    moveGroupUp(id){
        this.state = taskUtil.moveGroupUp(this.state, id);
        this.doSetState(this.state);
    }
    moveGroupDown(id){
        this.state = taskUtil.moveGroupDown(this.state, id);
        this.doSetState(this.state);
    }
    printAllTasks(){
        console.log(this.state)
        console.log(JSON.stringify(this.state))
    }
  render() {
    return (
    <React.Fragment>
      <ProjectList projects={this.state.projects} projectName={this.state.projectName} onChange={this.handleProjectNameChange.bind(this)} />
      <div className="todo_main">
        <input style={{display:'none', width:'80px'}} value={this.state.projectName} onChange={(e) => this.handleProjectNameChange.bind(this)(e.target.value)}/>
        <button id={'btn-load'} style={{display:'none'}} className={'btn btn-load'} onClick={this.loadServerTask.bind(this)}>Load</button>
        <button id="saveBtn" className={'btn btn-save'} style={{display:'none'}} onClick={this.saveServerTask.bind(this)}>Save</button>
        <div>
        {this.state.tasks.length === 0 ? 
            'No-data' :
             <TodoList
                    tasks={this.state.tasks} 
                    colleagues={this.state.colleagues}
                    handleDeleteTask={this.deleteTask} 
                    handleBeSubTask={this.handleBeSubTask.bind(this)}
                    handleMoveDown={this.moveTaskDown}
                    handleMoveUp={this.moveTaskUp}
                    handleBeSubtask={this.handleBeSubtask.bind(this)}
                    handleUnSubtask={this.handleUnSubtask.bind(this)}
                    handleEnterDown={this.handleEnterDown.bind(this)}
                    handleFocusNeighbor={this.handleFocusNeighbor.bind(this)}
                    handleDelete={this.deleteTask}
                    handleCreate={this.createTask}
                    handleTaskUpdate={this.handleTaskUpdate}
                    handleTitleKeyUp={this.handleTitleKeyUp}
                    handleAddBefore={this.handleAddBefore.bind(this)}
                    handleAddAfter={this.handleAddAfter.bind(this)}
                    handleGroupAdd={this.handleGroupAdd.bind(this)}
                    handleMilestoneAdd={this.handleMilestoneAdd.bind(this)}
                    handleGroupRemove={this.handleGroupRemove.bind(this)}
                    handleGroupRename={this.handleGroupRename.bind(this)}
                    handleGroupMoveDown={this.moveGroupDown.bind(this)}
                    handleGroupMoveUp={this.moveGroupUp.bind(this)}
                    config={this.state.config}
            />}
        </div>
        <div style={{position:'fixed',right:0,bottom:0}}>
            <button onClick={this.showDoneTasks.bind(this)}>{this.state.config.showDoneTasks?"HideFinished": `ShowFinised(${this.state.finishedCount})`}</button>
            <button onClick={this.createProject.bind(this)}>CreateProject</button>
            <button onClick={this.printAllTasks.bind(this)}>Print: {this.state.tasks.length} items</button>
            &emsp;
            <button onClick={this.loadTask}>loadTestTask</button>
            <button onClick={this.showStatusConfigBar}>showStatusConfigBar</button>
        </div>
      </div>
    </React.Fragment>
    );
  }
}

export default TeamTodo;
