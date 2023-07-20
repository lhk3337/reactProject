import React from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
const Expenses = ({ data }) => {
  return (
    <>
      <Card className="expenses">
        {data.map((item) => (
          <ExpenseItem key={item.id} {...item} />
        ))}
      </Card>
    </>
  );
};

export default Expenses;
