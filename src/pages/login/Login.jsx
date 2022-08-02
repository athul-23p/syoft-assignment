import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom';

import { login } from "../../redux/auth/actions";

import './Login.css';
function Login(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const {isAuth,isLoading,error} = useSelector(store => store.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(login({email,password}));
    }
    useEffect(() => {
        if(isAuth){
            navigate('/products');

        }
    },[isAuth])
    return (
      <div>
        <div>
          <h2>Login</h2>
        </div>
        <form className="login-form" onSubmit={handleLogin}>
          <input
            required
            type="text"
            value={email}
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            required
            type="password"
            value={password}
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" value="Login" />
          {isLoading && <p>Loading...</p>}
          {error && <p>Something went wrong</p>}
        </form>
      </div>
    );
}

export default Login;