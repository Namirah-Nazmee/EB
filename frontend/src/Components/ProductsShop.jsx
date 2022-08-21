import React, {useEffect, useState} from 'react'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import {products} from '../data.js'
import '../styles/productsshop.css'
import ProductShop from './ProductShop'
import ReactPaginate from 'react-paginate'



const ProductsShop = () => {
    const [data, setData] = useState(products);
    const [category, setCategory] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const productPerPage = 3;
    const pagevisited = pageNumber * productPerPage;

    const displayProducts = data.slice(pagevisited, pagevisited + productPerPage).map((item) => {
        <ProductShop item={item} key = {item._id} />
    })

    const pageCount = Math.ceil(data.length / productPerPage);
    const changePage = ({selected}) => {
        setPageNumber(selected);
    }

    const filterResult = (catItem) => {
        const result = products.filter((curDate) => {
            return curDate.category === catItem;
        })
        setData(result);
    }

    useEffect(() => {
        const fetchData = async () =>{
            const result = await axios.get('/api/category');
            setCategory(result.data);

        }
        fetchData();
    },[])
    
    
  return (
    <div className='shop-conatiner'>
        <div className="shop-row">
            <div className="shop-col">
                <h2>Category</h2>
                <button className='shop-btn' onClick={() => setData(products)}>All <FontAwesomeIcon icon={faChevronRight} /> </button>
                {category.map((item) => (
                    <button className='sho-btn' onClick={() => filterResult(item.title)}>{item.title} <FontAwesomeIcon icon={faChevronRight} /></button>
                ))}
            </div>
            <div className='shop-col'>
                <div className="shop-product">
                    {data.map((item) => (
                        <ProductShop item= {item} key = {item._id} />
                    ))}
                </div>
                <div className="shop-col">
                    <div className="shop-products">
                        {displayProducts}
                    </div>
                
                <div className="shop-pagination">
                    <ReactPaginate 
                       previousLabel = {'<<'}
                       nextLabel = {'>>'}
                       pageCount = {changePage}
                       containerClassName = {'paginationBttns'}
                       previousLinkClassName={'previousBttn'}
                       nextLinkClassName ={'nextBttn'}
                       disabledClassName ={'paginationDisabled'}
                       activeClassName = {'paginationActive'}
                    />
                </div>
             </div>

            </div>
        </div>

    </div>
  )
}

export default ProductsShop 