import { Link } from "react-router-dom";
// 1. Importamos el hook y el contexto
import { useContext } from "react";
import { CartContext } from "../context/CartContext"; 

const Navbar = () => {
  // 2. Extraemos 'total' del contexto. 
  const { total } = useContext(CartContext);
  
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand text-white" to="/">
        Pizzería Mamma Mia!
      </Link>

      <div className="navbar-nav me-auto">
        <Link to="/" className="btn btn-sm btn-outline-light ms-2">
          🍕 Home
        </Link>

        {token ? (
          <>
            <Link to="/profile" className="btn btn-sm btn-outline-light ms-2">
              🔓 Profile
            </Link>
            
            <button className="btn btn-sm btn-outline-light ms-2">
              🔒 Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-sm btn-outline-light ms-2">
              🔐 Login
            </Link>
            <Link to="/register" className="btn btn-sm btn-outline-light ms-2">
              🔐 Register
            </Link>
          </>
        )}
      </div>

      
      <Link to="/cart" className="btn btn-outline-info text-white">
        🛒 Total: ${total.toLocaleString("es-CL")}
      </Link>
    </nav>
  );
};

export default Navbar;