import { useState } from "react";
import { pizzaCart as initialCart } from "../pizzas"; 

const Cart = () => {
  // 1. Estado del carrito usando los datos iniciales
  const [cart, setCart] = useState(initialCart);

  // 2. Función para aumentar la cantidad 
  const aumentarCantidad = (id) => {
    const nuevoCarrito = cart.map((pizza) => {
      if (pizza.id === id) {
        return { ...pizza, count: pizza.count + 1 };
      }
      return pizza;
    });
    setCart(nuevoCarrito);
  };

  // 3. Función para disminuir la cantidad 
  const disminuirCantidad = (id) => {
    const nuevoCarrito = cart
      .map((pizza) => {
        if (pizza.id === id) {
          return { ...pizza, count: pizza.count - 1 };
        }
        return pizza;
      })
      .filter((pizza) => pizza.count > 0); // Si llega a 0, se elimina del carrito
    setCart(nuevoCarrito);
  };

  // 4. Cálculo del total
  const total = cart.reduce((acc, pizza) => acc + pizza.price * pizza.count, 0);

  return (
    <div className="container mt-5">
      <h3>Detalles del pedido:</h3>
      <div className="p-3 border rounded bg-light">
        {cart.map((pizza) => (
          <div key={pizza.id} className="d-flex align-items-center mb-3 justify-content-between">
            <div className="d-flex align-items-center">
              <img src={pizza.img} alt={pizza.name} width="70" className="me-3 rounded" />
              <span className="text-capitalize fw-bold">{pizza.name}</span>
            </div>
            <div className="d-flex align-items-center">
              <span className="me-3">${(pizza.price * pizza.count).toLocaleString()}</span>
              <button className="btn btn-outline-danger btn-sm" onClick={() => disminuirCantidad(pizza.id)}>-</button>
              <span className="mx-2">{pizza.count}</span>
              <button className="btn btn-outline-primary btn-sm" onClick={() => aumentarCantidad(pizza.id)}>+</button>
            </div>
          </div>
        ))}
        <h2 className="mt-4">Total: ${total.toLocaleString()}</h2>
        <button className="btn btn-dark mt-2">Pagar</button>
      </div>
    </div>
  );
};

export default Cart;