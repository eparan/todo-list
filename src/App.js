import React from "react";

import NavbarComponent from "./components/NavbarComponent";
import Container from "@material-ui/core/Container";
import TaskContextProvider from "./contexts/TaskContext";
import TodoListComponent from "./components/TodoListComponent";

function App() {
  return (
    <Container maxWidth="md">
      <TaskContextProvider>
        <NavbarComponent></NavbarComponent>
        <TodoListComponent></TodoListComponent>
      </TaskContextProvider>
    </Container>
  );
}

export default App;
