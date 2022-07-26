import React from 'react'
import Carousal from '../components/Carousal'
import FooterBottom from '../components/FooterBottom'
import Navbar from '../components/Navbar'
import Testimonal from '../components/Testimonal'
import AboutBMT from '../components/AboutBMT'

const Home = () => {
  return (
    <div className='bg-cyan-200'>
        <Navbar/>
        <Carousal/>
        <Testimonal/>
        <AboutBMT/>
        <FooterBottom/>
        
    </div>
  )
}

export default Home