import React from 'react'
import './Footer.css'
import cafelogo from '../../../public/StarBucks.png'
import instlogo from '../../../public/Mask group.png'
const Footer = () => {
  return (
    <div className='footer-sec'>
      <footer>
        <div className="footer-all">
            <div><img src={cafelogo} alt="" /></div>
            <ul>
                <li><a href=""><p>Main</p></a></li>
                <li><a href=""><p>Buy</p></a></li>
                <li><a href=""><p>More</p></a></li>
            </ul>
            <ul>
                <li><a href=""><p>We make</p></a></li>
                <li><a href=""><p>Process</p></a></li>
            </ul>
            <ul>
                <li><a href=""><p>Products</p></a></li>
                <li><a href=""><p>Cappuccino</p></a></li>
                <li><a href=""><p>Fast</p></a></li>
                <li><a href=""><p>Fast</p></a></li>
            </ul>
            <ul>
                <li><a href=""><p>Events</p></a></li>
                <li><a href=""><p>Drinks</p></a></li>
                <li><a href=""><p>Eat</p></a></li>
            </ul>
            <ul>
                <li><a href=""><p>Contacts</p></a></li>
                <li><a href=""><p>Instagram</p></a></li>
                <li><a href=""><p>Number</p></a></li>
            </ul>
        </div>
        <div className="footer-bottom">
          <p>+7-999-999-99-99</p>
          <a href=""><img src={instlogo} alt="" /></a>
        </div>
      </footer>
    </div>
  )
}

export default Footer
