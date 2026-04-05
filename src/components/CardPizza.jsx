import { useContext } from "react";
// 1. Importamos el contexto
import { CartContext } from "../context/CartContext";

const CardPizza = ({ id, name, price, ingredients, img }) => {
  // 2. Extraemos la función addToCart del contexto
  const { addToCart } = useContext(CartContext);

  // 3. Creamos una función manejadora para el clic
  const handleAdd = () => {
    // Reconstruimos el objeto pizza para que el carrito lo reciba completo
    const pizza = { id, name, price, ingredients, img };
    addToCart(pizza);
  };

  return (
    <div className="card h-100 shadow-sm">
      <img 
        src={img} 
        className="card-img-top" 
        alt={name} 
        onError={(e) => { 
          e.target.src = "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000&auto=format&fit=crop";
        }}
      />
      <div className="card-body text-center">
        <h5 className="card-title fw-bold text-capitalize">Pizza {name}</h5>
        <hr />
        <p className="card-text fw-light">Ingredientes:</p>
        
        <ul className="list-unstyled">
          {ingredients.map((ingrediente, index) => (
            <li key={index}>🍕 {ingrediente}</li>
          ))}
        </ul>
      </div>
      
      <div className="card-footer bg-white border-top-0 text-center pb-4">
        <h3 className="fw-bold">Precio: ${price.toLocaleString()}</h3>
        <div className="d-flex justify-content-around mt-3">
          <button className="btn btn-outline-dark">Ver Más 👀</button>
          
          <button 
            className="btn btn-dark text-white"
            onClick={handleAdd}
          >
            Añadir 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;