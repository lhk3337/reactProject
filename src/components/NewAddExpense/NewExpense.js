import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onAddExpense }) => {
  const [isCloseNewExpense, setIsCloseNewExpense] = useState(true);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseInputData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
      amount: +enteredExpenseData.amount,
      date: new Date(enteredExpenseData.date),
    };
    onAddExpense(expenseInputData);
    setIsCloseNewExpense(true);
  };

  const closeNewExpenseClickHandler = (closeData) => {
    setIsCloseNewExpense(closeData);
  };

  return (
    <div className="new-expense">
      {isCloseNewExpense ? (
        <button
          onClick={() => {
            closeNewExpenseClickHandler(false);
          }}
        >
          Add New Expense
        </button>
      ) : (
        <ExpenseForm
          onSaveExpenseDataHandler={saveExpenseDataHandler}
          onCloseNewExpenseHandler={closeNewExpenseClickHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
