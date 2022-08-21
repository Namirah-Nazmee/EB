import React from 'react'
import '../styles/productscreencard.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { products } from '../data'
import { useState } from 'react'

const ProductScreenCard = ({product}) => {
    const [selectedImage, setSelectedImage] = useState('');
  return (
    <>
    <Navbar />
    <div className='screen-container'>
           <div className='screen-row'>
              <div className='screen-col'>
                <div className="card-image">
                  <div className="card-top">
                    <img src={selectedImage || product.image} alt={product.title} />
                  </div>
                  <div className="card-bottom">
                    <img src={product.image} onClick={() => setSelectedImage('${product.image}')} alt={product.title} />
                    <img src={product.image} onClick={() => setSelectedImage('${product.image}')} alt={product.title} />
                    <img src={product.image} onClick={() => setSelectedImage('${product.image}')} alt={product.title} />
                    <img src={product.image} onClick={() => setSelectedImage('${product.image}')} alt={product.title} />

                    
                  </div>
                </div>


              </div>
              <div className='screen-col'>

              </div>

            </div>
        </div>
        <Footer />

    
    </>
    
  )
}

export default ProductScreenCard