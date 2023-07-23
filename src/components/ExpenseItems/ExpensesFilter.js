import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = ({ onDropdownChangeHandler }) => {
  const changeHandler = (event) => {
    onDropdownChangeHandler(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select defaultValue="2023" onChange={changeHandler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
