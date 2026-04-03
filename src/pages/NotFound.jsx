import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container text-center mt-5">
      <h1>404 - Página no encontrada 🍕</h1>
      <p>Parece que te has perdido buscando el ingrediente secreto.</p>
      
      <Link to="/" className="btn btn-primary">Volver al inicio</Link>
    </div>
  );
};
export default NotFound;