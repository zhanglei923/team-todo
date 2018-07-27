import moment from 'moment';
let taskUtil = {
    tasks:[],
    _cache:(state)=>{
        console.log(state)
        taskUtil.tasks = state.tasks;
        return state;
    },
    loadTestTasks: ()=>{
        let p = new Promise((resolve)=>{
            let testdata = []
            setTimeout(()=>{
                testdata = [
                    {
                        "id": "item6426232742034896",
                        "title": "1111",
                        "status": "ongoing",
                        "risk": "warn",
                        "owner": "",
                        "assistant": "",
                        "cost": 1.5,
                        "planned_end_date": "2018-07-13"
                    },
                    {
                        "id": "item5403666890885193",
                        "title": "222",
                        "status": "done",
                        "risk": "normal",
                        "owner": "li4@company.com",
                        "assistant": "",
                        "cost": 2.5,
                        "planned_end_date": "2018-07-13"
                    },
                    {
                        "id": "item9282666481815387",
                        "title": "333",
                        "status": "open",
                        "risk": "danger",
                        "owner": "wang5@company.com",
                        "assistant": "",
                        "cost": 1.5,
                        "planned_end_date": "2018-07-24"
                    },
                    {
                        "id": "item"+Math.random(),
                        "title": "",
                        "status": "open",
                        "risk": "normal",
                        "owner": "",
                        "assistant": "",
                        "cost": 1,
                        "planned_end_date": moment().format('YYYY-MM-DD')
                    }
                ];
                resolve(testdata)
            }, 800)
        });
        return p;
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
            if(tasks[i].id === id) {
                tasks[i]._index = i;
                return tasks[i];
            }
        }
    },
    createBlank:() =>{
        const newid = ('item'+ Math.random()+'').replace(/\d{0,}\./g, '')
        let newTask = {
            id: newid, 
            title: '',
            status:'open',
            risk: 'normal',
            owner: '',//'li4@company.com',
            assistant:'',
            cost: 1, //md
            planned_end_date: moment().format('YYYY-MM-DD')
        };
        return newTask;
    },
    addTask:(state, dir, id) => {
        let newTask = taskUtil.createBlank();  
        if(typeof dir === 'undefined'){
            state.tasks.push(newTask);
        }else{
            let task = taskUtil.getTask(state.tasks, id)
            let idx = task._index;
            let newTask = taskUtil.createBlank()
            if(dir === 'before'){
                state.tasks.splice(idx, 0, newTask)
            }
            if(dir === 'after'){
                state.tasks.splice(idx+1, 0, newTask)
            }
        }        
        return taskUtil._cache(state);
    },
    deleteTask:(state, id)=>{
        let task = taskUtil.getTask(state.tasks, id);
        let ok = window.confirm(`Sure to remove task "${task.title}"?`) 
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
    moveUp:(state, idlist)=>{
        let me = taskUtil;
        let task = me.getTask(state.tasks, idlist[0])
        if(task._index > 0){
            let task0 = state.tasks[task._index - 1];
            state.tasks[task._index - 1] = task;
            state.tasks[task._index] = task0;
        }
        return taskUtil._cache(state);
    },
    moveDown:(state, idlist)=>{
        let me = taskUtil;
        let task = me.getTask(state.tasks, idlist[0])
        if(task._index < (state.tasks.length-1)){
            let task0 = state.tasks[task._index + 1];
            state.tasks[task._index + 1] = task;
            state.tasks[task._index] = task0;
        }
        return taskUtil._cache(state);
    }
};
export default taskUtil;
