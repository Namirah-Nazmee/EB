import React from 'react'
import Banners from '../Components/Banners'
import CatagoryMain from '../Components/CatagoryMain'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Newsletter from '../Components/Newsletter'
import ProductsHome from '../Components/ProductsHome'
import Slider from '../Components/Slider'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Slider />
        <Banners />
        <CatagoryMain />
        <ProductsHome />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default Home