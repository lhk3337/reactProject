import React from "react";
import { ITodo } from "../models/todo";
import classess from "./TodoItem.module.css";
const TodoItem: React.FC<{ item: ITodo }> = ({ item: { id, text } }) => {
  return (
    <li className={classess.item} key={id}>
      {text}
    </li>
  );
};

export default TodoItem;
