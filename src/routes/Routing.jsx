import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio";
import AdminProfile from "../pages/AdminProfile";
import UserProfile from "../pages/UserProfile";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        {/* Prueba entrando manualmente a estas URLs */}
        <Route path="/admin-profile" element={<AdminProfile />} />
        <Route path="/user-profile" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}
export default Routing;