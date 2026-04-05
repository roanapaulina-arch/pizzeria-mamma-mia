import { useContext } from "react";
// 1. Importamos el contexto 
import { CartContext } from "../context/CartContext";

const Cart = () => {
  // 2. Reemplazamos el useState y las funciones locales por las del contexto
  const { cart, total, addToCart, removeFromCart } = useContext(CartContext);

  return (
    <div className="container mt-5">
      <h3>Detalles del pedido:</h3>
      <div className="p-3 border rounded bg-light shadow-sm">
        {/* Validamos si el carrito está vacío */}
        {cart.length === 0 ? (
          <p className="text-center">No hay pizzas en el carrito 🍕</p>
        ) : (
          <>
            {cart.map((pizza) => (
              <div key={pizza.id} className="d-flex align-items-center mb-3 justify-content-between">
                <div className="d-flex align-items-center">
                  <img src={pizza.img} alt={pizza.name} width="70" className="me-3 rounded" />
                  <span className="text-capitalize fw-bold">Pizza {pizza.name}</span>
                </div>
                
                <div className="d-flex align-items-center">
                  {/* El precio total por tipo de pizza */}
                  <span className="me-3 fw-bold">${(pizza.price * pizza.count).toLocaleString("es-CL")}</span>
                  
                  {/* Usamos removeFromCart para disminuir/eliminar */}
                  <button 
                    className="btn btn-outline-danger btn-sm" 
                    onClick={() => removeFromCart(pizza.id)}
                  >
                    -
                  </button>
                  
                  <span className="mx-2 fw-bold">{pizza.count}</span>
                  
                  {/* Usamos addToCart para aumentar la cantidad */}
                  <button 
                    className="btn btn-outline-primary btn-sm" 
                    onClick={() => addToCart(pizza)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
            
            {/* El total ahora es el mismo que el del Navbar automáticamente */}
            <hr />
            <h2 className="mt-4 fw-bold text-end">Total: ${total.toLocaleString("es-CL")}</h2>
            <div className="text-end">
              <button className="btn btn-dark mt-2 px-5">Pagar 💳</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;