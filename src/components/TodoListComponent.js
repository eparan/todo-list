import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import AddTaskComponent from "./AddTaskComponent";
import TaskListComponent from "./TaskListComponent";
import { AuthContext } from "../contexts/AuthContext";
import { Redirect } from "react-router-dom";
import { auth } from "../firebase/firebase.config";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    backgroundColor: "#f5f5f5",
  },
}));

const TodoListComponent = () => {
  const { user } = useContext(AuthContext);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* {!user ? (
        <Redirect to={{ pathname: "/home/" }} />
      ) : ( */}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <button onClick={() => auth.signOut()}>Sign Out</button>
        </Grid>

        <Grid item xs={12}>
          <AddTaskComponent></AddTaskComponent>
        </Grid>
        <Grid item xs={12}>
          <TaskListComponent></TaskListComponent>
        </Grid>
      </Grid>
      {/* )} */}
    </div>
  );
};

export default TodoListComponent;
