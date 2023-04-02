import React from "react";
import CartedFoodTitle from "../CartedFoodTitle/CartedFoodTitle";

const FoodCart = ({ cartFood }) => {
  return (
    <div>
      <div className="text-center">
        <h2 className="text-3xl font-bold underline">Food Cart</h2>
      </div>
      <div className="p-8">
        {cartFood.map((food) => (
          <CartedFoodTitle food={food} key={food.idMeal}></CartedFoodTitle>
        ))}
      </div>
    </div>
  );
};

export default FoodCart;
