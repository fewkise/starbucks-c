import React from 'react'
import './Header.css'
import cafelogo from '../../../public/StarBucks.png'
import cup from '../../../public/Group 2 (13).png'
const Header = () => {
  return (
    <div className='headerAll'>
      <header>
        <nav>
            <ul>
                <li><a href=""><img src={cafelogo} alt="" /></a></li>
                <li><a href="">Home</a></li>
                <li><a href="">Select</a></li>
                <li><a href="">Shop</a></li>
            </ul>
        </nav>
        <div className="withcoffe">
            <div className="withCoffeLeft">
                <p id='starbacks'>New cafe <br />by <span>StarBucks</span></p>
                <p id='opis'>Have time to buy the most harmonious drinks in the new Starbucks coffee and don't forget about the discount!</p>
                <div><button>Select a coffee </button><button>More</button></div>
                <ul>
                    <li><p>9k <span>+</span></p><p>Premium <br /> users</p></li>
                    <li><p>2k <span>+</span></p><p>Happy <br /> Customer</p></li>
                    <li><p>28k <span>+</span></p><p>Awards <br /> Winning</p></li>
                </ul>
            </div>
            <div className="withCoffeRight">
                <img src={cup} alt="" />
            </div>
        </div>
      </header>
    </div>
  )
}

export default Header
