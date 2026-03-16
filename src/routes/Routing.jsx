import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Login from "../pages/LoginPage";
import Register from "../pages/RegisterPage";
import UserProfile from "../pages/UserProfile";
import AdminProfile from "../pages/AdminProfile";
import Resources from "../pages/Resources";


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
            </Routes>
        </Router>
    )
}
export default Routing