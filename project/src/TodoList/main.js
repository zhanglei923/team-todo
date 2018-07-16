import React, { Component } from 'react';
import moment from 'moment'
import TodoItem from './TodoItem'
import taskUtil from './utils/taskUtil'

import 'reset-css';
import './css/TodoList.css';
import { isMoment } from 'moment';

//
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.deleteTask = this.deleteTask.bind(this);
        this.createTask = this.createTask.bind(this);
        this.loadTask = this.loadTask.bind(this);
        this.showStatusConfigBar = this.showStatusConfigBar.bind(this);
        
        this.printAllTasks = this.printAllTasks.bind(this);
        this.handleTaskUpdate = this.handleTaskUpdate.bind(this);
        this.moveTaskUp = this.moveTaskUp.bind(this);
        this.moveTaskDown = this.moveTaskDown.bind(this);
        this.handleTitleKeyUp = this.handleTitleKeyUp.bind(this);        

        this.state = this.props;
        console.log('init.state', this.state)
      }
      moveTaskDown(id){        
        this.state = taskUtil.moveDown(this.state, [id]);
        this.setState(this.state);      
      }
      moveTaskUp(id){
        console.log('this.state', this.state)
        this.state = taskUtil.moveUp(this.state, [id]);
        this.setState(this.state);        
      }
      loadTask(){
          taskUtil.loadTasks().then((testdata)=>{
                this.setState({
                    tasks: testdata
                }, ()=>{
                    taskUtil._cache(this.state)
                })
          })
      }
    deleteTask(id){
        this.state = taskUtil.deleteTask(this.state, id);
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
        console.log('handleTitleKeyUp', lastOne.title)
        if(lastOne.title){
            this.state = taskUtil.addTask(this.state)
            this.setState(this.state)
        }else{
            
        }
    }
    printAllTasks(){
        console.log(this.state)
        console.log(JSON.stringify(this.state))
    }
  render() {
    return (
      <div className="todo_main">
        <button onClick={this.loadTask}>loadTask</button>
        <button onClick={this.showStatusConfigBar}>showStatusConfigBar</button>
        <div>
        {this.state.tasks.length === 0 ? 
            'No-data' :
             <TodoItem
                    tasks={this.state.tasks} 
                    colleagues={this.state.colleagues}
                    handleDeleteTask={this.deleteTask} 
                    handleMoveDown={this.moveTaskDown}
                    handleMoveUp={this.moveTaskUp}
                    handleDelete={this.deleteTask}
                    handleCreate={this.createTask}
                    handleTaskUpdate={this.handleTaskUpdate}
                    handleTitleKeyUp={this.handleTitleKeyUp}
                    config={this.state.config}
            />}
        </div>
        <button onClick={this.printAllTasks}>Print: {this.state.tasks.length} items</button>
      </div>
    );
  }
}

export default TodoList;
