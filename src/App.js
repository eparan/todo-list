import React from "react";

import NavbarComponent from "./components/NavbarComponent";
import Container from "@material-ui/core/Container";
import TaskContextProvider from "./contexts/TaskContext";
import AuthContextProvider from "./contexts/AuthContext";
import TodoListComponent from "./components/TodoListComponent";
import SimpleBackdrop from "./components/LoadingComponent";
import CustomizedSnackbars from "./components/SnackbarComponent";
import HomeComponent from "./components/HomeComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Container maxWidth="md">
      <AuthContextProvider>
        <TaskContextProvider>
          <NavbarComponent></NavbarComponent>
          <Router>
            <TodoListComponent></TodoListComponent>
            {/* <Switch>
              <Route exact path="/todo" component={TodoListComponent} />
              <Route exact path="/home" component={HomeComponent} />
            </Switch> */}
          </Router>
          <SimpleBackdrop></SimpleBackdrop>
          <CustomizedSnackbars></CustomizedSnackbars>
        </TaskContextProvider>
      </AuthContextProvider>
    </Container>
  );
}

export default App;
