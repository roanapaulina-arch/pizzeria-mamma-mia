import { useState } from "react";

const Login = () => {
  // 1. Estados para Email y Contraseña
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validarLogin = (e) => {
    e.preventDefault();

    // Validación: Todos los campos obligatorios
    if (!email || !password) {
      alert("Todos los campos son obligatorios");
      return;
    }

    // Validación: Contraseña de al menos 6 caracteres
    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    alert("¡Inicio de sesión exitoso!");
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={validarLogin}>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="mb-3">
          <label>Contraseña</label>
          <input
            type="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </div>
  );
};

export default Login;