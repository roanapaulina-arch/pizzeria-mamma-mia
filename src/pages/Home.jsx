import { useState } from "react";
import { pizzas as pizzasLocales } from "../pizzas"; 
import CardPizza from "../components/CardPizza";

const Home = () => {
  const [pizzas] = useState(pizzasLocales);

  return (
    <div className="container mt-4 mb-5">
      <h2 className="text-center mb-4">Nuestras Pizzas 🍕</h2>
      <div className="row g-4">
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="col-md-4">
            <CardPizza 
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;