import React, { Component } from 'react';
import TodoItem from './TodoItem'
import taskUtil from './taskUtil'

import 'reset-css';
import './TodoList.css';

//
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.addTask = this.addTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.printAllTasks = this.printAllTasks.bind(this);
        this.handleTaskUpdate = this.handleTaskUpdate.bind(this);
        this.state = this.props;
        this.setState({
            tasks:[]
        })
        console.log('this.state', this.state)
      }
      moveTaskDown(id){

      }
      moveTaskUp(id){

      }
    deleteTask(id){
        var ok = true;
        console.log(id)
        if(ok){
            let newtasks = []
            this.state.tasks.forEach((task)=>{
                if(task.id !== id) newtasks.push(task)
            })
            this.state.tasks = newtasks;
            this.setState(this.state)
        }else{

        }
    }
    addTask(){
        const newid = ('item'+ Math.random()+'').replace(/\d{0,}\./g, '')
        let newTask = {
            id: newid, 
            title: '',
            status:'open',
            deleted: false,
            owner: 'li4@company.com',

        };
        console.log('this.state', this.state)
        //taskUtil.addTask()
        this.state.tasks.push(newTask);
        this.setState(this.state)
    }
    handleTaskUpdate(id, label){
        //console.log('haha', id, label)
        this.state.tasks.forEach((task)=>{
            if(task.id === id) {
                task.title = label;
            }
        })
        this.setState(this.state)
    }
    printAllTasks(){
        console.log(this.state)
    }
  render() {
    return (
      <div className="todo_main">
        <button onClick={this.addTask}>add</button>
        <button onClick={this.printAllTasks}>print</button>
        <div>
        {this.state.tasks.length === 0 ? 
            'No-data' :
             <TodoItem
                    tasks={this.state.tasks} 
                    colleagues={this.state.colleagues}
                    handleDeleteTask={this.deleteTask} 
                    handleMoveDown={this.moveTaskDown}
                    handleMoveUp={this.moveTaskUp}
                    handleTaskUpdate={this.handleTaskUpdate}
            />}
        </div>
      </div>
    );
  }
}

export default TodoList;
