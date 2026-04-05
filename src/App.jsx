import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Importamos el UserContext para saber si el usuario está logueado
import { UserContext } from "./context/UserContext";

// Carpeta pages importada
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

function App() {
  // Extraemos el token del contexto global
  const { token } = useContext(UserContext);

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* REQUERIMIENTO 5: Si el token es true (usuario logueado), 
            no debería poder entrar a Login ni Register. Lo mandamos al Home. */}
        <Route
          path="/register"
          element={!token ? <Register /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={!token ? <Login /> : <Navigate to="/" />}
        />

        <Route path="/cart" element={<Cart />} />

        {/* REQUERIMIENTO 1: Ruta dinámica para cualquier pizza */}
        <Route path="/pizza/:id" element={<Pizza />} />

        {/* REQUERIMIENTO 5: Si el token es false, no puede entrar a Profile.
            Lo mandamos al Login. */}
        <Route
          path="/profile"
          element={token ? <Profile /> : <Navigate to="/login" />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;