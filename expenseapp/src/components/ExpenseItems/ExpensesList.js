import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = ({ filtedExpenses }) => {
  if (filtedExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">No expense found for the year.</h2>;
  }

  return (
    <>
      <ul className="expenses-list">
        {filtedExpenses.map((item) => (
          <ExpenseItem key={item.id} {...item} />
        ))}
      </ul>
    </>
  );
};

export default ExpensesList;
