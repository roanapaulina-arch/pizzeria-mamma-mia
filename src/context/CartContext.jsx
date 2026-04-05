import { createContext, useState } from "react";

// 1. Contexto
export const CartContext = createContext();

// 2. Provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Función para agregar al carrito
  const addToCart = (pizza) => {
    const itemIndex = cart.findIndex((item) => item.id === pizza.id);
    
    if (itemIndex >= 0) {
      // Si la pizza ya existe, aumentamos la cantidad
      const newCart = [...cart];
      newCart[itemIndex].count += 1;
      setCart(newCart);
    } else {
      // Si no existe, la agregamos con cantidad 1
      setCart([...cart, { ...pizza, count: 1 }]);
    }
  };

  // Función para disminuir o eliminar del carrito
  const removeFromCart = (pizzaId) => {
    const itemIndex = cart.findIndex((item) => item.id === pizzaId);
    const newCart = [...cart];

    if (newCart[itemIndex].count > 1) {
      newCart[itemIndex].count -= 1;
      setCart(newCart);
    } else {
      // Si la cantidad llega a 0, la eliminamos 
      newCart.splice(itemIndex, 1);
      setCart(newCart);
    }
  };

  // Calculamos el total de la compra
  const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);

  // 3. Retornamos el Provider con los valores a compartir
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, total }}>
      {children}
    </CartContext.Provider>
  );
};