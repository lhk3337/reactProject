import React, { useEffect, useState } from "react";
import classes from "./AvailableFoods.module.css";
import Card from "../UI/Card";
import FoodItem from "./FoodItem/FoodItem";

const AvailableFoods = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(process.env.REACT_APP_DB_HOST);
      const responseData = await response.json();
      const loadedMeals = [];
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
    };
    fetchMeals();
  }, []);

  const foodsList = meals.map((food) => <FoodItem key={food.id} {...food} />);
  return (
    <section className={classes.foods}>
      <Card>
        <ul>{foodsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableFoods;
