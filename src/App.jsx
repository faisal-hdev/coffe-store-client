import { Link, useLoaderData } from "react-router-dom";
import CoffeeCart from "./components/CoffeeCart";
import { useState } from "react";

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  // console.log(coffee);
  return (
    <div className="max-w-[1300px] mx-auto py-24">
      <h1 className="text-6xl text-purple-600 text-center py-10">
        HOT + Coffee
      </h1>
      <div>
        <h2>Hot coffees {coffees.length}</h2>
        <div className="grid md:grid-cols-2 gap-4 md:gap-10">
          {coffees.map((coffee) => (
            <CoffeeCart
              coffees={coffees}
              setCoffees={setCoffees}
              coffee={coffee}
              key={coffee._id}
            />
          ))}
        </div>
      </div>
      <Link to="/addCoffee">
        <button>Go to add coffee</button>
      </Link>
    </div>
  );
}

export default App;
