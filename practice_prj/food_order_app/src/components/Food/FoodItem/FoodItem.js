import React, { useContext } from "react";
import classes from "./FoodItem.module.css";
import CartContext from "../../../store/cart-context";
import FoodItemForm from "./FoodItemForm";

const FoodItem = ({ name, id, description, price: priceValue }) => {
  const cartCtx = useContext(CartContext);
  const price = `${priceValue.toFixed(2)}`;
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id,
      name,
      amount,
      price: priceValue,
    });
  };
  return (
    <li className={classes.food}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <FoodItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default FoodItem;
