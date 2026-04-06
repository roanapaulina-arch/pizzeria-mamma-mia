import { useContext, useState } from "react"; 
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

const Cart = () => {
  const { cart, addToCart, removeFromCart, total } = useContext(CartContext);
  const { token } = useContext(UserContext);
  
  // Estado para el Requerimiento 8 (Mensaje de éxito)
  const [successMessage, setSuccessMessage] = useState(false);

  // REQUERIMIENTO 7: Método para enviar el carrito al backend
  const handleCheckout = async () => {
    try {
      const response = await fetch("https://pizzeria-mamma-mia-api.onrender.com/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`, 
        },
        body: JSON.stringify({
          cart: cart,
        }),
      });

      if (response.ok) {
        // REQUERIMIENTO 8: Mostrar mensaje de éxito
        setSuccessMessage(true);
        alert("¡Compra exitosa! 🍕");
      } else {
        alert("Error al procesar la compra. Inténtalo de nuevo.");
      }
    } catch (error) {
      console.error("Error en el checkout:", error);
    }
  };

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
              
              {/* REQUERIMIENTO 7: Conectamos la función al onClick */}
              <button 
                className={`btn mt-3 px-5 fw-bold ${token ? "btn-dark" : "btn-secondary"}`}
                disabled={!token || cart.length === 0}
                onClick={handleCheckout}
              >
                {token ? "Ir a Pagar 💳" : "Inicia sesión para pagar 🔒"}
              </button>
              
              {/* REQUERIMIENTO 8: Mensaje de éxito visual */}
              {successMessage && (
                <div className="alert alert-success mt-3 text-center">
                  ✅ ¡La compra se ha realizado con éxito!
                </div>
              )}
              
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