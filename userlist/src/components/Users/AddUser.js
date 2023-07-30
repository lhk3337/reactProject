import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
const AddUser = () => {
  const [user, setUser] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user, age);
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
