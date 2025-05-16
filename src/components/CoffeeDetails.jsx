import React from "react";
import { useLoaderData } from "react-router";

const CoffeeDetails = () => {
  const coffeeData = useLoaderData();
  //   console.log(coffeeData);

  return (
    <div>
      <h1>{coffeeData.name}</h1>
      <p>{coffeeData.details}</p>
    </div>
  );
};

export default CoffeeDetails;
