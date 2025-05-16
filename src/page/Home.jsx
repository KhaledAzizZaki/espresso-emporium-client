import React, { useState } from "react";
import { useLoaderData } from "react-router";
import CoffeeCard from "../components/CoffeeCard";

const Home = () => {
  const initialCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(initialCoffees);
  // console.log(coffees);

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {coffees.map((coffee) => (
        <CoffeeCard
          key={coffee._id}
          coffee={coffee}
          coffees={coffees}
          setCoffees={setCoffees}
        ></CoffeeCard>
      ))}
    </div>
  );
};

export default Home;
