import React from 'react'
import './Section1.css'
import card1img from '../../../public/Group 24.png'
import card2img from '../../../public/Group 23.png'
import card3img from '../../../public/Group 23 (1).png'
const Section1 = () => {
  return (
    <div>
      <section className="sec-first">
        <div className="cards-container">
            <div className="card">
                <img src={card1img} alt="" />
                <p id='nv'>Tasty</p>
                <p>We have the most delicious coffe</p>
            </div>
            <div className="card">
                <img src={card2img} alt="" />
                <p id='nv'>Fast</p>
                <p>Our cafe will serve you quickly</p>
            </div>
            <div className="card">
                <img src={card3img} alt="" />
                <p id='nv'>Available</p>
                <p>Cafe will serveat the most pleasant prices</p>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Section1
