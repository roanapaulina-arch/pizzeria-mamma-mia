import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pizzas as pizzasLocales } from "../pizzas"; 

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const [error, setError] = useState(false);
  const { id } = useParams(); 

  const getPizza = async () => {
    try {
      const response = await fetch(`https://pizzeria-mamma-mia-api.onrender.com/api/pizzas/${id}`);
      
      if (response.ok) {
        const data = await response.json();
        setPizza(Array.isArray(data) ? data[0] : data);
        setError(false);
      } else {
        // 🚨 PLAN B: Si la API da error (como el 404 que me salió)
        const localMatch = pizzasLocales.find(p => p.id === id);
        if (localMatch) {
          setPizza(localMatch);
          setError(false);
        } else {
          setError(true);
        }
      }
    } catch (err) {
      const localMatch = pizzasLocales.find(p => p.id === id);
      if (localMatch) {
        setPizza(localMatch);
        setError(false);
      } else {
        setError(true);
      }
    }
  };

  useEffect(() => {
    getPizza();
  }, [id]);

  if (error) return <div className="text-center mt-5 text-danger">⚠️ No pudimos encontrar esta pizza.</div>;
  if (!pizza) return <div className="text-center mt-5">🍕 Buscando tu pizza favorita...</div>;

  return (
    <div className="container mt-5 mb-5">
      <div className="card shadow-lg border-0 overflow-hidden" style={{ borderRadius: '15px' }}>
        <div className="row g-0">
          <div className="col-md-6">
            <img 
              src={pizza.img} 
              className="img-fluid h-100" 
              alt={pizza.name} 
              style={{ objectFit: 'cover', minHeight: '400px' }}
            />
          </div>

          <div className="col-md-6 p-4 d-flex flex-column justify-content-center">
            <div className="card-body">
              <h1 className="card-title text-capitalize fw-bold mb-3">Pizza {pizza.name}</h1>
              <p className="card-text text-muted mb-4" style={{ fontSize: '1.1rem' }}>
                {pizza.desc || "Una deliciosa pizza preparada con los mejores ingredientes tradicionales."}
              </p>
              
              <hr />
              
              <h5 className="fw-bold mt-4 mb-3">Ingredientes:</h5>
              <ul className="list-unstyled mb-4">
                {pizza.ingredients?.map((ing, index) => (
                  <li key={index} className="mb-1 text-capitalize">
                    <span className="me-2">🍕</span>{ing}
                  </li>
                ))}
              </ul>

              <div className="d-flex justify-content-between align-items-center mt-auto pt-4">
                <h2 className="fw-bold text-primary mb-0">
                  Total: ${pizza.price?.toLocaleString("es-CL")}
                </h2>
                <button className="btn btn-dark btn-lg px-5 shadow-sm">
                  Añadir 🛒
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;