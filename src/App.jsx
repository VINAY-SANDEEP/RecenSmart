import React from 'react'
import Navbar from './components/NavBar'
import Categories from './components/Categories'
import Deals from './components/Deals'
import PromoBanner from './components/PromoBanner'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
        <PromoBanner/>
     <Categories/>
     <Deals/>
     <WhyChooseUs/>
     <Testimonials/>
     <Footer/>
    </div>
  )
}

export default App
