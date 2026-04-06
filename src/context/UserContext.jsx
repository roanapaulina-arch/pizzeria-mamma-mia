import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(false);
  const [email, setEmail] = useState(false);

// Nota: Se utiliza respuesta simulada debido a que el endpoint de la API externa (Render) presenta error 404 actualmente.
// REQUERIMIENTO 1: Login (simulado)
const login = async (userEmail, password) => {
  
  setTimeout(() => {
    setToken("token-falso-valido-123"); 
    setEmail(userEmail);
    alert("¡Login exitoso (Modo Simulado)!");
  }, 1000);
};

// REQUERIMIENTO 1: Register (simulado)
const register = async (userEmail, password) => {
  setTimeout(() => {
    setToken("token-falso-nuevo-456"); 
    setEmail(userEmail);
    alert("¡Registro exitoso (Modo Simulado)!");
  }, 1000);
};

  // REQUERIMIENTO 2: Logout
  const logout = () => {
    setToken(null);
    setEmail(null);
    alert("Sesión cerrada");
  };

  // REQUERIMIENTO 3: Obtener Perfil 
  const getProfile = async () => {
    if (!token) return;
    try {
      const response = await fetch("https://pizzeria-mamma-mia-api.onrender.com/api/auth/me", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setEmail(data.email);
      } else {
        logout(); 
      }
    } catch (error) {
      console.error("Error al obtener perfil:", error);
    }
  };

  // REQUERIMIENTO 4 (Lógica): 
  useEffect(() => {
    if (token) {
      getProfile();
    }
  }, [token]);

  return (
    <UserContext.Provider value={{ token, email, login, register, logout, getProfile }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;