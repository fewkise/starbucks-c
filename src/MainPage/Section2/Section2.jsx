import React from 'react'
import './Section2.css'
import sec2_img from '../../../public/Group 97.png'
const Section2 = () => {
  return (
    <div className='section-twoo'>
      <section className="section-two">
        <div className="section-two-all">
            <div className="sec-left">
                <img src={sec2_img} alt="" />
            </div>
            <div className="sec-right">
                <p>We make <br /> <span>delicious</span></p>
                <p>Only in 2021 we have made more than 100,000 orders for you, your loved ones, all of you, and in 2022 we are ready to destroy the market</p>
                <div className="withbg">
                    <button>Cooking process</button>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Section2
