import React, { useEffect, useState } from "react";

const Foods = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then((res) => res.json())
      .then((data) => setFoods(data.meals));
  }, []);
  return (
    <div>
      <h1>foods number : {foods.length}</h1>
    </div>
  );
};

export default Foods;
