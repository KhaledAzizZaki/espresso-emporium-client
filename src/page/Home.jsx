import React from "react";
import { useLoaderData } from "react-router";

const Home = () => {
  const coffees = useLoaderData();
  console.log(coffees);

  return (
    <div>
      <h1>this is home</h1>
    </div>
  );
};

export default Home;
