import React from "react";
import { ITodo } from "../models/todo";

const TodoItem: React.FC<{ item: ITodo }> = ({ item: { id, text } }) => {
  return <li key={id}>{text}</li>;
};

export default TodoItem;
