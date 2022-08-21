import React from 'react'
import Navbar from '../Components/Navbar'
import '../styles/shop.css'
import ProductsShop from '../Components/ProductsShop'
import Footer from '../Components/Footer'
const Shop = () => {
  return (
    <div>
      <Navbar />
      <div className="s-row">
        <div className="s-col">
          <ProductsShop />

        </div>
        

        </div>
        <Footer />
      </div>

    
  )
}

export default Shop