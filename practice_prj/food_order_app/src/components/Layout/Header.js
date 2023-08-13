import React from "react";
import foodImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactFoods</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={foodImage} alt="Awesome delicius food!" />
      </div>
    </>
  );
};

export default Header;
