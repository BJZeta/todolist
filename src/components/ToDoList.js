import React, { Component } from "react";
import Item from "./ToDoItem";

export default class ToDoList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;

    return (
      <ul className="list-group my-5">
        <h3 className="text-center">To Do List</h3>
        {items.map((item) => {
          return (
            <Item
              key={item.id}
              title={item.title}
              handleEdit={() => handleEdit(item.id)}
              handleDelete={() => handleDelete(item.id)}
            ></Item>
          );
        })}
        <button
          type="button"
          className="btn btn-danger btn-block mt-5"
          onClick={clearList}
        >
          Clear List
        </button>
      </ul>
    );
  }
}
