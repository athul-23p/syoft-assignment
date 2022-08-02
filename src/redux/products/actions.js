import axios from "axios";
const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/products`,
});

export const productActions = {
  GET_PRODUCTS_REQUEST: "GET_PRODUCTS_REQUEST",
  GET_PRODUCTS_SUCCESS: "GET_PRODUCTS_SUCCESS",
  GET_PRODUCTS_FAILURE: "GET_PRODUCTS_FAILURE",

};

const getProductsRequest = (payload) => ({
  type: productActions.GET_PRODUCTS_REQUEST,
});
const getProductsSuccesss = (payload) => ({
  type: productActions.GET_PRODUCTS_SUCCESS,
  payload,
});
const getProductsFailure = (payload) => ({
  type: productActions.GET_PRODUCTS_FAILURE,
  payload,
});

export const getProducts = (token) => async (dispatch) => {
  dispatch(getProductsRequest());
  try {
    
    const res = await instance.get("", {headers:{
        'Authorization': `Bearer ${token}`
    }});

    dispatch(getProductsSuccesss(res.data));
    return res;
  } catch (error) {
    dispatch(getProductsFailure(error));
  }
};

