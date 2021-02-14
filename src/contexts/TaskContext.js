import React, { createContext, useReducer } from "react";
import { taskReducer } from "./../reducers/TaskReducer";

const initialTasks = {
  tasks: [
    {
      id: "1cfe7dd0-6e0e-11eb-b8c5-0515c0469388",
      isChecked: false,
      created: "2021-02-13T15:14:05.998Z",
      description: "aaaaa",
    },
    {
      id: "1cfe7dd0-6e0e-11eb-b8c5-0515c0469381",
      isChecked: true,
      created: "2021-02-13T15:14:05.998Z",
      description: "bbbbbb",
    },
    {
      id: "1cfe7dd0-6e0e-11eb-b8c5-0515c0469382",
      isChecked: true,
      created: "2021-02-13T15:14:05.998Z",
      description: "cccccc",
    },
    {
      id: "1cfe7dd0-6e0e-11eb-b8c5-0515c0469383",
      isChecked: false,
      created: "2021-02-13T15:14:05.998Z",
      description: "dddddd",
    },
  ],
};

export const TaskContext = createContext();

const TaskContextProvider = (props) => {
  const [state, dispatch] = useReducer(taskReducer, initialTasks);
  console.log(state, dispatch);
  const tasks = state.tasks;
  // const sortedTasks = tasks;
  const sortedTasks = tasks.sort((t, f) =>
    f.isChecked === t.isChecked ? 0 : f.isChecked ? -1 : 1
  );
  return (
    <TaskContext.Provider value={{ tasks, sortedTasks, dispatch }}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
