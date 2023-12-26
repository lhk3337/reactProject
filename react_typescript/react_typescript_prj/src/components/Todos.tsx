import React from "react";
import { ITodo } from "../models/todo";

const Todos: React.FC<{ items: ITodo[] }> = ({ items }) => {
  return (
    <ul>
      {items.map((item: ITodo) => (
        <li key={item.id}>{item.text}</li>
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
