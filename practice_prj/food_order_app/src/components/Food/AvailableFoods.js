import React, { useEffect, useState } from "react";
import classes from "./AvailableFoods.module.css";
import Card from "../UI/Card";
import FoodItem from "./FoodItem/FoodItem";

const AvailableFoods = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);
  /**
   * TODO promise
   */
  const fetchMeals = async () => {
    const response = await fetch(process.env.REACT_APP_DB_HOST);
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
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
    setIsLoading(false);
  };

  useEffect(() => {
    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  /**
   * TODO try catch
   */

  // const fetchMeals = async () => {
  //   try {
  //     const response = await fetch(process.env.REACT_APP_DB_HOST);
  //     if (!response.ok) {
  //       throw new Error("Something went wrong!");
  //     }
  //     const responseData = await response.json();
  //     const loadedMeals = [];
  //     for (const key in responseData) {
  //       loadedMeals.push({
  //         id: key,
  //         name: responseData[key].name,
  //         description: responseData[key].description,
  //         price: responseData[key].price,
  //       });
  //     }
  //     setMeals(loadedMeals);
  //     setIsLoading(false);
  //   } catch (error) {
  //     setIsLoading(false);
  //     setHttpError(error.message);
  //   }
  // };

  // useEffect(() => {
  //   fetchMeals();
  // }, []);

  const foodsList = meals.map((food) => <FoodItem key={food.id} {...food} />);
  if (httpError) {
    return (
      <section className={classes.mealsError}>
        <p>{httpError}</p>
      </section>
    );
  }
  return (
    <section className={classes.foods}>
      <Card>{isLoading ? <div className={classes.dualring} /> : <ul>{foodsList}</ul>}</Card>
    </section>
  );
};

export default AvailableFoods;
