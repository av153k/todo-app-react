import React from "react";
import "./todoItemCard.css";
import { IoCreateOutline } from "react-icons/io5";
import { IoTrashOutline } from "react-icons/io5";

class TodoItemCard extends React.Component {
  render() {
    return (
      <li className="todo-item-card-stack">
        <div className="todo-item-card">
          <input id="todo-item-card-checkbox" type="checkbox" />
          <label
            className="todo-item-card-label"
            htmlFor="todo-item-card-checkbox"
          >
            {this.props.taskName}
          </label>
        </div>
        <div className="todo-item-card-action-button-group">
          <button type="button" className="todo-item-card-action-button-edit">
            <IoCreateOutline />
          </button>
          <button type="button" className="todo-item-card-action-button-delete">
            <IoTrashOutline />
          </button>
        </div>
      </li>
    );
  }
}

export { TodoItemCard };
