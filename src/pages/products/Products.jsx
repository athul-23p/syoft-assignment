import './Products.css';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { getProducts } from '../../redux/products/actions';
import ProductCard from './components/ProductCard';
import AddProduct from './components/AddProduct';

function Products(){
    const {isAuth,user,token} = useSelector(store => store.auth);
    const {isLoading,error,items} = useSelector(store => store.products);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        if(!isAuth){
            navigate("/login");
        }
    },[isAuth]);

    useEffect(() => {
      
            dispatch(getProducts(token));
      
    },[token])
    console.log(items);
    if(user.role == 'staff'){
        return <div>
            <h1>Not Authorized</h1>
        </div>
    }


    return (
      <div className="Product-Page">
        <div>
          <h2>Products</h2>
          <div className="content">
            <div className="add-product">
              <AddProduct />
            </div>
            <div className="product-list">
              {isLoading && <p>Loading...</p>}
              {error && <p>Something went wrong</p>}
              {!error && items?.map((item) => (
                <ProductCard product={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
}

export default Products;