import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Register from "../pages/Register"; // Importamos la nueva página
import AdminProfile from "../pages/AdminProfile";
import UserProfile from "../pages/UserProfile";
import Terms from "../pages/Terms";
import LoginPage from "../pages/LoginPage";
import { User } from "lucide-react";
function Routing() {
  return (
    <Router>
      <Routes>
        {/* Ruta principal */}
        <Route path="/" element={<Inicio />} />
        
        {/* Ruta de Registro con efecto Glassmorphism */}
        <Route path="/register" element={<Register />} />

        {/* Rutas con Layout y Sidebar (Protegidas por Rol) */}
        <Route path="/admin-profile" element={<AdminProfile />} />
        <Route path="/user-profile" element={<UserProfile />} />
        
        {/* Puedes dejar esta lista para cuando hagamos el Login */}
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/Terms" element={<Terms />} />
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/UserProfile" element={<UserProfile />} />
        <Route path="*" element={<div>Pagina no existe</div>} />


      </Routes>
    </Router>
  );
}

export default Routing;