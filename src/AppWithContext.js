import React from "react";
import TodoContext from "./contexts/TodoContext";
import App from "./App.js";

class AppWithContext extends React.Component {
  constructor() {
    super();
    const storeTasks = JSON.parse(localStorage.getItem("tasks"));
  }

  createTask = (task) => {};

  deleteTask = (id) => {};

  updateLocalStorageTasks = () => {
    console.log(this.state.tasks);
    const jsonTasks = JSON.stringify(this.state.tasks);
    localStorage.setItem("tasks", jsonTasks);
  };

        render() {
        return ()
    }
}

export default AppWithContext;
