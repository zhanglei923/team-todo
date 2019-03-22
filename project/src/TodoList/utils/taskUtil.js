import moment from 'moment';
import axios from 'axios2'
let mockJson = require('../../mock/data.json')
//console.log(mockJson)
const DOWN = 1, UP = 0;

let taskUtil = {
    tasks:[],
    _cache:(state)=>{
        //console.log(state)
        taskUtil.tasks = state.tasks;
        return state;
    },
    loadTestTasks: ()=>{
        let p = new Promise((resolve)=>{
            let testdata = []
            setTimeout(()=>{
                testdata = mockJson.tasks;
                resolve(testdata)
            }, 800)
        });
        return p;
    },
    getGroupTasks: (groupId, filterFn)=>{        
        if(typeof filterFn === 'undefined') filterFn = (task)=>{return true;}
        let tasks = taskUtil.getAllTasks();
        let group = taskUtil.getTask(tasks, groupId);
        let results = []
        console.log(groupId, group,tasks)
        if(!group) return;
        for(let i=group._index;i<tasks.length;i++){
            let task = tasks[i];
            if(task.id !== groupId && task.isGroup) break;
            if(filterFn(task)) results.push(task);
        }
        return results;
    },
    getAllFinishedTasks:(tasks)=>{
        let finished = []
        if(typeof tasks === 'undefined') tasks = taskUtil.getAllTasks()
        tasks.forEach((task)=>{
            if(task.status==='done') finished.push(task);
        })
        return finished;
    },
    getAllTasks:()=>{
        return taskUtil.tasks?taskUtil.tasks:[];
    },
    getTask:(tasks, id)=>{
        if(typeof id === 'undefined') {
            id = tasks;
            tasks = taskUtil.getAllTasks();
        }
        for(let i =0,len=tasks.length;i<len;i++){
            tasks[i]._index = i;
            if(tasks[i].id === id) {
                return tasks[i];
            }
        }
    },
    createBlank:(updateData) =>{
        const newid = ('item'+ Math.random()+'').replace(/\d{0,}\./g, '')
        let newTask = {
            id: newid, 
            textCatagory:'',
            title: '',
            status:'open',
            risk: 'normal',
            owner: [],//'li4@company.com',
            assistant:'',
            textOwner:'',
            textAssistent:'',
            cost: 1, //md
            planned_begin_date: null,
            planned_end_date: null,
            description: '',
            isSubTaskOf: undefined
        };
        if(typeof updateData !== 'undefined' && updateData)
        for(let key in updateData){
            newTask[key] = updateData[key];
        }
        return newTask;
    },
    addTask:(state, dir, id, data, updateData) => {
        if(typeof data === 'undefined') data = null;
        if(typeof updateData === 'undefined' || !updateData) updateData = {};
        let newTask = taskUtil.createBlank(updateData);  
        if(typeof dir === 'undefined'){
            state.tasks.push(newTask);
        }else{
            let task = taskUtil.getTask(state.tasks, id)
            let idx = task._index;
            let newTask = ((typeof data !== 'undefined' && data) ? data : taskUtil.createBlank(updateData));
            if(dir === 'before'){
                state.tasks.splice(idx, 0, newTask)
            }
            if(dir === 'after'){
                state.tasks.splice(idx+1, 0, newTask)
            }
        }        
        return taskUtil._cache(state);
    },
    deleteTask:(state, id, needConfirm)=>{
        if(typeof needConfirm === 'undefined') needConfirm = true;
        let task = taskUtil.getTask(state.tasks, id);
        let ok = needConfirm ? window.confirm(`Sure to remove task "${task.title}"?`) : true;
        if(!ok) return taskUtil._cache(state);
        let newtasks = []
        state.tasks.forEach((task)=>{
            if(task.id !== id) newtasks.push(task)
        })
        state.tasks = newtasks;
        return taskUtil._cache(state);
    },
    updateTask:(state, id, newtask)=>{        
        state.tasks.forEach((task)=>{
            if(task.id === id) {
                task = Object.assign(task, newtask);
            }
        })
        return taskUtil._cache(state);
    },
    beSubTask:(state, id, bool)=>{
        let me = taskUtil;
        let task = me.getTask(state.tasks, id)
        if(task._index > 0){
            let prevTask = state.tasks[task._index-1]
            task.isSubTaskOf = bool ? prevTask.id : undefined;
        }
        return taskUtil._cache(state);
    },
    moveUp:(state, idlist)=>{
        let me = taskUtil;
        let task = me.getTask(state.tasks, idlist[0])
        if(task._index > 0){
            let task0 = state.tasks[task._index - 1];
            if(task0.status !== 'done'){
                state.tasks[task._index - 1] = task;
                state.tasks[task._index] = task0;
            }else{
                console.warn('here')
                var thisIdx = task._index;
                var prevIdx = thisIdx - 1;
                var go = true;
                while(go){
                    let task0 = state.tasks[prevIdx];
                    if(task0.status !== 'done'){
                        go = false;
                    }else{
                        state.tasks[prevIdx] = task;
                        state.tasks[thisIdx] = task0;
                        thisIdx = prevIdx;
                        prevIdx = thisIdx - 1;
                    }
                }
            }
        }
        return taskUtil._cache(state);
    },
    moveDown:(state, idlist)=>{
        let me = taskUtil;
        let task = me.getTask(state.tasks, idlist[0])
        if(task._index < (state.tasks.length-1)){
            let task0 = state.tasks[task._index + 1];
            if(task0.status !== 'done'){
                state.tasks[task._index + 1] = task;
                state.tasks[task._index] = task0;
            }else{
                console.warn('here')
                var thisIdx = task._index;
                var nextIdx = thisIdx + 1;
                var go = true;
                while(go){
                    let task0 = state.tasks[nextIdx];
                    if(task0.status !== 'done'){
                        go = false;
                    }else{
                        state.tasks[nextIdx] = task;
                        state.tasks[thisIdx] = task0;
                        thisIdx = nextIdx;
                        nextIdx = thisIdx + 1;
                    }
                }
            }
        }
        return taskUtil._cache(state);
    },
    getNextTask:(state, id)=>{
        let me = taskUtil;
        return me.getNeighborTask(state, id, DOWN)
    },
    getPrevTask:(state, id)=>{
        let me = taskUtil;
        return me.getNeighborTask(state, id, UP)
    },
    getNeighborTask:(state, id, dir)=>{
        let me = taskUtil;
        let task = me.getTask(state.tasks, id);
        let idx = task._index;

        let nexttask;
        if(dir === DOWN)
        for(let i=idx+1;i<state.tasks.length;i++){
            nexttask = state.tasks[i];
            if(!nexttask)break;
            if(!nexttask.groupName && !nexttask.isMilestong){
                break;
            }
        }
        if(dir === UP)
        for(let i=idx-1;i>=0;i--){
            nexttask = state.tasks[i];
            if(!nexttask)break;
            if(!nexttask.groupName && !nexttask.isMilestong){
                break;
            }
        }
        return nexttask;
    },
    focusNeighbor:(state, id, dir)=>{
        let me = taskUtil;
        var targetTask = me.getNeighborTask(state, id, dir)
        //console.log(targetTask)
        if(targetTask){
            let ipt = me.getTitleInput(targetTask.id);
            if(ipt)ipt.focus()
        }
    },
    getTitleInput: (id)=>{
        return document.getElementById(`title-${id}`);
    },
    saveToServer:(projectName, tasks, succFn, failFn)=>{
        document.getElementById('todo_item_table').setAttribute('class', 'saving_to_server')
        axios.post('/action/save/todos', {
            reponsitoryName:'team-todo',
            projectName,
            tasks})
          .then(function (response) {
            console.log(response);
            setTimeout(()=>{
                let oldclasses = document.getElementById('todo_item_table').getAttribute('class');
                let newclass = oldclasses.replace(/saving_to_server/ig, '')
                document.getElementById('todo_item_table').setAttribute('class', newclass)
            }, 0)
          })
          .catch(function (error) {
            console.log(error);
          });
    }
};
export default taskUtil;
