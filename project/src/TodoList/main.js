import React, { Component } from 'react';
import moment from 'moment'
import axios from 'axios2'
import TodoItem from './TodoItem'
import taskUtil from './utils/taskUtil'
import ProjectSelect from './sub/ProjectSelect'

import 'reset-css';
import './css/TodoList.css';
import { isMoment } from 'moment';

window.saveTasks = ()=>{
    document.getElementById('saveBtn').click()
}

//
class TodoList extends Component {
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

        this.state = this.props;
        console.log('init.state', this.state)
      }
      componentDidMount() {
        //this.loadServerTask()
        this.createTask()
      }
      handleBeSubTask(id, bool){   
        this.state = taskUtil.beSubTask(this.state, id, bool);
        this.setState(this.state); 
      }
      moveTaskDown(id){        
        this.state = taskUtil.moveDown(this.state, [id]);
        this.setState(this.state, ()=>{
            let ipt = document.getElementById(`title-${id}`);
            if(ipt)ipt.focus();
        }); 
      }
      moveTaskUp(id){
        console.log('this.state', this.state)
        this.state = taskUtil.moveUp(this.state, [id]);
        this.setState(this.state, ()=>{
            let ipt = document.getElementById(`title-${id}`);
            if(ipt)ipt.focus();
        }); 
      }
      loadTask(){
          taskUtil.loadTestTasks().then((testdata)=>{
                this.setState({
                    tasks: testdata
                }, ()=>{
                    taskUtil._cache(this.state)
                })
          })
      }
      loadServerTask(){
          if(!window.confirm(`Load tasks of "${this.state.projectName}"`)) return;
          let me = this;
        let tasks = taskUtil.getAllTasks()
        axios.get('/action/todos', {params: {
                projectName: this.state.projectName
            }})
            .then(function (response) {
                let todos = response.data;
                if(todos.length === 0){
                    todos = [taskUtil.createBlank()]
                }
                me.setState({
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
          if(!window.confirm('Save?')) return;
            axios.post('/action/save/todos', {
            projectName,
            tasks})
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
      createProject(){
        let projectName = prompt('New Project Name?');
        if(!projectName){
            alert('Name Can Not Be Null.')
            return;
        }
        let me = this;
        axios.post('/action/create/project', {
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
        this.setState(this.state)
      }
    deleteTask(id, needConfirm){
        this.state = taskUtil.deleteTask(this.state, id, needConfirm);
        this.setState(this.state)
    }
    createTask(){
        this.state = taskUtil.addTask(this.state);
        this.setState(this.state)
    }
    showStatusConfigBar(){
        let state = this.state;
        state.config.showTaskConfig= !state.config.showTaskConfig;
        this.setState(state)
    }
    handleTaskUpdate(id, newtask){
        this.state = taskUtil.updateTask(this.state, id, newtask)
        this.setState(this.state)
    }
    handleTitleKeyUp(){
        let tasks = taskUtil.getAllTasks();
        if(tasks.length <= 0) return;
        let lastOne = tasks[tasks.length-1];
        //console.log('handleTitleKeyUp', lastOne.title)
        if(lastOne.title){
            this.state = taskUtil.addTask(this.state)
            this.setState(this.state)
        }else{
            //-----------
        }
    }
    handleAddBefore(id){
        this.state = taskUtil.addTask(this.state, 'before', id);
        this.setState(this.state);
    }
    handleAddAfter(id){
        this.state = taskUtil.addTask(this.state, 'after', id);
        this.setState(this.state);
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
        this.setState(this.state);
    }
    handleGroupRemove(id){
        let task = taskUtil.getTask(this.state.tasks, id);
        if(window.confirm(`Sure to remove Group "${task.groupName}"?`)){
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
        this.setState(this.state);
    }
    moveGroupUp(id){
        this.state = taskUtil.moveGroupUp(this.state, id);
        this.setState(this.state);
    }
    moveGroupDown(id){
        this.state = taskUtil.moveGroupDown(this.state, id);
        this.setState(this.state);
    }
    printAllTasks(){
        console.log(this.state)
        console.log(JSON.stringify(this.state))
    }
  render() {
    return (
      <div className="todo_main">
        <ProjectSelect projects={this.state.projects} projectName={this.state.projectName} onChange={this.handleProjectNameChange.bind(this)} />
        <input style={{display:'none', width:'80px'}} value={this.state.projectName} onChange={(e) => this.handleProjectNameChange.bind(this)(e.target.value)}/>
        <button className={'btn btn-load'} onClick={this.loadServerTask.bind(this)}>Load</button>
        <button id="saveBtn" className={'btn btn-save'} style={{display:'none'}} onClick={this.saveServerTask.bind(this)}>Save</button>
        <div>
        {this.state.tasks.length === 0 ? 
            'No-data' :
             <TodoItem
                    tasks={this.state.tasks} 
                    colleagues={this.state.colleagues}
                    handleDeleteTask={this.deleteTask} 
                    handleBeSubTask={this.handleBeSubTask.bind(this)}
                    handleMoveDown={this.moveTaskDown}
                    handleMoveUp={this.moveTaskUp}
                    handleDelete={this.deleteTask}
                    handleCreate={this.createTask}
                    handleTaskUpdate={this.handleTaskUpdate}
                    handleTitleKeyUp={this.handleTitleKeyUp}
                    handleAddBefore={this.handleAddBefore.bind(this)}
                    handleAddAfter={this.handleAddAfter.bind(this)}
                    handleGroupAdd={this.handleGroupAdd.bind(this)}
                    handleGroupRemove={this.handleGroupRemove.bind(this)}
                    handleGroupRename={this.handleGroupRename.bind(this)}
                    handleGroupMoveDown={this.moveGroupDown.bind(this)}
                    handleGroupMoveUp={this.moveGroupUp.bind(this)}
                    config={this.state.config}
            />}
        </div>
        <div style={{position:'fixed',right:0,bottom:0}}>
            <button onClick={this.createProject.bind(this)}>CreateProject</button>
            <button onClick={this.printAllTasks.bind(this)}>Print: {this.state.tasks.length} items</button>
            &emsp;
            <button onClick={this.loadTask}>loadTestTask</button>
            <button onClick={this.showStatusConfigBar}>showStatusConfigBar</button>
        </div>
      </div>
    );
  }
}

export default TodoList;
