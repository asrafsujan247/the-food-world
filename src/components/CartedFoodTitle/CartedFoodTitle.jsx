import React from "react";

const CartedFoodTitle = ({ food }) => {
  return (
    <div>
      <h3 className="bg-gray-300 rounded-xl p-5 text-xl font-semibold mb-4">
        {food.strMeal}
      </h3>
    </div>
  );
};

export default CartedFoodTitle;
