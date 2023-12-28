import React from "react";
import { ITodo } from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
const Todos: React.FC<{ items: ITodo[] }> = ({ items }) => {
  return (
    <ul className={classes.todos}>
      {items.map((item: ITodo) => (
        <TodoItem item={item} />
      ))}
    </ul>
  );
};
export default Todos;

// import React from "react";
// interface Iprops {
//   items: string[];
// }
// const Todos = ({ items }: Iprops) => {
//   return (
//     <ul>
//       {items.map((item: string) => (
//         <li key={item}>{item}</li>
//       ))}
//     </ul>
//   );
// };
// export default Todos;
