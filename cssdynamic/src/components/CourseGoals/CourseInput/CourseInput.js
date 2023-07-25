import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = ({ onAddGoal }) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isemptyValue, setIsemptyValue] = useState(false);
  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    if (enteredValue.trim().length === 0) {
      setIsemptyValue(false);
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredValue.trim().length === 0) {
      setIsemptyValue(true);
    } else {
      onAddGoal(enteredValue);
      setIsemptyValue(false);
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{ color: isemptyValue ? "red" : "black" }}>Course Goal</label>
        <input
          style={{
            border: `2px solid ${isemptyValue ? "#900c0c" : "black"}`,
            backgroundColor: isemptyValue ? "#ff4040" : "#fad0ec",
          }}
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
