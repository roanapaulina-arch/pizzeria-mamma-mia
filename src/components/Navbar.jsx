const Navbar = () => {
  const total = 25000;
  const token = false; 

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <a className="navbar-brand text-white" href="#">Pizzería Mamma Mia!</a>
      <div className="navbar-nav me-auto">
        <button className="btn btn-sm btn-outline-light ms-2">🍕 Home</button>
        {token ? (
          <>
            <button className="btn btn-sm btn-outline-light ms-2">🔓 Profile</button>
            <button className="btn btn-sm btn-outline-light ms-2">🔒 Logout</button>
          </>
        ) : (
          <>
            <button className="btn btn-sm btn-outline-light ms-2">🔐 Login</button>
            <button className="btn btn-sm btn-outline-light ms-2">🔐 Register</button>
          </>
        )}
      </div>
      <button className="btn btn-sm btn-outline-info ms-auto">
        🛒 Total: ${total.toLocaleString('es-CL')}
      </button>
    </nav>
  );
};

export default Navbar;