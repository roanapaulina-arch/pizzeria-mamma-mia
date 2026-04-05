import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

const Cart = () => {
  const { cart, addToCart, removeFromCart, total } = useContext(CartContext);
  const { token } = useContext(UserContext); 

  return (
    <div className="container mt-5 mb-5">
      <div className="p-4 border rounded bg-white shadow-sm">
        <h3 className="mb-4 fw-bold">Detalles del pedido:</h3>
        
        {cart.length === 0 ? (
          <p className="text-center py-5">Tu carrito está vacío. ¡Ve por una pizza! 🍕</p>
        ) : (
          <>
            {cart.map((pizza) => (
              <div key={pizza.id} className="d-flex align-items-center mb-3 justify-content-between border-bottom pb-3">
                <div className="d-flex align-items-center">
                  <img src={pizza.img} alt={pizza.name} width="80" className="me-3 rounded shadow-sm" />
                  <span className="text-capitalize fw-bold">Pizza {pizza.name}</span>
                </div>
                
                <div className="d-flex align-items-center">
                  <span className="me-3 fw-bold">${(pizza.price * pizza.count).toLocaleString("es-CL")}</span>
                  <button 
                    className="btn btn-outline-danger btn-sm" 
                    onClick={() => removeFromCart(pizza.id)}
                  >
                    -
                  </button>
                  <span className="mx-3 fw-bold">{pizza.count}</span>
                  <button 
                    className="btn btn-outline-primary btn-sm" 
                    onClick={() => addToCart(pizza)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
            
            <div className="mt-4 text-end">
              <h2 className="fw-bold">Total: ${total.toLocaleString("es-CL")}</h2>
              
              {/* REQUERIMIENTO 4: Deshabilitar si token es false */}
              <button 
                className={`btn mt-3 px-5 fw-bold ${token ? "btn-dark" : "btn-secondary"}`}
                disabled={!token}
              >
                {token ? "Ir a Pagar 💳" : "Inicia sesión para pagar 🔒"}
              </button>
              
              {!token && (
                <p className="text-danger small mt-2">Debes estar autenticado para finalizar la compra.</p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;