import { authActions } from "./actions";

const initialState =  {
    isLoading: false,
    error:null,
    isAuth:false,
    token:null,
    user:{}
};

const reducer = (state=initialState,{type,payload}) => {
    switch (type) {
      case authActions.REGISTRATION_REQUEST:
        return { ...state, isLoading: true, error: null };
      case authActions.REGISTRATION_SUCCESS:
        return { ...state, isLoading: false };
      case authActions.REGISTRATION_FAILURE:
        return { ...state, isLoading: false, error: payload };
      case authActions.LOGIN_REQUEST:
        return { ...state, isLoading: true, error: null };
      case authActions.LOGIN_SUCCESS:
        return { ...state, isLoading: false ,isAuth:true,token:payload.token,user:payload.user};
      case authActions.LOGIN_FAILURE:
        return { ...state, isLoading: false, error: payload };
      case authActions.LOGOUT:
        return{...state,isAuth:false,token:null,user:{}}
      default:
        return state;
    }
}
export default reducer;