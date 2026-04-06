import { useState, useContext } from "react"; 
import { UserContext } from "../context/UserContext"; 

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // 3. Extraemos la función register del contexto global
  const { register } = useContext(UserContext);

  const validarRegistro = async (e) => { 
    e.preventDefault(); 

    // --- VALIDACIONES LOCALES ---
    if (!email || !password || !confirmPassword) {
      alert("Por favor, llena todos los campos");
      return; 
    }
    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres");
      return;
    }
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    // --- CONEXIÓN CON EL CONTEXTO Y API ---
    // Si pasa las validaciones, llamamos a la función del contexto
    await register(email, password); 
    
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Registro de Usuario</h2>
      <form onSubmit={validarRegistro}>
        
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="ejemplo@correo.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="Mínimo 6 caracteres"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Confirmar Contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="Repite tu contraseña"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Registrarse
        </button>

      </form>
    </div>
  );
};

export default Register;