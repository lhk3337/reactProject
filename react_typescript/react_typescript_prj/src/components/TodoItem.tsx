import React from "react";
import { ITodo } from "../models/todo";
import classess from "./TodoItem.module.css";
const TodoItem: React.FC<{ item: ITodo; onRemoveTodo: () => void }> = ({ item: { id, text }, onRemoveTodo }) => {
  return (
    <li className={classess.item} key={id} onClick={onRemoveTodo}>
      {text}
    </li>
  );
};

export default TodoItem;
