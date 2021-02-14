export const Action = {
  ADD_TASK: "add-task",
  CHECK_TASK: "check-task",
  REMOVE_TASK: "remove-task",
  GET_ALL_TASKS: "get-all-tasks"
};

export const taskReducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case Action.ADD_TASK: {
      console.log("at");
      return { tasks: state.tasks.concat(action.task) };
    }
    case Action.CHECK_TASK: {
      console.log("ct");
      return {
        tasks: state.tasks.map((task) =>
          task.id === action.task.id
            ? { ...task, isChecked: action.task.isChecked }
            : task
        ),
      };
    }

    case Action.REMOVE_TASK: {
        console.log("rt");
        return {
          tasks: state.tasks.filter((task) => task.id !== action.task.id),
        };
      }

      case Action.GET_ALL_TASKS: {
        console.log("gt");
        return {
          tasks: action.tasks,
        };
      }

      
    default: {
      console.log("default");
      return state;
    }
  }
};
