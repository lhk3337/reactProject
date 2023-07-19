import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
const ExpenseItem = ({ title: propTitle, amount, date }) => {
  const [title, setTitle] = useState(propTitle);
  // console.log("ExpenseItem evaluated by React");

  const onHandleClick = () => {
    setTitle("Updated!");
    // console.log(title);
  };

  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description ">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={onHandleClick}>Change Title</button>
    </div>
  );
};

export default ExpenseItem;
