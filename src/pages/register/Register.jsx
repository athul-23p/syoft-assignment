import { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/auth/actions";
import { useNavigate } from "react-router-dom";

import "./Register.css";
const initialState = {
  username: "",
  phone: "",
  email: "",
  password: "",
  role: "staff",
};

function reducer(state, { type, payload }) {
  switch (type) {
    case "form/Input":
      return { ...state, [payload.id]: payload.value };
  }
}
function Register() {
  const [formData, localDispatch] = useReducer(reducer, initialState);
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(register(formData)).then((res) =>{ 
      console.log(res);
      if(res.status==201) navigate('/login');
    });
    // api request
    // console.log('form submittted');
  };
  return (
    <div>
      <div>
        <h2>Register</h2>
      </div>
      <form className="register-form" onSubmit={handleRegister}>
        <input
          type="text"
          id="username"
          required
          placeholder="Username"
          value={formData.username}
          onChange={(e) =>
            localDispatch({ type: "form/Input", payload: e.target })
          }
        />
        <input
          type="text"
          id="phone"
          required
          placeholder="Phone number"
          value={formData.phone}
          onChange={(e) =>
            localDispatch({ type: "form/Input", payload: e.target })
          }
        />
        <input
          type="email"
          id="email"
          required
          placeholder="Email ID"
          value={formData.email}
          onChange={(e) =>
            localDispatch({ type: "form/Input", payload: e.target })
          }
        />
        <select
          name="role"
          id="role"
          onChange={(e) =>
            localDispatch({ type: "form/Input", payload: e.target })
          }
        >
          <option value="admin">Admin</option>
          <option value="manager">Manager</option>
          <option value="staff">Staff</option>
        </select>
        <input
          type="password"
          id="password"
          required
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            localDispatch({ type: "form/Input", payload: e.target })
          }
        />
        <input type="submit" value="Register" />
      </form>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong</p>}
    </div>
  );
}

export default Register;
