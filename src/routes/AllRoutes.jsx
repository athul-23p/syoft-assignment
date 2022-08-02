import { Routes,Route } from "react-router-dom";
import Login from "../pages/login/Login";
import Products from "../pages/products/Products";
import Register from "../pages/register/Register";

function AllRoutes(){
    return <Routes>
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/products' element={<Products/>} />
    </Routes>
}

export default AllRoutes;