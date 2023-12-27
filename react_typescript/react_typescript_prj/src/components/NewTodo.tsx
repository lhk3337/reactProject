import React, { useRef } from "react";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = ({ onAddTodo }) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }
    onAddTodo(enteredText);
    todoTextInputRef.current!.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
