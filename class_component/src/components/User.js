import { Component } from "react";
import classes from "./User.module.css";
class User extends Component {
  componentWillUnmount() {
    console.log("User will unmount!");
  }
  // 컴포넌트가 DOM에서 삭제되기 전에 호출한다. useEffect(()=> {return ()=> {....}},[])

  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}
// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
