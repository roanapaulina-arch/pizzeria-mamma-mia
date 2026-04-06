import { useState, useContext } from "react"; 
import { UserContext } from "../context/UserContext"; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 3. Extraemos la función login del contexto
  const { login } = useContext(UserContext);

  const validarLogin = async (e) => { 
    e.preventDefault();

    // --- VALIDACIONES LOCALES ---
    if (!email || !password) {
      alert("Todos los campos son obligatorios");
      return;
    }

    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    // --- CONEXIÓN CON LA API ---
    await login(email, password); 

  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="mb-4">Login</h2>
          <form onSubmit={validarLogin} className="card p-4 shadow-sm">
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
                placeholder="Ingresa tu contraseña"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;