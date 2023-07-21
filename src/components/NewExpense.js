import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = ({ onAddExpense }) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseInputData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
      amount: +enteredExpenseData.amount,
      date: new Date(enteredExpenseData.date),
    };
    onAddExpense(expenseInputData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseDataHandler={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
