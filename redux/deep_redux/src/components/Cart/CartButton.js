import { useDispatch, useSelector } from "react-redux";

import { uiActions } from "../../store/ui-slice";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const disptch = useDispatch();

  const cartotalQuantity = useSelector((state) => state.cart.totalQuantity);

  const toggleCartHandler = () => {
    disptch(uiActions.toggle());
  };
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartotalQuantity}</span>
    </button>
  );
};

export default CartButton;
