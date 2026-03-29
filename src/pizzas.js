export const pizzas = [
  {
    desc: "La pizza napolitana, de masa tierna y delgada pero bordes altos, es la versión propia de la cocina napolitana de la pizza redonda. El término pizza napolitana, por su importancia histórica o regional, se emplea en algunas zonas como sinónimo de pizza tonda.",
    id: "p001",
    img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: ["mozzarella", "tomates", "jamón", "orégano"],
    name: "napolitana",
    price: 5950,
  },
  {
    desc: "La pizza española es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal que comúnmente se cubre con salsa de tomate, queso y otros muchos ingredientes.",
    id: "p002",
    img: "https://images.unsplash.com/photo-1589840700256-f78d6ed1ae21?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: ["mozzarella", "tomates", "pimientos", "orégano"],
    name: "española",
    price: 6950,
  },
  {
    desc: "La pizza de pepperoni es un clásico americano. Con su característica base de tomate, abundante queso mozzarella y rodajas de pepperoni que se vuelven crujientes en el horno, es la favorita de muchos.",
    id: "p003",
    img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=2080&auto=format&fit=crop",
    ingredients: ["mozzarella", "pepperoni", "orégano"],
    name: "pepperoni",
    price: 6950,
  },
  {
    desc: "Para los amantes de los vegetales, esta pizza combina ingredientes frescos que aportan textura y un sabor natural inigualable sobre una base crujiente.",
    id: "p004",
    img: "https://images.unsplash.com/photo-1595708684082-a173bb3a06c5?q=80&w=864&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: ["mozzarella", "pimientos", "cebolla", "orégano"],
    name: "vegetariana",
    price: 6450,
  },
  {
    desc: "La combinación perfecta de cuatro quesos seleccionados que se funden para crear una experiencia cremosa y llena de matices para el paladar.",
    id: "p005",
    img: "https://images.unsplash.com/photo-1612948928338-53dd61a5ad5d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: ["mozzarella", "gorgonzola", "parmesano", "fontina"],
    name: "cuatro quesos",
    price: 7950,
  },
  {
    desc: "Una opción con carácter. El pollo grillé marinado con un toque de especias picantes y pimientos frescos sobre nuestra masa tradicional.",
    id: "p006",
    img: "https://images.unsplash.com/photo-1734099387978-463d8fd09678?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: ["mozzarella", "pimientos", "pollo grillé", "orégano"],
    name: "pollo picante",
    price: 8500,
  },
];

// Datos para la parte del Carrito 
export const pizzaCart = [
  {
    id: "p001",
    name: "napolitana",
    price: 5950,
    count: 1,
    img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "p002",
    name: "española",
    price: 6950,
    count: 1,
    img: "https://images.unsplash.com/photo-1589840700256-f78d6ed1ae21?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "p003",
    name: "pepperoni",
    price: 6950,
    count: 1,
    img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=2080&auto=format&fit=crop",
  }
];