import React, { useState } from "react";
import TodoFunc, { ITodo } from "../models/todo";

type TodosContextObj = {
  items: ITodo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC = ({ children }) => {
  const [todos, setTodos] = useState<ITodo[]>([]);

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
  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: onAddTodoHandler,
    removeTodo: removeTodoHandler,
  };
  return <TodosContext.Provider value={contextValue}>{children}</TodosContext.Provider>;
};

export default TodosContextProvider;
