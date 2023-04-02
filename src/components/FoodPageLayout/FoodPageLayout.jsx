import React, { useState } from "react";
import Foods from "../Foods/Foods";
import FoodCart from "../FoodCart/FoodCart";
import { toast } from "react-toastify";

const FoodPageLayout = () => {
  const [cartFood, setCartFood] = useState([]);
  const handleFoodCart = (food) => {
    const exists = cartFood.find((fd) => fd.idMeal === food.idMeal);
    if (exists) {
      toast("This is food is already in the cart");
    } else {
      setCartFood([...cartFood, food]);
    }
  };

  return (
    <div className="grid grid-cols-3 gap-6 pt-4">
      <div className="col-span-2">
        <Foods handleFoodCart={handleFoodCart}></Foods>
      </div>
      <div>
        <FoodCart cartFood={cartFood}></FoodCart>
      </div>
    </div>
  );
};

export default FoodPageLayout;
