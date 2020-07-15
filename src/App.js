import React, { Component } from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <ToDoInput />
        <ToDoList />
      </div>
    );
  }
}
