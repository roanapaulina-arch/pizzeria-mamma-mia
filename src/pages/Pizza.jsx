import { useState, useEffect } from "react";

const Pizza = () => {
  // Estado para una sola pizza 
  const [pizza, setPizza] = useState(null);

  // Función para obtener la pizza p001
  const getPizza = async () => {
    const response = await fetch("http://localhost:5000/api/pizzas/p001");
    const data = await response.json();
    setPizza(data);
  };

  useEffect(() => {
    getPizza();
  }, []);

  // Condicional para esperar a que carguen los datos
  if (!pizza) return <div>Cargando...</div>;

  return (
    <div className="container d-flex justify-content-center p-5">
      <div className="card" style={{ width: "25rem" }}>
        <img src={pizza.img} className="card-img-top" alt={pizza.name} />
        <div className="card-body">
          <h5 className="card-title text-capitalize">Pizza {pizza.name}</h5>
          <p className="card-text">{pizza.desc}</p>
          <ul>
            {pizza.ingredients.map((ing) => (
              <li key={ing}>🍕 {ing}</li>
            ))}
          </ul>
          <h4 className="text-center">Precio: ${pizza.price.toLocaleString()}</h4>
          <button className="btn btn-dark w-100">Añadir al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default Pizza;