import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Register from "../pages/Register"; // Importamos la nueva página
import AdminProfile from "../pages/AdminProfile";
import Resources from "../pages/Resources";
import ContactUs from "../pages/ContactUs";


function Routing() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path= "/login" element={<Login/>}/>
                <Route path= "/register" element={<Register/>}/>
                <Route path= "/user-profile" element={<UserProfile/>}/>
                <Route path= "/admin-profile" element={<AdminProfile/>}/>
                <Route path= "/resources" element={<Resources/>}/>
                <Route path= "/contact-us" element={<ContactUs/>}/>
                <Route path= "*" element={<div>404 | Página no encontrada</div>}/>
            </Routes>
        </Router>
    )
}

export default Routing;