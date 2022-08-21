import React from 'react'
import { useParams } from 'react-router-dom'
import ProductScreenCard from './ProductScreenCard';
import { useEffect, useReducer } from 'react';
import axios from 'axios';


const reducer = (state, action) => {
  switch(action.type) {
    case 'FETCH_REQUEST':
      return {...state, loading: true};
    case 'FETCH_SUCCESS':
      return {...state, product: action.payload, loading: false};
    case 'FETCH_FAIL':
      return {...state, loading: false, error: action.payload};
      default:
        return state;
  }
}



const ProductScreen = () => {

  const [{loading, error, product}, dispatch] = useReducer(reducer, {
    product: [],
    loading: true,
    error: ''
  });


  useEffect(() => {

    const fetchData = async () => {
      dispatch({type: 'FETCH_REQUEST'});
      try {
        const result = await axios.get(`/api/products/id/${{_id}}`);
        dispatch({type: 'FETCH_SUCCESS', payload: result.data});
      } catch(err) {
        dispatch({type: 'FETCH_FAIL', payload: err.message});
      }
      
      
    }
    fetchData();

  }, [_id]);

  

    const params = useParams();
    const {_id} = params;

    
  return loading ? (<h1 className='loading'>Loading...</h1>) : error ? (<h1 className='error'>{error}</h1>) : ( <p>{product.title}</p>);

     

    
  
}

export default ProductScreen