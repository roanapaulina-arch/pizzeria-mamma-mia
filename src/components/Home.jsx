import { useState, useEffect } from "react";
import CardPizza from "../components/CardPizza";

const Home = () => {
  // 1. Estado para las pizzas 
  const [pizzas, setPizzas] = useState([]);

  // 2. Función para consumir la API
  const getPizzas = async () => {
    const response = await fetch("http://localhost:5000/api/pizzas");
    const data = await response.json();
    setPizzas(data); // Guardamos el array de la API en el estado
  };

  // 3. useEffect para ejecutar la función 
  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
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