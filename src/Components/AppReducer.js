import { INCREMENT, DECREMENT, ADDTOLIST, REMOVEITEM, INITIATE, ADDBYTASK, DELETEBYTASK } from "../Objects/ActionObjs";

const initialState = {
    value:0, tasks:[], selectedtask:[],
}

export const AppReducer = (state=initialState, action) =>{
                switch(action.type){
                    case INCREMENT:{
                        return {...state, value: state.value + 1}
                    }
                    case DECREMENT:{
                        return {...state, value: state.value - 1}
                    }
                    case ADDTOLIST:{
                        const {id, content} = action.payload;
                        return {...state, value: state.value, tasks:[...state.tasks,{ id: id, content: content, completed:true}]}
                    }
                    case REMOVEITEM:{
                        const { id } = action.payload;
                        return {...state, tasks:[...state.tasks.filter(t=>t.id !== id)], selectedtask:[...state.selectedtask, ...state.tasks.filter(t=>t.id === id)]}
                    }
                    case ADDBYTASK:{
                        const { task } = action.payload;
                        const { id, content, completed } = task;
                        return {...state, tasks:[...state.tasks, {id, content, completed}], selectedtask:[...state.selectedtask.filter(t=>t.id !== id)]}
                    }
                    case DELETEBYTASK:{
                        const { task } = action.payload;
                        const { id, content, completed } = task;
                        return {...state, selectedtask:[...state.selectedtask.filter(i=>i.id !== id)]}
                    }
                    case INITIATE:{
                        return state//{...state, tasks:[...state.tasks], selectedtask:[...state.selectedtask]}
                    }
                    default:{
                        return state
                }
}   
}