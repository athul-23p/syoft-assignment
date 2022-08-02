
import './Navbar.css';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {logout} from '../redux/auth/actions'
function Navbar(){
    const {isAuth} = useSelector(store => store.auth);
    const dispatch = useDispatch();
    return (
      <div className="navbar">
        <Link to="/register">Register</Link>
       {!isAuth && <Link to="/login">Login</Link>}
        <Link to="/products">Products</Link>
        {isAuth && <button className='logout-btn' onClick={() => dispatch(logout())}>Log out</button>}
      </div>
    );
}


export default Navbar;