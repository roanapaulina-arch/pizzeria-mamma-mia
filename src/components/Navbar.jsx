import { Link } from "react-router-dom";

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      {/* 1. Nombre de la pizzería ahora lleva al Home */}
      <Link className="navbar-brand text-white" to="/">
        Pizzería Mamma Mia!
      </Link>

      <div className="navbar-nav me-auto">
        {/* 2. Botón Home ahora es un Link */}
        <Link to="/" className="btn btn-sm btn-outline-light ms-2">
          🍕 Home
        </Link>

        {token ? (
          <>
            {/* 3. Rutas para usuario logueado */}
            <Link to="/profile" className="btn btn-sm btn-outline-light ms-2">
              🔓 Profile
            </Link>
            
            <button className="btn btn-sm btn-outline-light ms-2">
              🔒 Logout
            </button>
          </>
        ) : (
          <>
            {/* 4. Rutas para usuario NO logueado */}
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