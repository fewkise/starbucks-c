import React from 'react'
import './MainPage.css'
import Header from './Header/Header'
import Section1 from './Section1/Section1'
import Section2 from './Section2/Section2'
import Section3 from './Section3/Section3'
import Section4 from './Section4/Section4'
import Section5 from './Section5/Section5'
import Footer from './Footer/Footer'
const MainPage = () => {
  return (
    <div className='all-main'>
      <div> 
        <Header/>
        <Section1/>
      </div>

      <Section2/>
      <Section3/>
      <Section4/>
      <div>
      <Section5/>
      <Footer/>
      </div>
      
    </div>
  )
}

export default MainPage
