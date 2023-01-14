import { Error } from '@mui/icons-material';
import axios from 'axios'
import React, { useEffect, useReducer} from 'react'
import logger from 'use-reducer-logger'
import Loader from './Loader';
import ProductHome from './ProductHome'



const reducer = (state, action) => {
  switch(action.type) {
    case 'FETCH_REQUEST':
      return {...state, loading: true};
    case 'FETCH_SUCCESS':
      return {...state, products: action.payload, loading: false};
    case 'FETCH_FAIL':
      return {...state, loading: false, error: action.payload};
      default:
        return state;
  }
}

const ProductsHome = () => {

  const [{loading, error, products}, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: ''
  });

  useEffect(() => {

    const fetchData = async () => {
      dispatch({type: 'FETCH_REQUEST'});
      try {
        const result = await axios.get('/api/products');
        dispatch({type: 'FETCH_SUCCESS', payload: result.data});
      } catch(err) {
        dispatch({type: 'FETCH_FAIL', payload: err.message});
      }
      
     
    }
    fetchData();

  }, []);

  return (
    <section class="section-content mt-5">
    <h2 id='productsLatest mb-3'>Latest Products</h2>
    <div className='container-fluid container-fluid-styling'>  
      <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-5 g-3">
       
        {
        loading ? (<Loader/>) : error ? (<Error message={error}/>) : (
          products.slice(-10).map((item) => (
            <ProductHome item={item} key={item._id} />
        ))
        )
        }
      </div>
    </div>
    </section>
      
  )
}

export default ProductsHome
