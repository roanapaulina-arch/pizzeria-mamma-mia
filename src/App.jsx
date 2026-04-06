import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";

// Componentes Globales
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Contexto para manejar la seguridad de las rutas
import { UserContext } from "./context/UserContext";

// Importación de Páginas
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

function App() {
  const { token } = useContext(UserContext);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />

      {/* Contenedor de Rutas */}
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />

          {/* REQUERIMIENTO 5: Redirección si ya está logueado */}
          <Route
            path="/register"
            element={!token ? <Register /> : <Navigate to="/" />}
          />
          <Route
            path="/login"
            element={!token ? <Login /> : <Navigate to="/" />}
          />

          <Route path="/cart" element={<Cart />} />

          {/* Ruta dinámica para el detalle de cada pizza */}
          <Route path="/pizza/:id" element={<Pizza />} />

          {/* REQUERIMIENTO 5: Protección de ruta Profile */}
          <Route
            path="/profile"
            element={token ? <Profile /> : <Navigate to="/login" />}
          />

          {/* Ruta para manejar errores 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;