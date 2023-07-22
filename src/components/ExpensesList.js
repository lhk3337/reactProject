import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
const ExpensesList = ({ filtedExpensee }) => {
  if (filtedExpensee.length === 0) {
    return <h2 className="expenses-list__fallback">No expense found for the year.</h2>;
  }

  return (
    <>
      <ul className="expenses-list">
        {filtedExpensee.map((item) => (
          <ExpenseItem key={item.id} {...item} />
        ))}
      </ul>
    </>
  );
};

export default ExpensesList;
