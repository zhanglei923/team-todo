import React, { Component } from 'react';
import TodoItem from './TodoItem'
import taskUtil from './taskUtil'

import 'reset-css';
import './TodoList.css';


class TodoList extends Component {
    constructor(props) {
        super(props);
        this.addTask = this.addTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.printAllTasks = this.printAllTasks.bind(this);
        this.state = this.props;
        this.setState({
            tasks:[]
        })
        console.log('this.state', this.state)
      }
    deleteTask(id){
        alert('delete!')
        //this.addTask()
    }
    addTask (task){
        let tasks = this.state.tasks;
        tasks.push(task)
        console.log(tasks)
        this.setState(this.state);
    }
    addTask(){
        const newid = ('item'+ Math.random()+'').replace(/\./g, '')
        let newTask = {
            id: newid, 
            title: newid,
            status:'open',
            deleted: false,
            
        };
        console.log('this.state', this.state)
        //taskUtil.addTask()
        this.state.tasks.push(newTask);
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
        <TodoItem tasks={this.state.tasks} deleteTask={this.deleteTask}/>
      </div>
    );
  }
}

export default TodoList;
