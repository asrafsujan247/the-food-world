import React from "react";

const Food = (props) => {
  const { strMealThumb, strMeal, strInstructions } = props.food;
  const handleFoodCart = props.handleFoodCart;
  return (
    <>
      <div className="card w-full h-full border-2 shadow-xl">
        <figure>
          <img src={strMealThumb} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{strMeal}</h2>
          <p className="text-gray-600">
            Instructions :
            {strInstructions
              ? strInstructions.slice(0, 100) + " ...see more"
              : "not found"}
          </p>
          <button
            onClick={() => handleFoodCart(props.food)}
            className="btn btn-link"
          >
            Add to favorite
          </button>
        </div>
      </div>
    </>
  );
};

export default Food;
