import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
const AddUser = ({ onAddUser }) => {
  const [user, setUser] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (user.trim().length === 0 || age.trim().length === 0) {
      return;
    }
    if (+age < 1) {
      return;
    }
    onAddUser({ username: user, age: age, id: new Date().getTime() });
    setUser("");
    setAge("");
  };

  const handleOnChange = (setState) => (event) => {
    setState(event.target.value);
  }; // currying function

  return (
    <Card className={classes.input}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" value={user} onChange={handleOnChange(setUser)} />
        <label htmlFor="age">Age(Year)</label>
        <input id="age" type="number" value={age} onChange={handleOnChange(setAge)} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
