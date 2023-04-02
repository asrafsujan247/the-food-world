import React, { useEffect, useState } from "react";
import Food from "../Food/Food";

const Foods = ({ handleFoodCart }) => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then((res) => res.json())
      .then((data) => setFoods(data.meals));
  }, []);
  return (
    <div className="grid grid-cols-2 gap-6">
      {foods.map((food) => (
        <Food
          food={food}
          key={food.idMeal}
          handleFoodCart={handleFoodCart}
        ></Food>
      ))}
    </div>
  );
};

export default Foods;
