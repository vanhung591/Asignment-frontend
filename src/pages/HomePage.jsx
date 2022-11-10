import React from 'react'
import Navbar from '../component/Navbar'
import Announcement from '../component/Announcement'
import Slider from '../component/Slider'
import Categories from '../component/Categories'
import Products from '../component/Products'
import Newsletter from '../component/Newstitle'
import Footer from '../component/Footer'

function HomePage() {
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <Slider/>
        <Categories />
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default HomePage