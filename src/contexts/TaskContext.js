import React, { createContext, useEffect, useState } from "react";
import { getTasksRequest, addTaskRequest } from "../firebase/Firebase";

export const TaskContext = createContext();

const TaskContextProvider = (props) => {
  const [tasks, setTasks] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    getTasksRequest().then(
      (res) => {
        console.log("res:", res);
        setTasks(res);
        setIsLoading(false);
      },
      (error) => {
        console.log("error:", error);
        setIsError(false);
      }
    );
    setIsLoading(false);
  }, [tasks]);
  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTaskRequest,
        isError,
        setIsError,
        isLoading,
        setIsLoading,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};
export default TaskContextProvider;
