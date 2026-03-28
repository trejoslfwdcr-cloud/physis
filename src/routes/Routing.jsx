import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Register from "../pages/Register"; 
import UserProfile from "../pages/UserProfile"; 
import AdminProfile from "../pages/AdminProfile";
import Terms from "../pages/Terms";
import LoginPage from "../pages/LoginPage"; // Usaremos este nombre que es más descriptivo

function Routing() {
  return (
    <Router>
      <Routes>
        {/* Ruta principal */}
        <Route path="/" element={<Inicio />} />
        <Route path="/inicio" element={<Inicio />} />
        
        {/* Registro */}
        <Route path="/register" element={<Register />} />

        {/* Perfiles */}
        <Route path="/admin-profile" element={<AdminProfile />} />
        <Route path="/user-profile" element={<UserProfile />} />
        
        {/* Login y Legales */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/terms" element={<Terms />} />

        {/* 404 por si alguien se pierde */}
        <Route path="*" element={<div>404 | Página no encontrada</div>} />
      </Routes>
    </Router>
  );
}

export default Routing;