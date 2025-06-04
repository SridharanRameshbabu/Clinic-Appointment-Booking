import React from 'react'
import Navbar from '../Navbar/Navbar'
import Herosection from './Herosection/Herosection'
import Howworks from './Howworks/Howworks'
import Specialities from './Specialities/Specialities'
import HowItWorksSteps from './Howitworksteps/HowItWorksSteps'
import Footer from '../Footer/Footer'


const Home = () => {
  return (
    <div>
      <Navbar />
      <Herosection />
      <Howworks /> 
      <Specialities />
      <HowItWorksSteps />
      <Footer />
    </div>
  )
}

export default Home
