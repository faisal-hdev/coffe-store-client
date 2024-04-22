import { Link, useLoaderData } from "react-router-dom";
import CoffeeCart from "./components/CoffeeCart";

function App() {
  const coffees = useLoaderData();
  // console.log(coffee);
  return (
    <div className="container mx-auto">
      <h1 className="text-6xl text-purple-600">HOT + Coffee</h1>
      <div>
        <h2>Hot coffees {coffees.length}</h2>
        <div className="grid md:grid-cols-2 gap-4 md:gap-10">
          {coffees.map((coffee) => (
            <CoffeeCart coffee={coffee} key={coffee._id} />
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
