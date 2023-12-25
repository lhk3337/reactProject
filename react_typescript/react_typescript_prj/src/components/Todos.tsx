import React from "react";

const Todos: React.FC<{ items: string[] }> = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
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
