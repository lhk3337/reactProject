import React from "react";
import "./App.css";
import Todos from "./components/Todos";

import TodoFunc from "./models/todo";
import TodoClass from "./models/todo";

function App() {
  const todos = [TodoFunc("Learn React"), TodoFunc("Learn Typescript")];
  // const todos = [new TodoClass("Learn React"), new TodoClass("Learn Typescript")];

  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
