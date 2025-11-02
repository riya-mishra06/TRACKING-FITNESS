import React from 'react'
import HeroSection from '../Components/Home/HeroSection'
import PricePlaning from '../Components/Home/PricePlaning'
import FeatureSection from '../Components/Home/FeatureSection'
import NavBar from '../Components/Common.jsx/NavBar'
import Footer from '../Components/Common.jsx/Footer'

const HomePage = () => {
  return (
   <>
   <div>
    <NavBar/>
    <HeroSection/>
    <FeatureSection/>
     <PricePlaning/>
   <Footer/>
   </div>
   </>
  )
}

export default HomePage