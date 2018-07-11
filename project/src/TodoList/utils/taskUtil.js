let taskUtil = {
    addTask:(state) => {        
        const newid = ('item'+ Math.random()+'').replace(/\d{0,}\./g, '')
        let newTask = {
            id: newid, 
            title: '',
            status:'open',
            risk: 'normal',
            email: '',//'li4@company.com',

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
    }
};
export default taskUtil;
