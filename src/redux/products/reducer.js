import { productActions } from "./actions";

const initialState = {
  isLoading: false,
  error: null,
  items:[]
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case productActions.GET_PRODUCTS_REQUEST:
      return { ...state, isLoading: true, error: null };
    case productActions.GET_PRODUCTS_SUCCESS:
      return { ...state, isLoading: false,items:payload };
    case productActions.GET_PRODUCTS_FAILURE:
      return { ...state, isLoading: false, error: payload };
   
    default:
      return state;
  }
};
export default reducer;
