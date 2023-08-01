import React, { useState } from "react";

const CalculatorInput = ({ onAddCalculator, inputstate, state }) => {
  const [inputData, setInputData] = useState({
    currentSavings: "",
    yearlySavings: "",
    expectedReturn: "",
    duration: "",
  });

  const handleChange = (event) => {
    setInputData({ ...inputData, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { currentSavings, yearlySavings, expectedReturn, duration } = inputData;
    if (
      currentSavings.trim().length === 0 ||
      yearlySavings.trim().length === 0 ||
      expectedReturn.trim().length === 0 ||
      duration.trim().length === 0
    ) {
      return;
    }
    onAddCalculator(inputData);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <p>
            <label htmlFor="currentSavings">Current Savings ($)</label>
            <input type="number" id="currentSavings" onChange={handleChange} />
          </p>
          <p>
            <label htmlFor="yearlySavings">Yearly Savings ($)</label>
            <input type="number" id="yearlySavings" onChange={handleChange} />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expectedReturn">Expected Interest (%, per year)</label>
            <input type="number" id="expectedReturn" onChange={handleChange} />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" onChange={handleChange} />
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt" onClick={() => inputstate(true)}>
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
};

export default CalculatorInput;
