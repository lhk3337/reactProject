import React, { useState } from "react";

import Button from "../../UI/Button/Button";
// import "./CourseInput.css";
import { styled } from "styled-components";

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${(props) => (!props.onInvalid ? "black" : "red")};
  }

  & input {
    display: block;
    width: 100%;
    border: 2px solid ${(props) => (!props.onInvalid ? "black" : "#900c0c")};
    background-color: ${(props) => (!props.onInvalid ? "#ededed" : "#ff4040")};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`;

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
      <FormControl onInvalid={isemptyValue}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
