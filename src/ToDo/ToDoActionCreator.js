import { ADD_TASK, REMOVE_TASK } from "./ToDoAction"

export const addTask = text => {
    return{
        type: ADD_TASK,
        payload: text
    }
}

export const removeTask = id => {
    return{
        type: REMOVE_TASK,
        payload: id
    }
}