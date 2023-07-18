import React from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
const Expenses = ({ data }) => {
  console.log(data);
  return (
    <div className="expenses">
      {data.map((item) => (
        <ExpenseItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Expenses;
