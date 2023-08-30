import { Fragment, useState, useEffect, Component } from "react";

import Users from "./Users";
import classes from "./UserFinder.module.css";
import UsersContext from "../store/users-context";
import ErrorBoundry from "./ErrorBoundry";

class UserFinder extends Component {
  static contextType = UsersContext;

  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: "",
    };
  }
  componentDidMount() {
    this.setState({ filteredUsers: this.context.users });
  } // 처음에 컴포넌트가 마운트되면 실행을 한번한다. fetch로 인해 데이터를 가져올때 사용된다.

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({ filteredUsers: this.context.users.filter((user) => user.name.includes(this.state.searchTerm)) });
    }
  }
  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }
  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <ErrorBoundry>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundry>
      </Fragment>
    );
  }
}

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     setFilteredUsers(DUMMY_USERS.filter((user) => user.name.includes(searchTerm)));
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <div className={classes.finder}>
//         <input type="search" onChange={searchChangeHandler} />
//       </div>
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;
