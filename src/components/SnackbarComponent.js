import React, { useContext, useEffect } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import { TaskContext } from "./../contexts/TaskContext";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function CustomizedSnackbars() {
  const classes = useStyles();
  const { isError, setIsError } = useContext(TaskContext);
  const open = isError;
  useEffect(() => {}, [open]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setIsError(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          에러가 발생!!
        </Alert>
      </Snackbar>
    </div>
  );
}
