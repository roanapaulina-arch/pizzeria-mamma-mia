import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const { email, logout } = useContext(UserContext);

  return (
    <div className="container mt-5 text-center">
      <div className="card p-5 shadow-sm mx-auto" style={{ maxWidth: "400px" }}>
        <h2 className="mb-4">Mi Perfil 👤</h2>
        
        {/* Mostramos el email del usuario autenticado */}
        <p className="mb-4 text-muted">
          Email: <strong>{email}</strong>
        </p>

        {/* El botón ejecuta el método logout del UserContext */}
        <button 
          onClick={logout} 
          className="btn btn-danger w-100"
        >
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
};

export default Profile;