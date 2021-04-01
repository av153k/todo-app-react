import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { TodoItemCard } from "./components/todoItemCard/TodoItemCard";

ReactDOM.render(
  <React.StrictMode>
    <TodoItemCard taskName="Go to market" />
    <TodoItemCard taskName="Do something" />
  </React.StrictMode>,
  document.getElementById("root")
);
