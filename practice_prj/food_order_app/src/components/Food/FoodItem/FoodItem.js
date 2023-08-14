import React from "react";
import classes from "./FoodItem.module.css";
import FoodItemForm from "./FoodItemForm";
const FoodItem = ({ name, description, price: priceValue }) => {
  const price = `${priceValue.toFixed(2)}`;
  return (
    <li className={classes.food}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <FoodItemForm />
      </div>
    </li>
  );
};

export default FoodItem;
