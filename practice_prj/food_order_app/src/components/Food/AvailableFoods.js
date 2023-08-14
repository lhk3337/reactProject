import React from "react";
import classes from "./AvailableFoods.module.css";
import Card from "../UI/Card";
import FoodItem from "./FoodItem/FoodItem";
const DUMMY_FOODS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];
const AvailableFoods = () => {
  const foodsList = DUMMY_FOODS.map((food) => <FoodItem key={food.id} {...food} />);
  return (
    <section className={classes.foods}>
      <Card>
        <ul>{foodsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableFoods;
