import React, { useState } from "react";
import "./App.css";
import Todos from "./components/Todos";

import TodoFunc, { ITodo } from "./models/todo";
// import TodoClass from "./models/todo";
import NewTodo from "./components/NewTodo";

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  // const todos = [TodoFunc("Learn React"), TodoFunc("Learn Typescript")];
  // const todos = [new TodoClass("Learn React"), new TodoClass("Learn Typescript")];
  const onAddTodoHandler = (todoText: string) => {
    const newTodo = TodoFunc(todoText);
    setTodos((prevState) => {
      return prevState.concat(newTodo);
    });
  };
  const removeTodoHandler = (todoId: string) => {
    setTodos((prevState) => {
      return prevState.filter((todo) => todo.id !== todoId);
    });
  };
  return (
    <div>
      <NewTodo onAddTodo={onAddTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
