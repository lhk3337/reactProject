import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [userList, setUserList] = useState([]);

  const addUserList = (userinfo) => {
    setUserList((prev) => [userinfo, ...prev]);
  };

  return (
    <div>
      <AddUser onAddUser={addUserList} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
