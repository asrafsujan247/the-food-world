import React from "react";

const Food = (props) => {
  console.log(props.food);
  const { strMealThumb, strMeal, strInstructions } = props.food;
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
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
          <button className="btn btn-link">Add to favorite</button>
        </div>
      </div>
    </>
  );
};

export default Food;
