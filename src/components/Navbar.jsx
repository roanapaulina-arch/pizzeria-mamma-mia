import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  // Traemos token y logout del UserContext
  const { token, logout } = useContext(UserContext);
  // Traemos el total del CartContext 
  const { total } = useContext(CartContext);

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
            
            {/* AGREGAMOS EL ONCLICK AQUÍ */}
            <button 
              className="btn btn-sm btn-outline-light ms-2"
              onClick={logout}
            >
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