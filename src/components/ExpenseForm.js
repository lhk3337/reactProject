import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = ({ onSaveExpenseDataHandler, onCloseNewExpenseHandler }) => {
  const [values, setValues] = useState({
    title: "",
    amount: 0.01,
    date: new Date().toISOString().split("T")[0],
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.title) {
      onSaveExpenseDataHandler(values);
    }
  };
  const oncloseNewExpenseHandlerClick = () => {
    onCloseNewExpenseHandler(true);
  };
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" name="title" onChange={handleChange} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" value={values.amount} name="amount" min="0.01" step="0.01" onChange={handleChange} />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              value={values.date}
              type="date"
              min="2022-01-01"
              max="'2023-12-31"
              name="date"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={oncloseNewExpenseHandlerClick}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;
