import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";

export default class App extends Component {
  state = {
    items: [
      { id: 1, title: "wake up" },
      { id: 2, title: "breakfast" },
    ],
    id: uuidv4(),
    item: "",
    editItem: false,
  };

  handleChange = (e) => {};

  handleSubmit = (e) => {};

  clearList = () => {};

  handleDelete = (id) => {};

  handleEdit = (id) => {};

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-center">Enter a list Item</h3>
            <ToDoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <ToDoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}
