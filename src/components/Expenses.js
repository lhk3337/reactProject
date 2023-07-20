import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "./Card";
const Expenses = ({ data }) => {
  const [filterData, setFilterData] = useState(data);

  const DropdownChangeHandler = (selectedData) => {
    if (selectedData === "all") {
      setFilterData(data);
    } else {
      const filtedExpensee = data.filter((value) => value.date.getFullYear() === +selectedData);
      setFilterData(filtedExpensee);
    }
  };
  return (
    <>
      <Card className="expenses">
        <ExpensesFilter onDropdownChangeHandler={DropdownChangeHandler} />
        {filterData.map((item) => (
          <ExpenseItem key={item.id} {...item} />
        ))}
      </Card>
    </>
  );
};

export default Expenses;
