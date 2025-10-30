import React from 'react'
import Navbar from './Navbar'
import HeroLayout from './HeroLayout';
import Feature from "./Feature"
import Pricing from './Priceing';
import Footer from './Footer';

const MainHome = () => {
  return (
  <>
  <div>
  <Navbar/>
  <HeroLayout/>
  <Feature/>
  <Pricing/>
  <Footer/>

  </div>
  </>
  )
}

export default MainHome