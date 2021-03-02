import React from "react";

import NavbarComponent from "./components/NavbarComponent";
import Container from "@material-ui/core/Container";
import TaskContextProvider from "./contexts/TaskContext";
import TodoListComponent from "./components/TodoListComponent";
import SimpleBackdrop from "./components/LoadingComponent";
import CustomizedSnackbars from "./components/SnackbarComponent";

function App() {
  return (
    <Container maxWidth="md">
      <TaskContextProvider>
        <NavbarComponent></NavbarComponent>
        <TodoListComponent></TodoListComponent>
        <SimpleBackdrop></SimpleBackdrop>
        <CustomizedSnackbars></CustomizedSnackbars>
      </TaskContextProvider>
    </Container>
  );
}

export default App;
