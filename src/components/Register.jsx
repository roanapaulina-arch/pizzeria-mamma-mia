import { useState } from "react";

const Register = () => {
  // 1. Campos para registro
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // 2. Esta función al "Enviar"
  const validarRegistro = (e) => {
    e.preventDefault(); 

    // Validación 1: Que no haya campos vacíos
    if (!email || !password || !confirmPassword) {
      alert("Por favor, llena todos los campos");
      return; 
    }

    // Validación 2: Que la contraseña tenga al menos 6 caracteres
    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    // Validación 3: Que las contraseñas sean iguales
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    // Si pasa todas las validaciones, mostramos mensaje de éxito
    alert("¡Registro exitoso!");
  };

  // 3. Diseño visual del formulario
  return (
    <div className="container mt-5">
      <h2>Registro de Usuario</h2>
      <form onSubmit={validarRegistro}>
        
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

        <div className="mb-3">
          <label>Confirmar Contraseña</label>
          <input
            type="password"
            className="form-control"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Registrarse
        </button>

      </form>
    </div>
  );
};

export default Register;