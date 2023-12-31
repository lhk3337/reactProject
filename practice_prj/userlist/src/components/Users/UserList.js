import React from "react";
import Card from "../UI/Card";
import classes from "./UserList.module.css";
const UserList = ({ users }) => {
  return (
    <Card className={classes.users}>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} ({user.age} years Old )
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
