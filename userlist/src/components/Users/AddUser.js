import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
const AddUser = ({ onAddUser }) => {
  const [user, setUser] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (user.trim().length === 0 || age.trim().length === 0) {
      setError({ title: "Invalid Input", message: "Please enter a valid name and age (non-empty values)." });
      return;
    }

    if (+age < 1) {
      setError({ title: "Invalid age", message: "Please enter a valid age (> 0)" });
      return;
    }

    onAddUser({ username: user, age: age, id: new Date().getTime() });
    setUser("");
    setAge("");
  };

  const handleOnChange = (setState) => (event) => {
    setState(event.target.value);
  }; // currying function

  const handleCloseModal = () => {
    setError(false);
  };
  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} confirm={handleCloseModal} />}
      <Card className={classes.input}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" value={user} onChange={handleOnChange(setUser)} />
          <label htmlFor="age">Age(Year)</label>
          <input id="age" type="number" value={age} onChange={handleOnChange(setAge)} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
