import React, { createContext, useReducer, useEffect, useState } from 'react';
import { taskReducer, Action } from './../reducers/TaskReducer';
import {
    getTasksRequest,
    addTaskRequest
} from '../firebase/Firebase';

export const TaskContext = createContext();

const TaskContextProvider = (props) => {
    const [state, dispatch] = useReducer(taskReducer, [])
    //const [sortedTasks, setTasks] = useState([]);
    const tasks = state.tasks;
    console.log(tasks);

    useEffect(()=>{
        getTasksRequest().then(res=>{
            // setTasks(res.sort((t, f) =>  (f.isChecked === t.isChecked)? 0 : f.isChecked? -1 : 1))
            dispatch({
                type:Action.GET_ALL_TASKS,
                tasks: res
            })
        })
    },[tasks])
    return (
        <TaskContext.Provider value={{ tasks, dispatch, addTaskRequest }}>
            {props.children}
        </TaskContext.Provider>
    )
}
export default TaskContextProvider;