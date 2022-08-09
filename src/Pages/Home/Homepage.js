import React from 'react'
import Category from '../../../src/Pages/Category/Category'
import Footer from '../../../src/Pages/Footer/Footer'
import Homeproducts from '../../../src/Pages/Homeproducts/Homeproducts'
import Navbar from '../../../src/Pages/Navbar/Navbar'
import Slider from '../../../src/Pages/Slider/Slider'

function Homepage() {
  return (
    <div>
        <Navbar/>
        <Slider/>
        <Homeproducts/>
        <Category/>
        <Footer/>
    </div>
  )
}

export default Homepage