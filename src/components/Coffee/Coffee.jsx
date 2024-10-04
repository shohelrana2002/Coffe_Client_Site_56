import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";

const Coffee = () => {
  const coffeeLoader = useLoaderData();
  const [coffees, setCoffees] = useState(coffeeLoader);
  return (
    <div className="container mx-auto">
      <p>coffee{coffees.length}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffees={coffees}
            setCoffees={setCoffees}
            coffee={coffee}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default Coffee;
