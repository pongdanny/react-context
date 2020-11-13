import React from "react";
import TodoContext from "./contexts/TodoContext";
import App from "./App.js";

class AppWithContext extends React.Component {
  constructor() {
    super();
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    this.state={
    tasks: storedTasks || {},
    createTask: this.createTask,
    deleteTask: this.deleteTask
    }
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
