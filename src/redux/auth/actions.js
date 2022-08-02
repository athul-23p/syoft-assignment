import axios from 'axios';
const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/auth`,
});

export const authActions = {
  REGISTRATION_REQUEST: "REGISTRATION_REQUEST",
  REGISTRATION_SUCCESS: "REGISTRATION_SUCCESS",
  REGISTRATION_FAILURE: "REGISTRATION_FAILURE",
  LOGIN_REQUEST: "LOGIN_REQUEST",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAILURE: "LOGIN_FAILURE",
  LOGOUT:'LOGOUT'
};



const registrationRequest = (payload) => ({type:authActions.REGISTRATION_REQUEST});
const registrationSuccesss = (payload) => ({type:authActions.REGISTRATION_SUCCESS,payload});
const registrationFailure = (payload) => ({type:authActions.REGISTRATION_FAILURE,payload});

export const logout = () => ({type:authActions.LOGOUT});
export const register = (user) => async (dispatch) => {
    dispatch(registrationRequest());
    try {
        console.log(user);
        const res = await instance.post('/register',user);
        dispatch(registrationSuccesss(res.data));
        return res;
    } catch (error) {
        dispatch(registrationFailure(error))
    }

}

const loginRequest = (payload) => ({
  type: authActions.LOGIN_REQUEST,
});
const loginSuccesss = (payload) => ({
  type: authActions.LOGIN_SUCCESS,
  payload,
});
const loginFailure = (payload) => ({
  type: authActions.LOGIN_FAILURE,
  payload,
});

export const login = (user) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const res = await instance.post("/login", user);
    dispatch(loginSuccesss(res.data));
  } catch (error) {
    dispatch(loginFailure(error));
  }
};
