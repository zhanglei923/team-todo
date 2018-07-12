import moment from 'moment';
let taskUtil = {
    getTask:(tasks, id)=>{
        for(let i =0,len=tasks.length;i<len;i++){
            if(tasks[i].id === id) {
                tasks[i]._index = i;
                return tasks[i];
            }
        }
    },
    addTask:(state) => {        
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
        state.tasks.push(newTask);
        return state;
    },
    deleteTask:(state, id)=>{        
        let newtasks = []
        state.tasks.forEach((task)=>{
            if(task.id !== id) newtasks.push(task)
        })
        state.tasks = newtasks;
        return state;
    },
    updateTask:(state, id, newtask)=>{
        
        state.tasks.forEach((task)=>{
            if(task.id === id) {
                task = Object.assign(task, newtask);
            }
        })

        return state;
    },
    moveUp:(state, idlist)=>{
        let me = taskUtil;
        let task = me.getTask(state.tasks, idlist[0])
        if(task._index > 0){
            let task0 = state.tasks[task._index - 1];
            state.tasks[task._index - 1] = task;
            state.tasks[task._index] = task0;
        }
        return state;
    },
    moveDown:(state, idlist)=>{
        let me = taskUtil;
        let task = me.getTask(state.tasks, idlist[0])
        if(task._index < (state.tasks.length-1)){
            let task0 = state.tasks[task._index + 1];
            state.tasks[task._index + 1] = task;
            state.tasks[task._index] = task0;
        }
        return state;
    }
};
export default taskUtil;
