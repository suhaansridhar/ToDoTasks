import { ADD_TASK, REMOVE_TASK } from "./ToDoAction";

const initialState = [];

const ToDoReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TASK:
            return [...state, {id: Date.now(), text: action.payload, completed: false}];

        case REMOVE_TASK:
            return state.filter(task => task.id !== action.payload);

        default: 
            return state;
    }
}

export default ToDoReducer