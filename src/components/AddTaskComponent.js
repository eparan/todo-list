import React, { useContext, useState } from "react";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import { TaskContext } from "./../contexts/TaskContext";

import { v1 as uuid } from "uuid";

const AddTaskComponent = () => {
  const { addTaskRequest } = useContext(TaskContext);
  const [description, setDescription] = useState("");

  const onAddTask = (e) => {
    e.preventDefault();
    let task = {
      id: uuid(),
      isChecked: false,
      created: new Date(),
      description: description,
    };
    addTaskRequest(task);
    setDescription("");
  };

  return (
    <form onSubmit={onAddTask}>
      <Grid container direction="row" justity="center" alignItems="center">
        <TextField
          label="Add Task"
          variant="outlined"
          size="small"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </Grid>
    </form>
  );
};

export default AddTaskComponent;
