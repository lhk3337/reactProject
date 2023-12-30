import React, { useContext } from "react";

import TodoItem from "./TodoItem";
import { TodosContext } from "../store/todos-context";
import classes from "./Todos.module.css";
const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem item={item} onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)} />
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
