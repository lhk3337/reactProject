// class Todo {
//   id: string;
//   text: string;
//   constructor(todoText: string) {
//     this.text = todoText;
//     this.id = new Date().toISOString();
//   }
// }

// export default Todo;

export interface ITodo {
  id: string;
  text: string;
}

function TodoFunc(todoText: string) {
  const data: ITodo = {
    id: new Date().toISOString(),
    text: todoText,
  };
  return data;
}
export default TodoFunc;
